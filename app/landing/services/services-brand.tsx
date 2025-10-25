"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,

    icon: "/images/design-icon.svg",
    title: "Brand Strategy & Discovery",
    desc: "We uncover your purpose, voice, & audience to shape a brand that connects.",
  },
  {
    id: 2,
    icon: "/images/design-icon.svg",
    title: "Visual Identity Design",
    desc: "From logos to design system, every detail reflects your essence.",
  },
  {
    id: 3,
    icon: "/images/design-icon.svg",
    title: "Brand Guidelines",
    desc: "A clear, flexible system that keeps your brand consistent across board.",
  },
  {
    id: 4,
    icon: "/images/design-icon.svg",
    title: "Assets That Work Everywhere",
    desc: "Ready-to-use files and mockups for web, print, and social.",
  },
];

const ServicesBrand = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 sm:px-20"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-heading mb-4 text-4xl font-medium tracking-tighter sm:text-5xl">
              What You Get<span className="text-primary">.</span>
            </h2>
            <p className="text-body-text">
              Everything you need for a brand that&apos;s memorable, consistent,
              and built to stand out.
            </p>
          </div>
          <div>
            <Image
              src="/images/process-icon.svg"
              alt="process-icon"
              width={73}
              height={73}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-primary-background space-y-3 rounded-3xl border border-dashed p-8"
            >
              <Image
                src={card.icon}
                alt="process-icon"
                width={30}
                height={30}
              />
              <h3 className="font-heading text-xl font-semibold tracking-tighter">
                {card.title}
              </h3>
              <p className="text-body-text text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesBrand;
