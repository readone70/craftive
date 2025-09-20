"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    icon: "/images/discovery-icon.svg",
    title: "Discovery",
    desc: "Understanding your vision, goals, and target audience to tailor our approach.",
  },
  {
    id: 2,
    icon: "/images/design-icon.svg",
    title: "Design",
    desc: "Crafting intuitive and engaging designs that resonate with your audience.",
  },
  {
    id: 3,
    icon: "/images/develop-icon.svg",
    title: "Development",
    desc: "Building robust and scalable solutions using the latest technologies.",
  },
  {
    id: 4,
    icon: "/images/deliver-icon.svg",
    title: "Deliver",
    desc: "Ensuring quality and performance through rigorous testing and feedback.",
  },
  {
    id: 5,
    icon: "/images/support-icon.svg",
    title: "Support",
    desc: "Deploying your product seamlessly and providing ongoing support.",
  },
];

const Process = () => {
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
              How we work<span className="text-primary">.</span>
            </h2>
            <p className="text-body-text">
              From concept to launch - and beyond
            </p>
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
        <div className="grids-rows-1 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-primary-background space-y-3 rounded-2xl border border-dashed p-6"
            >
              <Image
                src={card.icon}
                alt="process-icon"
                width={30}
                height={30}
              />
              <h3 className="font-heading text-lg font-semibold tracking-tighter">
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

export default Process;
