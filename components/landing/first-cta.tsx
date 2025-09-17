'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { useInView, motion } from 'motion/react';
import { useRef } from 'react';

const FirstCTA = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <motion.div
      ref={scrollSection}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
      className="px-6 sm:px-20"
    >
      <div className="rounded-4xl relative">
        <Image
          src="/images/cta-background.svg"
          alt="cta-bg"
          width={1000}
          height={1000}
          className="object-cover w-[1200px] h-[500px] md:h-[300px] lg:h-[400px] rounded-4xl"
        />

        <div className="absolute top-10 lg:top-20 bottom-10 lg:bottom-20 right-10 lg:right-20 left-10 lg:left-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
          <div className="flex items-center">
            <h2 className="font-medium font-heading text-4xl lg:text-6xl w-full lg:w-100 text-white tracking-tighter">
              Ready to bring your idea to life?
            </h2>
          </div>

          <div className="flex flex-col justify-center items-start gap-8">
            <p className="text-white w-full lg:w-100">
              Let&apos;s turn your concept into a product that excites and
              performs. Whether you&apos;re starting from scratch or looking to
              improve an existing product, we&apos;re here to help.
            </p>
            <Button className="bg-white hover:bg-white/80 text-black h-12 px-6 rounded-full cursor-pointer">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstCTA;
