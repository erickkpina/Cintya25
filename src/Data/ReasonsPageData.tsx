import { useMemo } from "react";

export const reasons = [
    "O seus olhos, com as manchinhas douradas!",
    "O seu sorriso.",
    "Nossas conversas até tarde da noite.",
    "Cada viagem que fizemos juntos.",
    "O seu beijo,",
    "Seu abraço que encaixa perfeitamente no meu.",
    "Seu corpo (desenhado a mão)",
    "A maneira como você sempre me faz querer ser alguém melhor todos os dias.",
    "Nossas noites dormindo juntos.",
    "Seu estilo.",
    "Sua risada.",
    "Sua voz.",
    "O cheirinho de mo.",
    "O seu toque.",
    "O apoio que você sempre me dá em qualquer situação.",
    "A sua autenticidade, você nunca tem medo de ser você.",
    "Os sonhos que desejamos conquistar juntos.",
    "Nossos dates.",
    "Nossas brincadeiras um com o outro.",
    "Nossas noites maratonando séries ou vendo filmes (já to com saudades inclusive).",
    "Nossos programinhas juntos.",
    "Nossas noites cozinhando juntos.",
    "Nossas noites caçando estrelas cadentes (obrigado por topar minhas doideiras).",
    "A certeza de que quero passar o resto da vida ao seu lado.",
    "O simples fato de você existir e ser quem você é.",
];

export const postItColors = [
    "bg-[#ffff88]",
    "bg-[#ff7eb9]",
    "bg-[#7afaff]",
    "bg-[#b2ff59]",
    "bg-[#ffcc80]",
];

export const reasonsList = reasons.map((text) => ({
    id: crypto.randomUUID(),
    text,
    color: postItColors[Math.floor(Math.random() * postItColors.length)],
}));
