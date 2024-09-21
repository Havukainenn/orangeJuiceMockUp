'use client';
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, GLTF } from '@react-three/drei';
import Loader from './Loader';

type GLTFResult = GLTF & {
  nodes: any; 
  materials: any; 
};

// load and display GLTF model
const Juicebox = () => {
  const { scene } = useGLTF('/models/juicebox/juicebox.gltf') as GLTFResult;
  const juiceboxRef = useRef<THREE.Object3D>(null);

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
      object={scene}
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
