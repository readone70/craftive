"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const FooterLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 text-sm sm:flex-row">
      {navItems.map(({ href, label }) => (
        <Link
          href={href}
          key={label}
          className={
            pathname === href
              ? "font-medium text-purple-500"
              : "text-footer-text"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
