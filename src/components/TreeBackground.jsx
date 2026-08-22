import React from 'react';

const TreeBackground = () => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[90%] pointer-events-none z-0 flex items-center justify-center opacity-35 dark:opacity-25 transition-opacity duration-300">
      <svg
        viewBox="0 0 1000 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[650px] object-contain"
      >
        {/* Concentric Background Circles */}
        <circle cx="500" cy="500" r="180" stroke="#C85A32" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <circle cx="500" cy="500" r="300" stroke="#607A66" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
        <circle cx="500" cy="500" r="420" stroke="#2F2E2C" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />

        {/* Tree Roots Base */}
        <path d="M 400 950 Q 480 850 490 750" stroke="#2F2E2C" strokeWidth="6" strokeLinecap="round" />
        <path d="M 600 950 Q 520 850 510 750" stroke="#2F2E2C" strokeWidth="6" strokeLinecap="round" />
        <path d="M 460 960 Q 490 880 495 780" stroke="#2F2E2C" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <path d="M 540 960 Q 510 880 505 780" stroke="#2F2E2C" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

        {/* Central Tree Trunk */}
        <path d="M 490 750 L 490 550 Q 490 420 440 320 Q 390 220 320 150" stroke="#2F2E2C" strokeWidth="5" strokeLinecap="round" />
        <path d="M 510 750 L 510 550 Q 510 420 560 320 Q 610 220 680 150" stroke="#2F2E2C" strokeWidth="5" strokeLinecap="round" />
        
        {/* Inner Branches */}
        <path d="M 490 500 Q 470 380 500 250 Q 510 180 510 120" stroke="#2F2E2C" strokeWidth="4" strokeLinecap="round" />
        <path d="M 480 450 Q 380 340 340 220 Q 320 160 300 120" stroke="#2F2E2C" strokeWidth="4" strokeLinecap="round" />
        <path d="M 520 450 Q 620 340 660 220 Q 680 160 700 120" stroke="#2F2E2C" strokeWidth="4" strokeLinecap="round" />
        <path d="M 450 340 Q 410 260 420 160" stroke="#2F2E2C" strokeWidth="3" strokeLinecap="round" />
        <path d="M 550 340 Q 590 260 580 160" stroke="#2F2E2C" strokeWidth="3" strokeLinecap="round" />
        <path d="M 495 310 Q 460 210 460 140" stroke="#2F2E2C" strokeWidth="3" strokeLinecap="round" />
        <path d="M 505 310 Q 540 210 540 140" stroke="#2F2E2C" strokeWidth="3" strokeLinecap="round" />

        {/* Outer Canopy Whisps */}
        <path d="M 320 150 Q 250 120 220 100" stroke="#2F2E2C" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M 680 150 Q 750 120 780 100" stroke="#2F2E2C" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Terracotta, Sage & Earth Colored Leaves */}
        {/* Left Canopy Leaves */}
        <ellipse cx="220" cy="100" rx="14" ry="24" transform="rotate(-35 220 100)" fill="#607A66" />
        <ellipse cx="260" cy="115" rx="12" ry="20" transform="rotate(-15 260 115)" fill="#C85A32" />
        <ellipse cx="300" cy="120" rx="14" ry="22" transform="rotate(20 300 120)" fill="#C4A882" />
        <ellipse cx="330" cy="140" rx="12" ry="20" transform="rotate(-40 330 140)" fill="#2F2E2C" />
        <ellipse cx="350" cy="170" rx="14" ry="24" transform="rotate(10 350 170)" fill="#607A66" />
        <ellipse cx="320" cy="200" rx="13" ry="22" transform="rotate(-25 320 200)" fill="#C85A32" />

        {/* Middle Canopy Leaves */}
        <ellipse cx="420" cy="140" rx="13" ry="22" transform="rotate(-10 420 140)" fill="#C85A32" />
        <ellipse cx="450" cy="120" rx="14" ry="24" transform="rotate(15 450 120)" fill="#607A66" />
        <ellipse cx="490" cy="110" rx="12" ry="20" transform="rotate(-30 490 110)" fill="#C4A882" />
        <ellipse cx="520" cy="110" rx="14" ry="22" transform="rotate(25 520 110)" fill="#C85A32" />
        <ellipse cx="550" cy="130" rx="13" ry="20" transform="rotate(-20 550 130)" fill="#2F2E2C" />
        <ellipse cx="580" cy="145" rx="14" ry="24" transform="rotate(35 580 145)" fill="#607A66" />

        {/* Right Canopy Leaves */}
        <ellipse cx="670" cy="200" rx="13" ry="22" transform="rotate(25 670 200)" fill="#C85A32" />
        <ellipse cx="650" cy="170" rx="14" ry="24" transform="rotate(-10 650 170)" fill="#607A66" />
        <ellipse cx="670" cy="140" rx="12" ry="20" transform="rotate(40 670 140)" fill="#2F2E2C" />
        <ellipse cx="700" cy="120" rx="14" ry="22" transform="rotate(-20 700 120)" fill="#C4A882" />
        <ellipse cx="740" cy="115" rx="12" ry="20" transform="rotate(15 740 115)" fill="#C85A32" />
        <ellipse cx="780" cy="100" rx="14" ry="24" transform="rotate(35 780 100)" fill="#607A66" />

        {/* Lower Inner Leaves */}
        <ellipse cx="400" cy="240" rx="12" ry="20" transform="rotate(-25 400 240)" fill="#607A66" />
        <ellipse cx="435" cy="210" rx="13" ry="22" transform="rotate(30 435 210)" fill="#C85A32" />
        <ellipse cx="475" cy="220" rx="12" ry="20" transform="rotate(-15 475 220)" fill="#2F2E2C" />
        <ellipse cx="525" cy="220" rx="13" ry="22" transform="rotate(20 525 220)" fill="#607A66" />
        <ellipse cx="565" cy="210" rx="12" ry="20" transform="rotate(-30 565 210)" fill="#C4A882" />
        <ellipse cx="600" cy="240" rx="14" ry="22" transform="rotate(15 600 240)" fill="#C85A32" />
      </svg>
    </div>
  );
};

export default TreeBackground;
