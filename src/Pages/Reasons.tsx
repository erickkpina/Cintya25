import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MousePointer2, ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

const reasons = [
    "O seu sorriso que ilumina até os meus dias mais escuros.",
    "A forma como você se preocupa com cada detalhe nosso.",
    "Sua inteligência e a maneira como você vê o mundo.",
    "O som da sua risada, que é minha música favorita.",
    "A paz que eu sinto quando estou nos seus braços.",
    "Sua determinação em conquistar todos os seus sonhos.",
    "O brilho nos seus olhos quando você fala do que ama.",
    "A maneira como você me faz querer ser alguém melhor.",
    "Seu coração bondoso e sua empatia com os outros.",
    "Como você entende meus silêncios melhor que ninguém.",
    "A sorte de ter você como minha melhor amiga e amor.",
    "Seu estilo único e sua elegância natural.",
    "O cheiro do seu perfume que fica em mim.",
    "Nossas piadas internas que só nós entendemos.",
    "A paciência que você tem comigo (mesmo quando sou difícil).",
    "O apoio incondicional em cada passo que eu dou.",
    "A forma como você cuida da sua família e amigos.",
    "Sua coragem de enfrentar qualquer desafio de frente.",
    "Como você transforma qualquer lugar em um 'lar'.",
    "As conversas profundas que temos até o amanhecer.",
    "A sua autenticidade — você nunca tem medo de ser você.",
    "O seu toque que acalma minha alma instantaneamente.",
    "A beleza da sua alma, que supera até sua beleza externa.",
    "A certeza de que quero passar o resto da vida ao seu lado.",
    "O simples fato de você existir e ser quem você é.",
];

export default function Reasons() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeReason, setActiveReason] = useState<string | null>(null);
    const [showFinalPanel, setShowFinalPanel] = useState(false);
    const navigate = useNavigate();

    const postItColors = [
        "bg-[#ffff88]",
        "bg-[#ff7eb9]",
        "bg-[#7afaff]",
        "bg-[#b2ff59]",
        "bg-[#ffcc80]",
    ];

    const randomizedColorIndices = useMemo(
        () =>
            reasons.map(() => Math.floor(Math.random() * postItColors.length)),
        []
    );

    const handlePickReason = () => {
        if (activeReason) {
            setActiveReason(null);
            return;
        }

        if (currentIndex < reasons.length) {
            setActiveReason(reasons[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
        } else {
            setShowFinalPanel(true);
        }
    };

    if (showFinalPanel) {
        return (
            <div className="min-h-screen bg-space-black p-10 pt-24 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-7xl mx-auto space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-serif text-starlight text-glow-white">
                            25 Motivos para te amar
                        </h2>
                        <p className="text-romantic-pink/60 font-display tracking-widest text-[10px] uppercase italic">
                            Nossa constelação de memórias e razões
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    rotate: (Math.random() - 0.5) * 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: (Math.random() - 0.5) * 6,
                                }}
                                transition={{ delay: i * 0.05 }}
                                className={`${
                                    postItColors[randomizedColorIndices[i]]
                                } p-4 h-44 shadow-lg relative group transition-all hover:z-10 hover:scale-110 flex items-center justify-center`}
                            >
                                <div className="absolute top-0 left-0 right-0 h-4 bg-black/5" />
                                <p className="text-gray-800 font-serif text-xs md:text-sm leading-tight text-center italic">
                                    "{reason}"
                                </p>
                                <span className="absolute bottom-1 right-1 text-[8px] text-gray-500 font-mono">
                                    #{i + 1}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center py-10">
                        <p className="text-starlight/20 font-serif italic text-lg">
                            E o motivo 26 será sempre o que vamos descobrir
                            amanhã...
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-40 /*bg-[#0a0e1a]*/ flex flex-col items-center justify-center overflow-hidden">
            {/* Back button */}
            <motion.div
                className="pb-18"
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
                        {currentIndex < reasons.length
                            ? `Restam ${
                                  reasons.length - currentIndex
                              } papéis no pote`
                            : "O pote está vazio"}
                    </p>
                </div>

                {/* Animated Jar */}
                <div className="relative flex flex-col items-center">
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
                                {reasons.slice(currentIndex).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            rotate: (Math.random() - 0.5) * 40,
                                        }}
                                        className={`w-4 h-4 ${
                                            postItColors[
                                                randomizedColorIndices[
                                                    currentIndex + i
                                                ]
                                            ]
                                        } rounded-sm shadow-sm`}
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
                            <span className="text-[8px] text-starlight/60 uppercase tracking-tighter">
                                Reasons why I love you
                            </span>
                        </div>
                    </motion.div>

                    {/* Floating Instructions */}
                    {!activeReason && (
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="mt-12 flex items-center gap-3 text-starlight/40 animate-pulse"
                            >
                                <MousePointer2 className="size-4" />
                                <span className="text-[10px] uppercase tracking-widest italic">
                                    {currentIndex < reasons.length
                                        ? "Toque no pote para tirar um motivo"
                                        : "Abrir mural final"}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>

                {/* Flying Post-it Transition */}
                {activeReason && (
                    <AnimatePresence>
                        <motion.div
                            layoutId="post-it"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.3 } }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0a0e1a]/60 backdrop-blur-2xl"
                            onClick={() => setActiveReason(null)}
                        >
                            <motion.div
                                className={`${
                                    postItColors[
                                        randomizedColorIndices[currentIndex - 1]
                                    ]
                                } w-72 h-72 md:w-80 md:h-80 p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative transform-gpu hover:rotate-0 transition-transform`}
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
                                    duration: 1.2,
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
                                <p className="text-gray-800 font-serif text-xl md:text-2xl leading-relaxed text-center italic mt-4 select-none">
                                    "{activeReason}"
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

                {currentIndex >= reasons.length && !activeReason && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pt-8"
                    >
                        <button
                            onClick={() => setShowFinalPanel(true)}
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
