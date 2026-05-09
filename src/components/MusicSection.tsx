import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Music, VolumeX } from "lucide-react";
import SoundWaves from "./SoundWaves";

interface MusicSectionProps {
    onToggleBtnCLick: () => void;
    isPlaying: boolean;
}

export default function MusicSection({
    onToggleBtnCLick,
    isPlaying,
}: MusicSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !triggered) {
                    setTriggered(true);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [triggered]);

    return (
        <section
            ref={containerRef}
            className="py-32 px-6 flex items-center justify-center relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="glass-card max-w-2xl w-full p-8 md:p-12 text-center space-y-8 relative z-10"
            >
                <div className="flex justify-center">
                    <div className="size-20 bg-romantic-pink/10 rounded-full flex items-center justify-center relative">
                        <motion.div
                            animate={
                                isPlaying
                                    ? {
                                          scale: [1, 1.2, 1],
                                          opacity: [0.3, 0.6, 0.3],
                                      }
                                    : {}
                            }
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-romantic-pink rounded-full"
                        />
                        <Music className="size-8 text-romantic-pink relative z-10" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-serif text-starlight">
                        Nossa Música
                    </h2>
                    <p className="text-romantic-pink font-display tracking-widest text-sm uppercase">
                        Never be Alone — Shawn Mendes
                    </p>
                </div>

                <p className="text-starlight/60 italic font-serif text-lg leading-relaxed">
                    "When you miss me close your eyes
                    <br className="hidden md:block" />
                    I may be far but never gone...
                    <br className="hidden md:block" />
                    When you fall asleep tonight
                    <br className="hidden md:block" />
                    Just remember that we lay under the same stars"
                </p>

                <button
                    onClick={onToggleBtnCLick}
                    className="group relative px-6 py-3 rounded-full border border-romantic-pink/30 text-starlight font-serif tracking-wide overflow-hidden"
                >
                    <span className="relative z-10">
                        <i
                            className={`fa-solid ${
                                isPlaying ? "fa-pause" : "fa-play"
                            }`}
                        />

                        <span className="pl-3">
                            {isPlaying ? "Pausar música" : "Tocar música"}
                        </span>
                    </span>
                    <div className="absolute inset-0 bg-romantic-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <div className="pt-4">
                    <div className="flex flex-col items-center justify-center gap-2 text-romantic-pink/50">
                        {isPlaying ? (
                            <SoundWaves />
                        ) : (
                            <div className="flex items-center gap-2 py-3">
                                <VolumeX className="size-4" />
                                <span className="text-[10px] tracking-widest uppercase">
                                    ...
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
