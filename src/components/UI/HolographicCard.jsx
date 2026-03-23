import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HolographicCard = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [sheenPosition, setSheenPosition] = useState({ x: 0, y: 0 });

    const [isHovered, setIsHovered] = useState(false);
    const [logs, setLogs] = useState([]);
    const logsIntervalRef = useRef(null);

    const logTemplates = [
        '[INFO] Initializing module...',
        '[OK] Core system linked',
        '[WARN] Latency detected: 4ms',
        '[DATA] Fetching project_metadata',
        '[OK] Assets optimized',
        '[SRV] Handshake established',
        '[LOG] Render pass: 12ms',
        '[INFO] System optimal'
    ];

    const startLogs = () => {
        setIsHovered(true);
        logsIntervalRef.current = setInterval(() => {
            setLogs(prev => {
                const newLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
                return [...prev.slice(-4), `${new Date().toLocaleTimeString()} ${newLog}`];
            });
        }, 800);
    };

    const stopLogs = () => {
        setIsHovered(false);
        clearInterval(logsIntervalRef.current);
        setLogs([]);
    };

    const handleMouseMove = (e) => {
        if (!isHovered) startLogs();
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setSheenPosition({ x, y });
    };

    const handleMouseLeave = () => {
        stopLogs();
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            className={`
                relative 
                group 
                overflow-hidden
                bg-cyber-dark/80 
                border-t border-l border-white/10 
                border-b border-r border-black/50
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all duration-100 ease-linear 
                hover:border-neon-red/50 
                hover:shadow-[0_0_20px_rgba(255,0,60,0.15)]
                p-6 
                ${className}
            `}
        >
            {/* 1. Internal Scanlines (Hologram Effect) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20" />

            {/* 2. Moving Scanline Bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-red/30 shadow-[0_0_10px_rgba(255,0,60,0.5)] z-0 animate-scanline opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* 3. Holographic Sheen */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(circle at ${sheenPosition.x}px ${sheenPosition.y}px, rgba(255,255,255,0.8), transparent 40%)`,
                }}
            />

            {/* 4. Terminal Logs (S-Tier Feature) */}
            <div className="absolute top-4 right-12 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none text-right">
                <div className="flex flex-col gap-1 items-end">
                    {logs.map((log, idx) => (
                        <div key={idx} className="text-[6px] font-tech text-neon-red/40 whitespace-nowrap overflow-hidden max-w-[120px]">
                            {log}
                        </div>
                    ))}
                    {logs.length > 0 && (
                        <div className="w-1 h-2 bg-neon-red/40 animate-pulse mt-1" />
                    )}
                </div>
            </div>

            <div className="relative z-10 transform translate-z-10">
                {children}
            </div>

            {/* 5. Tech Corners (Glowing) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 opacity-100" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 opacity-100" />

            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
    );
};

export default HolographicCard;
