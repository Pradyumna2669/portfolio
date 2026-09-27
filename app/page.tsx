'use client';

import { useState } from 'react';
import { Header } from '@/components/ui/header-2';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { Timeline, TimelineItem } from '@/components/ui/modern-timeline';
import FAQs from '@/components/ui/text-reveal-faqs';
import {
  Globe,
  Mail,
  Award,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Code2,
  Shield,
  Bot,
  Terminal,
  Cpu,
  GraduationCap,
  Building2,
  QrCode,
  Zap,
  ArrowRight,
  BookOpen,
  FileText,
  Clock,
  ScanLine,
  Languages,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'flagship' | 'campus' | 'automation'>('all');

  const socialLinks = [
    {
      icon: Globe,
      href: 'https://learn.microsoft.com/en-in/users/pradyumnakulkarni-0751/achievements',
      label: 'Microsoft Profile',
    },
    {
      icon: Award,
      href: 'https://pradyumnagk.blogspot.com/',
      label: 'Achievements Blog',
    },
    {
      icon: Mail,
      href: 'mailto:pradyumnagkulkarni93@gmail.com',
      label: 'Email',
    },
  ];

  const projects = [
    {
      id: 'papergen',
      category: 'flagship',
      categoryLabel: 'Flagship Project · EdTech AI',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      title: 'PaperGen.online',
      subtitle: 'Create a Complete School Question Paper in 2 Minutes',
      description:
        'A comprehensive AI-assisted question paper generator purpose-built for Indian school teachers. Eliminates hours of manual typesetting and expensive typist dependencies. Supports 17+ Indian regional languages, instant 8-second handwriting OCR digitization, 15+ question types, and auto-generates print-ready PDFs with answer keys and marking schemes.',
      highlight: 'Currently Built & Deployed — One of the best software tools for teachers',
      metrics: [
        { label: 'Languages', value: '17+ Regional' },
        { label: 'Paper Draft Time', value: '2 Minutes' },
        { label: 'Handwriting OCR', value: '~8 Seconds' },
      ],
      features: [
        'Supports Hindi, Marathi, Bengali, Tamil, Telugu, Gujarati, Sanskrit, and 10+ more with phonetic typing',
        'Handwriting Scan-to-Paper: photograph handwritten tests and let AI turn them into clean editable tests',
        '15+ Question Formats: MCQs, textbook vertical mathematics, match the following, fill in blanks, comprehension',
        'Print-ready A4 PDF export with school branding, test instructions, and automated marking schemes',
      ],
      tech: ['Next.js 15', 'AI Vision & OCR', 'TypeScript', 'Tailwind CSS', 'Multilingual Typography', 'PDF Engine'],
      liveUrl: 'https://papergen.online',
      status: 'Live Production',
    },
    {
      id: 'quizarena',
      category: 'campus',
      categoryLabel: 'Campus Platform · Live Competition',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
      title: 'QuizArena (PRPCEM Quest)',
      subtitle: 'Live Multiplayer Quiz & Codethon Engine with WebSockets',
      description:
        'A real-time multiplayer competition platform engineered for the Department of Computer Science & Engineering and Cultural Club Technical Team at PR Pote Patil College of Engineering and Management, Amravati. Powers college tech fests, classroom evaluations, and live Codethons with automated hidden test-case verification.',
      highlight: 'Full-stack live platform with real-time projector scoreboard & QR certificates',
      metrics: [
        { label: 'Protocol', value: 'WebSockets' },
        { label: 'Contest Modes', value: 'MCQ & Codethon' },
        { label: 'Certificates', value: 'Dynamic QR' },
      ],
      features: [
        'Real-time low-latency multiplayer quiz sync with speed & accuracy-based leaderboard scoring',
        'Live Codethon Engine: in-browser code debugging judge with hidden test case verification and execution limits',
        'Automated Certificate Generator: server-side canvas generation with embedded verification QR codes',
        'Bulk question and programming problem importer supporting JSON, CSV, and AI prompt formats',
      ],
      tech: ['Node.js', 'Express', 'WebSocket / Socket.io', 'Supabase', '@napi-rs/canvas', 'Tailwind CSS'],
      liveUrl: 'https://prpcem.quest',
      status: 'Live Production',
    },
    {
      id: 'hallify',
      category: 'campus',
      categoryLabel: 'Campus Infrastructure · Workflow Automation',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
      title: 'Hallify — PRPCEM Seminar Hall Booking',
      subtitle: 'Digital Reservation Portal for Main Hall & Red Carpet Area',
      description:
        'Engineered to eliminate administrative office queues and manual register confusion at PR Pote Patil College of Engineering & Management, Amravati. Provides college departments and clubs with instant slot availability, conflict-free booking, and an auditable in-charge approval pipeline.',
      highlight: 'First-come, first-served booking engine with zero double-booking overlap',
      metrics: [
        { label: 'Venues', value: '2 Shared' },
        { label: 'Advance Window', value: '30 Days' },
        { label: 'Availability', value: '100% Public' },
      ],
      features: [
        'Public live calendar: anyone can inspect hall availability in real-time without signing in',
        'Zero collision guarantee: automatically rejects overlapping timeslots for the same venue',
        'In-charge administrative control: review booking requests with approval or reason-logged rejection',
        'Multi-department governance with official NAAC and institutional guidelines compliance',
      ],
      tech: ['TanStack Start / React 19', 'Supabase DB', 'TypeScript', 'Vite', 'Tailwind CSS', 'Role Auth'],
      liveUrl: 'https://bookhallprpcem.netlify.app',
      status: 'Live Production',
    },
    {
      id: 'pote-portal',
      category: 'campus',
      categoryLabel: 'Desktop & Cloud · Administrative App',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      title: 'PR Pote Appointment & Visitor Management Portal',
      subtitle: 'Windows Desktop & Web Scheduling System for College Leadership',
      description:
        'A comprehensive appointment scheduling and visitor gate-pass management platform built for the Principal, HODs, and administrative leadership of PRPCEM Amravati. Packaged as a standalone Windows desktop software with automated installers alongside web accessibility.',
      highlight: 'Production Desktop Application (v1.0.9) with Electron & Supabase',
      metrics: [
        { label: 'Release', value: 'v1.0.9 Desktop' },
        { label: 'Engine', value: 'React 19 + TanStack' },
        { label: 'Target', value: 'Windows NSIS' },
      ],
      features: [
        'Dedicated Windows desktop application built with Electron, packaged via electron-builder NSIS',
        'Seamless appointment requests with real-time status notifications for visitors and department heads',
        'Centralized appointment calendar, visitor badge generation, and check-in audit logs',
        'Offline resilience paired with Supabase PostgreSQL cloud data synchronization',
      ],
      tech: ['Electron', 'TanStack Start', 'React 19', 'Supabase', 'Tailwind CSS', 'NSIS Installer'],
      status: 'Deployed Desktop App',
    },
    {
      id: 'nucleon',
      category: 'flagship',
      categoryLabel: 'Commercial Web · Admissions Platform',
      badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
      title: 'Nucleon Coaching Center Web Portal',
      subtitle: 'High-Converting Digital Platform for Premier Science Academy',
      description:
        'Designed and developed the official digital presence and student admissions portal for Nucleon Coaching Center, a premier science and engineering coaching institute with 15+ years of excellence in Amravati (10th–12th CBSE/State Board, JEE, NEET, MHT-CET).',
      highlight: 'Concept-led educational portal with admissions enquiry engine',
      metrics: [
        { label: 'Legacy', value: '15+ Years' },
        { label: 'Batches', value: 'Small-Batch Focus' },
        { label: 'Optimization', value: '100% Mobile' },
      ],
      features: [
        'Interactive program explorer for JEE, NEET, MHT-CET, and CBSE board foundation courses',
        'Direct admissions enquiry and callback capture system with instant routing',
        'Faculty credentials showcase, proven track-record metrics, and results gallery',
        'Fast, accessible mobile-first responsive architecture optimized for student and parent searches',
      ],
      tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Enquiry API', 'Responsive UI', 'SEO Architecture'],
      liveUrl: 'http://nucleoncoachingcenter.online/',
      status: 'Live Production',
    },
    {
      id: 'ideation',
      category: 'flagship',
      categoryLabel: 'Social Impact · NGO Portal',
      badgeColor: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
      title: 'Ideation Welfare Society',
      subtitle: 'Official Web Platform for Non-Profit Community & Youth Empowerment',
      description:
        'Engineered the modern web platform for Ideation Welfare Society, a dedicated social welfare organization focused on youth mentorship, community welfare, educational empowerment, and grassroots rural development initiatives.',
      highlight: 'Clean, accessible digital outreach for social impact',
      metrics: [
        { label: 'Mission', value: 'Youth Empowerment' },
        { label: 'Type', value: 'Social Welfare NGO' },
        { label: 'Stack', value: 'React + Tailwind' },
      ],
      features: [
        'Modern, elegant UI detailing social mission, initiatives, and community drives',
        'Volunteer onboarding workflows and community outreach channels',
        'High-performance static bundle with instant responsiveness across all mobile devices',
      ],
      tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'Responsive Web Design'],
      liveUrl: 'https://ideationwelfare.in/',
      status: 'Live Production',
    },
    {
      id: 'discord-bot',
      category: 'automation',
      categoryLabel: 'Automation · Bot Engineering',
      badgeColor: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300',
      title: 'Advanced Discord Study & Compliance Bot',
      subtitle: 'Automated Multi-Server Accountability & Moderation Engine',
      description:
        'Architected an intelligent automation bot deployed across student study Discord servers. Enforces strict study room compliance—such as requiring active webcam or screen-share feeds in dedicated focus channels—while managing tickets, automated role assignments, and dual Firebase/SQLite data persistence.',
      highlight: 'Automated webcam/screen-share rule enforcement & study attendance',
      metrics: [
        { label: 'Compliance', value: 'Webcam/Screen Check' },
        { label: 'Database', value: 'Firebase + SQLite' },
        { label: 'Platform', value: 'Discord API' },
      ],
      features: [
        'Automated voice-channel compliance: gently moves or warns users who do not turn on camera or screen-share',
        'Study session tracking: records active focus duration and student participation metrics',
        'Support ticket and automated moderation workflows to maintain distraction-free study environments',
        'Dual-layer persistence for cloud synchronization and low-latency local telemetry caching',
      ],
      tech: ['Node.js', 'Discord.js API', 'Firebase Admin', 'SQLite', 'WebSockets', 'Async Event Loop'],
      liveUrl: 'https://pradyumnagk.blogspot.com/2025/01/discord-server-contribution.html',
      status: 'Active Community Build',
    },
    {
      id: 'pomodoro',
      category: 'automation',
      categoryLabel: 'Productivity · Streaming Tooling',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      title: 'Pomodoro Focus & OBS Stream Overlay Suite',
      subtitle: 'Interactive Focus Timer & Telemetry Dashboard for Deep Work',
      description:
        'A custom-built productivity suite comprising an OBS browser-source animated ring timer, real-time study session telemetry, focus analytics, and a local web control panel UI for study streamers and disciplined learners.',
      highlight: 'OBS-ready transparent overlay timer with deep work analytics',
      metrics: [
        { label: 'Overlay', value: 'OBS Transparent' },
        { label: 'Tracking', value: 'Session Analytics' },
        { label: 'Dashboard', value: 'Local Control UI' },
      ],
      features: [
        'Dynamic canvas ring timer designed to embed directly into OBS Studio streaming setups',
        'Session interval customization (Pomodoro 25/5, 50/10, deep work marathons)',
        'Local study stats tracking focus hours, streak consistency, and break logs',
      ],
      tech: ['JavaScript', 'HTML5 Canvas', 'OBS Browser Source', 'LocalStorage', 'CSS Animations'],
      status: 'Productivity Suite',
    },
  ];

  const achievements = [
    {
      title: 'SAR (Service Automated Robot) — State Science Exhibition',
      org: 'Vigyan Bharati (VIBHA) Pradesh Mandal',
      category: 'Robotics & Hardware Innovation',
      date: 'State-Level Distinction',
      description:
        'Designed, prototyped, and presented the "SAR" (Service Automated Robot) autonomous assistive robot at the prestigious Vigyan Bharati state-level science and technology innovation exhibition, representing technical excellence and real-world engineering problem-solving.',
      badge: 'State-Level Honors',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      link: 'https://pradyumnagk.blogspot.com/2023/01/vigyan-bharati-pradesh-mandal-vibha.html',
      linkText: 'View Exhibition Details',
      icon: Cpu,
    },
    {
      title: 'Smart School Bell Automation System',
      org: 'Hardware & Microcontroller Project',
      category: 'IoT & Embedded Engineering',
      date: 'Deployed System',
      description:
        'Engineered an automated microcontroller-based school bell scheduling system with real-time clock synchronization. Completely eliminated manual chime delays, supporting flexible timetable schedules and automated holiday handling.',
      badge: 'Hardware Innovation',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      link: 'https://pradyumnagk.blogspot.com/2025/02/smart-school-bell-system-for-school.html',
      linkText: 'View Project Documentation',
      icon: Clock,
    },
    {
      title: 'Microsoft Certified Profile & Learn Badges',
      org: 'Microsoft Learn Certified Developer',
      category: 'Cloud & Developer Track',
      date: 'Certified Profile',
      description:
        'Official Microsoft Learn developer profile showcasing verified completions, technical modules, and certifications across cloud fundamentals, developer tooling, and modern software engineering practices.',
      badge: 'Microsoft Certified',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      link: 'https://learn.microsoft.com/en-in/users/pradyumnakulkarni-0751/achievements',
      linkText: 'Inspect Microsoft Profile',
      icon: Award,
    },
    {
      title: 'Discord Community Moderation & Compliance Bot',
      org: 'Community Engineering & Bot Development',
      category: 'Software Automation',
      date: 'Active Contribution',
      description:
        'Engineered a study-room compliance bot enforcing active camera and screen-sharing rules to eliminate distractions in student voice study rooms, complete with multi-server automated attendance and tickets.',
      badge: 'Bot Architecture',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      link: 'https://pradyumnagk.blogspot.com/2025/01/discord-server-contribution.html',
      linkText: 'Read Bot Writeup',
      icon: Bot,
    },
    {
      title: 'Web Standards & HTML Architecture Proficiency',
      org: 'W3 Web Architecture Track',
      category: 'Frontend Standards',
      date: 'Technical Credential',
      description:
        'Comprehensive mastery of semantic HTML5, accessible web structures, and cross-browser markup standards, demonstrated through dedicated educational portfolios and technical resource boards.',
      badge: 'Web Architecture',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      link: 'https://pradyumnagk.blogspot.com/2025/02/html-knowlege.html',
      linkText: 'View Credential',
      icon: Code2,
    },
    {
      title: 'Quizizzkaro Educational Resource Initiative',
      org: 'Student Learning Platform',
      category: 'Educational Open Source',
      date: 'Knowledge Platform',
      description:
        'Curated interactive educational quizzes and digital study materials to assist school and college students in test preparation and self-assessment across foundational STEM subjects.',
      badge: 'EdTech Initiative',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      link: 'https://pradyumnagk.blogspot.com/2025/02/quizizzkaro-blogspot.html',
      linkText: 'Explore Platform',
      icon: BookOpen,
    },
  ];

  const timelineItems: TimelineItem[] = [
    {
      title: 'B.Tech in Computer Science & Engineering (1st Year)',
      description:
        'P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati. Actively applying theoretical computer science principles directly to production systems, campus software, and community tools.',
      date: '2025 - Present',
      category: 'Education',
      status: 'current',
    },
    {
      title: 'Lead Builder & Architect — PaperGen.online',
      description:
        'Designed and launched PaperGen, an AI-powered question paper generator for Indian school teachers supporting 17+ languages, 8-second handwriting scan-to-digitize OCR, and print-ready PDF generation.',
      date: '2026',
      category: 'Flagship Product',
      status: 'current',
    },
    {
      title: 'Technical Contributor — PRPCEM Campus Platforms',
      description:
        'Built QuizArena (live multiplayer quiz & Codethon platform), Hallify (campus seminar hall reservation engine), and the PR Pote Appointment & Visitor Management Desktop Portal.',
      date: '2025 - 2026',
      category: 'Campus Infrastructure',
      status: 'current',
    },
    {
      title: 'State Science & Tech Distinction — SAR Service Robot',
      description:
        'Represented at Vigyan Bharati (VIBHA) Pradesh Mandal state science exhibition with the autonomous Service Automated Robot (SAR).',
      date: 'Innovation',
      category: 'Hardware & Robotics',
      status: 'completed',
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Header />

      {/* Hero Section */}
      <MinimalistHero
        imageSrc="/me-hero.png"
        imageAlt="Pradyumna Kulkarni - Full-Stack Developer"
        socialLinks={socialLinks}
        locationText="P. R. Pote Patil College of Engineering & Management, Amravati"
      />

      {/* ======================================================== */}
      {/* FLAGSHIP SPOTLIGHT: PAPERGEN.ONLINE                      */}
      {/* ======================================================== */}
      <section className="relative py-16 border-y border-white/10 bg-gradient-to-b from-blue-950/20 via-background to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/40 via-card to-card p-6 sm:p-10 md:p-12 shadow-2xl">
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                  <Sparkles className="h-3.5 w-3.5 text-blue-400" /> Currently Built & Featured
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  PaperGen — <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Made for Teachers</span>
                </h2>

                <p className="mt-3 text-base font-medium text-foreground/80 sm:text-lg">
                  Create a complete, print-formatted school question paper in 2 minutes.
                </p>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed sm:text-base">
                  Built specifically to empower Indian school teachers. Teachers simply choose their class, subject, chapters, and marks—PaperGen automatically formats the exam, generates answer keys and marking schemes, and produces a print-ready A4 PDF. Includes instant handwriting OCR to digitize handwritten papers in 8 seconds.
                </p>

                {/* Highlights Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3 backdrop-blur-sm">
                    <ScanLine className="h-4 w-4 text-blue-400 mb-1" />
                    <div className="text-sm font-bold text-foreground">8s OCR</div>
                    <div className="text-xs text-muted-foreground">Handwriting Scan</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3 backdrop-blur-sm">
                    <Languages className="h-4 w-4 text-purple-400 mb-1" />
                    <div className="text-sm font-bold text-foreground">17+ Languages</div>
                    <div className="text-xs text-muted-foreground">Regional Scripts</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3 backdrop-blur-sm">
                    <FileText className="h-4 w-4 text-emerald-400 mb-1" />
                    <div className="text-sm font-bold text-foreground">15+ Types</div>
                    <div className="text-xs text-muted-foreground">MCQ, Vertical Maths</div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.04] p-3 backdrop-blur-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mb-1" />
                    <div className="text-sm font-bold text-foreground">Print-Ready</div>
                    <div className="text-xs text-muted-foreground">1-Click A4 PDF</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 gap-2">
                    <a href="https://papergen.online" target="_blank" rel="noopener noreferrer">
                      Visit PaperGen.online <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    Free for teachers · Works directly on mobile & desktop
                  </span>
                </div>
              </div>

              {/* Visual Card Mockup */}
              <div className="w-full lg:max-w-md">
                <div className="rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <FileText className="h-4 w-4 text-blue-400" /> Sample Generated Exam
                    </span>
                    <span className="font-mono text-emerald-400">Class 8 · Science (40M)</span>
                  </div>
                  <div className="mt-4 space-y-3 font-sans text-xs">
                    <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
                      <div className="font-semibold text-foreground">Section A: Multiple Choice</div>
                      <div className="text-muted-foreground mt-1">Q1) What gas is released when zinc granules react with dilute sulphuric acid?</div>
                      <div className="grid grid-cols-2 gap-1 mt-2 text-[11px] text-foreground/80">
                        <span>(a) Hydrogen (H₂) ✓</span>
                        <span>(b) Oxygen (O₂)</span>
                        <span>(c) Carbon dioxide</span>
                        <span>(d) Sulphur dioxide</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-2.5 border border-white/5">
                      <div className="font-semibold text-foreground">Section B: Short Reasoning (3M)</div>
                      <div className="text-muted-foreground mt-1">Q2) Why does the color of copper sulphate solution fade when an iron nail is dipped into it? Write the balanced chemical equation.</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Includes Marking Scheme</span>
                    <span className="text-blue-400 font-medium">Auto-Formatted A4 Sheet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FEATURED PROJECTS SHOWCASE                                */}
      {/* ======================================================== */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <Code2 className="h-3.5 w-3.5 text-primary" /> Proven Systems & Software Builds
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-3">
              Production platforms, campus management solutions, real-time competition engines, and developer automation tools.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedFilter === 'all'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                }`}
              >
                All Builds ({projects.length})
              </button>
              <button
                onClick={() => setSelectedFilter('flagship')}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedFilter === 'flagship'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                }`}
              >
                EdTech & Portals
              </button>
              <button
                onClick={() => setSelectedFilter('campus')}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedFilter === 'campus'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                }`}
              >
                Campus Infrastructure
              </button>
              <button
                onClick={() => setSelectedFilter('automation')}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  selectedFilter === 'automation'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                }`}
              >
                Automation & Bots
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-card p-6 sm:p-8 transition-all hover:border-white/20 hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${project.badgeColor}`}>
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> {project.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-xs font-semibold text-muted-foreground mt-1">
                    {project.subtitle}
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-3 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xs text-muted-foreground">{m.label}</div>
                        <div className="text-xs font-bold text-foreground mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="mt-4 space-y-1.5">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[11px] font-mono text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  {project.liveUrl ? (
                    <Button asChild variant="outline" className="w-full border-white/15 bg-white/5 hover:bg-white/10 justify-between">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>Launch Live Platform</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <div className="text-center text-xs text-muted-foreground py-2 border border-white/5 rounded-md bg-white/[0.02]">
                      Deployed Desktop Software · Active Release
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ACHIEVEMENTS & CERTIFICATIONS SECTION                    */}
      {/* ======================================================== */}
      <section id="achievements" className="py-24 bg-muted/20 border-t border-white/10 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-3">
              <Award className="h-3.5 w-3.5 text-amber-400" /> Honors, Credentials & Research
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Achievements & Recognitions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-3">
              From state-level robotics exhibitions and embedded hardware automation to official Microsoft developer certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-card p-6 transition-all hover:border-amber-500/30 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-primary mt-1">
                      {item.org} · <span className="text-muted-foreground">{item.date}</span>
                    </div>

                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-amber-400 transition-colors"
                    >
                      {item.linkText} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick links to full archives */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center max-w-2xl mx-auto">
            <h4 className="text-sm font-bold text-foreground">Looking for Full Certification Archives?</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Browse complete archives of verified credentials, robotics photos, and technical documentation.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="outline" size="sm" className="border-white/15 bg-white/5 text-xs gap-1.5">
                <a href="https://pradyumnagk.blogspot.com/" target="_blank" rel="noopener noreferrer">
                  <Award className="h-3.5 w-3.5 text-amber-400" /> Pradyumna&apos;s Blogspot
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-white/15 bg-white/5 text-xs gap-1.5">
                <a href="https://learn.microsoft.com/en-in/users/pradyumnakulkarni-0751/achievements" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-3.5 w-3.5 text-blue-400" /> Microsoft Learn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* ABOUT ME & JOURNEY (TIMELINE)                            */}
      {/* ======================================================== */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <GraduationCap className="h-3.5 w-3.5 text-emerald-400" /> Background & Education
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              About Pradyumna
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-3">
              Currently pursuing 1st Year B.Tech in Computer Science & Engineering at P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati.
            </p>
          </div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* ======================================================== */}
      {/* TECHNICAL SKILLS SECTION                                 */}
      {/* ======================================================== */}
      <section id="skills" className="py-20 border-t border-white/10 bg-muted/10 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Technical Skillset
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Technologies and tools I work with daily to engineer end-to-end applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 bg-card p-5">
              <div className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                <Code2 className="h-4 w-4" /> Frontend & UI
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'TanStack Router', 'Vite', 'HTML5/CSS3'].map((s) => (
                  <span key={s} className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-xs text-foreground/90 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-5">
              <div className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2">
                <Terminal className="h-4 w-4" /> Backend & APIs
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'Express', 'WebSockets', 'Socket.io', 'Python', 'REST APIs', 'Discord.js'].map((s) => (
                  <span key={s} className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-xs text-foreground/90 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-5">
              <div className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4" /> Cloud & Databases
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Supabase (Postgres)', 'Firebase', 'SQLite', 'Docker', 'Linux Servers', 'Cloudflare Tunnels'].map((s) => (
                  <span key={s} className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-xs text-foreground/90 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-5">
              <div className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4" /> Desktop & Hardware
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Electron', 'Electron Builder (NSIS)', 'Microcontrollers', 'Robotics (SAR)', 'OBS Studio Tooling'].map((s) => (
                  <span key={s} className="rounded-md bg-white/5 border border-white/5 px-2 py-1 text-xs text-foreground/90 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FAQS SECTION                                             */}
      {/* ======================================================== */}
      <div className="border-t border-border/50" id="faqs">
        <FAQs />
      </div>

      {/* ======================================================== */}
      {/* CONTACT & GET IN TOUCH CTA                               */}
      {/* ======================================================== */}
      <section id="contact" className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-b from-background to-blue-950/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Mail className="h-3.5 w-3.5" /> Direct Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mt-4">
            Whether you have a campus automation idea, need a high-performance web platform, or want to collaborate on developer tools—feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 gap-2">
              <a href="mailto:pradyumnagkulkarni93@gmail.com">
                <Mail className="h-4 w-4" /> pradyumnagkulkarni93@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/15 bg-white/5 hover:bg-white/10 gap-2">
              <a href="https://learn.microsoft.com/en-in/users/pradyumnakulkarni-0751/achievements" target="_blank" rel="noopener noreferrer">
                Microsoft Learn Profile <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            <a href="https://papergen.online" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              PaperGen.online
            </a>
            <span>•</span>
            <a href="https://prpcem.quest" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              QuizArena
            </a>
            <span>•</span>
            <a href="https://bookhallprpcem.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Hallify PRPCEM
            </a>
            <span>•</span>
            <a href="http://nucleoncoachingcenter.online/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Nucleon Coaching
            </a>
            <span>•</span>
            <a href="https://ideationwelfare.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Ideation Welfare Society
            </a>
            <span>•</span>
            <a href="https://pradyumnagk.blogspot.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Achievements Blog
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Pradyumna Kulkarni · B.Tech CSE · PRPCEM Amravati
          </p>
        </div>
      </section>
    </main>
  );
}
