'use client';
import React, { useState, useRef, useEffect, useCallback, CSSProperties } from 'react';

export interface Testimonial {
  id: string | number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  tags: { text: string; type: 'featured' | 'default' }[];
  stats: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; text: string; }[];
  avatarGradient: string;
}

export interface TestimonialStackProps {
  testimonials: Testimonial[];
  visibleBehind?: number;
}

export const TestimonialStack = ({ testimonials, visibleBehind = 2 }: TestimonialStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalCards = testimonials.length;

  const navigate = useCallback((newIndex: number) => {
    setActiveIndex((newIndex + totalCards) % totalCards);
  }, [totalCards]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    if (index !== activeIndex) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
    cardRefs.current[activeIndex]?.classList.add('is-dragging');
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartRef.current);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    cardRefs.current[activeIndex]?.classList.remove('is-dragging');
    if (Math.abs(dragOffset) > 50) {
      navigate(activeIndex + (dragOffset < 0 ? 1 : -1));
    }
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, activeIndex, navigate]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);
  
  if (!testimonials?.length) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[420px] sm:h-[450px]">
      <section className="testimonials-stack absolute inset-0 pb-10 flex items-center justify-center">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          const displayOrder = (index - activeIndex + totalCards) % totalCards;

          const style: CSSProperties = {
            transition: isDragging && isActive ? 'none' : 'all 400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          };
          
          if (displayOrder === 0) { 
            style.transform = `translateX(calc(-50% + ${dragOffset}px))`;
            style.opacity = 1;
            style.zIndex = totalCards;
          } else if (displayOrder <= visibleBehind) { 
            const scale = 1 - 0.05 * displayOrder;
            const translateY = -2 * displayOrder; 
            style.transform = `translateX(-50%) translateY(${translateY}rem) scale(${scale})`;
            style.opacity = 1 - 0.2 * displayOrder;
            style.zIndex = totalCards - displayOrder;
          } else { 
            style.transform = 'translateX(-50%) scale(0)';
            style.opacity = 0;
            style.zIndex = 0;
          }

          const tagClasses = (type: 'featured' | 'default') => type === 'featured' 
            ? 'bg-primary/20 text-primary border border-primary/30' 
            : 'bg-secondary text-secondary-foreground';
            
          return (
            <div
              ref={el => { cardRefs.current[index] = el; }}
              key={testimonial.id}
              className="absolute left-1/2 w-[calc(100%-1.5rem)] max-w-xl testimonial-card rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40 cursor-grab active:cursor-grabbing"
              style={style}
              onMouseDown={(e) => handleDragStart(e, index)}
              onTouchStart={(e) => handleDragStart(e, index)}
            >
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white font-semibold text-base" style={{ background: testimonial.avatarGradient }}>
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-foreground font-medium text-base sm:text-lg leading-tight">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-foreground/90 leading-relaxed text-base sm:text-lg mb-5 sm:mb-6">&quot;{testimonial.quote}&quot;</blockquote>
                
                <div className="flex flex-col items-start justify-between border-t border-border/50 pt-4 gap-3 sm:gap-4 md:flex-row md:items-center">
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.map((tag, i) => (
                      <span key={i} className={['text-xs', 'px-2', 'py-1', 'rounded-md', tagClasses(tag.type)].join(' ')}>
                        {tag.text}
                      </span>
                    ))}
                  </div>
                  <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground md:w-auto">
                    {testimonial.stats.map((stat, i) => {
                      const IconComponent = stat.icon as React.ElementType;
                      return (
                        <span key={i} className="flex items-center whitespace-nowrap">
                          <IconComponent className="mr-1.5 h-3.5 w-3.5" />
                          {stat.text}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="flex gap-2 justify-center absolute -bottom-6 left-0 right-0">
          {testimonials.map((_, index) => (
            <button key={index} aria-label={`Go to testimonial ${index + 1}`} onClick={() => navigate(index)} className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? 'w-6 bg-primary' : 'bg-primary/30'}`} />
          ))}
        </div>
      </section>
    </div>
  );
};
