import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Polaroid from "../components/Polaroid";

interface Photo {
    url: string;
    caption: string;
}

interface PhotoSection {
    title: string;
    photos: Photo[];
}

const sections: PhotoSection[] = [
    {
        title: "1",
        photos: [
            {
                url: "/images/1.jpeg",
                caption: "Você",
            },
            {
                url: "/images/2.jpeg",
                caption: "me faz",
            },
            {
                url: "/images/3.jpeg",
                caption: "mais feliz",
            },
            {
                url: "/images/4.jpeg",
                caption: "a cada dia que passa...",
            },
        ],
    },
    {
        title: "2",
        photos: [
            {
                url: "/images/5.jpeg",
                caption: "Você é a pessoa",
            },
            {
                url: "/images/6.jpeg",
                caption: "mais especial",
            },
            {
                url: "/images/7.jpeg",
                caption: "e linda",
            },
            {
                url: "/images/8.jpeg",
                caption: "que existe no mundo!",
            },
        ],
    },
    {
        title: "3",
        photos: [
            {
                url: "/images/9.jpeg",
                caption: "Você",
            },
            {
                url: "/images/10.jpeg",
                caption: "é o melhor presente",
            },
            {
                url: "/images/11.jpeg",
                caption: "que eu poderia",
            },
            {
                url: "/images/12.jpeg",
                caption: "pedir à Deus...",
            },
        ],
    },
    {
        title: "4",
        photos: [
            {
                url: "/images/13.jpeg",
                caption: "Feliz aniversário,",
            },
            {
                url: "/images/14.jpeg",
                caption: "meu Amor!",
            },
            {
                url: "/images/15.jpeg",
                caption: "Eu te amo",
            },
            {
                url: "/images/16.jpeg",
                caption: "infinito ♡",
            },
        ],
    },
];

export default function PhotoGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            // 'smooth' deixa a rolagem suave, se preferir instantâneo mude para 'auto'
            containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [currentIndex]);

    const nextSection = () => {
        if (currentIndex < sections.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSection = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        /* 1. Mudamos justify-center para permitir que o scroll funcione corretamente sem cortar o topo */
        <div
            ref={containerRef}
            className="fixed inset-0 z-40 flex flex-col items-center overflow-y-auto bg-background-dark/95"
        >
            {/* Back button */}
            <motion.div
                className="w-full px-6 pt-6 z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => navigate("/landing")}
                    className="glass-card px-6 py-2.5 text-romantic-pink font-display tracking-widest text-xs uppercase transition-all flex items-center gap-3 hover:bg-white/10 cursor-pointer"
                >
                    <ArrowLeft className="size-4" />
                    Voltar
                </button>
            </motion.div>

            {/* 2. O 'my-auto' e a remoção do max-h-screen garantem centralização segura e responsiva */}
            <div className="relative w-full max-w-7xl px-6 flex flex-col justify-center gap-12 my-auto py-12 md:py-16">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-center"
                >
                    {sections[currentIndex].photos.map((photo, i) => (
                        <Polaroid
                            key={i}
                            index={i}
                            url={photo.url}
                            caption={photo.caption}
                        />
                    ))}
                </motion.div>

                {/* Navigation Slider */}
                <div className="flex flex-col items-center gap-6 pt-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSection}
                            disabled={currentIndex === 0}
                            className="text-romantic-pink hover:text-soft-rose disabled:opacity-30 disabled:cursor-default transition-colors cursor-pointer"
                        >
                            <ArrowRight className="rotate-180 size-6" />
                        </button>

                        <div className="flex gap-3">
                            {sections.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                        currentIndex === i
                                            ? "w-8 bg-romantic-pink"
                                            : "w-2 bg-romantic-pink/30 hover:bg-romantic-pink/50"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSection}
                            disabled={currentIndex === sections.length - 1}
                            className="text-romantic-pink hover:text-soft-rose disabled:opacity-30 disabled:cursor-default transition-colors cursor-pointer"
                        >
                            <ArrowRight className="size-6" />
                        </button>
                    </div>

                    <p className="text-romantic-pink/60 font-display tracking-widest text-[10px] uppercase">
                        Mova-se pela nossa história
                    </p>

                    {currentIndex === sections.length - 1 && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 glass-card px-8 py-3 text-romantic-pink font-serif italic text-lg shadow-xl transition-all flex items-center gap-3 mx-auto group hover:bg-white/10 cursor-pointer"
                            onClick={() => navigate("/25reasons")}
                        >
                            Motivos para te amar
                            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    )}
                </div>
            </div>
        </div>
    );
}
