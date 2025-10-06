"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { motion } from "motion/react";

const scrolls = [
  { id: 1, item: "Reliable service" },
  { id: 2, item: "Designs that perform" },
  { id: 3, item: "Built for growth" },
  { id: 4, item: "Solutions, not just services" },
  { id: 5, item: "On-time delivery" },
  { id: 6, item: "Launch with confidence" },
];

const SecondCTA = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-20">
        <div className="bg-cta-background scroll-hide space-y-16 overflow-hidden rounded-4xl p-10 text-white lg:p-16">
          <div className="flex justify-between">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold tracking-tighter lg:w-110 lg:text-5xl">
                Let&apos;s create something beautiful together
              </h2>
              <Button className="text-button-text-color h-12 cursor-pointer rounded-full px-8">
                Get started today!
              </Button>
            </div>
            <div>
              <Image
                src="/images/cta2-image.svg"
                alt="cta-image"
                width={200}
                height={200}
              />
            </div>
          </div>

          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-200%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...scrolls, ...scrolls].map((scroll, index) => (
              <div
                key={index}
                className="bg-scroll-background flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-3"
              >
                <CircleCheck className="h-5 w-5" />
                <p className="">{scroll.item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecondCTA;
