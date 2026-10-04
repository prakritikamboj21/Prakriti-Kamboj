import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconDimensions = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Intricate Circular Emblem SVG matching Image 2 */}
      <div className={`relative ${iconDimensions} flex-shrink-0 transition-transform hover:scale-105 duration-300`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle gold border */}
          <circle cx="80" cy="80" r="76" stroke="#8D4B00" strokeWidth="2.5" strokeOpacity="0.8" fill="#FFFBF7" />
          <circle cx="80" cy="80" r="72" stroke="#6B1D2F" strokeWidth="1.5" />
          <circle cx="80" cy="80" r="69" stroke="#D97706" strokeWidth="0.8" strokeDasharray="2 2" strokeOpacity="0.6" />

          {/* Inner rounded container with gold glow */}
          <rect
            x="38"
            y="42"
            width="84"
            height="76"
            rx="16"
            stroke="#D97706"
            strokeWidth="2"
            fill="#FFF6EC"
            fillOpacity="0.6"
          />

          {/* Stylized Wok Pan with flame & handle */}
          <path
            d="M44 88C44 104 60 114 80 114C100 114 116 104 116 88L112 85C108 97 95 106 80 106C65 106 52 97 48 85L44 88Z"
            fill="#B45309"
          />
          {/* Wok long handle */}
          <path
            d="M112 86L126 73C128 71 131 72 132 74C133 76 132 78 130 80L116 91Z"
            fill="#B45309"
          />
          {/* Saffron flowers & spice stamens rising from wok */}
          <path
            d="M80 84C77 62 67 52 64 48C67 56 74 65 76 80"
            stroke="#6B1D2F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M80 84C83 60 93 50 96 46C93 55 86 64 84 80"
            stroke="#6B1D2F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M80 78C80 50 80 44 80 44"
            stroke="#D97706"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Saffron flower petals */}
          <path
            d="M62 64C58 56 65 48 70 54C72 57 71 63 68 67"
            fill="#D97706"
            fillOpacity="0.4"
            stroke="#8D4B00"
            strokeWidth="1"
          />
          <path
            d="M98 64C102 56 95 48 90 54C88 57 89 63 92 67"
            fill="#D97706"
            fillOpacity="0.4"
            stroke="#8D4B00"
            strokeWidth="1"
          />

          {/* Star Anise glyph */}
          <g transform="translate(104, 98) scale(0.6)">
            <path
              d="M0 -10L2 -3L9 -9L5 -2L10 0L5 2L9 9L2 3L0 10L-2 3L-9 9L-5 2L-10 0L-5 -2L-9 -9L-2 -3Z"
              fill="#6B1D2F"
            />
          </g>

          {/* Cloves / spice accents */}
          <circle cx="56" cy="74" r="2" fill="#6B1D2F" />
          <circle cx="104" cy="72" r="2" fill="#6B1D2F" />
          <circle cx="70" cy="120" r="1.5" fill="#D97706" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1B1A] leading-none">
            Saffron <span className="font-serif italic text-[#8D4B00] font-normal">&amp;</span> Wok
          </span>
          <span className="text-[9.5px] uppercase font-bold tracking-[0.22em] text-[#887364] mt-1">
            Artisan Pan-Asian &amp; Tandoor
          </span>
        </div>
      )}
    </div>
  );
};
