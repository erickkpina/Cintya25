import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Dictionary from "../components/Dictionary";
import MusicSection from "../components/MusicSection";
import Timeline from "../components/Timeline";
import Hero from "../components/Hero";

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
        </main>
    );
}
