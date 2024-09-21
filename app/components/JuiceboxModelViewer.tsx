// src/app/components/JuiceboxModelViewer.tsx

'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib'; // Import GLTF type
import Loader from './Loader';
import * as THREE from 'three';

// Component to load and display GLTF model
const Juicebox: React.FC = () => {
  const gltf = useGLTF('/models/juicebox/juicebox.gltf') as GLTF;
  const juiceboxRef = useRef<THREE.Group>(null);

  // Animate
  useFrame(({ clock }) => {
    if (juiceboxRef.current) {
      juiceboxRef.current.rotation.y += 0.007;
      juiceboxRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1; // Float up and down
    }
  });

  return (
    <primitive
      ref={juiceboxRef}
      object={gltf.scene}
      scale={[0.05, 0.05, 0.05]}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, 0]}
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
