/**
 * WaterWaves Component
 * Animated SVG water waves background for hero section
 * Features smooth flowing water animation with gradient effects
 */

export default function WaterWaves() {
  return (
    <div className="absolute inset-0 opacity-30 overflow-hidden">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for water waves */}
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.75 0.05 264)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.42 0.15 264)" stopOpacity="0.3" />
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
              fill: oklch(0.65 0.08 264 / 0.4);
            }

            .wave-path-3 {
              animation: wave3 12s ease-in-out infinite;
              fill: oklch(0.55 0.1 264 / 0.2);
            }
          `}</style>
        </defs>

        {/* Wave layers */}
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

        {/* Shimmer effect overlay */}
        <circle
          cx="300"
          cy="80"
          r="30"
          fill="white"
          opacity="0.1"
          style={{
            animation: "shimmer 4s ease-in-out infinite",
          }}
        />
        <circle
          cx="900"
          cy="120"
          r="25"
          fill="white"
          opacity="0.08"
          style={{
            animation: "shimmer 5s ease-in-out infinite 1s",
          }}
        />
      </svg>
    </div>
  );
}
