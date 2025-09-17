import Image from 'next/image';
import React from 'react';
import FooterLinks from '../nav/footer-links';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const socials = [
  { id: 1, icon: <Instagram className="text-white w-5 h-5" /> },
  { id: 2, icon: <Twitter className="text-white w-5 h-5" /> },
  { id: 3, icon: <Facebook className="text-white w-5 h-5" /> },
];

const Footer = () => {
  return (
    <div className="px-6 sm:px-20 py-16 bg-footer-background space-y-20">
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
        <div className="space-y-6">
          <FooterLinks />
          <div className="text-sm space-y-4 text-footer-text">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-border pt-10">
        <p className="text-center text-xs text-footer-text">
          © 2025 Craftive - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
