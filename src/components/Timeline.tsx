import React from "react";
import { motion } from "motion/react";

interface TimelineItem {
    id: number;
    year: string;
    title: string;
    description: string;
    side: "left" | "right";
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        year: "Dezembro 2022",
        title: "O primeiro encontro",
        description:
            "Te busquei em casa (ficamos um pouquinho juntos e nos conhecendo). Fomos ver Avatar (filme bem longo), quando chegamos de novo na sua casa, ficamos um bom tempo no carro conversando e tiramos a nossa primeira foto!",
        side: "left",
    },
    {
        id: 2,
        year: "Abril 2023",
        title: "Primeiro show juntos",
        description: "Fomos para o nosso primeiro show juntos! Turma do Pagode",
        side: "right",
    },
    {
        id: 3,
        year: "Junho 2024",
        title: "Primeira viagem de casal",
        description:
            "Fomos para Barcelona, e foi nossa primeira viagem 100% de casal. Sua primeira vez na Espanha e nossa primeira corrida de Fórmula 1.",
        side: "left",
    },
    {
        id: 4,
        year: "Maio 2026",
        title: "Seus 25 anos",
        description:
            "Mais um aniversário ao seu lado. Com esse somamos 4, que venham muitos outros!",
        side: "right",
    },
];

export default function Timeline() {
    return (
        <section className="py-32 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl font-serif text-starlight">
                        Nossa Linha do Tempo
                    </h2>
                    <p className="text-romantic-pink/60 font-display tracking-widest text-xs uppercase italic">
                        Cada momento é uma estrela no nosso céu
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-romantic-pink/50 via-romantic-pink/20 to-transparent" />

                    {/* Cards */}
                    <div className="space-y-12 md:space-y-24">
                        {timelineData.map((item) => (
                            <div key={item.id}>
                                <TimelineCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineCard({ item }: { item: TimelineItem }) {
    const isLeft = item.side === "left";

    return (
        <div
            className={`relative flex items-center justify-between w-full ${
                isLeft ? "flex-row" : "flex-row-reverse"
            }`}
        >
            {/* Spacer or Card */}
            <div className="hidden md:block w-[45%]" />

            {/* Dot on line */}
            <div className="absolute left-1/2 -translate-x-1/2 size-3 rounded-full bg-romantic-pink shadow-[0_0_10px_rgba(255,183,197,0.8)] z-10" />

            {/* Card Content */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full md:w-[45%] glass-card p-8 space-y-3 relative overflow-hidden group`}
            >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="font-serif text-5xl md:text-7xl font-bold tracking-tighter">
                        {item.id}
                    </span>
                </div>

                <span className="text-romantic-pink font-display tracking-widest text-[10px] uppercase block">
                    {item.year}
                </span>
                <h3 className="text-xl font-serif text-starlight">
                    {item.title}
                </h3>
                <p className="text-starlight/60 text-sm leading-relaxed">
                    {item.description}
                </p>
            </motion.div>
        </div>
    );
}
