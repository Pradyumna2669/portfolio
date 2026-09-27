'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What technologies do I work with most?',
      answer: 'My stack spans C++, JavaScript, Python, SQL, React, Tailwind CSS, Node.js, REST APIs, Supabase, Firebase, SQLite, PostgreSQL, Docker, and Linux-based self-hosted systems.',
    },
    {
      id: 'item-2',
      question: 'What kind of projects am I interested in building?',
      answer: 'I am most interested in productivity tools, developer platforms, education-focused products, automation systems, self-hosted infrastructure, and game development experiments.',
    },
    {
      id: 'item-3',
      question: 'What am I currently working on?',
      answer: 'Right now I am building self-hosted Supabase infrastructure, a developer SaaS platform, portfolio ecosystem projects, multiplayer browser games, and productivity tools for students.',
    },
    {
      id: 'item-4',
      question: 'How do I approach building products?',
      answer: 'I like shipping practical systems end-to-end. That means thinking about frontend UX, backend reliability, database design, infrastructure, and how the product will actually be used in the real world.',
    },
  ];

  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto w-full">
      <div className="px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Common questions about my stack, current work, and what I like building.
            </p>
            <p className="text-muted-foreground mt-6 hidden md:block">
              Have a specific question? Reach out via{' '}
              <Link
                href="#"
                className="text-primary font-medium hover:underline"
              >
                the contact section
              </Link>{' '}
              if you want to discuss a project or collaboration.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-800">
                  <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-muted-foreground mt-6 md:hidden">
            Have a specific question? Reach out via{' '}
            <Link
              href="#"
              className="text-primary font-medium hover:underline">
              the contact section
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
 
export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <>
      <div className="w-full">
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className="text-base leading-relaxed break-words whitespace-normal text-muted-foreground"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};
