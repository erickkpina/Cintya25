export default function SoundWaves() {
    return (
        <div className="flex flex-col items-center gap-2">
            {/* Sound waves */}
            <div className="flex items-end gap-[3px] h-5">
                <span className="w-[2px] h-2 bg-romantic-pink animate-wave1" />
                <span className="w-[2px] h-4 bg-romantic-pink animate-wave2" />
                <span className="w-[2px] h-3 bg-romantic-pink animate-wave3" />
                <span className="w-[2px] h-5 bg-romantic-pink animate-wave2" />
                <span className="w-[2px] h-2 bg-romantic-pink animate-wave1" />
            </div>

            <span className="text-[10px] tracking-widest uppercase">
                Playing in Universe
            </span>
        </div>
    );
}
