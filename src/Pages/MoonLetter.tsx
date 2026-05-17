import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import { useNavigate } from "react-router-dom";
import { animate } from "framer-motion";
import { Mail, Heart, MoonStar, ArrowLeft } from "lucide-react";
import { ArtemisBooster, ArtemisMainStage } from "../components/ArtemisRocket";

import OrionCapsule from "../components/OrionCapsule";
import Constellations from "../components/Constellations";

export default function MoonLetter() {
    const [phase, setPhase] = useState<"intro" | "flight" | "moon" | "letter">(
        "intro"
    );

    const navigate = useNavigate();

    // Parallax Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Transform layers for depth
    const moonX = useTransform(springX, (value) => value * 0.5);
    const moonY = useTransform(springY, (value) => value * 0.5);

    const rocketX = useMotionValue(0);
    const rocketY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = clientX / innerWidth - 0.5;
        const y = clientY / innerHeight - 0.5;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
    };

    useEffect(() => {
        if (phase === "intro") {
            const timer = setTimeout(() => setPhase("flight"), 3000);
            return () => clearTimeout(timer);
        }
        if (phase === "flight") {
            const timer = setTimeout(() => setPhase("moon"), 10000);

            animate(0, 1, {
                duration: 8,
                ease: "easeInOut",
                onUpdate: (t) => {
                    // START: Earth center (adjust if needed)
                    const startX = 0;
                    const startY = 200;

                    // END: Moon top-left (relative to same scene space)
                    const endX = -170;
                    const endY = -200;

                    // control points for arc
                    const cx1 = 120;
                    const cy1 = -300;

                    const cx2 = -200;
                    const cy2 = -200;

                    const x =
                        Math.pow(1 - t, 3) * startX +
                        3 * Math.pow(1 - t, 2) * t * cx1 +
                        3 * (1 - t) * Math.pow(t, 2) * cx2 +
                        Math.pow(t, 3) * endX;

                    const y =
                        Math.pow(1 - t, 3) * startY +
                        3 * Math.pow(1 - t, 2) * t * cy1 +
                        3 * (1 - t) * Math.pow(t, 2) * cy2 +
                        Math.pow(t, 3) * endY;

                    rocketX.set(x);
                    rocketY.set(y);
                },
            });

            return () => clearTimeout(timer);
        }
    }, [phase]);

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
            onMouseMove={handleMouseMove}
        >
            {phase === "moon" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={() => navigate("/allReasons")}
                        className="glass-card px-8 py-3 absolute top-6 left-6 text-romantic-pink font-display tracking-widest text-xs uppercase transition-all flex items-center gap-3 mx-auto hover:bg-white/10 cursor-pointer"
                    >
                        <ArrowLeft className="size-4" />
                        Voltar
                    </button>
                </motion.div>
            )}
            <AnimatePresence mode="wait">
                {phase === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-starlight italic tracking-widest text-glow-white">
                            E para finalizar...
                        </h2>
                    </motion.div>
                )}

                {phase === "flight" && (
                    <motion.div
                        key="flight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                    >
                        {/* Earth (fading away) */}
                        <motion.div
                            initial={{ scale: 1.4, x: 0, y: 0 }}
                            animate={{
                                scale: 0.05,
                                x: -700,
                                y: 500,
                                opacity: 0,
                            }}
                            transition={{ duration: 6, ease: "easeInOut" }}
                            className="absolute z-10 w-96 h-96"
                        >
                            {/* Atmosphere Glow */}
                            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl scale-125" />
                            <div className="absolute inset-0 rounded-full border-[10px] border-blue-400/20 blur-sm" />

                            {/* Earth Body */}
                            <div className="relative w-full h-full rounded-full bg-[#0d2c54] shadow-[inset_-60px_-60px_100px_rgba(0,0,0,0.9)] overflow-hidden">
                                {/* Ocean Base Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900" />

                                {/* Continents (More detailed layers) */}
                                <div className="absolute top-[15%] left-[10%] w-32 h-20 bg-[#2d5a27] rounded-full blur-xl opacity-80" />
                                <div className="absolute top-[40%] left-[30%] w-48 h-32 bg-[#1e4620] rounded-full blur-2xl opacity-70 rotate-[-15deg]" />
                                <div className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-[#3a5a40] rounded-full blur-3xl opacity-60" />
                                <div className="absolute top-[5%] right-[20%] w-24 h-16 bg-[#2d4a22] rounded-full blur-lg opacity-50" />

                                {/* Cloud Layers (Dynamic feel) */}
                                <div className="absolute inset-0">
                                    <motion.div
                                        animate={{ x: [0, 50, 0] }}
                                        transition={{
                                            duration: 60,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute top-10 left-0 w-[200%] h-full opacity-60 mix-blend-screen"
                                    >
                                        <div className="absolute top-4 left-[10%] w-64 h-16 bg-white/40 rounded-full blur-2xl" />
                                        <div className="absolute bottom-20 left-[40%] w-80 h-24 bg-white/30 rounded-full blur-3xl" />
                                        <div className="absolute top-1/2 left-[70%] w-56 h-32 bg-white/50 rounded-full blur-2xl" />
                                    </motion.div>
                                </div>

                                {/* Polar Ice Caps */}
                                <div className="absolute -top-10 left-1/4 w-1/2 h-20 bg-white/20 rounded-full blur-xl" />
                                <div className="absolute -bottom-10 left-1/4 w-1/2 h-20 bg-white/10 rounded-full blur-xl" />

                                {/* Specular Highlight */}
                                <div className="absolute top-[10%] left-[15%] w-32 h-20 bg-white/10 rounded-full blur-3xl rotate-[-45deg]" />
                            </div>
                        </motion.div>

                        {/* Approaching Moon (Detailed) */}
                        <motion.div
                            initial={{
                                scale: 0.1,
                                opacity: 0,
                                x: 600,
                                y: -400,
                            }}
                            animate={{
                                scale: [0.1, 0.4, 1.8],
                                opacity: [0, 1, 1],
                                x: [600, 200, 0],
                                y: [-400, -100, 0],
                            }}
                            transition={{ duration: 8, ease: "easeInOut" }}
                            className="absolute z-10 w-96 h-96 rounded-full bg-[#d0d0d0] shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden"
                        >
                            {/* Moon Texture/Craters during approach */}

                            <div className="absolute top-12 left-24 w-10 h-10 rounded-full bg-black/5 shadow-inner" />
                            <div className="absolute top-44 left-16 w-14 h-14 rounded-full bg-black/5 shadow-inner" />
                            <div className="absolute top-28 left-48 w-8 h-8 rounded-full bg-black/5 shadow-inner" />
                            <div className="absolute bottom-20 left-36 w-12 h-12 rounded-full bg-black/5 shadow-inner" />
                        </motion.div>

                        {/* Rocket Trajectory */}
                        <motion.div
                            style={{ x: rocketX, y: rocketY }}
                            initial={{ scale: 0.3 }}
                            animate={{
                                scale: [0.6, 0.6, 0.9],
                                rotate: [0, 55, 0],
                            }}
                            transition={{
                                duration: 9,
                                ease: "easeInOut",
                            }}
                            className="relative z-20 flex flex-col items-center"
                        >
                            {/* Orion Capsule (The survivor) */}
                            <motion.div className="z-30">
                                <OrionCapsule />
                            </motion.div>

                            {/* Main Core Stage */}
                            <motion.div
                                animate={{
                                    y: [0, 0, 100],
                                    opacity: [1, 1, 0],
                                    rotate: [0, 0, 15],
                                }}
                                transition={{ duration: 6, times: [0, 0.6, 1] }}
                                className="z-20 -mt-1"
                            >
                                <ArtemisMainStage />
                            </motion.div>

                            {/* Boosters */}
                            <div className="absolute top-8 flex justify-between w-14">
                                <motion.div
                                    animate={{
                                        x: [0, 0, -50],
                                        y: [0, 0, 50],
                                        opacity: [1, 1, 0],
                                        rotate: [0, 0, -45],
                                    }}
                                    transition={{
                                        duration: 5,
                                        times: [0, 0.3, 1],
                                    }}
                                >
                                    <ArtemisBooster />
                                </motion.div>
                                <motion.div
                                    animate={{
                                        x: [0, 0, 50],
                                        y: [0, 0, 50],
                                        opacity: [1, 1, 0],
                                        rotate: [0, 0, 45],
                                    }}
                                    transition={{
                                        duration: 6,
                                        times: [0, 0.3, 1],
                                    }}
                                >
                                    <ArtemisBooster />
                                </motion.div>
                            </div>

                            {/* Engines Fire */}
                            <motion.div
                                animate={{
                                    scaleY: [1, 2.5, 0],
                                    opacity: [1, 1, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    times: [0.1, 0.5, 0.61],
                                    ease: "linear",
                                }}
                                className="w-4 h-20 bg-gradient-to-t from-transparent via-orange-500 to-yellow-200 rounded-b-full blur-[1px] origin-top  absolute bottom-[-10px]"
                            />
                        </motion.div>

                        <div className="absolute bottom-10 text-starlight/40 font-display text-[10px] tracking-widest uppercase animate-pulse">
                            Daqui até a Lua...
                        </div>
                    </motion.div>
                )}

                {phase === "moon" && (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center space-y-12"
                    >
                        {/* Moon (single parallax container for EVERYTHING on it) */}
                        <motion.div
                            initial={{ scale: 0, rotate: -20 }}
                            animate={{ scale: 1, rotate: 0 }}
                            style={{ x: moonX, y: moonY }}
                            transition={{ duration: 1.5, type: "spring" }}
                            className="relative w-80 h-80 rounded-full bg-[#e3e3e3] shadow-[inset_-30px_-30px_60px_rgba(0,0,0,0.4),0_0_80px_rgba(255,255,255,0.1)] border-2 border-white/10"
                        >
                            {/* Craters (inside same space) */}
                            <div className="absolute inset-0">
                                <div className="absolute top-12 left-24 w-10 h-10 rounded-full bg-black/5 shadow-inner" />
                                <div className="absolute top-44 left-16 w-14 h-14 rounded-full bg-black/5 shadow-inner" />
                                <div className="absolute top-28 left-48 w-8 h-8 rounded-full bg-black/5 shadow-inner" />
                                <div className="absolute bottom-20 left-36 w-12 h-12 rounded-full bg-black/5 shadow-inner" />
                            </div>

                            {/* Landed Orion Site with offset parallax */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute left-10 flex items-end gap-3"
                            >
                                {/* FLAG */}
                                <div className="flex items-start">
                                    <motion.div
                                        className="origin-right"
                                        animate={{ rotateZ: [-3, 3, -3] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 3,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <div className="w-10 h-7 bg-white border border-gray-200 shadow-sm flex items-center justify-center transform-none">
                                            <MoonStar className="size-5 text-romantic-pink fill-romantic-pink" />
                                        </div>
                                    </motion.div>
                                    <div className="w-[3px] h-14 bg-gray-400 rounded-full" />
                                </div>

                                {/* ORION */}
                                <div className="flex flex-col items-start drop-shadow-xl">
                                    <OrionCapsule />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Clickable Envelope */}
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPhase("letter")}
                            className="group relative flex flex-col items-center gap-6 cursor-pointer"
                        >
                            <div className="relative">
                                <Mail className="size-20 text-white fill-white/10 group-hover:fill-romantic-pink/20 transition-colors" />
                                <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-6 text-romantic-pink animate-bounce fill-romantic-pink" />
                            </div>

                            <span className="text-starlight font-display text-[10px] tracking-[0.3em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                                Clique para ler
                            </span>
                        </motion.button>
                    </motion.div>
                )}

                {phase === "letter" && (
                    <div className="relative max-h-screen w-full flex flex-col items-center px-4 py-8 md:py-12 overflow-y-auto">
                        <Constellations />

                        <motion.div
                            key="letter"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="w-full max-w-2xl flex flex-col items-center z-10"
                        >
                            <div className="bg-[#fdfbf7] p-6 sm:p-10 md:p-16 shadow-2xl relative border-l-[20px] sm:border-l-[30px] border-[#e8e4db] min-h-[500px] w-full">
                                {/* Decorative Paper Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-10 pointer-events-none" />

                                {/* Binder Holes */}
                                <div className="absolute left-[-15px] sm:left-[-20px] top-0 bottom-0 flex flex-col justify-around py-10 pointer-events-none">
                                    {Array.from({ length: 15 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="size-1.5 sm:size-2 rounded-full bg-black/20 shadow-inner"
                                        />
                                    ))}
                                </div>

                                <div className="space-y-4 font-serif text-gray-800 leading-relaxed italic">
                                    <div className="text-right text-gray-500 text-sm font-display mb-6 md:mb-10">
                                        18 de maio de 2026
                                    </div>

                                    <p className="text-lg sm:text-xl font-bold">
                                        Amor,
                                    </p>

                                    <p className="indent-6 sm:indent-8 text-base sm:text-lg">
                                        Quero te desejar um feliz aniversário e
                                        muitos anos de vida. Você é uma mulher
                                        incrível e merece tudo de melhor que a
                                        vida tem a oferecer. Sou muito grato a
                                        Deus por ter a oportunidade e a
                                        felicidade de compartilhar a vida com
                                        você.
                                    </p>

                                    <p className="indent-6 sm:indent-8 text-base sm:text-lg">
                                        Hoje é o 4º aniversário que passo ao seu
                                        lado e não tenho palavras para expressar
                                        o quanto sou feliz por isso. Cada dia
                                        que passa tenho ainda mais certeza de
                                        que você é a pessoa com quem quero
                                        passar o resto da minha vida.
                                    </p>

                                    <p className="indent-6 sm:indent-8 text-base sm:text-lg">
                                        Obrigado por todo nosso percurso juntos
                                        até aqui e por tudo que ainda vamos
                                        viver. Espero de coração que você goste
                                        desse presentinho e que seja especial
                                        para você.
                                    </p>

                                    <p className="indent-6 sm:indent-8 text-base sm:text-lg">
                                        Independente de qualquer coisa que
                                        aconteça, saiba que eu sempre vou estar
                                        aqui do seu lado, torcendo e te apoiando
                                        em todas as situações. Você é a pessoa
                                        mais importante da minha vida, minha
                                        maior certeza e meu melhor presente. Eu
                                        te amo daqui até a lua e infinitas vezes
                                        mais que isso!
                                    </p>

                                    <p className="indent-6 sm:indent-8 text-base sm:text-lg">
                                        Feliz aniversário, minha princesa!
                                    </p>

                                    <div className="pt-8 md:pt-12 text-right">
                                        <p className="text-xs sm:text-sm font-display text-romantic-pink/60 uppercase tracking-widest">
                                            Com amor,
                                        </p>
                                        <p className="text-xl sm:text-2xl font-bold mt-2 font-serif text-glow-red">
                                            Erick Pina
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("/")}
                                className="text-starlight/40 font-display text-[10px] tracking-widest uppercase hover:text-romantic-pink transition-colors cursor-pointer py-8 md:py-10"
                            >
                                Voltar ao início
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
