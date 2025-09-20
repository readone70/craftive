"use client";

import NavLinks from "./navlinks";
import { ThemeToggle } from "../theme/theme-toggle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between sm:px-20">
        <div className="flex items-center space-x-2 pl-6 sm:pl-0">
          <Image
            src={
              theme === "dark"
                ? "/images/logo-dark.svg"
                : "/images/logo-light.svg"
            }
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="hidden sm:block">
          <NavLinks />
        </div>

        <div>
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
          </div>
        )}
      </div>
    </header>
  );
}
