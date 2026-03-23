import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target;
            setIsHovering(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A'
            );
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-neon-blue rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
            />

            {/* Reticle Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 boundary border border-neon-blue rounded-full pointer-events-none z-[9999] opacity-50"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? '#faff00' : '#00f3ff',
                    rotate: isHovering ? 45 : 0
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            >
                {/* Crosshair accents */}
                <div className="absolute top-1/2 left-0 w-1 h-[1px] bg-current -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-1 h-[1px] bg-current -translate-y-1/2" />
                <div className="absolute top-0 left-1/2 w-[1px] h-1 bg-current -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 w-[1px] h-1 bg-current -translate-x-1/2" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
