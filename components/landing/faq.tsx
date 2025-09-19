'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const faqs = [
  {
    id: 1,
    question: 'How long does a design project usually take?',
    answer:
      "Timelines depend on the scope and complexity of your project. We'll give you a clear project timeline after discussing your goals and deliverables.",
  },
  {
    id: 2,
    question: 'Will I be involved in the design process?',
    answer:
      'Yes, collaboration is a big part of our process. We work closely with you at every stage, from initial research to final delivery.',
  },
  {
    id: 3,
    question: 'Do you provide revisions if I’m not happy with the first draft?',
    answer:
      'Definitely. Each project includes structured revision rounds. This ensures we can refine the design to match your vision without endless back-and-forth.',
  },
  {
    id: 4,
    question: 'What happens after the project is completed?',
    answer:
      'At the end of your project, you’ll receive all final deliverables — including editable source files, brand guidelines, or prototypes, depending on the scope. We also remain available for ongoing support,',
  },
];

const FAQ = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <div className="w-full">
      <motion.div
        ref={scrollSection}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-20"
      >
        <div>
          <h2 className="font-medium font-heading text-4xl sm:text-5xl mb-4 tracking-tighter">
            Got questions? We&apos;ve got answers
            <span className="text-primary">.</span>
          </h2>
          <p className="text-body-text">
            We know choosing the right team for your digital project is a big
            decision. Here are some common questions we get. Clear, honest, and
            straight to the point.
          </p>
        </div>
        <div>
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.question}>
                <AccordionTrigger className="text-base cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-body-text">
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
