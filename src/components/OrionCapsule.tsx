import React from "react";

export default function OrionCapsule() {
    return (
        /* Orion Capsule & Service Module (Top) */
        <div className="flex flex-col items-center z-30">
            {/* Tip/LAS */}
            <div className="w-[1.5px] h-4 bg-white" />
            {/* Orion Capsule */}
            <div className="w-4 h-3.5 bg-white rounded-t-full shadow-sm" />
            {/* Service Module */}
            <div className="w-5 h-2 bg-white border-t border-gray-200" />
            {/* Adapter */}
            <div className="w-4 h-1.5 bg-gray-400/50" />
        </div>
    );
}
