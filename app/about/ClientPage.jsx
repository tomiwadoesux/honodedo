"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Portfolio from "./Portfolio"; // assuming you have this
import { menuItems } from "@/data/menu";

export default function ClientPage() {
  const pathname = usePathname();

  return (
    <main className="page-about">
      {/* Example heading */}
      <section className="section-intro">
        <div className="container">
          <h1 className="heading-large">About Us</h1>
          <p>Current Path: {pathname}</p>
        </div>
      </section>

      {/* Example link back to home */}
      <section className="section-back-home">
        <div className="container">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>

      {/* Portfolio Component */}
      <section className="section-portfolio">
        <div className="container">
          <Portfolio />
        </div>
      </section>

      {/* Example Navigation */}
      <section className="section-menu">
        <div className="container">
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="menu-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
