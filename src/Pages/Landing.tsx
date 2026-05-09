import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Dictionary from "../Components/Dictionary";
import MusicSection from "../Components/MusicSection";
import Timeline from "../Components/Timeline";
import Hero from "../Components/Hero";

interface LandingProps {
    toggleMusic: () => void;
    isMusicPlaying: boolean;
}

export default function Landing({ toggleMusic, isMusicPlaying }: LandingProps) {
    const navigate = useNavigate();

    return (
        <main className="relative z-10">
            <Hero toggleMusic={toggleMusic} />
            <Dictionary />
            <MusicSection
                onToggleBtnCLick={toggleMusic}
                isPlaying={isMusicPlaying}
            />
            <Timeline />

            <motion.div
                className="pb-18"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => navigate("/gallery")}
                    className="glass-card px-8 py-3 text-romantic-pink font-display tracking-widest text-xs uppercase hover:bg-white/10 transition-all flex items-center gap-3 mx-auto"
                >
                    Nossa História em Fotos
                    <ArrowRight className="size-4" />
                </button>
            </motion.div>

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
