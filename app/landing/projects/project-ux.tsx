"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    image: "/images/propatize-mb.webp",
    title: "Propatize - Resident App",
    desc: "Propatize gave residents, easy payments, and instant communication, and secure estate and guest access, all in one connected mobile app.",
  },
  {
    id: 2,
    image: "/images/propatize-mk.webp",
    title: "Propatize - Manager App",
    desc: "Propatize streamlined property management, improving payments, communication, and issue resolution while boosting efficiency and resident satisfaction.",
  },

  {
    id: 3,
    image: "/images/yalla-mk.webp",
    title: "Yalla Savings App",
    desc: "Yalla made ethical saving and investing simple, interest-free, and transparent, empowering users to grow wealth confidently.",
  },

  {
    id: 4,
    image: "/images/moniedrop-mk.webp",
    title: "Moniedrop App",
    desc: "Participatory finance app making Ajo, Esusu, and Adashe simple and digital.",
  },
];

const ProjectUX = () => {
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
            Works<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            Take a look at some of our favorite works.
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

              <div className="flex flex-col items-center gap-4 px-10 py-8">
                <h3 className="font-heading text-center text-xl font-medium tracking-tighter">
                  {card.title}
                </h3>
                <p className="px-10 text-center text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectUX;
