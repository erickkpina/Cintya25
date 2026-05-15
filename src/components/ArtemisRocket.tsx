import React from "react";
import { motion } from "motion/react";
import OrionCapsule from "./OrionCapsule";

interface ArtemisRocketProps {
    className?: string;
    isLanded?: boolean;
    showBoosters?: boolean;
    showMainStage?: boolean;
}

// Estágio Principal Laranja
export function ArtemisMainStage() {
    return (
        <div>
            <div className="relative w-6 h-32 bg-[#D97706] rounded-t-sm shadow-inner z-20 flex flex-col items-center overflow-hidden">
                {/* Texture/Lines on Core Stage */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_45%,rgba(0,0,0,0.3)_50%,transparent_55%)]" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:100%_6px]" />

                {/* NASA Logo Placeholder */}
                <div className="absolute top-12 w-full h-[3px] bg-red-600" />
            </div>
            <div className="absolute bottom-[-10px] flex gap-0.5 z-0">
                <div className="w-1.5 h-2.5 bg-gray-800 rounded-b-sm shadow-sm" />
                <div className="w-1.5 h-2.5 bg-gray-800 rounded-b-sm shadow-sm" />
                <div className="w-1.5 h-2.5 bg-gray-800 rounded-b-sm shadow-sm" />
            </div>
        </div>
    );
}

// Propulsor Lateral (SRB)
export function ArtemisBooster({ hasNozzle = true }: { hasNozzle?: boolean }) {
    return (
        <div className="w-3 h-28 bg-white rounded-t-full shadow-lg relative border-x border-gray-100 mt-6">
            <div className="absolute top-6 left-0 right-0 h-[1px] bg-gray-200" />
            <div className="absolute bottom-6 left-0 right-0 h-[1px] bg-gray-200" />
            <div className="absolute -top-2 left-0 right-0 h-4 bg-white rounded-t-full shadow-sm" />
            {hasNozzle && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2 bg-gray-600 rounded-b-sm" />
            )}
        </div>
    );
}

export default function ArtemisRocket({
    className,
    isLanded = false,
    showBoosters = true,
    showMainStage = true,
}: ArtemisRocketProps) {
    return (
        <div
            className={`relative flex flex-col items-center pb-2 ${className}`}
        >
            <OrionCapsule />

            {/* Main Core Stage */}
            {showMainStage && (
                <div className="z-20">
                    <ArtemisMainStage />
                </div>
            )}

            {/* Side Boosters */}
            {showBoosters && (
                <div className="absolute flex justify-between w-[3.5rem] h-24 bottom-10 z-10 px-0.5">
                    <ArtemisBooster hasNozzle={!isLanded} />
                    <ArtemisBooster hasNozzle={!isLanded} />
                </div>
            )}
        </div>
    );
}
