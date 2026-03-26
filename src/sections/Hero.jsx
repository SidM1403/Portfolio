import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import FuturisticButton from '../components/UI/FuturisticButton';
import TextPressure from '../components/Effects/TextPressure';

/* ── Role rotator ── */
const ROLES = [
    '3RD YEAR CSE STUDENT',
    'FULL STACK DEVELOPER',
    'REACT SPECIALIST',
    'DSA ENTHUSIAST',
];

const RoleRotator = () => {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % ROLES.length), 2800);
        return () => clearInterval(t);
    }, []);
    return (
        <div className="h-6 overflow-hidden relative">
            <AnimatePresence mode="wait">
                <motion.span
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-x-0 text-center font-tech text-[#fcee0a] font-bold tracking-[0.5em] text-sm md:text-base uppercase"
                >
                    {ROLES[idx]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

/* ── Animated stat counter ── */
const StatCounter = ({ value, label, color, delay }) => {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        const target = parseFloat(value);
        const steps = 40;
        let step = 0;
        const t = setInterval(() => {
            step++;
            setDisplay(+(target * (step / steps)).toFixed(1));
            if (step >= steps) clearInterval(t);
        }, 30);
        return () => clearInterval(t);
    }, [value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="flex flex-col items-center gap-1"
        >
            <span
                className="text-3xl md:text-4xl font-cyber font-bold"
                style={{ color, textShadow: `0 0 20px ${color}80` }}
            >
                {display}{typeof value === 'string' && value.includes('+') ? '+' : ''}
            </span>
            <span className="text-[9px] font-tech tracking-[0.3em] text-gray-500 text-center">{label}</span>
        </motion.div>
    );
};

/* ── HUD corner bracket ── */
const HUDCorner = ({ pos }) => {
    const size = 'w-6 h-6';
    const border = 'border-cyber-yellow/30';
    const corners = {
        tl: `top-0 left-0 border-t border-l ${border}`,
        tr: `top-0 right-0 border-t border-r ${border}`,
        bl: `bottom-0 left-0 border-b border-l ${border}`,
        br: `bottom-0 right-0 border-b border-r ${border}`,
    };
    return <div className={`absolute ${size} ${corners[pos]} pointer-events-none`} />;
};

/* ── Hero ── */
const DataColumn = ({ left, delay, duration }) => {
    const [chars, setChars] = useState('');
    useEffect(() => {
        const charset = '01ABCDEF';
        setChars(Array.from({ length: 20 }, () => charset[Math.floor(Math.random() * charset.length)]).join(''));
    }, []);

    return (
        <div 
            className="data-column"
            style={{ 
                left: `${left}%`, 
                animationDelay: `${delay}s`, 
                animationDuration: `${duration}s` 
            }}
        >
            {chars}
        </div>
    );
};

const Hero = () => {
    const scrollToAbout = () =>
        document.getElementById('identity')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section 
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >

            {/* Background glows + Neural Grid */}
            <div className="absolute inset-0 bg-neural-grid opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyber-yellow/5 rounded-full blur-[130px] pointer-events-none" />

            {/* Content wrapper with HUD corners */}
            <motion.div 
                className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto pt-20 md:pt-28"
            >

                {/* HUD corner brackets framing the entire content block */}
                <div className="absolute -inset-6 pointer-events-none">
                    <HUDCorner pos="tl" />
                    <HUDCorner pos="tr" />
                    <HUDCorner pos="bl" />
                    <HUDCorner pos="br" />
                </div>

                {/* Role rotator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6 w-full h-8"
                >
                    <RoleRotator />
                </motion.div>

                {/* Name with TextPressure effect */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="relative w-full h-[100px] md:h-[150px] lg:h-[180px] mb-8 name-shadow-pulse"
                >
                    <TextPressure
                        text="SIDDHANT MAURYA"
                        flex
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="linear-gradient(135deg, #fcee0a 0%, #00f0ff 50%, #fcee0a 100%)"
                        strokeColor="#fcee0a"
                        minFontSize={48}
                        className="font-cyber font-bold tracking-tight"
                    />
                </motion.div>

                {/* Gradient divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="h-px w-40 mb-6"
                    style={{ background: 'linear-gradient(to right, transparent, #fcee0a, transparent)' }}
                />

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="text-sm md:text-base font-tech text-gray-400 max-w-md mb-6"
                >
                    Engineering high-performance, scalable web applications with modern stacks.
                </motion.p>

                {/* CTA button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="mb-8"
                >
                    <FuturisticButton onClick={scrollToAbout}>
                        INITIALIZE MISSION
                    </FuturisticButton>
                </motion.div>

                {/* ── Stat counters ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="w-full border-t border-white/5 pt-6 grid grid-cols-3 gap-4"
                >
                    <div className="flex flex-col items-center gap-0.5">
                        <div className="w-px h-3 bg-white/10 mb-2" />
                        <StatCounter value="4" label="PROJECTS SHIPPED" color="#ff003c" delay={1.8} />
                    </div>
                    <div className="flex flex-col items-center gap-0.5 border-x border-white/5">
                        <div className="w-px h-3 bg-white/10 mb-2" />
                        <StatCounter value="1.5" label="YRS EXPERIENCE" color="#fcee0a" delay={1.9} />
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                        <div className="w-px h-3 bg-white/10 mb-2" />
                        <StatCounter value="15" label="SKILLS MASTERED" color="#00f0ff" delay={2.0} />
                    </div>
                </motion.div>

            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 flex flex-col items-center gap-2 text-white/30 font-tech text-[10px] tracking-widest cursor-pointer hover:text-cyber-yellow transition-colors"
                onClick={scrollToAbout}
            >
                <span>SCROLL TO BEGIN</span>
                <ArrowDown className="w-4 h-4 text-cyber-yellow" />
            </motion.div>

        </section>
    );
};

export default Hero;
