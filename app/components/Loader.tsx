// src/app/components/Loader.tsx
'use client';

import React from 'react';
import { Html } from '@react-three/drei';

const Loader: React.FC = () => {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
        <span className="text-white text-lg">Loading...</span>
      </div>
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Html>
  );
};

export default Loader;
