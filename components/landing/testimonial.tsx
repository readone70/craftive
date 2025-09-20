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
      "Craftive redesigned our website and the results were amazing. The site is cleaner, faster, and truly reflects our brand. We have already seen a boost in client inquiries.",
    clientImage: "/images/sarah.png",
    clientName: "Sarah Adams",
    clientTitle: "Mavrick Inc.",
  },
  {
    id: 2,
    rating: 4,
    content:
      "Working with this team was effortless. They understood our goals from the start and delivered a professional website that has impressed both our staff and customers.",
    clientImage: "/images/chen.png",
    clientName: "Chen Diggs",
    clientTitle: "Double Merit",
  },
  {
    id: 3,
    rating: 5,
    content:
      "From start to finish, communication was smooth and the process was stress-free. The final product exceeded expectations and gave our business a professional edge.",
    clientImage: "/images/emily.png",
    clientName: "Emily Cambel",
    clientTitle: "Kelc Group",
  },
  {
    id: 4,
    rating: 4,
    content:
      "The attention to detail and creativity they brought to our project was outstanding. Our new design feels fresh and modern, and our users love the experience",
    clientImage: "/images/sarah.png",
    clientName: "Sarah Adams",
    clientTitle: "Mavrick Inc.",
  },
  {
    id: 5,
    rating: 5,
    content:
      "They combined creativity with technical expertise to build a website that not only looks great but also performs flawlessly. We couldn’t be happier with the outcome.",
    clientImage: "/images/chen.png",
    clientName: "Chen Diggs",
    clientTitle: "Double Merit",
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
    <div className="w-full">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto max-w-[1200px] space-y-10 px-6 sm:px-20"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-heading mb-4 text-center text-4xl font-medium tracking-tighter sm:text-5xl">
            Clients testimonials<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            Don&apos;t take our words for it. Hear from our clients.
          </p>
        </div>
        <div className="scroll-hide flex gap-7 overflow-auto" ref={scrollCard}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="border-gray-border bg-primary-background w-96 flex-shrink-0 space-y-6 rounded-3xl border p-8"
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
                <div>
                  <Image
                    src={card.clientImage}
                    alt="client-image"
                    width={40}
                    height={40}
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
