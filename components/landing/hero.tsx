'use client';

import { motion } from 'motion/react';
import { Button } from '../ui/button';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1200px] grid grids-cols-1 lg:grid-cols-2 px-5 sm:px-20 pt-10 gap-10">
        <motion.div className="flex flex-col justify-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="font-bold font-heading text-4xl lg:text-7xl tracking-tighter"
          >
            Your vision, perfectly designed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="tracking-tight w-full lg:w-96 text-body-text"
          >
            From mobile to web, we bring your ideas to life. Elevate your brand
            with cutting-edge design and seamless development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="rounded-full h-12 px-6 bg-primary text-button-text-color cursor-pointer">
              Let&apos;s talk
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/images/hero-image.webp"
            alt="hero-image"
            width={1000}
            height={1000}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
