"use client";

import Image from "next/image";
import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

const cards = [
  {
    id: 1,
    image: "/images/positivus-mkp.webp",
    title: "Positivus",
    desc: "Marketing agency helping businesses grow through SEO, PPC, and content strategy.",
    video: "positivusi_lgnzuc",
  },

  {
    id: 2,
    image: "/images/medieval-portfolio.webp",
    title: "Medieval Portfolio",
    desc: "Newspaper-inspired portfolio with medieval aesthetics for an unconventional designer.",
    video: "medieval_ymytc6",
  },
  {
    id: 3,
    image: "/images/prop-new-mkp.webp",
    title: "Propatize",
    desc: "Property management platform for facility managers, residents, and security.",
    video: "propatize_hawvmi",
  },

  {
    id: 4,
    image: "/images/yalla-mkp.webp",
    title: "Yalla Ride",
    desc: "Ride-hailing service offering rickshaw and EV transport for a greener future.",
    video: "yalla_key8fl",
  },
  {
    id: 5,
    image: "/images/hearthub-new-mkp.webp",
    title: "Hearthub Solutions",
    desc: "Counseling brand focused on healing, growth, and emotional well-being.",
    video: "hearthub-solutions_wnqjem",
  },
  {
    id: 6,
    image: "/images/phoenix-new-mkp.webp",
    title: "Phoenix Analytica",
    desc: "Data-driven firm specializing in analysis, market research, and ICT consulting.",
    video: "phoenix_epgbvw",
  },

  {
    id: 7,
    image: "/images/aremu-mkp.webp",
    title: "Aremu - Computational Linguist",
    desc: "Portfolio for a Computational Linguist and Cognitive Scientist.",
    video: "aremu_ff6cbz",
  },

  {
    id: 8,
    image: "/images/monie-mkp.webp",
    title: "Moniedrop",
    desc: "Participatory finance app making Ajo, Esusu, and Adashe simple and digital.",
    video: "moniedrop_tztyku",
  },
];

const ProjectWeb = () => {
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

                <p className="text-center text-sm sm:px-10">{card.desc}</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="hover:bg-primary hover:text-button-text-color h-8 cursor-pointer rounded-full text-xs"
                    >
                      View Site
                      <Eye className="h-3 w-3" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl">
                    <div>
                      <CldVideoPlayer
                        width="1920"
                        height="1080"
                        src={card.video}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectWeb;
