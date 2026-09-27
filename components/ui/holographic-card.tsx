import React, { useRef } from 'react';

const HolographicCard = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <div 
            className="component-card holographic-card relative group shadow-xl rounded-xl border border-white/10 overflow-hidden bg-black/40 backdrop-blur-md p-8 min-h-[300px] flex items-center justify-center transition-all duration-300 ease-out" 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="holo-content text-center z-10 transition-transform duration-300 ease-out translate-z-10 group-hover:translate-z-20">
                <h3 className="component-title mb-2" style={{fontWeight: 700, fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.025em'}}>
                    Holographic Card
                </h3>
                <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                    Move your mouse over me!
                </p>
            </div>
            <div 
              className="holo-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none mix-blend-screen"
              style={{
                background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)`
              }}
            ></div>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-out pointer-events-none mix-blend-color-dodge mix-blend-exclusion"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundPosition: `var(--bg-x, 50%) var(--bg-y, 50%)`
              }}
            ></div>
        </div>
    );
};

export default HolographicCard;
