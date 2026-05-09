import React, { useEffect, useRef } from "react";

type StarryBackgroundProps = {
    backgroundColor: string;
};

export default function StarryBackground({
    backgroundColor,
}: StarryBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: {
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;
        }[] = [];

        const resize = () => {
            if (!canvas) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const count = Math.floor((canvas.width * canvas.height) / 3000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    speed: Math.random() * 0.05,
                    opacity: Math.random(),
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#FDFDFD";

            stars.forEach((star) => {
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle effect
                star.opacity += (Math.random() - 0.5) * 0.03;
                if (star.opacity < 0.1) star.opacity = 0.1;
                if (star.opacity > 1) star.opacity = 1;
            });

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 bg-space-black"
            style={{
                background: `radial-gradient(circle at center, ${backgroundColor} 0%, #050505 100%)`,
            }}
        />
    );
}
