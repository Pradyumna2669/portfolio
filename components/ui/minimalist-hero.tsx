'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight, ExternalLink, Sparkles, Award, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MinimalistHeroProps {
  mainText?: string;
  readMoreLink?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText?: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string; label?: string }[];
  locationText: string;
  className?: string;
}

export const MinimalistHero = ({
  imageSrc,
  imageAlt,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden bg-background px-5 pb-8 pt-24 font-sans sm:px-8 sm:pt-28 md:px-12 md:pb-10 lg:pt-28 xl:px-16',
        className
      )}
    >
      {/* Subtle modern ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Main Hero Container */}
      <div className="relative z-10 grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-10 py-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:gap-8 xl:gap-12">
        {/* Left Column: Bio & Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for Projects & Tech Leadership
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            Pradyumna <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Kulkarni</span>
          </h1>

          <p className="mt-2 text-base font-semibold text-foreground/90 sm:text-lg">
            Full-Stack Software Developer & Systems Builder
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            B.Tech Computer Science student at PRPCEM Amravati. Passionate about engineering high-impact production platforms—from <strong className="text-foreground">PaperGen</strong> (AI question paper maker for teachers) to live competition engines (<strong className="text-foreground">QuizArena</strong>) and campus reservation systems (<strong className="text-foreground">Hallify</strong>).
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2">
              <a href="#projects">
                Explore Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 hover:bg-white/10 gap-2">
              <a href="#achievements">
                <Award className="h-4 w-4 text-amber-400" /> View Achievements
              </a>
            </Button>
          </div>

          {/* Key Quick Highlights */}
          <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-md pt-6 border-t border-white/10 text-left">
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 backdrop-blur-sm">
              <div className="text-xl font-bold text-foreground">8+</div>
              <div className="text-xs text-muted-foreground">Systems Built</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 backdrop-blur-sm">
              <div className="text-xl font-bold text-blue-400">17+</div>
              <div className="text-xs text-muted-foreground">Languages in PaperGen</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 backdrop-blur-sm">
              <div className="text-xl font-bold text-emerald-400">PRPCEM</div>
              <div className="text-xs text-muted-foreground">Technical Contributor</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3 backdrop-blur-sm">
              <div className="text-xl font-bold text-purple-400">Microsoft</div>
              <div className="text-xs text-muted-foreground">Certified Profile</div>
            </div>
          </div>
        </motion.div>

        {/* Center Column: Portrait Photo with Refined Halo */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="relative flex items-center justify-center">
            {/* Elegant multi-layer ambient background glow */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/25 blur-2xl"
            />
            
            {/* Circular pedestal background */}
            <div className="relative flex h-[20rem] w-[18rem] items-end justify-center overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent shadow-2xl backdrop-blur-md sm:h-[26rem] sm:w-[22rem] lg:h-[30rem] lg:w-[24rem]">
              {/* Subtle top light highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-auto max-h-[92%] w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/me-withoutbg.png';
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Featured Focus Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="order-3 flex flex-col gap-3.5 lg:order-3"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Key Focus & Production Builds
          </div>

          {/* PaperGen Card */}
          <a
            href="https://papergen.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-card to-card p-4 transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-300">
                ⭐ Flagship · Built for Teachers
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400" />
            </div>
            <h2 className="mt-2 text-base font-bold text-foreground group-hover:text-blue-300 transition-colors">
              PaperGen.online
            </h2>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
              Creates print-ready school exams in 2 mins. Supports 17+ Indian languages & 8s handwriting OCR digitizer.
            </p>
          </a>

          {/* QuizArena Card */}
          <a
            href="https://prpcem.quest"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-white/10 bg-card p-4 transition-all hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-300">
                ⚡ Live Quiz & Codethon Engine
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-400" />
            </div>
            <h2 className="mt-2 text-base font-bold text-foreground group-hover:text-purple-300 transition-colors">
              QuizArena (PRPCEM Quest)
            </h2>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
              Multiplayer competition platform with WebSockets, live hidden test-case code judge, and automated QR certificates.
            </p>
          </a>

          {/* Hallify Card */}
          <a
            href="https://bookhallprpcem.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border border-white/10 bg-card p-4 transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                🏛️ PRPCEM Seminar Hall Booking
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400" />
            </div>
            <h2 className="mt-2 text-base font-bold text-foreground group-hover:text-emerald-300 transition-colors">
              Hallify Booking Portal
            </h2>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
              Eliminated campus queues with public calendar availability, instant conflict blocking, and in-charge approval dashboards.
            </p>
          </a>
        </motion.div>
      </div>

      {/* Footer Strip */}
      <footer className="z-20 mt-8 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
                {link.label && <span>{link.label}</span>}
              </a>
            );
          })}
        </div>
        <div className="text-center text-xs font-medium text-muted-foreground sm:text-right flex items-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 inline" /> {locationText}
        </div>
      </footer>
    </div>
  );
};
