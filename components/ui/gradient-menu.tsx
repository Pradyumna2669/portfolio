'use client';

import React from 'react';
import {
  IoBriefcaseOutline,
  IoChatbubblesOutline,
  IoDocumentTextOutline,
  IoHelpCircleOutline,
} from 'react-icons/io5';
import { cn } from '@/lib/utils';

export type GradientMenuItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
};

type GradientMenuProps = {
  className?: string;
  items?: GradientMenuItem[];
};

type GradientStyle = React.CSSProperties & {
  '--gradient-from': string;
  '--gradient-to': string;
};

const defaultItems: GradientMenuItem[] = [
  {
    title: 'Experience',
    href: '#experience',
    icon: <IoBriefcaseOutline />,
    gradientFrom: '#a855f7',
    gradientTo: '#ec4899',
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
    icon: <IoChatbubblesOutline />,
    gradientFrom: '#38bdf8',
    gradientTo: '#2563eb',
  },
  {
    title: 'Resume',
    href: '#resume',
    icon: <IoDocumentTextOutline />,
    gradientFrom: '#fb923c',
    gradientTo: '#ef4444',
  },
  {
    title: 'FAQs',
    href: '#faqs',
    icon: <IoHelpCircleOutline />,
    gradientFrom: '#4ade80',
    gradientTo: '#06b6d4',
  },
];

export default function GradientMenu({
  className,
  items = defaultItems,
}: GradientMenuProps) {
  return (
    <ul className={cn('flex items-center gap-4', className)}>
      {items.map(({ title, href, icon, gradientFrom, gradientTo }) => (
        <li
          key={title}
          style={
            {
              '--gradient-from': gradientFrom,
              '--gradient-to': gradientTo,
            } as GradientStyle
          }
          className="group relative"
        >
          <a
            href={href}
            className={cn(
              'relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white shadow-[0_12px_45px_rgba(255,255,255,0.1)] transition-all duration-500',
              'hover:w-[11.5rem] hover:border-transparent hover:bg-transparent hover:shadow-none focus-visible:w-[11.5rem] focus-visible:border-transparent focus-visible:bg-transparent focus-visible:shadow-none focus-visible:outline-none',
            )}
            aria-label={title}
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-within:opacity-100" />
            <span className="absolute inset-x-2 top-2 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-45 group-focus-within:opacity-45" />
            <span className="relative z-10 text-[1.45rem] text-zinc-500 transition-all duration-500 group-hover:scale-0 group-hover:opacity-0 group-focus-within:scale-0 group-focus-within:opacity-0">
              {icon}
            </span>
            <span className="absolute z-10 scale-75 text-sm font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
              {title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
