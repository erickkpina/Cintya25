import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

import Dictionary from "./components/Dictionary";
import MusicSection from "./components/MusicSection";
import Timeline from "./components/Timeline";
import EntryGate from "./components/EntryGate";
import StarryBackground from "./components/StarryBackground";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";

export default function App() {
    const [hasEntered, setHasEntered] = useState(false);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [currentView, setCurrentView] = useState<"landing" | "gallery">(
        "landing"
    );

    useEffect(() => {
        const handleChangeView = (e: any) => {
            if (e.detail === "gallery") {
                setCurrentView("gallery");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        };
        window.addEventListener("changeView", handleChangeView);
        return () => window.removeEventListener("changeView", handleChangeView);
    }, []);

    useEffect(() => {
        if (!isMusicPlaying) {
            sendCommand("pauseVideo");
        } else {
            sendCommand("playVideo");
        }
    }, [isMusicPlaying]);

    const toggleMusic = () => {
        setIsMusicPlaying((prev) => !prev);
    };

    const sendCommand = (command: "playVideo" | "pauseVideo") => {
        const iframe = document.getElementById(
            "yt-player"
        ) as HTMLIFrameElement;
        iframe?.contentWindow?.postMessage(
            JSON.stringify({
                event: "command",
                func: command,
                args: [],
            }),
            "*"
        );
    };

    return (
        <div className="relative min-h-screen bg-space-black selection:bg-romantic-pink/30 selection:text-starlight">
            <StarryBackground
                backgroundColor={
                    currentView === "landing" ? "#1a1a2e" : "#301d33"
                }
            />

            <AnimatePresence mode="wait">
                {!hasEntered ? (
                    <motion.div
                        key="gate"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <EntryGate onEnter={() => setHasEntered(true)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key={currentView}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {currentView === "landing" ? (
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
                                        onClick={() =>
                                            window.dispatchEvent(
                                                new CustomEvent("changeView", {
                                                    detail: "gallery",
                                                })
                                            )
                                        }
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
                        ) : (
                            <PhotoGallery
                                onBack={() => setCurrentView("landing")}
                            />
                        )}

                        {/* Hidden Player */}
                        {isMusicPlaying && (
                            <div className="fixed bottom-0 left-0 w-0 h-0 opacity-0 pointer-events-none">
                                <iframe
                                    id="yt-player"
                                    width="0"
                                    height="0"
                                    src="https://www.youtube.com/embed/N7VCLNBNJQs?autoplay=1&mute=0&enablejsapi=1&playsinline=1"
                                    allow="autoplay"
                                />
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
