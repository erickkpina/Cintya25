import React, { useState } from "react";
import { motion } from "motion/react";
import { Pin, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Polaroid from "../Components/Polaroid";

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
                url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=600",
                caption: "Você",
            },
            {
                url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600",
                caption: "me faz",
            },
            {
                url: "https://images.unsplash.com/photo-1518199266791-739d6ff5f701?q=80&w=600",
                caption: "mais feliz",
            },
            {
                url: "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=600",
                caption: "a cada dia que passa...",
            },
        ],
    },
    {
        title: "2",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=600",
                caption: "Você é a pessoa",
            },
            {
                url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600",
                caption: "mais especial",
            },
            {
                url: "https://images.unsplash.com/photo-1516589174184-c68526572af0?q=80&w=600",
                caption: "e linda",
            },
            {
                url: "https://images.unsplash.com/photo-1533227268408-a7746955 units to be a0d?q=80&w=600",
                caption: "que existe no mundo!",
            },
        ],
    },
    {
        title: "3",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1501901664534-534a41f39a4c?q=80&w=600",
                caption: "Você",
            },
            {
                url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=600",
                caption: "é o melhor presente",
            },
            {
                url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=600",
                caption: "que eu poderia",
            },
            {
                url: "https://images.unsplash.com/photo-1534067783941-51c9c23ea34e?q=80&w=600",
                caption: "pedir à Deus...",
            },
        ],
    },
    {
        title: "4",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1516589174184-c68526572af0?q=80&w=600",
                caption: "Feliz aniversário,",
            },
            {
                url: "https://images.unsplash.com/photo-1518199266791-739d6ff5f701?q=80&w=600",
                caption: "meu Amor!",
            },
            {
                url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=600",
                caption: "Eu te amo",
            },
            {
                url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600",
                caption: "infinito ♡",
            },
        ],
    },
];

export default function PhotoGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

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
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden">
            {/* Back button */}
            <motion.div
                className="pb-18"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => navigate("/landing")}
                    className="glass-card px-8 py-3 absolute top-6 left-6 text-romantic-pink font-display tracking-widest text-xs uppercase transition-all flex items-center gap-3 mx-auto hover:bg-white/10 cursor-pointer"
                >
                    <ArrowLeft className="size-4" />
                    Voltar
                </button>
            </motion.div>

            <div className="relative w-full max-w-7xl px-6 h-full flex flex-col justify-center gap-12">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 items-center py-18"
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
                <div className="flex flex-col items-center gap-6">
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
                            className="mt-4 mb-18 glass-card px-8 py-3 text-romantic-pink font-serif italic text-lg shadow-xl transition-all flex items-center gap-3 mx-auto group hover:bg-white/10 cursor-pointer"
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
