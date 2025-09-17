'use client';

import NavLinks from './navlinks';
import { ThemeToggle } from '../theme/theme-toggle';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="sm:px-20 flex h-18 items-center justify-between">
        <div className="flex items-center space-x-2 pl-6 sm:pl-0">
          <Image
            src={
              theme === 'dark'
                ? '/images/logo-dark.svg'
                : '/images/logo-light.svg'
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

        <div className="sm:hidden pr-6">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="py-6 px-6 sm:px-0 bg-background fixed top-16 w-full shadow"
          >
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
}
