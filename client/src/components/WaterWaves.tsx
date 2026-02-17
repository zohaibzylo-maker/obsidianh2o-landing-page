/**
 * WaterWaves Component with Parallax Effect
 * Animated SVG water waves background with scroll-based parallax
 * Creates depth illusion as user scrolls
 */

import { useEffect, useRef, useState } from "react";

export default function WaterWaves() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax offset - moves slower than scroll for depth effect
  const parallaxOffset = scrollY * 0.5;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 opacity-40 overflow-hidden"
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for water waves */}
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.05 264)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.42 0.15 264)" stopOpacity="0.4" />
          </linearGradient>

          {/* Animation for wave 1 */}
          <style>{`
            @keyframes wave1 {
              0% { d: path('M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z'); }
              25% { d: path('M0,80 Q300,30 600,80 T1200,80 L1200,400 L0,400 Z'); }
              50% { d: path('M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z'); }
              75% { d: path('M0,120 Q300,70 600,120 T1200,120 L1200,400 L0,400 Z'); }
              100% { d: path('M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z'); }
            }

            @keyframes wave2 {
              0% { d: path('M0,150 Q300,100 600,150 T1200,150 L1200,400 L0,400 Z'); }
              25% { d: path('M0,130 Q300,80 600,130 T1200,130 L1200,400 L0,400 Z'); }
              50% { d: path('M0,150 Q300,100 600,150 T1200,150 L1200,400 L0,400 Z'); }
              75% { d: path('M0,170 Q300,120 600,170 T1200,170 L1200,400 L0,400 Z'); }
              100% { d: path('M0,150 Q300,100 600,150 T1200,150 L1200,400 L0,400 Z'); }
            }

            @keyframes wave3 {
              0% { d: path('M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z'); }
              25% { d: path('M0,180 Q300,130 600,180 T1200,180 L1200,400 L0,400 Z'); }
              50% { d: path('M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z'); }
              75% { d: path('M0,220 Q300,170 600,220 T1200,220 L1200,400 L0,400 Z'); }
              100% { d: path('M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z'); }
            }

            .wave-path-1 {
              animation: wave1 8s ease-in-out infinite;
              fill: url(#waterGradient);
            }

            .wave-path-2 {
              animation: wave2 10s ease-in-out infinite;
              fill: oklch(0.65 0.08 264 / 0.5);
            }

            .wave-path-3 {
              animation: wave3 12s ease-in-out infinite;
              fill: oklch(0.55 0.1 264 / 0.25);
            }

            @keyframes shimmerWave {
              0%, 100% {
                opacity: 0.05;
              }
              50% {
                opacity: 0.15;
              }
            }

            .shimmer-circle {
              animation: shimmerWave 4s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Wave layers with staggered animations */}
        <path
          className="wave-path-1"
          d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z"
        />
        <path
          className="wave-path-2"
          d="M0,150 Q300,100 600,150 T1200,150 L1200,400 L0,400 Z"
        />
        <path
          className="wave-path-3"
          d="M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z"
        />

        {/* Shimmer effect overlays for light refraction */}
        <circle
          className="shimmer-circle"
          cx="300"
          cy="80"
          r="30"
          fill="white"
        />
        <circle
          className="shimmer-circle"
          cx="900"
          cy="120"
          r="25"
          fill="white"
          style={{
            animationDelay: "1s",
          }}
        />
        <circle
          className="shimmer-circle"
          cx="600"
          cy="150"
          r="20"
          fill="white"
          style={{
            animationDelay: "2s",
          }}
        />
      </svg>
    </div>
  );
}
