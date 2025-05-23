"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function Header6({ links }) {
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "/#contact";

  return (
    <div className="main-nav-sub container">
      {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
      <div className="nav-logo-wrap position-static local-scroll">
        <a href="#top" className="logo">
          <Image
            src="/assets/images/logo.svg"
            alt="Your Company Logo"
            width={154}
            height={35}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/logo-w.svg"
            alt="Your Company Logo"
            width={154}
            height={35}
            className="dark-mode-logo"
          />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end ">
          <Nav links={links} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>

          <li>
            <>
              {isHome ? (
                <a href="#contact" className="opacity-1 no-hover">
                  <span
                    className="btn btn-mod btn-w btn-border-c btn-border-white-light btn-small btn-round"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Contact Us</span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Contact Us
                      </span>
                    </span>
                  </span>
                </a>
              ) : (
                <Link href="/#contact" className="opacity-1 no-hover">
                  <span
                    className="btn btn-mod btn-w btn-border-c btn-border-white-light btn-small btn-round"
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">Contact Us</span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Contact Us
                      </span>
                    </span>
                  </span>
                </Link>
              )}
            </>
          </li>
        </ul>
      </div>

      {/* End Main Menu */}
    </div>
  );
}
