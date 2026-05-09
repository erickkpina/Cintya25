import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";

interface EntryGateProps {
    onEnter: () => void;
}

export default function EntryGate({ onEnter }: EntryGateProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" && !isComplete) {
                e.preventDefault();
                setProgress((prev) => {
                    const next = prev + 5;
                    if (next >= 100) {
                        setIsComplete(true);
                        setTimeout(onEnter, 1000);
                        return 100;
                    }
                    return next;
                });
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isComplete, onEnter]);

    const handleClick = () => {
        if (isComplete) return;
        setProgress((prev) => {
            const next = prev + 5;
            if (next >= 100) {
                setIsComplete(true);
                setTimeout(onEnter, 1000);
                return 100;
            }
            return next;
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-black p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-md w-full space-y-12"
            >
                <div className="space-y-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-serif text-starlight tracking-tight"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Um Universo por Descobrir
                    </motion.h1>
                    <p className="text-romantic-pink font-display tracking-widest text-sm uppercase opacity-70">
                        Pressione espaço ou clique para encher nosso amor
                    </p>
                </div>

                <div className="relative pt-12">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-romantic-pink shadow-[0_0_20px_rgba(255,183,197,0.5)]"
                            animate={{ width: `${progress}%` }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                            }}
                        />
                    </div>

                    <AnimatePresence>
                        <motion.div
                            key="heart"
                            className="absolute top-0 flex flex-col items-center"
                            style={{ left: `calc(${progress}% - 12px)` }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Heart className="text-romantic-pink fill-romantic-pink size-6" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="md:hidden glass-card px-8 py-3 text-romantic-pink font-display tracking-widest text-xs uppercase"
                >
                    Toque para Encher
                </motion.button>

                {isComplete && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-starlight font-serif italic text-xl"
                    >
                        Preparando nossa história...
                    </motion.p>
                )}
            </motion.div>
        </div>
    );
}
