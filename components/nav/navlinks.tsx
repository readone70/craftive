"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Works", href: "#works" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const NavLinks = () => {
  const [active, setActive] = useState<string>("");
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    // find elements for all nav items
    const sections = navItems
      .map((item) => {
        const el = document.querySelector(item.href);
        return el instanceof HTMLElement ? el : null;
      })
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      // nothing to observe — maybe ids don't exist or elements are rendered later
      return;
    }

    // initialize ratios
    sections.forEach((s) => (ratiosRef.current[s.id] = 0));

    const observer = new IntersectionObserver(
      (entries) => {
        // update ratios map
        entries.forEach((entry) => {
          ratiosRef.current[(entry.target as HTMLElement).id] =
            entry.intersectionRatio;
        });

        // pick the id with maximum intersectionRatio
        let bestId: string | null = null;
        let bestRatio = -1;
        for (const id in ratiosRef.current) {
          const r = ratiosRef.current[id];
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        // if bestRatio is too small, we consider "no section visible" (hero)
        const VISIBILITY_THRESHOLD = 0.12; // tweak if needed
        if (!bestId || bestRatio <= VISIBILITY_THRESHOLD) {
          setActive("");
        } else {
          setActive(`#${bestId}`);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        // multiple thresholds to get a more granular intersectionRatio
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 text-sm sm:flex-row">
      {navItems.map(({ href, label }) => (
        <Link
          href={href}
          key={label}
          className={`transition-colors duration-300 ${
            active === href ? "text-primary font-medium" : "text-foreground"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
