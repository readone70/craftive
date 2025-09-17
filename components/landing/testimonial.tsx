'use client';

import { ArrowRight, Star, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { motion, useInView } from 'motion/react';

const cards = [
  {
    id: 1,
    rating: 5,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/sarah.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
  },
  {
    id: 2,
    rating: 4,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/chen.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
  },
  {
    id: 3,
    rating: 5,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/emily.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
  },
  {
    id: 4,
    rating: 4,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/sarah.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
  },
  {
    id: 5,
    rating: 5,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/chen.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
  },
  {
    id: 6,
    rating: 5,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/sarah.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
  },
  {
    id: 7,
    rating: 4,
    content:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Suspendisse varius enim in eroselementum tristique. Duis cursus, miquis viverraornare.',
    clientImage: '/images/emily.png',
    clientName: 'Orlando Diggs',
    clientTitle: 'MD, Klex Company',
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
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollCard.current) return;
    const { clientWidth } = scrollCard.current;
    const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
    scrollCard.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    setTimeout(updateArrowState, 200);
  };

  useEffect(() => {
    const container = scrollCard.current;
    if (!container) return;
    const handleScroll = () => updateArrowState();
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={scrollSection}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
      className="px-6 sm:px-20 space-y-10"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-medium font-heading text-4xl text-center sm:text-5xl mb-4 tracking-tighter">
          Clients testimonials<span className="text-primary">.</span>
        </h2>
        <p className="text-center text-body-text w-full sm:w-[600px]">
          Don&apos;t take our words for it. Hear from our clients.
        </p>
      </div>
      <div className="flex overflow-auto scroll-hide gap-7" ref={scrollCard}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-dashed bg-primary-background p-8 w-96 flex-shrink-0 rounded-3xl space-y-6"
          >
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < card.rating
                        ? 'text-orange-400 fill-orange-400'
                        : 'text-gray-300'
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

              <div className="flex flex-col ml-3">
                <p className="text-sm font-semibold">{card.clientName}</p>
                <p className="text-sm text-body-text"> {card.clientTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        <Button
          onClick={() => scroll('left')}
          disabled={!scrollLeft}
          className={`rounded-full h-12 w-12 cursor-pointer ${
            scrollLeft ? '' : 'bg-gray-100'
          }`}
        >
          <ArrowLeft />
        </Button>
        <Button
          onClick={() => scroll('right')}
          disabled={!scrollRight}
          className={`rounded-full h-12 w-12 cursor-pointer ${
            scrollRight ? '' : 'bg-gray-100'
          }`}
        >
          <ArrowRight />
        </Button>
      </div>
    </motion.div>
  );
};

export default Testimonial;
