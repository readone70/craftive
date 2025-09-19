'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const cards = [
  { id: 1, image: '/images/apple.webp', title: 'Apple iOS Experience' },
  { id: 2, image: '/images/google.webp', title: 'Google Branding' },
];

const Project = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
        className="max-w-[1200px] mx-auto px-6 sm:px-20 flex flex-col gap-10"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-medium font-heading text-4xl text-center sm:text-5xl mb-4 tracking-tighter">
            Our work speaks volume<span className="text-primary">.</span>
          </h2>
          <p className="text-center text-body-text w-full sm:w-[600px]">
            Take a look at some of our favorite projects - from sleek startups
            to enterprise solutions. Each one tells a story of collaboration,
            creativity, and craft.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border border-gray-border rounded-3xl pb-8 bg-primary-background"
            >
              <div className="">
                <Image
                  src={card.image}
                  alt="project-image"
                  width={1000}
                  height={1000}
                  className="object-cover h-64 rounded-3xl mb-8"
                />
              </div>

              <h3 className="text-center font-heading font-medium text-xl tracking-tighter">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            className="rounded-full h-12 w-52 px-24 cursor-pointer"
            variant="outline"
          >
            Explore our portfolio
            <ArrowRight />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
