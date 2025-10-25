import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer-background w-full">
      <div className="mx-auto max-w-[1200px] space-y-10 px-6 py-12 sm:px-20">
        <div className="flex justify-center">
          <Image
            src="/images/excelia-logo-dark.svg"
            alt="logo"
            width={150}
            height={150}
          />
        </div>
        <div className="border-footer-border border-t pt-10">
          <p className="text-footer-text text-center text-xs">
            © 2025 Excelia Studio - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
