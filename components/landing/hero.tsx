"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="grids-cols-1 mx-auto grid max-w-[1200px] gap-10 px-5 pt-8 sm:px-20 lg:grid-cols-2">
        <motion.div className="flex flex-col justify-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="font-heading text-4xl font-bold tracking-tighter lg:text-7xl"
          >
            Your vision, perfectly designed
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-text w-full tracking-tight lg:w-96"
          >
            From mobile to web, we bring your ideas to life. Elevate your brand
            with cutting-edge design and seamless development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-primary text-button-text-color h-12 cursor-pointer rounded-full px-6">
              Let&apos;s talk
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative h-[350px] sm:h-[450px]"
        >
          <Image
            src="/images/hero-image.webp"
            alt="hero-image"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
