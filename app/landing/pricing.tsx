"use client";

import React from "react";
import { Separator } from "../../components/ui/separator";
import { Check } from "lucide-react";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    tag: "Starter",
    price: "$1,500+",
    desc: "Perfect for MVPs, landing pages, or one-pagers.",
    features: [
      { id: 1, item: "1-3 Pages" },
      { id: 2, item: "Custom UI/UX Design" },
      { id: 3, item: "Responsive Web Development" },
      { id: 4, item: "2-3 Weeks Delivery" },
    ],
    cardBg: "bg-pricing-card",
  },
  {
    id: 2,
    tag: "Growth",
    price: "$3,500+",
    desc: "Ideal for growing brands and product-ready startups.",
    features: [
      { id: 1, item: "5-7 Pages" },
      { id: 2, item: "Advanced Design & Animations" },
      { id: 3, item: "Full Web Development (CMS optional)" },
      { id: 4, item: "4-6 Weeks Deliveryundable" },
    ],
    cardBg: "bg-radial from-primary/30 to-primary-background",
  },
  {
    id: 3,
    tag: "Pro",
    price: "$7,000+",
    desc: "For platforms, apps, and large-scale projects.",
    features: [
      { id: 1, item: "8+ Pages / Full App or Platform" },
      { id: 2, item: "Complete Design System" },
      { id: 3, item: "Brand Identity Included" },
      { id: 4, item: "6-10 Weeks Delivery" },
    ],
    cardBg: "bg-pricing-card",
  },
];

const Pricing = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div>
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto max-w-[1200px] space-y-10 px-6 sm:px-20"
      >
        <div className="flex flex-col items-center">
          <h2 className="font-heading mb-4 text-center text-4xl font-medium tracking-tighter sm:text-5xl">
            Simple, transparent pricing<span className="text-primary">.</span>
          </h2>
          <p className="text-body-text w-full text-center sm:w-[600px]">
            Whether you&apos;re a startup looking for a fresh launch or an
            enterprise needing a robust solution, we offer flexible pricing
            options to match your goals and budget.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`border-gray-border w-full rounded-3xl border p-8 lg:w-1/3 ${card.cardBg}`}
            >
              <div className="space-y-6">
                <p className="font-medium">{card.tag}</p>
                <h3 className="font-heading text-5xl font-bold tracking-tighter">
                  {card.price}
                </h3>
                <p className="text-sm">{card.desc}</p>
              </div>

              <Separator className="my-8" />

              <ul className="space-y-4 text-sm">
                {card.features.map((feature) => (
                  <li key={feature.id} className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    {feature.item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
