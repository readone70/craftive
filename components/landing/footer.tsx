import Image from 'next/image';
import React from 'react';
import FooterLinks from '../nav/footer-links';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const socials = [
  { id: 1, icon: <Instagram className="text-white w-5 h-5" /> },
  { id: 2, icon: <Twitter className="text-white w-5 h-5" /> },
  { id: 3, icon: <Facebook className="text-white w-5 h-5" /> },
];

const Footer = () => {
  return (
    <div className="w-full bg-footer-background">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-20 py-16  space-y-20">
        <div className="grid grid-cols-2">
          <div className="space-y-6">
            <Image
              src="/images/logo-dark.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <div className="flex gap-4">
              {socials.map((social) => (
                <div key={social.id}>{social.icon}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <FooterLinks />
            <div className="text-sm flex flex-col sm:flex-row gap-4 text-footer-text">
              <Link href="/terms">Terms of use</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-footer-border pt-10">
          <p className="text-center text-xs text-footer-text">
            © 2025 Craftive - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
