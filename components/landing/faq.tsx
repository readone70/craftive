"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does a project usually take?",
    answer:
      "Timelines depend on the scope and complexity of your project. We'll give you a clear project timeline after discussing your goals and deliverables.",
  },
  {
    id: 2,
    question: "Will I be involved in the process?",
    answer:
      "Yes, collaboration is a big part of our process. We work closely with you at every stage, from start to final delivery.",
  },
  {
    id: 3,
    question: "Do you provide revisions if I’m not happy with the first draft?",
    answer:
      "Definitely. Each project includes structured revision rounds. This ensures we can refine the design to match your vision without endless back-and-forth.",
  },
  {
    id: 4,
    question: "What happens after the project is completed?",
    answer:
      "You’ll receive all final deliverables at project completion. Ongoing support and maintenance are also available upon request.",
  },
  {
    id: 5,
    question: "How much does a website project cost?",
    answer:
      "Our pricing depends on the scope and complexity of your project, such as the number of pages, features, and integrations. We offer flexible packages starting from $500 and provide a custom quote after understanding your goals.",
  },
];

const FAQ = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full" id="faq">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 sm:px-20 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-heading mb-4 text-4xl font-medium tracking-tighter sm:text-5xl">
            Got questions? We&apos;ve got answers
            <span className="text-primary">.</span>
          </h2>
          <p className="text-body-text">
            We know choosing the right team for your website project is a big
            decision. Here are some common questions we get.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.question}>
                <AccordionTrigger className="cursor-pointer text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body-text text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
