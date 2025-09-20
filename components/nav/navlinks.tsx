"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 text-sm sm:flex-row">
      {navItems.map(({ href, label }) => (
        <Link
          href={href}
          key={label}
          className={
            pathname === href ? "text-primary font-medium" : "text-foreground"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
