import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";

import EntryGate from "./Components/EntryGate";
import StarryBackground from "./Components/StarryBackground";
import PhotoGallery from "./Pages/PhotoGallery";
import Landing from "./Pages/Landing";
import Reasons from "./Pages/Reasons";
import ReasonsBoard from "./Pages/ReasonsBoard";
import MoonLetter from "./Pages/MoonLetter";

export default function App() {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [isMusicPaused, setIsMusicPaused] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const location = useLocation();
    const backgroundColor =
        location.pathname === "/landing"
            ? "#1a1a2e"
            : location.pathname === "/gallery"
            ? "#221a2e"
            : location.pathname === "/25reasons"
            ? "#8c00ff0f"
            : "#000000";

    useEffect(() => {
        if (audioRef && audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    const toggleMusic = (play: boolean) => {
        setIsMusicPlaying(() => {
            const next = play;

            if (!audioRef.current) return next;

            if (next) {
                audioRef.current.volume = 0.5;
                audioRef.current
                    ?.play()
                    .catch((err) => console.log("Play blocked:", err));
            } else {
                fadeOut();
            }

            return next;
        });

        if (isMusicPaused && play) {
            setIsMusicPaused(false);
        }
    };

    const fadeOut = () => {
        if (!audioRef.current) return;

        let volume = audioRef.current.volume;

        const interval = setInterval(() => {
            volume -= 0.05;

            if (volume <= 0) {
                audioRef.current!.pause();
                setIsMusicPaused(true);
                clearInterval(interval);
            } else {
                audioRef.current!.volume = volume;
            }
        }, 50);
    };

    return (
        <div className="relative min-h-screen bg-space-black selection:bg-romantic-pink/30 selection:text-starlight">
            <StarryBackground backgroundColor={backgroundColor} />

            <audio
                ref={audioRef}
                src="/music/NeverBeAlone.mp3"
                loop
                onCanPlay={() => {
                    console.log("audio ready");
                }}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<EntryGate />} />

                        <Route
                            path="/landing"
                            element={
                                <Landing
                                    toggleMusic={toggleMusic}
                                    isMusicPlaying={isMusicPlaying}
                                    isMusicPaused={isMusicPaused}
                                />
                            }
                        />

                        <Route path="/gallery" element={<PhotoGallery />} />
                        <Route path="/25reasons" element={<Reasons />} />
                        <Route path="/allReasons" element={<ReasonsBoard />} />
                        <Route path="/moonLetter" element={<MoonLetter />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
