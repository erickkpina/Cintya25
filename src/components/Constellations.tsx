import { motion } from "motion/react";

export default function Constellations() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Orion Constellation (Artemis/Orion) - Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute left-[5%] top-[15%] w-64 h-96 hidden lg:block"
            >
                <svg viewBox="0 0 100 150" className="w-full h-full">
                    <defs>
                        <filter id="star-glow">
                            <feGaussianBlur stdDeviation="1" result="glow" />
                            <feMerge>
                                <feMergeNode in="glow" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    {/* Meissa (Head) */}
                    <circle
                        cx="50"
                        cy="10"
                        r="1.5"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    {/* Betelgeuse (Right Shoulder) */}
                    <circle
                        cx="30"
                        cy="30"
                        r="2.5"
                        fill="#ffccaa"
                        filter="url(#star-glow)"
                    />
                    {/* Bellatrix (Left Shoulder) */}
                    <circle
                        cx="75"
                        cy="35"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    {/* Belt Stars */}
                    <circle
                        cx="48"
                        cy="76"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    <circle
                        cx="53"
                        cy="73"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    <circle
                        cx="58"
                        cy="70"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    {/* Rigel (Left Knee) */}
                    <circle
                        cx="70"
                        cy="130"
                        r="2.5"
                        fill="#aaccff"
                        filter="url(#star-glow)"
                    />
                    {/* Saiph (Right Knee) */}
                    <circle
                        cx="68"
                        cy="100"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />

                    <circle
                        cx="35"
                        cy="2"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />

                    <circle
                        cx="25"
                        cy="3"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />

                    <circle
                        cx="35"
                        cy="125"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />

                    <circle cx="75" cy="2" r="1" fill="white" opacity="0.6" />

                    {/* Shield/Bow Area */}
                    <circle cx="90" cy="10" r="1" fill="white" opacity="0.6" />
                    <circle cx="95" cy="30" r="1" fill="white" opacity="0.6" />
                    <circle cx="93" cy="50" r="1" fill="white" opacity="0.6" />
                    <circle cx="85" cy="70" r="1" fill="white" opacity="0.6" />

                    {/* Lines */}
                    <g
                        stroke="white"
                        strokeWidth="0.5"
                        strokeOpacity="0.2"
                        fill="none"
                    >
                        <path d="M50 10 L30 30 M50 10 L75 35" />
                        <path d="M30 30 L48 76 L35 125 L70 130 L68 100 L58 70 L75 35" />
                        <path d="M30 30 L35 2" />
                        <path d="M30 30 L25 3" />
                        <path d="M48 76 L53 73 L58 70" />
                        <path d="M35 125 L70 130" />
                        <path
                            d="M75 35 L95 30 L93 50 L85 70"
                            strokeDasharray="3 3"
                        />
                        <path
                            d="M75 35 L95 30 L90 10 L75 2"
                            strokeDasharray="3 3"
                        />
                    </g>
                    <text
                        x="30"
                        y="145"
                        fill="white"
                        fontSize="4"
                        opacity="0.4"
                        fontStyle="italic"
                    >
                        Orion (Artemis)
                    </text>
                </svg>
            </motion.div>

            {/* Taurus Constellation - Right */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute right-[5%] top-[25%] w-72 h-72 hidden lg:block"
            >
                <svg viewBox="0 0 120 100" className="w-full h-full">
                    {/* Aldebaran (The eye) */}
                    <circle
                        cx="45"
                        cy="55"
                        r="3.5"
                        fill="#ffaa66"
                        filter="url(#star-glow)"
                    />
                    {/* Horns */}
                    <circle
                        cx="2"
                        cy="45"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    <circle
                        cx="110"
                        cy="68"
                        r="2"
                        fill="white"
                        filter="url(#star-glow)"
                    />
                    {/* Hyades V-shape */}
                    <circle cx="37" cy="58" r="1.5" fill="white" />
                    <circle cx="40" cy="45" r="1.5" fill="white" />
                    <circle cx="25" cy="25" r="1.5" fill="white" />
                    <circle cx="80" cy="70" r="1.5" fill="white" />
                    <circle cx="5" cy="5" r="2" fill="white" />
                    <circle cx="112" cy="80" r="2" fill="white" />
                    <circle cx="117" cy="89" r="2" fill="white" />
                    <circle cx="65" cy="90" r="2" fill="white" />
                    <circle cx="72" cy="103" r="2" fill="white" />

                    <g
                        stroke="white"
                        strokeWidth="0.5"
                        strokeOpacity="0.2"
                        fill="none"
                    >
                        {/* Left horn */}
                        <path d="M45 55 L37 58" />

                        {/* Right horn */}
                        <path d="M37 58 L2 45" />

                        {/* Hyades cluster */}
                        <path d="M45 55 L40 45 L25 25 L5 5" />

                        {/* Lower branch */}
                        <path d="M45 55 L80 70 L65 90 L72 103" />

                        {/* Pleiades cluster */}
                        <path d="M45 55 L80 70 L110 68 L112 80 L117 89" />
                    </g>
                    <text
                        x="70"
                        y="110"
                        fill="white"
                        fontSize="4"
                        opacity="0.4"
                        fontStyle="italic"
                    >
                        Touro
                    </text>
                </svg>
            </motion.div>
        </div>
    );
}
