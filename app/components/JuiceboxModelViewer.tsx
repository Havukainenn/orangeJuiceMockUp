// src/app/components/JuiceboxModelViewer.tsx
'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import Loader from './Loader'; // Optional: Use if you created a Loader component

// Component to load and display GLTF model
const Juicebox = () => {
  const { scene } = useGLTF('/models/juicebox/juicebox.gltf') as any;
  const juiceboxRef = useRef(); 

  // Animate 
  useFrame(({ clock }) => {
    if (juiceboxRef.current) {
      juiceboxRef.current.rotation.y += 0.007; // Rotate slowly around the Y-axis
      juiceboxRef.current.position.y = Math.sin(clock.getElapsedTime()) * 10; // Float up and down
    }
  });

  return (
    <primitive
      ref={juiceboxRef}
      object={scene}
      scale={[0.05, 0.05, 0.05]} // Adjusted scale
      position={[0, 0, 0]} // Adjusted position
      rotation={[0, Math.PI / 4, 0]} // Initial rotation (45 degrees around Y-axis)
    />
  );
};

const JuiceboxModelViewer: React.FC = () => {
  return (
    <Canvas camera={{ position: [100, 55, 100], fov: 100 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Juicebox />
      </Suspense>

      
    </Canvas>
  );
};

export default JuiceboxModelViewer;
