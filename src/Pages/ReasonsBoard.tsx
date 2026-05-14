import { useMemo } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { reasonsList } from "../Data/ReasonsPageData";

export default function ReasonsBoard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-space-black p-10 pt-24 overflow-y-auto">
            {/* Back button */}
            <motion.div
                className="pb-18"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => navigate("/25reasons")}
                    className="glass-card px-8 py-3 absolute top-6 left-6 text-romantic-pink font-display tracking-widest text-xs uppercase transition-all flex items-center gap-3 mx-auto hover:bg-white/10 cursor-pointer"
                >
                    <ArrowLeft className="size-4" />
                    Voltar
                </button>
            </motion.div>
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
                    {reasonsList.map((reason, i) => (
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
                            className={`${reason.color} p-4 h-44 shadow-lg relative group transition-all hover:z-10 hover:scale-110 flex items-center justify-center`}
                        >
                            <div className="absolute top-0 left-0 right-0 h-4 bg-black/5" />

                            <p className="text-gray-800 font-serif text-xs md:text-sm leading-tight text-center italic">
                                "{reason.text}"
                            </p>

                            <span className="absolute bottom-1 right-1 text-[8px] text-gray-500 font-mono">
                                #{i + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
