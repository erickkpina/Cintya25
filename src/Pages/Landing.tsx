import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Dictionary from "../Components/Dictionary";
import MusicSection from "../Components/MusicSection";
import Timeline from "../Components/Timeline";
import Hero from "../Components/Hero";

interface LandingProps {
    toggleMusic: (play: boolean) => void;
    isMusicPlaying: boolean;
    isMusicPaused: boolean;
}

export default function Landing({
    toggleMusic,
    isMusicPlaying,
    isMusicPaused,
}: LandingProps) {
    const navigate = useNavigate();

    return (
        <main className="relative z-10">
            <Hero toggleMusic={toggleMusic} isMusicPaused={isMusicPaused} />
            <Dictionary />
            <MusicSection
                onToggleBtnCLick={toggleMusic}
                isPlaying={isMusicPlaying}
            />
            <Timeline />

            <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 mb-18 glass-card px-8 py-3 text-romantic-pink font-serif italic text-lg shadow-xl transition-all flex items-center gap-3 mx-auto group hover:bg-white/10 cursor-pointer"
                onClick={() => navigate("/gallery")}
            >
                Nossa História em Fotos
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <footer className="py-20 text-center border-t border-white/5">
                <p className="text-romantic-pink font-serif italic text-lg mb-2">
                    Com todo o meu amor,
                </p>
                <p className="text-starlight/40 font-display tracking-[0.2em] text-[10px] uppercase">
                    &copy; Erick & Cintya — Para Sempre
                </p>
            </footer>
        </main>
    );
}
