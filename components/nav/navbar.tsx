"use client";

import NavLinks from "./navlinks";
import { ThemeToggle } from "../theme/theme-toggle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between sm:px-20">
        <div className="pl-6 sm:pl-0">
          <Link href="/">
            <Image
              src={
                theme === "dark"
                  ? "/images/excelia-logo-dark.svg"
                  : "/images/excelia-logo-light.svg"
              }
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          <NavLinks />
        </div>

        <div className="flex items-center gap-3">
          <Button className="text-button-text-color hidden h-9 rounded-full text-xs sm:block">
            Let&apos;s chat
          </Button>
          <ThemeToggle />
        </div>

        <div className="pr-6 sm:hidden">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="menu-button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="bg-background fixed top-16 w-full px-6 py-6 shadow sm:px-0"
          >
            <NavLinks />

            <Button className="text-button-text-color mt-4 h-9 rounded-full text-xs">
              Let&apos;s chat
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
