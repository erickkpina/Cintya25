import { motion } from "motion/react";

export default function Polaroid({
    url,
    caption,
    index,
}: {
    url: string;
    caption: string;
    index: number;
}) {
    const pinColors = [
        "bg-red-400",
        "bg-blue-400",
        "bg-yellow-400",
        "bg-green-400",
    ];
    const rotations = [-3, 2, -1, 3];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: rotations[index] * 5 }}
            animate={{ opacity: 1, y: 0, rotate: rotations[index] }}
            transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
            className="relative bg-white p-3 pb-12 shadow-2xl group hover:-translate-y-4 transition-transform duration-500"
        >
            {/* Realistic 3D Push Pin from Image - Smaller and Angled */}
            <div
                className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                style={{
                    transform: `translateX(-5%) translateY(-12%) rotate(${
                        [10, -8, 4, -12][index]
                    }deg)`,
                }}
            >
                {/* Needle Shadow - more directly under */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/30 blur-[1px] rounded-full" />

                {/* Metal Needle (Shorter and centered) */}
                <div
                    className="absolute top-6 left-1/2 -translate-x-1/2 w-[2px] h-4 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 rounded-sm"
                    style={{
                        transform: `rotate(${[5, -4, 2, -6][index]}deg)`,
                    }}
                />

                {/* Plastic Head (Smaller & Angled) */}
                <div className="relative flex flex-col items-center">
                    {/* Top Disc (Grip) - More circular to show angle */}
                    <div
                        className={`w-3.5 h-2 rounded-[50%] ${pinColors[index]} shadow-sm border-b border-black/10`}
                    />

                    {/* Middle Cylinder */}
                    <div
                        className={`w-2 h-2.5 ${pinColors[index]} bg-gradient-to-r from-black/20 via-transparent to-white/30`}
                    />

                    {/* Bottom Disc (Base) - Main body */}
                    <div
                        className={`w-5.5 h-3.5 rounded-[50%] ${pinColors[index]} shadow-lg 
            bg-gradient-to-br from-white/50 via-transparent to-black/40 border border-black/5`}
                    />

                    {/* Subtle Highlight */}
                    <div className="absolute top-3 left-1/2 -translate-x-0.5 w-0.5 h-3 bg-white/30 blur-[0.3px] rounded-full" />
                </div>
            </div>

            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
                <img
                    src={url}
                    alt={caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>

            <div className="mt-4 px-2">
                <p className="font-serif italic text-gray-800 text-lg tracking-tight">
                    {caption}
                </p>
            </div>
        </motion.div>
    );
}
