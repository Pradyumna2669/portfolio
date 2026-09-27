'use client'

/**
 * @author: @emerald-ui
 * @description: Gradient Borders Button Component - A button with animated gradient borders
 * @version: 1.0.0
 * @date: 2026-02-11
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import React from 'react'
import { cn } from '@/lib/utils'

interface GradientBordersButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export default function GradientBordersButton({
  className,
  children,
  ...props
}: GradientBordersButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-block cursor-pointer rounded-full border-none bg-transparent p-[1px] text-sm font-semibold text-white no-underline outline-none transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className
      )}
      type='button'
      {...props}
    >
      <span className='absolute inset-0 overflow-hidden rounded-full'>
        <span className='absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(96,165,250,0.95),rgba(139,92,246,0.95),rgba(244,196,0,0.85))] opacity-80 transition-opacity duration-500 group-hover:opacity-100' />
      </span>
      <div className='relative z-10 flex min-h-11 items-center justify-center rounded-full bg-[rgba(8,8,10,0.92)] px-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 group-hover:bg-[rgba(12,12,18,0.96)]'>
        <span>{children || 'Gradient Borders'}</span>
      </div>
      <span className='pointer-events-none absolute -inset-1 -z-10 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.22),rgba(139,92,246,0.16),transparent_70%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100' />
    </button>
  )
}
