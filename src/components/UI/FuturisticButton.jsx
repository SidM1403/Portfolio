import React from 'react';

const FuturisticButton = ({ children, onClick, href, download, className = '', type = "button" }) => {
    const Component = href ? 'a' : 'button';
    const commonProps = {
        onClick,
        className: `relative px-8 py-3 bg-cyber-yellow/10 border border-cyber-yellow text-cyber-yellow font-cyber tracking-widest uppercase transition-all duration-300 hover:bg-cyber-yellow hover:text-black hover:shadow-[0_0_20px_rgba(252,238,10,0.6)] clip-corner-4 ${className}`,
    };

    if (href) {
        return (
            <a {...commonProps} href={href} download={download}>
                {children}
                <span className="absolute top-0 left-0 w-2 h-2 bg-cyber-yellow"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-cyber-yellow"></span>
            </a>
        );
    }

    return (
        <button {...commonProps} type={type}>
            {children}
            <span className="absolute top-0 left-0 w-2 h-2 bg-cyber-yellow"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-cyber-yellow"></span>
        </button>
    );
};

export default FuturisticButton;
