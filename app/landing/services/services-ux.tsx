"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,

    icon: "/images/deliver-icon.svg",
    title: "User-Centered Research",
    desc: "We design from real user insights and business goals, not assumptions.",
  },
  {
    id: 2,
    icon: "/images/deliver-icon.svg",
    title: "Intuitive Interfaces & Prototypes",
    desc: "Seamless user flows with developer-ready prototypes for effortless handoff.",
  },
  {
    id: 3,
    icon: "/images/deliver-icon.svg",
    title: "Scalable Design Systems",
    desc: "Reusable components that keep your product consistent and future-proof.",
  },
  {
    id: 4,
    icon: "/images/deliver-icon.svg",
    title: "Results That Matter",
    desc: "Designs that convert better, work smoother, and keep users happy.",
  },
];

const ServicesUX = () => {
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
              Everything you need for a product that’s intuitive, user-focused,
              and built to scale.
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

export default ServicesUX;
