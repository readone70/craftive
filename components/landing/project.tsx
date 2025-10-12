"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    image: "/images/h-main.webp",
    title: "Hearthub",
  },
  {
    id: 4,
    image: "/images/ph-main.webp",
    title: "Phoenix Analytica",
  },

  {
    id: 3,
    image: "/images/are-main.png",
    title: "Linguist Consultant",
  },
  {
    id: 2,
    image: "/images/e-main.png",
    title: "ElevateCo",
  },
];

const Project = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full" id="works">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 sm:px-20"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-heading mb-4 text-center text-4xl font-medium tracking-tighter sm:text-5xl">
            Recent Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            Take a look at some of our favorite projects.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="border-gray-border bg-primary-background rounded-3xl border"
            >
              <div className="relative h-60 rounded-3xl sm:h-68">
                <Image
                  src={card.image}
                  alt="project-image"
                  fill
                  className="rounded-3xl object-cover"
                />
              </div>

              <div className="flex flex-col items-center px-10 py-8">
                <h3 className="font-heading text-center text-xl font-medium tracking-tighter">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
