import React from 'react';
import FuturisticButton from '../components/UI/FuturisticButton';
import { Mail, Linkedin, Github } from 'lucide-react';

const Transmission = () => {
    const [status, setStatus] = React.useState('IDLE'); // IDLE, ENCRYPTING, SENT

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('ENCRYPTING');
        setTimeout(() => {
            setStatus('SENT');
        }, 3000);
    };

    return (
        <section id="transmission" className="min-h-screen py-20 px-4 flex items-center justify-center relative overflow-hidden">
            {/* S-Tier Signal Interference Background */}
            <div className="absolute inset-0 bg-cyber-black pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />
            
            {/* Uplink Beam Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute inset-0 bg-white/[0.01] pointer-events-none animate-flicker" />

            <div className="max-w-4xl w-full relative z-10 text-center">

                <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-8 text-white relative inline-block">
                    <span className="text-neon-purple">06.</span> CONTACT
                    <div className="absolute -bottom-4 left-0 w-40 h-px" style={{ background: 'linear-gradient(to right, #bd00ff, transparent)' }} />
                </h2>

                <p className="text-gray-400 font-tech text-lg mb-12 max-w-xl mx-auto">
                    I'm currently open to new opportunities and collaborations. Feel free to reach out via the form below!
                </p>

                <div className="max-w-md mx-auto relative">
                    {status === 'ENCRYPTING' && (
                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm border border-neon-purple/30 p-8">
                            <div className="text-neon-purple font-tech text-sm mb-4 animate-pulse">PROCESSING_MESSAGE...</div>
                            <div className="w-full h-1 bg-white/10 overflow-hidden">
                                <div className="encryption-bar encrypting" />
                            </div>
                        </div>
                    )}

                    {status === 'SENT' && (
                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm border border-neon-green/30 p-8">
                            <div className="w-12 h-12 border-2 border-neon-green rounded-full flex items-center justify-center mb-4">
                                <div className="w-6 h-6 bg-neon-green rounded-sm animate-ping" />
                            </div>
                            <div className="text-neon-green font-tech text-xl">MESSAGE SENT</div>
                            <button onClick={() => setStatus('IDLE')} className="mt-6 text-[10px] font-tech text-gray-400 hover:text-white underline uppercase">Send Another</button>
                        </div>
                    )}

                    <form className={`space-y-6 text-left transition-opacity duration-500 ${status !== 'IDLE' ? 'opacity-20 pointer-events-none' : ''}`} onSubmit={handleSubmit}>
                        <div className="space-y-2 group">
                            <label className="text-[10px] font-tech text-neon-blue/50 ml-2 tracking-widest group-focus-within:text-neon-blue">YOUR NAME</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-cyber-light/50 border border-white/10 p-4 text-white font-tech focus:border-neon-blue focus:outline-none focus:bg-cyber-light transition-all clip-corner-1"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-[10px] font-tech text-neon-blue/50 ml-2 tracking-widest group-focus-within:text-neon-blue">YOUR EMAIL</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-cyber-light/50 border border-white/10 p-4 text-white font-tech focus:border-neon-blue focus:outline-none focus:bg-cyber-light transition-all clip-corner-1"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-[10px] font-tech text-neon-blue/50 ml-2 tracking-widest group-focus-within:text-neon-blue">YOUR MESSAGE</label>
                            <textarea
                                rows={4}
                                required
                                className="w-full bg-cyber-light/50 border border-white/10 p-4 text-white font-tech focus:border-neon-blue focus:outline-none focus:bg-cyber-light transition-all clip-corner-1 resize-none"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <FuturisticButton type="submit">
                                SEND MESSAGE
                            </FuturisticButton>
                        </div>
                    </form>
                </div>

                <div className="mt-16 flex justify-center gap-8">
                    <a href="mailto:sidhantmaurya1403@gmail.com" className="text-gray-500 hover:text-neon-blue transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/sidhantm1403/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-blue transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/SidM1403" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-blue transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Transmission;
