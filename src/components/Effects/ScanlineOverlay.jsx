import React from 'react';

const ScanlineOverlay = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden h-screen w-full">
            {/* Scanline Animation */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,255,255,0.02)] to-transparent h-[4px] w-full animate-scanline"></div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>
    );
};

export default ScanlineOverlay;
