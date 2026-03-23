import React from 'react';
import { motion } from 'framer-motion';
import HolographicCard from '../components/UI/HolographicCard';

const SkillBar = ({ name, level }) => (
    <div className="mb-4">
        <div className="flex justify-between text-xs font-tech mb-1">
            <span className="text-white">{name}</span>
            <span className="text-neon-blue">{level}%</span>
        </div>
        <div className="h-2 bg-white/10 w-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
            />
        </div>
    </div>
);

// SVG logo components — inline, zero dependencies
const Logos = {
    JavaScript: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#F7DF1E" rx="4" />
            <path fill="#000" d="M112 30H66v12h33v56c0 4-2 6-5 6s-5-2-7-6l-11 6c3 8 10 12 19 12 12 0 19-7 19-19V30zM60 30H16v12h19v45c0 4-2 6-5 6s-4-1-7-5L12 94c3 8 10 12 18 12 12 0 19-7 19-19V30z"/>
        </svg>
    ),
    TypeScript: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#3178C6" rx="4" />
            <path fill="#fff" d="M22 60h21v8H33v32h-9V68H22v-8zm41 0h30v8H73v6h12c6 0 11 2 14 6s4 9 4 15c0 5-1 10-4 14s-8 6-14 6H63V68v-8zm11 23v16h8c5 0 8-3 8-8s-3-8-8-8h-8z"/>
        </svg>
    ),
    React: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#20232A" />
            <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
                <ellipse cx="64" cy="64" rx="42" ry="17" />
                <ellipse cx="64" cy="64" rx="42" ry="17" transform="rotate(60 64 64)" />
                <ellipse cx="64" cy="64" rx="42" ry="17" transform="rotate(120 64 64)" />
            </g>
            <circle cx="64" cy="64" r="8" fill="#61DAFB" />
        </svg>
    ),
    NodeJS: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#1A1A1A" />
            <path fill="#83CD29" d="M64 17L24 40v48l40 23 40-23V40L64 17zm0 8l34 19.5v39L64 103 30 83.5v-39L64 25z"/>
            <path fill="#fff" d="M56 82V48l24 14L56 82z"/>
        </svg>
    ),
    MongoDB: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#13AA52" />
            <path fill="#fff" d="M69 98c0 0-1-19-4-23C58 67 50 60 50 45c0-18 13-28 14-28 1 0 14 10 14 28 0 15-8 22-15 30-3 4-4 23-4 23H69z"/>
        </svg>
    ),
    ExpressJS: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#000" rx="4" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="monospace" fontWeight="bold">express</text>
        </svg>
    ),
    Python: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#2B5B84" />
            <path fill="#FFD43B" d="M64 20c-12 0-18 5-18 14v8h36v4H46c-9 0-18 5-18 18 0 12 7 18 16 18h6v-9c0-9 7-14 16-14h22c8 0 12-4 12-12V36c0-10-6-16-20-16H64zm-5 8a4 4 0 110 8 4 4 0 010-8z"/>
            <path fill="#3473A5" d="M82 100c12 0 18-5 18-14V78H64v-4h36c9 0 18-5 18-18 0-12-7-18-16-18h-6v9c0 9-7 14-16 14H58c-8 0-12 4-12 12v22c0 10 6 16 20 16h16zm5-8a4 4 0 110-8 4 4 0 010 8z"/>
        </svg>
    ),
    TailwindCSS: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#0EA5E9" rx="4" />
            <path fill="#fff" d="M64 21c-19 0-32 10-38 28 6-8 13-11 22-9 5 1 8 4 12 8 6 7 12 14 27 14 19 0 32-10 38-28-6 8-13 11-22 9-5-1-8-4-12-8C85 28 79 21 64 21zm-26 35c-19 0-32 10-38 28 6-8 13-11 22-9 5 1 8 4 12 8 6 7 12 14 27 14 19 0 32-10 38-28-6 8-13 11-22 9-5-1-8-4-12-8-6-7-12-14-27-14z"/>
        </svg>
    ),
    'Next.js': () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#000" />
            <path fill="#fff" d="M105 110L51 38H38v52h10V50l48 65 9-7zM79 38h10v52H79z"/>
        </svg>
    ),
    MySQL: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#00618A" />
            <path fill="#fff" d="M34 38h8l10 28 10-28h8L55 90H48L34 38zm56 0h8v52h-8V38z"/>
            <path fill="#F29111" d="M75 38h8v52h-8V38zm-32 0 2 8H30v12h12v8H24V38h19z"/>
        </svg>
    ),
    PHP: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <ellipse cx="64" cy="64" rx="64" ry="38" fill="#8892BF" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="28" fontFamily="monospace" fontWeight="bold">php</text>
        </svg>
    ),
    Git: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#F03C2E" />
            <path fill="#fff" d="M111 58L70 17a9 9 0 00-13 0L44 29l16 16a10 10 0 0113 13l16 16 9-9a9 9 0 000-12zM38 35L17 56a9 9 0 000 12l41 42a9 9 0 0013 0l9-9-40-40a10 10 0 010-14l9-9-11-3z"/>
        </svg>
    ),
    'C++': () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <circle cx="64" cy="64" r="64" fill="#004A8C" />
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="28" fontFamily="monospace" fontWeight="bold">C++</text>
        </svg>
    ),
    'Three.js': () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#000" rx="4" />
            <polygon points="64,16 112,104 16,104" fill="none" stroke="#fff" strokeWidth="4" />
            <polygon points="64,40 88,80 40,80" fill="#fff" opacity="0.5" />
        </svg>
    ),
    DSA: () => (
        <svg viewBox="0 0 128 128" className="w-full h-full">
            <rect width="128" height="128" fill="#bd00ff" rx="4" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="22" fontFamily="monospace" fontWeight="bold">DSA</text>
        </svg>
    ),
};

const TECH_LIST = [
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'React', color: '#61DAFB' },
    { name: 'NodeJS', color: '#83CD29' },
    { name: 'MongoDB', color: '#13AA52' },
    { name: 'ExpressJS', color: '#fff' },
    { name: 'Python', color: '#FFD43B' },
    { name: 'TailwindCSS', color: '#38BDF8' },
    { name: 'Next.js', color: '#fff' },
    { name: 'MySQL', color: '#00618A' },
    { name: 'PHP', color: '#8892BF' },
    { name: 'Git', color: '#F03C2E' },
    { name: 'C++', color: '#00599C' },
    { name: 'Three.js', color: '#fff' },
    { name: 'DSA', color: '#bd00ff' },
];

// Double the array so seamless loop works
const DOUBLED = [...TECH_LIST, ...TECH_LIST];

const LogoMarquee = ({ direction = 'left', speed = 35, onHoverTech }) => {
    const duration = `${TECH_LIST.length * speed}s`;
    const animClass = direction === 'left' ? 'marquee-ltr' : 'marquee-rtl';

    return (
        <div className="overflow-hidden relative w-full py-3 group">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, var(--cyber-black), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, var(--cyber-black), transparent)' }} />

            <div
                className={`flex gap-6 ${animClass} group-hover:pause`}
                style={{ animationDuration: duration, width: 'max-content' }}
            >
                {DOUBLED.map((tech, i) => {
                    const LogoComp = Logos[tech.name];
                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-2 cursor-default group/logo"
                            title={tech.name}
                            onMouseEnter={() => onHoverTech?.(tech.name)}
                            onMouseLeave={() => onHoverTech?.(null)}
                        >
                            <div
                                className="w-12 h-12 rounded-lg overflow-hidden p-1 bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:border-white/20"
                                style={{ boxShadow: `0 0 0px ${tech.color}` }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 14px ${tech.color}60`; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 0px ${tech.color}`; }}
                            >
                                {LogoComp ? <LogoComp /> : (
                                    <div className="w-full h-full flex items-center justify-center text-[10px] font-tech text-white">{tech.name}</div>
                                )}
                            </div>
                            <span className="text-[9px] font-tech text-white/30 tracking-widest group-hover/logo:text-white/60 transition-colors">
                                {tech.name.toUpperCase()}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CARDS = [
    {
        title: 'LANGUAGES',
        skills: [['JAVASCRIPT (ES6+)', 95], ['TYPESCRIPT', 80], ['PYTHON', 75], ['C++', 70]],
    },
    {
        title: 'FRONTEND',
        skills: [['REACT / NEXT.JS', 90], ['TAILWIND CSS', 92], ['FRAMER MOTION', 80], ['THREE.JS / R3F', 60]],
    },
    {
        title: 'BACKEND',
        skills: [['NODE.JS / EXPRESS', 85], ['MONGODB', 82], ['PHP / MYSQL', 70], ['DSA', 80]],
    },
];

const Systems = () => {
    const [activeNode, setActiveNode] = React.useState(null);

    // Dynamic circuit color helper
    const getCircuitColor = (node) => {
        if (!node) return 'rgba(252, 238, 10, 0.1)';
        const cardColors = {
            LANGUAGES: 'rgba(0, 240, 255, 0.4)',
            FRONTEND: 'rgba(5, 255, 161, 0.4)',
            BACKEND: 'rgba(189, 0, 255, 0.4)'
        };
        return cardColors[node] || 'rgba(252, 238, 10, 0.4)';
    };

    return (
        <section id="systems" className="min-h-screen py-20 px-4 flex flex-col justify-center relative overflow-hidden" onMouseLeave={() => setActiveNode(null)}>
            {/* S-Tier Hex Logic Background */}
            <div className="absolute inset-0 bg-hex-logic opacity-20 pointer-events-none hex-flicker" />
            
            {/* Interactive Circuit Connectors */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div 
                    className={`circuit-line-path h-[1px] w-[30%] top-[45%] left-0 ${activeNode ? 'circuit-line-active' : ''}`}
                    style={{ backgroundColor: getCircuitColor(activeNode) }}
                >
                    {activeNode && <div className="circuit-pulse-packet" />}
                </div>
                <div 
                    className={`circuit-line-path h-[1px] w-[40%] top-[35%] right-0 ${activeNode ? 'circuit-line-active' : ''}`}
                    style={{ backgroundColor: getCircuitColor(activeNode) }}
                >
                    {activeNode && <div className="circuit-pulse-packet" style={{ animationDirection: 'reverse' }} />}
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative">

                {/* Section watermark */}
                <div className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden opacity-[0.02]">
                    <span className="font-cyber font-black text-[15vw] text-cyber-yellow whitespace-nowrap">SYSTEMS</span>
                </div>

                <div className="flex justify-end items-center gap-4 mb-4 opacity-40 font-tech text-[10px] tracking-[0.3em] text-neon-green">
                    <span className="animate-pulse">●</span> SYSTEM_STATUS: ONLINE
                </div>

                <h2 className="text-4xl md:text-6xl font-cyber font-bold text-end mb-16 relative">
                    SKILLS <span className="text-cyber-yellow">02.</span>
                    <div className="absolute -bottom-4 right-0 w-40 h-px" style={{ background: 'linear-gradient(to left, #fcee0a, transparent)' }} />
                </h2>

                {/* ── Logo Marquee Strip ── */}
                <div className="mb-12 border-y border-white/5 py-4 bg-black/20 backdrop-blur-sm relative z-20">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyber-yellow" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyber-yellow" />
                    <LogoMarquee direction="left" speed={3} onHoverTech={(name) => setActiveNode(name)} />
                </div>

                {/* ── Skill Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {CARDS.map((card, i) => {
                        const colors = {
                            LANGUAGES: 'text-neon-blue border-neon-blue/30',
                            FRONTEND: 'text-neon-green border-neon-green/30',
                            BACKEND: 'text-neon-purple border-neon-purple/30'
                        };
                        const cardStyle = colors[card.title] || 'text-neon-blue border-neon-blue/30';
                        
                        return (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setActiveNode(card.title)}
                                className="relative"
                            >
                                <HolographicCard>
                                    <h3 className={`text-2xl font-cyber ${cardStyle.split(' ')[0]} mb-8 border-b ${cardStyle.split(' ')[1]} pb-2 flex justify-between items-center`}>
                                        {card.title}
                                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${activeNode === card.title ? `bg-current shadow-[0_0_10px_currentColor] scale-125` : 'bg-white/20'}`} />
                                    </h3>
                                    {card.skills.map(([name, level]) => (
                                        <SkillBar key={name} name={name} level={level} />
                                    ))}
                                </HolographicCard>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Systems;
