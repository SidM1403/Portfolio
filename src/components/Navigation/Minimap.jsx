import React from 'react';

const sections = [
    { id: 'hero', label: 'SYS.BOOT' },
    { id: 'identity', label: 'IDENTITY' },
    { id: 'systems', label: 'SYSTEMS' },
    { id: 'missions', label: 'MISSIONS' },
    { id: 'certificates', label: 'CLEARANCE' },
    { id: 'timeline', label: 'HISTORY' },
    { id: 'transmission', label: 'SIGNAL' },
];

const Minimap = ({ activeSection, onSectionClick }) => {
    const scrollToSection = (e, id) => {
        if (onSectionClick) {
            onSectionClick(e, id);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className="group flex items-center justify-end gap-4"
                >
                    <span className={`text-[10px] font-tech text-right transition-all duration-300 ${activeSection === section.id ? 'text-neon-blue opacity-100' : 'text-gray-500 opacity-0 group-hover:opacity-100'
                        }`}>
                        {section.label}
                    </span>
                    <div className={`w-1 h-8 transition-all duration-300 ${activeSection === section.id
                            ? 'bg-neon-blue shadow-[0_0_10px_#00f3ff]'
                            : 'bg-white/10 group-hover:bg-white/30'
                        }`} />
                </button>
            ))}
        </div>
    );
};

export default Minimap;
