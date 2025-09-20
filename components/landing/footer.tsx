import Image from "next/image";
import React from "react";
import FooterLinks from "../nav/footer-links";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const socials = [
  { id: 1, icon: <Instagram className="h-5 w-5 text-white" /> },
  { id: 2, icon: <Twitter className="h-5 w-5 text-white" /> },
  { id: 3, icon: <Facebook className="h-5 w-5 text-white" /> },
];

const Footer = () => {
  return (
    <div className="bg-footer-background w-full">
      <div className="mx-auto max-w-[1200px] space-y-20 px-6 py-16 sm:px-20">
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
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <FooterLinks />
            <div className="text-footer-text flex flex-col gap-4 text-sm sm:flex-row">
              <Link href="/terms">Terms of use</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="border-footer-border border-t pt-10">
          <p className="text-footer-text text-center text-xs">
            © 2025 Craftive - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
