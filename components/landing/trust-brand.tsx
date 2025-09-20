"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTheme } from "next-themes";

const brandlogo = [
  {
    id: 1,
    logolight: "/images/google-logo.svg",
    logodark: "/images/google-logo.svg",
    alt: "google",
  },

  {
    id: 2,
    logolight: "/images/asana-logo.svg",
    logodark: "/images/asana-logo-dark.svg",
    alt: "asana",
  },

  {
    id: 3,
    logolight: "/images/microsoft-logo.svg",
    logodark: "/images/microsoft-logo-dark.svg",
    alt: "microsoft",
  },
  {
    id: 4,
    logolight: "/images/shopify-logo.svg",
    logodark: "/images/shopify-logo-dark.svg",
    alt: "shopify",
  },
];

const TrustBrand = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto max-w-[1200px] px-6 sm:px-20"
      >
        <div>
          <h2 className="mb-8 text-center tracking-tight">Trusted by</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {brandlogo.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <Image
                src={
                  (theme === "dark" ? logo.logodark : logo.logolight) as string
                }
                alt={logo.alt}
                width={80}
                height={80}
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TrustBrand;
