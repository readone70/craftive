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
    image: "/images/prop-new-mkp.webp",
    title: "Propatize",
    desc: "A serene, modern website for Hearthub Solutions, a counseling practice helping people heal and grow.",
    video: "propatize_hawvmi",
  },
  {
    id: 2,
    image: "/images/medieval-portfolio.webp",
    title: "Medeival Portfolio",
    desc: "A serene, modern website for Hearthub Solutions, a counseling practice helping people heal and grow.",
    video: "medieval_ymytc6",
  },
  {
    id: 3,
    image: "/images/hearthub-new-mkp.webp",
    title: "Hearthub Solutions",
    desc: "A serene, modern website for Hearthub Solutions, a counseling brand helping people heal and grow.",
    video: "hearthub-solutions_wnqjem",
  },
  {
    id: 4,
    image: "/images/phoenix-new-mkp.webp",
    title: "Phoenix Analytica",
    desc: "A serene, modern website for Hearthub Solutions, a counseling practice helping people heal and grow.",
    video: "phoenix_epgbvw",
  },

  {
    id: 5,
    image: "/images/aremu-mkp.webp",
    title: "Aremu - Computational Linguist",
    desc: "A serene, modern website for Hearthub Solutions, a counseling practice helping people heal and grow.",
    video: "aremu_ff6cbz",
  },

  {
    id: 6,
    image: "/images/monie-mkp.webp",
    title: "Moniedrop",
    desc: "A serene, modern website for Hearthub Solutions, a counseling practice helping people heal and grow.",
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

                <p className="text-center text-sm">{card.desc}</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-8 cursor-pointer rounded-full text-xs"
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
