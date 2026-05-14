import { useMemo } from "react";

export const reasons = [
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
