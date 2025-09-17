'use client';

import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { motion } from 'motion/react';

const scrolls = [
  { id: 1, item: 'Reliable service' },
  { id: 2, item: 'Designs that perform' },
  { id: 3, item: 'Built for growth' },
  { id: 4, item: 'Solutions, not just services' },
  { id: 5, item: 'On-time delivery' },
  { id: 6, item: 'Launch with confidence' },
];

const SecondCTA = () => {
  return (
    <div className="px-6 sm:px-20">
      <div className="bg-cta-background text-white rounded-4xl p-10 lg:p-16 overflow-auto scroll-hide space-y-16">
        <div className="flex justify-between">
          <div className="space-y-6 ">
            <h2 className="font-bold font-heading text-4xl lg:text-5xl tracking-tighter w-full lg:w-88">
              Start your journey with us now
            </h2>
            <Button className="rounded-full h-12 px-10">Start now</Button>
          </div>
          <div>
            <Image
              src="/images/cta2-image.svg"
              alt="cta-image"
              width={200}
              height={200}
            />
          </div>
        </div>

        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-200%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...scrolls, ...scrolls].map((scroll, index) => (
            <div
              key={index}
              className="bg-scroll-background flex items-center gap-2 flex-shrink-0 px-6 py-3 rounded-full"
            >
              <CircleCheck className="w-5 h-5" />
              <p className="">{scroll.item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SecondCTA;
