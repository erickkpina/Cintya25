import React, { useState } from "react";
import { motion } from "motion/react";
import { Pin, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        title: "Onde tudo começou",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=600",
                caption: "O primeiro dia...",
            },
            {
                url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600",
                caption: "Aquele sorriso",
            },
            {
                url: "https://images.unsplash.com/photo-1518199266791-739d6ff5f701?q=80&w=600",
                caption: "Me faz...",
            },
            {
                url: "https://images.unsplash.com/photo-1522673607200-1648832cee98?q=80&w=600",
                caption: "Muito mais...",
            },
        ],
    },
    {
        title: "Pequenos Detalhes",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=600",
                caption: "Seu olhar",
            },
            {
                url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600",
                caption: "Nossas tardes",
            },
            {
                url: "https://images.unsplash.com/photo-1516589174184-c68526572af0?q=80&w=600",
                caption: "Doce paz",
            },
            {
                url: "https://images.unsplash.com/photo-1533227268408-a7746955 units to be a0d?q=80&w=600",
                caption: "Sempre...",
            },
        ],
    },
    {
        title: "Aventuras Juntos",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1501901664534-534a41f39a4c?q=80&w=600",
                caption: "Pelo mundo",
            },
            {
                url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?q=80&w=600",
                caption: "Lado a lado",
            },
            {
                url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=600",
                caption: "Horizontes",
            },
            {
                url: "https://images.unsplash.com/photo-1534067783941-51c9c23ea34e?q=80&w=600",
                caption: "Inesquecível",
            },
        ],
    },
    {
        title: "Para Sempre",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1516589174184-c68526572af0?q=80&w=600",
                caption: "Hoje",
            },
            {
                url: "https://images.unsplash.com/photo-1518199266791-739d6ff5f701?q=80&w=600",
                caption: "Amanhã",
            },
            {
                url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=600",
                caption: "Nosso amor",
            },
            {
                url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600",
                caption: "Você é luz",
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
            {/* Botão de voltar */}
            <motion.div
                className="pb-18"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => navigate("/landing")}
                    className="glass-card px-8 py-3 absolute top-6 left-6 text-romantic-pink font-display tracking-widest text-xs uppercase hover:bg-white/10 transition-all flex items-center gap-3 mx-auto"
                >
                    <ArrowLeft className="size-4" />
                    Voltar
                </button>
            </motion.div>

            <div className="relative w-full max-w-6xl px-6 h-full flex flex-col justify-center gap-12">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-center"
                >
                    {sections[currentIndex].photos.map((photo, i) => (
                        <Polaroid
                            key={i}
                            url={photo.url}
                            caption={photo.caption}
                            index={i}
                        />
                    ))}
                </motion.div>

                {/* Navigation Slider */}
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevSection}
                            disabled={currentIndex === 0}
                            className="text-romantic-pink hover:text-soft-rose disabled:opacity-30 transition-colors"
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
                            className="text-romantic-pink hover:text-soft-rose disabled:opacity-30 transition-colors"
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
                            className="mt-4 glass-card bg-white/20 border-romantic-pink/20 px-8 py-3 text-romantic-pink font-serif italic text-lg shadow-xl hover:bg-white/30 transition-all flex items-center gap-2 group"
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

function Polaroid({
    url,
    caption,
    index,
}: {
    url: string;
    caption: string;
    index: number;
}) {
    const pinColors = [
        "bg-red-400",
        "bg-blue-400",
        "bg-yellow-400",
        "bg-green-400",
    ];
    const rotations = [-3, 2, -1, 3];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: rotations[index] * 5 }}
            animate={{ opacity: 1, y: 0, rotate: rotations[index] }}
            transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
            className="relative bg-white p-3 pb-12 shadow-2xl group hover:-translate-y-4 transition-transform duration-500"
        >
            {/* Pin */}
            <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 size-4 rounded-full shadow-md z-10 flex items-center justify-center ${pinColors[index]}`}
            >
                <div className="size-1 bg-white/40 rounded-full" />
            </div>

            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
                <img
                    src={url}
                    alt={caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>

            <div className="mt-4 px-2">
                <p className="font-serif italic text-gray-800 text-lg tracking-tight">
                    {caption}
                </p>
            </div>
        </motion.div>
    );
}
