import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MousePointer2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { reasonsList } from "../Data/ReasonsPageData";

type reasonObj = {
    id: string;
    text: string;
    color: string;
};

export default function Reasons() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeReason, setActiveReason] = useState<reasonObj | null>(null);
    const [openedReasons, setOpenedReasons] = useState<reasonObj[]>([]);
    const navigate = useNavigate();

    const handlePickReason = () => {
        if (activeReason) {
            setActiveReason(null);
            return;
        }

        if (currentIndex < reasonsList.length) {
            const reason = reasonsList[currentIndex];

            // set the reason picked as active to trigger the animation
            setActiveReason({
                id: reason.id,
                text: reason.text,
                color: reason.color,
            });

            // add to opened reasons to see past opened reasons before changing pages
            setOpenedReasons((prev) => [
                ...prev,
                {
                    id: reason.id,
                    text: reason.text,
                    color: reason.color,
                },
            ]);

            // increment index to show next reason on next click
            setCurrentIndex((prev) => prev + 1);
        }
    };

    return (
        <div className="fixed inset-0 z-40 /*bg-[#0a0e1a]*/ flex flex-col items-center justify-center overflow-hidden">
            {/* Back button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => navigate("/gallery")}
                    className="glass-card px-8 py-3 absolute top-6 left-6 text-romantic-pink font-display tracking-widest text-xs uppercase transition-all flex items-center gap-3 mx-auto hover:bg-white/10 cursor-pointer"
                >
                    <ArrowLeft className="size-4" />
                    Voltar
                </button>
            </motion.div>

            {/* Skip to reasons board button */}
            {currentIndex < reasonsList.length && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={() => navigate("/allReasons")}
                        className="glass-card px-6 py-3 absolute top-6 right-6 text-romantic-pink font-display tracking-widest text-xs uppercase transition-all flex items-center gap-3 hover:bg-white/10 cursor-pointer"
                    >
                        Ver mural
                    </button>
                </motion.div>
            )}

            <div className="relative z-10 text-center space-y-16 w-full max-w-lg px-6">
                <div className="space-y-3">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-3xl font-serif text-starlight"
                    >
                        Pote de Motivos
                    </motion.h2>
                    <p className="text-romantic-pink/50 font-display tracking-widest text-[10px] uppercase">
                        {currentIndex < reasonsList.length
                            ? `Restam ${
                                  reasonsList.length - currentIndex
                              } papéis no pote`
                            : "O pote está vazio"}
                    </p>
                </div>

                {/* Animated Jar */}
                <div className="relative flex flex-col items-center select-none">
                    <motion.div
                        whileHover="hover"
                        onClick={handlePickReason}
                        className="relative w-48 h-64 cursor-pointer group flex flex-col items-center"
                    >
                        {/* The Glass Jar Body */}
                        <motion.div
                            variants={{
                                hover: { scale: 1.02 },
                            }}
                            className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-t-[40%] rounded-b-[20%] shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />

                            {/* Inner Reflections */}
                            <div className="absolute top-10 left-4 w-1 h-32 bg-white/20 rounded-full blur-[1px]" />

                            {/* Post-its inside the jar (visual deco) */}
                            <div className="absolute inset-x-4 bottom-4 top-20 flex flex-wrap gap-1 justify-center opacity-40">
                                {reasonsList
                                    .slice(currentIndex)
                                    .map((item, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                rotate:
                                                    (Math.random() - 0.5) * 40,
                                            }}
                                            className={`w-4 h-4 ${item.color} rounded-sm shadow-sm`}
                                        />
                                    ))}
                            </div>
                        </motion.div>

                        {/* Jar Lid */}
                        <motion.div
                            variants={{
                                hover: { y: -8, rotate: -5, scale: 1.05 },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                            }}
                            className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-romantic-pink/80 rounded-full shadow-md border-b-4 border-black/10 flex items-center justify-center z-10"
                        >
                            <div className="w-24 h-[1.5px] bg-white/30" />
                        </motion.div>

                        {/* Label */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card bg-white/10 px-3 py-1 border-white/20 z-10">
                            <span className="text-[8px] text-starlight/60 uppercase tracking-tighter select-none">
                                25 motivos para te amar
                            </span>
                        </div>
                    </motion.div>

                    {/* Floating Instructions */}
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-12 flex items-center gap-3 text-starlight/40 animate-pulse"
                        >
                            <MousePointer2 className="size-4" />
                            <span className="text-[10px] uppercase tracking-widest italic">
                                {currentIndex < reasonsList.length
                                    ? "Toque no pote para tirar um motivo"
                                    : "Abrir mural final"}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Flying Post-it Transition */}
                {activeReason && (
                    <AnimatePresence>
                        <motion.div
                            layoutId="post-it"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0a0e1a]/80 m-0"
                            onClick={() => setActiveReason(null)}
                        >
                            <motion.div
                                className={`${activeReason.color} w-72 h-72 md:w-80 md:h-80 p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative transform-gpu hover:rotate-0 transition-transform`}
                                initial={{
                                    scale: 0,
                                    y: 200,
                                    rotate: 0,
                                    rotateX: 45,
                                }}
                                animate={{
                                    scale: [0, 0.2, 0.2, 1.1, 1],
                                    y: [200, 150, -100, -100, 0],
                                    rotate: [
                                        0,
                                        0,
                                        0,
                                        15,
                                        (Math.random() - 0.5) * 10,
                                    ],
                                    rotateX: [45, 45, 45, 0, 0],
                                }}
                                transition={{
                                    duration: 0.4,
                                    times: [0, 0.2, 0.4, 0.8, 1],
                                    ease: "easeInOut",
                                }}
                                exit={{
                                    scale: 0,
                                    y: -400,
                                    opacity: 0,
                                    filter: "blur(10px)",
                                    transition: { duration: 0.4 },
                                }}
                            >
                                <div className="absolute top-0 left-0 right-0 h-10 bg-black/5" />
                                <p className="text-gray-800 font-serif text-xl md:text-2xl leading-relaxed text-center italic mt-12 select-none">
                                    "{activeReason?.text ?? ""}"
                                </p>
                                <div className="absolute bottom-6 right-6 flex flex-col items-end opacity-70">
                                    <span className="text-[10px] font-mono uppercase">
                                        Motivo #{currentIndex}
                                    </span>
                                    <span className="text-[8px] font-mono">
                                        Tap to continue
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}

                {openedReasons.length > 0 && (
                    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-6">
                        <span className="text-[9px] uppercase tracking-widest text-starlight/40">
                            Memórias abertas
                        </span>

                        <div className="relative h-16 w-28">
                            {openedReasons.slice(-5).map((item, i) => (
                                <motion.button
                                    key={item.text}
                                    whileHover={{
                                        y: -8,
                                        rotate: 0,
                                        scale: 1.05,
                                    }}
                                    onClick={() => {
                                        setActiveReason({
                                            id: item.id,
                                            text: item.text,
                                            color: item.color,
                                        });
                                    }}
                                    className={`absolute w-24 h-14 ${item.color} shadow-lg p-2 text-left`}
                                    style={{
                                        left: `${i * 12}px`,
                                        rotate: `${(i - 1) * 8}deg`,
                                        zIndex: i,
                                    }}
                                >
                                    <p className="text-[8px] text-gray-800 line-clamp-3 italic">
                                        {item.text}
                                    </p>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                )}

                {currentIndex >= reasonsList.length && !activeReason && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-8"
                    >
                        <button
                            onClick={() => navigate("/allReasons")}
                            className="bg-romantic-pink text-gray-900 px-8 py-3 rounded-full font-display uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg shadow-romantic-pink/20"
                        >
                            Ver o mural completo
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
