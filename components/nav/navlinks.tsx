"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];
const NavLinks = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(pathname);

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || pathname);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  return (
    <div className="flex flex-col gap-4 text-sm sm:flex-row">
      {navItems.map(({ href, label }) => (
        <Link
          href={href}
          key={label}
          onClick={() => setActive(href)}
          className={
            active === href ? "text-primary font-medium" : "text-foreground"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
