"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const FirstCTA = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto max-w-[1200px] px-6 sm:px-20"
      >
        <div className="relative rounded-4xl">
          <Image
            src="/images/cta-background.svg"
            alt="cta-bg"
            width={1000}
            height={1000}
            className="h-[500px] w-[1200px] rounded-4xl object-cover md:h-[300px] lg:h-[400px]"
          />

          <div className="absolute top-10 right-10 bottom-10 left-10 grid grid-cols-1 gap-4 lg:top-20 lg:right-20 lg:bottom-20 lg:left-20 lg:grid-cols-2 lg:gap-10">
            <div className="flex items-center">
              <h2 className="font-heading w-full text-4xl font-medium tracking-tighter text-white lg:w-100 lg:text-6xl">
                Ready to bring your idea to life?
              </h2>
            </div>

            <div className="flex flex-col items-start justify-center gap-8">
              <p className="w-full text-white lg:w-100">
                Let&apos;s turn your concept into a product that excites and
                performs. Whether you&apos;re starting from scratch or looking
                to improve an existing product, we&apos;re here to help.
              </p>
              <Button className="h-12 cursor-pointer rounded-full bg-white px-6 text-black hover:bg-white/80">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FirstCTA;
