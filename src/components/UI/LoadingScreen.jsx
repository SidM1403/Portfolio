import React, { useState, useEffect } from 'react';

const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING NEURAL INTERFACE...",
    "CHECKING SECURITY PROTOCOLS... OK",
    "ESTABLISHING UPLINK... 24ms",
    "DECRYPTING USER DATA...",
    "ACCESS GRANTED.",
    "WELCOME, USER."
];

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState([]);

    useEffect(() => {
        let lineIndex = 0;

        const interval = setInterval(() => {
            setText(prev => [...prev, bootText[lineIndex]]);
            lineIndex++;

            if (lineIndex >= bootText.length) {
                clearInterval(interval);
                setTimeout(onComplete, 800);
            }
        }, 300);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center font-tech text-neon-green p-8">
            <div className="w-full max-w-md space-y-2">
                {text.map((line, i) => (
                    <div key={i} className="border-l-2 border-neon-green pl-4 animate-flicker">
                        &gt; {line}
                    </div>
                ))}
                <div className="animate-pulse">_</div>
            </div>

            {/* Loading Bar */}
            <div className="absolute bottom-12 w-64 h-1 bg-gray-800">
                <div
                    className="h-full bg-neon-green transition-all duration-[2000ms] ease-linear"
                    style={{ width: text.length === bootText.length ? '100%' : `${(text.length / bootText.length) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
