// src/app/components/OverlayShapes.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OverlayShapes: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-70"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-5 w-24 h-24 bg-blue-300 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-16 h-16 bg-green-300 rounded-full opacity-50"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
    </>
  );
};

export default OverlayShapes;
