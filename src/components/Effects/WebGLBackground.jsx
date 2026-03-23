import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// A single floating starfield that rotates slowly
const Starfield = (props) => {
    const ref = useRef();

    // Generate 5000 points inside a sphere of radius 10
    const sphere = useMemo(() => random.inSphere(new Float32Array(5000 * 3), { radius: 10 }), []);

    useFrame((state, delta) => {
        if (!ref.current) return;

        // Slow rotation over time
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        // Slight interactive tilt based on mouse position
        const pointer = state.pointer; // { x: -1 to 1, y: -1 to 1 }

        // Target rotations based on mouse
        const targetX = (pointer.y * Math.PI) / 8;
        const targetY = (pointer.x * Math.PI) / 8;

        // Smoothly interpolate towards target
        ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.02;
        ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.02;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#05ffa1" // Neon green
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const WebGLBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Starfield />
            </Canvas>
        </div>
    );
};

export default WebGLBackground;
