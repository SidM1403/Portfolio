import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

const ElegantDust = () => {
    return (
        <group>
            {/* Subtle Fog for depth perspective */}
            <fog attach="fog" args={['#050510', 2, 10]} />
            
            {/* Ambient Cyan Particles */}
            <Sparkles 
                count={250} 
                scale={12} 
                size={1.5} 
                speed={0.2} 
                opacity={0.4} 
                color="#00f3ff" 
            />
            {/* Accent Purple Particles */}
            <Sparkles 
                count={100} 
                scale={10} 
                size={2} 
                speed={0.4} 
                opacity={0.5} 
                color="#bd00ff" 
            />
            {/* Special Gold Particles */}
            <Sparkles 
                count={50} 
                scale={8} 
                size={2.5} 
                speed={0.5} 
                opacity={0.6} 
                color="#fcee0a" 
            />
        </group>
    );
};

const InteractiveCamera = () => {
    useFrame((state) => {
        // Very subtle camera parallax based on pointing to elevate depth
        state.camera.position.x += (state.pointer.x * 0.4 - state.camera.position.x) * 0.05;
        state.camera.position.y += (state.pointer.y * 0.4 - state.camera.position.y) * 0.05;
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

const WebGLBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen scale-[1.05]">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }} gl={{ antialias: false, alpha: true }} dpr={[1, 1.5]}>
                <ElegantDust />
                <InteractiveCamera />
            </Canvas>
        </div>
    );
};

export default WebGLBackground;
