import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus } from 'lucide-react';

const COMMANDS = {
    help: () => [
        '┌─────────────────────────────────────┐',
        '│  AVAILABLE COMMANDS                 │',
        '├─────────────────────────────────────┤',
        '│  about        → About Siddhant      │',
        '│  skills       → Tech stack          │',
        '│  projects     → All projects        │',
        '│  contact      → Contact info        │',
        '│  resume       → Download CV         │',
        '│  availability → Hire status         │',
        '│  clear        → Clear terminal      │',
        '└─────────────────────────────────────┘',
    ],
    about: () => [
        '> IDENTITY: Siddhant Maurya',
        '> ROLE: Full Stack Developer',
        '> STACK: MERN | React | Node.js',
        '> BASE: India',
        '> FOCUS: High-performance scalable web apps',
        '> EXPERIENCE: 1.5 years building real products',
    ],
    skills: () => [
        '> FRONTEND ──────────────────────────',
        '  React.js ████████████████████ 95%',
        '  TypeScript █████████████████░░ 80%',
        '  Tailwind CSS ████████████████████ 92%',
        '> BACKEND ───────────────────────────',
        '  Node.js ██████████████████░░ 85%',
        '  MongoDB █████████████████░░░ 82%',
        '  Express.js ██████████████████░░ 85%',
        '> CORE ──────────────────────────────',
        '  DSA ████████████████░░░░ 80%',
        '  JavaScript ████████████████████ 95%',
    ],
    projects: () => [
        '> ACTIVE CONTRACTS [4 FOUND]',
        '',
        '  [01] WellConnect',
        '       MERN Health Platform',
        '       → wellnessconnect-ui.onrender.com',
        '',
        '  [02] Multi-Sport Score Tracker',
        '       Live Score Platform | MERN',
        '       → github.com/SidM1403/Multi-Sports-Live-Tracker',
        '',
        '  [03] Event Management Platform',
        '       Full-Stack | PHP + MySQL',
        '       → github.com/SidM1403/event',
        '',
        '  [04] Project Management Dashboard',
        '       Role-Based App | React + Vite',
        '       → project-managament-beryl.vercel.app',
    ],
    contact: () => [
        '> TRANSMISSION CHANNELS:',
        '',
        '  EMAIL  → sidhantmaurya1403@gmail.com',
        '  GITHUB → github.com/SidM1403',
        '',
        '> Scroll to CONTACT section to send a message.',
    ],
    resume: () => {
        window.open('/resume.pdf', '_blank');
        return [
            '> INITIATING SECURE DOWNLOAD...',
            '> resume.pdf → TRANSMITTED ✓',
            '> Check your downloads folder.',
        ];
    },
    availability: () => [
        '> ● STATUS: OPEN TO OPPORTUNITIES',
        '> AVAILABLE: Immediately',
        '> LOOKING FOR: Full Stack / Frontend roles',
        '> PREFERRED: Remote / Hybrid',
        '> Contact: sidhantmaurya1403@gmail.com',
    ],
    clear: () => '__CLEAR__',
};

const BOOT_LINES = [
    '> PORTFOLIO.OS TERMINAL v1.0',
    '> Type "help" to see available commands.',
    '─────────────────────────────────────',
];

const TerminalWidget = () => {
    const [open, setOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const [lines, setLines] = useState(BOOT_LINES);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [histIdx, setHistIdx] = useState(-1);
    const [showHint, setShowHint] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Show hint once on first visit
    useEffect(() => {
        const seen = localStorage.getItem('terminal-hint-seen');
        if (!seen) {
            const t = setTimeout(() => {
                setShowHint(true);
                // Auto-dismiss after 5s
                setTimeout(() => {
                    setShowHint(false);
                    localStorage.setItem('terminal-hint-seen', '1');
                }, 5000);
            }, 3000);
            return () => clearTimeout(t);
        }
    }, []);

    useEffect(() => {
        if (open && !minimized) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open, minimized]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [lines]);

    const runCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        const echo = `$ ${cmd}`;
        if (!trimmed) return;

        setHistory(h => [trimmed, ...h]);
        setHistIdx(-1);

        const fn = COMMANDS[trimmed];
        if (fn) {
            const result = fn();
            if (result === '__CLEAR__') {
                setLines(BOOT_LINES);
            } else {
                setLines(l => [...l, echo, ...result, '']);
            }
        } else {
            setLines(l => [
                ...l,
                echo,
                `> Command not found: "${trimmed}" — type "help" for options.`,
                '',
            ]);
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            runCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            const idx = Math.min(histIdx + 1, history.length - 1);
            setHistIdx(idx);
            setInput(history[idx] ?? '');
        } else if (e.key === 'ArrowDown') {
            const idx = Math.max(histIdx - 1, -1);
            setHistIdx(idx);
            setInput(idx === -1 ? '' : history[idx]);
        }
    };

    return (
        <>
            {/* Toggle Button + Hint */}
            <AnimatePresence>
                {!open && (
                    <motion.div
                        key="toggle-wrap"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
                    >
                        {/* Hint tooltip */}
                        <AnimatePresence>
                            {showHint && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 6 }}
                                    className="flex items-center gap-2 px-3 py-2 border border-neon-green/50 bg-black/95 text-neon-green font-tech text-[10px] tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(5,255,161,0.15)]"
                                >
                                    <span>✦ Try the Terminal!</span>
                                    <span className="text-neon-green/40">↓</span>
                                    <button
                                        onClick={() => { setShowHint(false); localStorage.setItem('terminal-hint-seen', '1'); }}
                                        className="ml-1 text-white/20 hover:text-white transition-colors"
                                    >✕</button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Terminal button */}
                        <button
                            onClick={() => { setOpen(true); setShowHint(false); localStorage.setItem('terminal-hint-seen', '1'); }}
                            className="relative w-12 h-12 border border-neon-green/40 bg-black/80 text-neon-green flex items-center justify-center hover:bg-neon-green/10 hover:border-neon-green transition-all duration-300"
                            title="Open Terminal — type 'help' to start"
                        >
                            <Terminal className="w-5 h-5" />
                            <span className="absolute inset-0 border border-neon-green/20 animate-ping" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Terminal Window */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="terminal"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[420px] max-w-[calc(100vw-2rem)] border border-neon-green/30 bg-black/95 backdrop-blur-sm shadow-[0_0_40px_rgba(5,255,161,0.1)]"
                        onClick={() => inputRef.current?.focus()}
                    >
                        {/* Title Bar */}
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-neon-green/20 bg-neon-green/5">
                            <Terminal className="w-3 h-3 text-neon-green" />
                            <span className="text-[10px] font-tech text-neon-green tracking-widest flex-1">PORTFOLIO.OS — TERMINAL</span>
                            <button onClick={() => setMinimized(m => !m)} className="text-white/30 hover:text-white transition-colors">
                                <Minus className="w-3 h-3" />
                            </button>
                            <button onClick={() => setOpen(false)} className="text-white/30 hover:text-neon-red transition-colors">
                                <X className="w-3 h-3" />
                            </button>
                        </div>

                        <AnimatePresence>
                            {!minimized && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 280 }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    {/* Output */}
                                    <div className="h-56 overflow-y-auto p-4 font-tech text-xs text-neon-green leading-relaxed space-y-0.5">
                                        {lines.map((line, i) => (
                                            <div key={i} className={line.startsWith('$') ? 'text-cyber-yellow' : ''}>{line || '\u00A0'}</div>
                                        ))}
                                        <div ref={bottomRef} />
                                    </div>

                                    {/* Input */}
                                    <div className="border-t border-neon-green/20 px-4 py-2 flex items-center gap-2">
                                        <span className="text-neon-green font-tech text-xs">$</span>
                                        <input
                                            ref={inputRef}
                                            value={input}
                                            onChange={e => setInput(e.target.value)}
                                            onKeyDown={handleKey}
                                            className="flex-1 bg-transparent text-neon-green font-tech text-xs focus:outline-none placeholder-neon-green/20 caret-neon-green"
                                            placeholder="type a command..."
                                            autoComplete="off"
                                            spellCheck="false"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalWidget;
