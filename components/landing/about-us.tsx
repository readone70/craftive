'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { id: 1, number: '150k+', description: 'Projects succesfully launched' },
  { id: 2, number: '98%', description: 'Client satisfaction rate' },
  { id: 3, number: '80+', description: 'Happy clients across 8 countries' },
  { id: 4, number: '95%', description: 'Projects delivered within deadline' },
];

const About = () => {
  const scrollSection = useRef(null);
  const isInView = useInView(scrollSection);

  return (
    <motion.div
      ref={scrollSection}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
      className="px-6 sm:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-primary-background"
    >
      <motion.div className="grid grid-cols-2 grid-rows-2 gap-10 sm:gap-20">
        {stats.map((stat) => (
          <div key={stat.id}>
            <h2 className="font-semibold font-heading text-4xl sm:text-6xl tracking-tighter">
              {stat.number}
            </h2>
            <p className="text-sm text-body-text w-full sm:w-36">
              {stat.description}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div className="">
        <h2 className="font-medium font-heading text-4xl sm:text-5xl mb-4 tracking-tighter">
          Who we are<span className="text-primary">.</span>
        </h2>
        <p className="text-body-text">
          We are a team of creative designers and expert developers passionate
          about crafting high-performing websites and digital experiences.
          Whether you&apos;re a startup, a growing business, or an enterprise,
          we provide tailored solutions that help you scale.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
