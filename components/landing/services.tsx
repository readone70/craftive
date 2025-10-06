"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,

    icon: "/images/develop-icon.svg",
    title: "Website Design",
    desc: "Custom, responsive websites built to showcase your brand, engage users, and drive conversions.",
  },
  {
    id: 2,
    icon: "/images/design-icon.svg",
    title: "Branding",
    desc: "Strong visual identities that make your business stand out with logos, colors, and brand assets.",
  },
  {
    id: 3,
    icon: "/images/discovery-icon.svg",
    title: "UI/UX Website Design",
    desc: "User-focused designs that deliver seamless, intuitive, and engaging website experiences.",
  },
  {
    id: 4,
    icon: "/images/deliver-icon.svg",
    title: "Copywriting & SEO",
    desc: "Content that connects with people and search engines, crafted to grow your brand.",
  },
];

const Services = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full" id="services">
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
              Our Services<span className="text-primary">.</span>
            </h2>
            <p className="text-body-text">From concept to launch, and beyond</p>
          </div>
          <div>
            <Image
              src="/images/process-icon.svg"
              alt="process-icon"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-primary-background space-y-3 rounded-3xl border border-dashed p-10"
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

export default Services;
