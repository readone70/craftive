"use client";

import { ArrowRight, Star, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { motion, useInView } from "motion/react";

const cards = [
  {
    id: 1,
    rating: 5,
    content:
      "They didn’t just design a website, they built a digital identity for our brand. The team understood our goals perfectly and delivered a site that feels alive and modern.",
    clientImage: "/images/alim.jpeg",
    clientName: "Alim Ajenifuja",
    clientTitle: "Project Lead, Hearthub",
  },
  {
    id: 2,
    rating: 5,
    content:
      "I needed a professional website to showcase my skills & career, and they delivered beyond my expectations. Now my brand looks credible and polished.",
    clientImage: "/images/aremu.jpg",
    clientName: "Aremu Anuolawapo",
    clientTitle: "Computational Linguist",
  },
  {
    id: 3,
    rating: 5,
    content:
      "Excelia Studio completely transformed our online presence. Their attention to detail, creativity, and commitment to our success were evident in every step of the process.",
    clientImage: "/images/hanif.jpeg",
    clientName: "Hanif Eko",
    clientTitle: "Founder, Phoenix Analytica",
  },
  {
    id: 4,
    rating: 5,
    content:
      "They brought Síkírá-bù to life online! Their exceptional web design skills and attention to detail exceeded our expectations. We're thrilled with the face of our brand online.",
    clientImage: "/images/bode1.png",
    clientName: "Bayo Olabode",
    clientTitle: "CEO, Síkírá-bù",
  },
  {
    id: 5,
    rating: 5,
    content:
      "Working with Excelia has been exceptional because of their attention to detail and their deep understanding of user experience and how to develop a flow to solve problems.",
    clientImage: "/images/sheriff.png",
    clientName: "Sherif Akinola",
    clientTitle: "Founder & CEO, Propatize",
  },
];

const Testimonial = () => {
  const scrollCard = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(true);

  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  //check scroll position and update arrow state
  const updateArrowState = () => {
    if (!scrollCard.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollCard.current;

    setScrollLeft(scrollLeft > 0);
    setScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  //scroll function
  const scroll = (direction: "left" | "right") => {
    if (!scrollCard.current) return;
    const { clientWidth } = scrollCard.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    scrollCard.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(updateArrowState, 200);
  };

  useEffect(() => {
    const container = scrollCard.current;
    if (!container) return;
    const handleScroll = () => updateArrowState();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full" id="testimonials">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto max-w-[1200px] space-y-10 px-6 sm:px-20"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-heading mb-4 text-center text-4xl font-medium tracking-tighter sm:text-5xl">
            Client testimonials<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            Hear from our happy clients.
          </p>
        </div>
        <div className="scroll-hide flex gap-7 overflow-auto" ref={scrollCard}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="border-gray-border w-96 flex-shrink-0 space-y-6 rounded-3xl border p-8"
            >
              <div className="flex">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < card.rating
                          ? "fill-orange-400 text-orange-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
              </div>

              <div>
                <p className="text-body-text">{card.content}</p>
              </div>

              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full">
                  <Image
                    src={card.clientImage}
                    alt="client-image"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="ml-3 flex flex-col">
                  <p className="text-sm font-semibold">{card.clientName}</p>
                  <p className="text-body-text text-sm"> {card.clientTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => scroll("left")}
            disabled={!scrollLeft}
            className={`h-12 w-12 cursor-pointer rounded-full ${
              scrollLeft ? "" : "bg-gray-100"
            }`}
            aria-label="left-button"
          >
            <ArrowLeft />
          </Button>
          <Button
            onClick={() => scroll("right")}
            disabled={!scrollRight}
            className={`h-12 w-12 cursor-pointer rounded-full ${
              scrollRight ? "" : "bg-gray-100"
            }`}
            aria-label="right-button"
          >
            <ArrowRight />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
