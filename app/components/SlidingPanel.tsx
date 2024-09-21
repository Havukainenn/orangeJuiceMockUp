// src/app/components/SlidingPanel.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa'; // For the close button

// Example SVG Icon
const ExampleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-500">
    <path fillRule="evenodd" d="M12 1.75a.75.75 0 00-1.5 0v10.44l-8.72-8.72a.75.75 0 00-1.06 1.06l10 10a.75.75 0 001.06 0l10-10a.75.75 0 00-1.06-1.06l-8.72 8.72V1.75z" clipRule="evenodd" />
  </svg>
);

interface SlidingPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSecondPanel: () => void;
}

const SlidingPanel: React.FC<SlidingPanelProps> = ({ isOpen, onClose, onOpenSecondPanel }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/* Sliding Panel */}
          <motion.div
            className="fixed top-0 right-0 w-[100%] h-[100%] sm:w-[33%] sm:h-[100%] bg-black shadow-lg z-40 overflow-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-orange-600 hover:text-white text-2xl focus:outline-none"
              aria-label="Close Panel"
            >
              <FaTimes />
            </button>

            {/* Example Icon */}
            <div className="flex flex-col justify-center items-center h-full p-8">
              <ExampleIcon />
              <motion.h2
                className="text-3xl font-bold mb-6 text-orange-500"
                variants={{
                  animate: {
                    y: [0, -5, 0, 5, 0],
                    transition: {
                      repeat: Infinity,
                      repeatType: 'mirror',
                      duration: 2,
                      ease: 'easeInOut',
                    },
                  },
                }}
                animate="animate"
              >
                Our Mission
              </motion.h2>

              <div className="text-center max-w-md">
                <p className="text-orange-600 mb-4">
                  At orange.JUICE Studios, our mission is to innovate, inspire, and deliver exceptional digital experiences to our users...
                </p>
              </div>

              {/* Button to open second sliding panel */}
              <div className="absolute bottom-8 right-8">
                <button
                  className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600 transition-colors focus:outline-none"
                  onClick={onOpenSecondPanel}
                >
                  More.juice
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlidingPanel;
