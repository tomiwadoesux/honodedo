"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  OrbitControls,
  useGLTF,
  Center,
  Environment,
  useBounds,
} from "@react-three/drei";

/**
 * Drag-to-rotate 3D viewer for a single .glb / .gltf file.
 * react-three-fiber + drei.
 *
 * Interaction model:
 *   - Drag rotates the camera HORIZONTALLY only (autoRotate continues
 *     from wherever the user releases). Vertical drag is locked.
 *   - Scroll wheel does nothing.
 */

// Initial camera framing — ~12° to the right of dead-on (the model's
// left-hand face rotates toward the viewer) and a touch above the horizon.
// Position derived from a fixed camera distance so changing only the
// azimuth angle keeps the framing consistent. The polar angle is then
// mathematically derived and reused below to lock vertical drag at
// exactly the same elevation.
const CAM_DIST_HORIZ = 3.99; // sqrt(x^2 + z^2) — preserves prior dolly distance

// Build initial camera position + locked polar angle for a given azimuth
// (in DEGREES from the +Z axis) and a vertical height (model units).
//
//   cameraHeight > 0  → camera ABOVE the model centroid → viewer looks down
//   cameraHeight = 0  → camera at horizon → eye-level
//   cameraHeight < 0  → camera BELOW centroid → viewer looks up (the
//                       /about default — front of the model reads
//                       monumental).
function buildCamera(azimuthDeg, cameraHeight) {
  const azimuth = (azimuthDeg * Math.PI) / 180;
  const pos = [
    CAM_DIST_HORIZ * Math.sin(azimuth),
    cameraHeight,
    CAM_DIST_HORIZ * Math.cos(azimuth),
  ];
  const r = Math.hypot(pos[0], pos[1], pos[2]);
  const polar = Math.acos(pos[1] / r);
  return { pos, polar };
}

export default function ModelViewer({
  src,
  className = "",
  style,
  autoRotate = false,
  // Starting horizontal angle in degrees (azimuth from the +Z front axis).
  //   0  = head-on, looking at the model's front
  //   55 = a strong 3/4 architectural view (the /about default)
  startAzimuth = 55,
  // Camera height in model units. Positive = look down at the model,
  // negative = look up. Default -0.6 = slight up-look (about page).
  cameraHeight = -0.6,
  // Bounds fit margin. 1.0 = model fills panel edge-to-edge; smaller
  // values let the model slightly overflow (read as bigger / more
  // prominent) at the cost of corners clipping during rotation.
  boundsMargin = 1.0,
}) {
  const { pos: CAM_POS, polar: POLAR } = buildCamera(startAzimuth, cameraHeight);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <Canvas
        camera={{ position: CAM_POS, fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        /* Force continuous rendering. Default is already "always", but
           setting it explicitly + `regress={false}` guarantees the
           autoRotate keeps ticking even while the page is scrolling
           hard (when R3F would otherwise downshift to a regressed
           framerate to give the main thread breathing room). */
        frameloop="always"
        performance={{ current: 1, min: 1, max: 1, debounce: 0 }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.1} />
        <directionalLight position={[-5, -3, -5]} intensity={0.45} />

        <Suspense fallback={null}>
          {/* No `observe` prop here — observe runs an initial fit when
              <Bounds> mounts (i.e. while Suspense is still showing the
              fallback and the model hasn't loaded yet). Once the GLB
              resolves, our explicit <Refit> below would do a SECOND fit
              against the now-loaded scene, and the user would watch the
              camera animate from the empty-scene fit to the loaded-scene
              fit — which reads as the model "shrinking" after load.
              By doing exactly one fit (via <Refit>) after the suspense
              resolves, the camera lands at the correct position from
              frame one with no visible re-snap. */}
          <Bounds fit clip margin={boundsMargin}>
            <Center>
              {/* The model lives inside a group whose Y rotation is
                  driven by useFrame every tick. This is independent of
                  OrbitControls' autoRotate (which pauses during drag and
                  can be throttled by R3F's adaptive performance loop) —
                  here, nothing on the page can stop the spin. */}
              <SpinningGroup speed={autoRotate ? 0.18 : 0}>
                <Model src={src} />
              </SpinningGroup>
            </Center>
            <Refit src={src} />
          </Bounds>
          <Environment preset="city" />
        </Suspense>

        {/* Polar angle locked to the camera's initial value so vertical
            drag is a no-op. Azimuth is unconstrained — drag spins
            horizontally and autoRotate keeps the loop going. */}
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.08}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={POLAR}
          maxPolarAngle={POLAR}
          /* OrbitControls' built-in autoRotate is OFF — we drive the
             rotation manually in <SpinningGroup> so it can never be
             paused by drag, scroll, or adaptive frame-rate. */
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

function Model({ src }) {
  const { scene } = useGLTF(src);
  return <primitive object={scene} />;
}

/**
 * A group that rotates its children around the Y axis at a steady rate,
 * driven by useFrame's per-frame `delta` so the speed is wall-clock
 * stable regardless of frame rate.
 *
 * Negative `speed` makes the front of the model drift LEFT → RIGHT from
 * the viewer's perspective.
 */
function SpinningGroup({ children, speed = 0.18 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current || speed === 0) return;
    ref.current.rotation.y -= speed * delta;
  });
  return <group ref={ref}>{children}</group>;
}

/**
 * Inside <Bounds>: when the model URL changes (or the suspense boundary
 * just resolved), wait one frame for the primitive to be in the scene
 * graph, then explicitly refresh + fit. Without this the first <Bounds>
 * pass measures an empty scene and the model lands tiny in the corner.
 */
function Refit({ src }) {
  const bounds = useBounds();
  useGLTF(src); // re-run after this URL's scene resolves
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      bounds.refresh().clip().fit();
    });
    return () => cancelAnimationFrame(id);
  }, [bounds, src]);
  return null;
}

