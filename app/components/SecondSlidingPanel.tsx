'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const wavyTextVariants: Variants = {
  animate: {
    y: [0, -5, 0, 5, 0],
    transition: {
      repeat: Number.MAX_SAFE_INTEGER, // Use a large finite number
      repeatType: 'mirror' as const,   // Assert as const
      duration: 2,
      ease: 'easeInOut' as const,      // Assert as const if needed
    },
  },
};

interface SecondSlidingPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenThirdPanel: () => void;
}

const SecondSlidingPanel: React.FC<SecondSlidingPanelProps> = ({
  isOpen,
  onClose,
  onOpenThirdPanel,
}) => {
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
            className="fixed inset-0 bg-black bg-opacity-25 z-35"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/* Sliding Panel */}
          <motion.div
            className="fixed bottom-0 left-0 w-full h-full sm:w-[67%] sm:h-[33%] bg-black shadow-lg z-40 overflow-auto"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
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

            {/* Add SVG */}
            <div className="absolute top-4 left-4">
              <Image src="/orange.svg" alt="Orange Icon" width={50} height={50} />
            </div>

            {/* Panel Content */}
            <div className="flex flex-col justify-center items-center h-full p-8">
              {/* Animate the header */}
              <motion.h2
                className="text-3xl font-bold mb-6 text-orange-500"
                variants={wavyTextVariants}
                animate="animate"
              >
                About Us
              </motion.h2>

              <div className="text-center max-w-md">
                <p className="text-orange-600 mb-4">
                  orange.JUICE Studios was founded with the goal of bringing creative and dynamic digital solutions to life...
                </p>
              </div>

              {/* Button to open the third sliding panel */}
              <div className="absolute bottom-8 right-8">
                <button
                  onClick={onOpenThirdPanel}
                  className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600 transition-colors focus:outline-none"
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

export default SecondSlidingPanel;
