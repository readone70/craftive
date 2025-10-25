"use client";

import React from "react";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    tag: "1",
    price: "Discovery Call",
    desc: "We learn more about your business and find the best design solution that fits your needs and budget. ",
    cardBg: "bg-pricing-card",
  },
  {
    id: 2,
    tag: "2",
    price: "Design",
    desc: "From user interfaces to brand visuals and web layouts, every detail is designed to align beauty with performance.",
    cardBg: "bg-radial from-primary/30 to-primary-background",
  },
  {
    id: 3,
    tag: "3",
    price: "Deliver",
    desc: "Whether it’s a live website, design system, or brand identity, we ensure a seamless rollout that drives real results.",
    cardBg: "bg-pricing-card",
  },
];

const Process = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full" id="process">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto max-w-[1200px] space-y-10 px-6 sm:px-20"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-heading mb-4 text-center text-4xl font-medium tracking-tighter sm:text-5xl">
            Our Process<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            How we we&apos;ll work together.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`border-gray-border w-full rounded-3xl border p-8 lg:w-1/3 ${card.cardBg}`}
            >
              <div className="space-y-3">
                <p className="text-primary font-medium">{card.tag}</p>
                <h3 className="font-heading text-xl font-semibold tracking-tighter">
                  {card.price}
                </h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Process;
