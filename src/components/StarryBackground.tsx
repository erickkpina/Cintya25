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

        let shootingStars: {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            angle: number;
        }[] = [];

        // Min / Max angle for shooting stars (in radians)
        const minAngle = Math.PI / 8; // 22.5°
        const maxAngle = Math.PI / 3; // 60°

        const resize = () => {
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
                    speed: 0.09 + Math.random() * 0.03, // Slight movement
                    opacity: Math.random(),
                });
            }
        };

        const createShootingStar = () => {
            if (location.pathname === "/moonLetter") return; // Disable shooting stars on Moon Letter page
            shootingStars.push({
                x: ((Math.random() + Math.random()) / 2) * canvas.width,
                y: Math.random() * canvas.height * 0.5,
                length: Math.random() * 80 + 20,
                speed: Math.random() * 10 + 5,
                opacity: 1,
                angle: Math.random() * (maxAngle - minAngle) + minAngle,
            });
        };

        // Spawn shooting star roughly every 7 seconds
        const shootingStarInterval = setInterval(createShootingStar, 7000);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            ctx.fillStyle = "#FDFDFD";
            stars.forEach((star) => {
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Slow rotation/sideways movement
                star.x += star.speed;
                if (star.x > canvas.width) star.x = 0;

                // Twinkle effect
                star.opacity += (Math.random() - 0.5) * 0.03;
                if (star.opacity < 0.1) star.opacity = 0.1;
                if (star.opacity > 1) star.opacity = 1;
            });

            // Draw Shooting Stars
            shootingStars.forEach((ss, index) => {
                ctx.globalAlpha = ss.opacity;
                ctx.strokeStyle = "#FFFFFF";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(ss.x, ss.y);
                ctx.lineTo(
                    ss.x + ss.length * Math.cos(ss.angle),
                    ss.y + ss.length * Math.sin(ss.angle)
                );
                ctx.stroke();

                ss.x += ss.speed * Math.cos(ss.angle);
                ss.y += ss.speed * Math.sin(ss.angle);
                ss.opacity -= 0.01;

                if (ss.opacity <= 0) {
                    shootingStars.splice(index, 1);
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
            clearInterval(shootingStarInterval);
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
