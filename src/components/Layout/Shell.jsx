import React, { useState, useEffect, useRef } from 'react';

import ScanlineOverlay from '../Effects/ScanlineOverlay';
import WebGLBackground from '../Effects/WebGLBackground';
import StaggeredMenu from '../Navigation/StaggeredMenu';
import Minimap from '../Navigation/Minimap';

const SECTIONS = [
    { id: 'hero', label: 'HOME', aria: 'Return to start' },
    { id: 'identity', label: 'ABOUT', aria: 'System identification' },
    { id: 'systems', label: 'STACK', aria: 'Technical architecture' },
    { id: 'missions', label: 'WORK', aria: 'Mission log' },
    { id: 'education', label: 'ACADEMICS', aria: 'Academic records' },
    { id: 'certificates', label: 'CREDENTIALS', aria: 'Security clearance' },
    { id: 'timeline', label: 'HISTORY', aria: 'Data log' },
    { id: 'transmission', label: 'CONTACT', aria: 'Establish link' },
];

const Shell = ({ children }) => {
    const containerRef = useRef(null);
    const [activeSection, setActiveSection] = useState('hero');

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of SECTIONS) {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                }
            }
        }
    };

    const scrollToSection = (e, id) => {
        e?.preventDefault();
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = SECTIONS.map(s => ({
        label: s.label,
        ariaLabel: s.aria,
        link: `#${s.id}`,
        onClick: (e) => scrollToSection(e, s.id)
    }));

    const socialItems = [
        { label: 'GitHub', link: 'https://github.com/SidM1403' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/sidhantm1403/' },
        { label: 'Email', link: 'mailto:sidhantmaurya1403@gmail.com' }
    ];

    return (
        <div className="relative min-h-screen w-full bg-cyber-black text-white selection:bg-neon-blue selection:text-black font-tech">
            {/* Global Effects */}
            <WebGLBackground />
            <ScanlineOverlay />

            {/* Light Grid Overlay (Retained for structure, but highly transparent) */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />

            {/* UI Layer */}
            <StaggeredMenu 
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#000000"
                openMenuButtonColor="#000000"
                changeMenuColorOnOpen={true}
                colors={['#060010', '#1a1a1a', '#fcee0a']}
                accentColor="#fcee0a"
                isFixed={true}
            />
            <Minimap activeSection={activeSection} onSectionClick={scrollToSection} />

            {/* Main Content */}
            <main 
                ref={containerRef}
                onScroll={handleScroll}
                className="relative z-10 w-full scroll-smooth"
            >
                {children}
            </main>

            {/* Footer / System Status */}
            <footer className="fixed bottom-0 left-0 w-full p-4 flex justify-between text-[10px] font-tech text-white/30 z-40 pointer-events-none">
                <span>EST. 2026 // v2.0.4</span>
                <span>NO SIGNAL DETECTED</span>
            </footer>
        </div>
    );
};

export default Shell;
