"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,

    icon: "/images/discovery-icon.svg",
    title: "Specialized Expertise",
    desc: "We work with businesses and professionals. We understand your business model and what converts.",
  },
  {
    id: 2,
    icon: "/images/discovery-icon.svg",
    title: "Clear Communication",
    desc: "We make collaboration easy with transparent updates and no tech overwhelm.",
  },
  {
    id: 3,
    icon: "/images/discovery-icon.svg",
    title: "Reliable Partnership",
    desc: "From first draft to launch (and beyond), we’re here to make sure your website performs beautifully.",
  },
];

const Why = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full" id="why">
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
              Why Excelia<span className="text-primary">.</span>
            </h2>
            <p className="text-body-text">
              Every site we create is built with strategy, credibility, and
              performance in mind.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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

export default Why;
