import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type HeroProps = {
    toggleMusic: (play: boolean) => void;
    isMusicPaused: boolean;
};

export default function Hero({ toggleMusic, isMusicPaused }: HeroProps) {
    const ref = useRef<HTMLDivElement>(null);
    const triggeredRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    !triggeredRef.current &&
                    !isMusicPaused
                ) {
                    toggleMusic(true);
                    triggeredRef.current = true;
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [toggleMusic]);

    return (
        <section
            className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 space-y-8"
            >
                <div className="space-y-2">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-romantic-pink font-display tracking-[0.3em] text-xs uppercase"
                    >
                        Feliz 25 Anos
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-serif text-starlight tracking-tighter text-glow-white"
                    >
                        Cintya Barbosa
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="max-w-xl mx-auto"
                >
                    <p className="text-starlight/70 font-sans leading-relaxed text-sm md:text-base tracking-wide">
                        Hoje, celebramos não apenas 25 anos da sua vida, mas o
                        privilégio de ter você iluminando a minha. Você é a
                        estrela mais brilhante de todas.
                    </p>
                </motion.div>
            </motion.div>

            {/* Decorative Moon */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.4, x: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-20 right-10 md:right-20 pointer-events-none"
            >
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-romantic-pink/40 to-transparent blur-2xl" />
                <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/5 shadow-inner" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-romantic-pink/60">
                        Scroll
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-romantic-pink/60 to-transparent" />
                </div>
            </motion.div>
        </section>
    );
}
