import React from "react";
import { motion } from "motion/react";

export default function Dictionary() {
    return (
        <section className="py-24 px-6 flex items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 max-w-3xl w-full text-left"
            >
                <div className="glass-card p-10 md:p-16 border-white/5 space-y-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                        <span className="font-serif text-[10rem] leading-none">
                            C
                        </span>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-baseline gap-4">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-6xl md:text-8xl font-serif text-starlight text-glow-white"
                            >
                                Cin·ty·a
                            </motion.h2>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.6 }}
                                transition={{ delay: 1 }}
                                className="text-romantic-pink font-display italic text-lg"
                            >
                                /ˈsintʃi.ə/
                            </motion.span>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.8 }}
                            transition={{ delay: 1.2 }}
                            className="text-romantic-pink/80 font-sans tracking-wide text-sm uppercase font-medium"
                        >
                            substantivo feminino · meu tudo
                        </motion.p>
                    </div>

                    <div className="space-y-8 border-l border-romantic-pink/20 pl-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                            className="space-y-2"
                        >
                            <p className="text-starlight font-serif text-xl leading-relaxed">
                                <span className="text-romantic-pink font-bold mr-3 italic">
                                    1.
                                </span>
                                Aquela que ilumina com luz própria; origem grega
                                vinculada à deidade da lua.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6 }}
                            className="space-y-2"
                        >
                            <p className="text-starlight font-serif text-xl leading-relaxed">
                                <span className="text-romantic-pink font-bold mr-3 italic">
                                    2.
                                </span>
                                Epíteto da deusa Ártemis; nome que carrega em si
                                a própria deusa da lua, evocando luz,
                                independência e presença serena.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8 }}
                            className="space-y-2"
                        >
                            <p className="text-starlight font-serif text-xl leading-relaxed italic opacity-70">
                                <span className="text-romantic-pink font-bold mr-3 not-italic">
                                    3.
                                </span>
                                Sinônimo de elegância, bondade e beleza
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        transition={{ delay: 2.2 }}
                        className="pt-6 text-[10px] uppercase tracking-widest text-starlight/40 font-display"
                    >
                        Antônimos: vazio, solidão, escuridão.
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
