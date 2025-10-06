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
    url: "/projects",
  },
  {
    id: 2,
    image: "/images/p-main.webp",
    title: "Propatize",
    url: "/projects",
  },
  {
    id: 3,
    image: "/images/md-main.webp",
    title: "Moniedrop",
    url: "/projects",
  },
  {
    id: 4,
    image: "/images/a-main.webp",
    title: "Aremu",
    url: "/projects",
  },
  {
    id: 5,
    image: "/images/ph-main.webp",
    title: "Phoenix Analytica",
    url: "/projects",
  },
  {
    id: 6,
    image: "/images/mt-main.webp",
    title: "Movein Turkiye",
    url: "/projects",
  },
  {
    id: 8,
    image: "/images/s-mainn.webp",
    title: "Sikirabu",
    url: "/projects",
  },
  {
    id: 7,
    image: "/images/y-main.webp",
    title: "Yalla Ride",
    url: "/projects",
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
            Our work speaks volume<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            Take a look at some of our favorite projects, from business to
            portfolio websites.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map(({ title, image }) => (
            <div
              key={title}
              className="border-gray-border bg-primary-background rounded-3xl border pb-8"
            >
              <div className="relative mb-8 h-60 rounded-3xl sm:h-68">
                <Image
                  src={image}
                  alt="project-image"
                  fill
                  className="mb-8 rounded-3xl object-cover"
                />
              </div>

              <h3 className="font-heading text-center text-xl font-medium tracking-tighter">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
