'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image'; 

const wavyTextVariants = {
  animate: {
    y: [0, -5, 0, 5, 0],
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

interface ThirdSlidingPanelProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToContactForm: () => void; // scroll to contact form
}

const ThirdSlidingPanel: React.FC<ThirdSlidingPanelProps> = ({
  isOpen,
  onClose,
  scrollToContactForm,
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
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          ></motion.div>

          {/* Third Sliding Panel */}
          <motion.div
            className="fixed top-0 left-0 w-[100%] h-[100%] sm:w-[33%] sm:h-[66%] bg-black shadow-lg z-50 overflow-auto"
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

            {/* Add SVG at the top-left */}
            <div className="absolute top-4 left-4">
              <Image src="/contact.svg" alt="Contact Icon" width={50} height={50} />
            </div>

            {/* Panel Content - Contact Information Section */}
            <div className="flex flex-col justify-center items-center h-full p-8">
              <motion.h2
                className="text-3xl font-bold mb-6 text-orange-500"
                variants={wavyTextVariants}
                animate="animate"
              >
                Contact Us
              </motion.h2>

              <div className="text-center max-w-md">
                <p className="text-orange-600 mb-4">
                  We'd love to hear from you! Feel free to reach out with any questions, project ideas, or general inquiries through the following contact information:
                </p>

                <p className="text-orange-600">contact@orangejuice.studios</p>
                <p className="text-orange-600">+1 (555) 123-4567</p>
                <p className="text-orange-600">123 Juicebox Lane, Orange City, CA 90210, USA</p>

                <p className="mt-4 text-orange-600">We aim to respond within 1-2 business days.</p>

                <button
                  className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600 transition-colors focus:outline-none mt-6"
                  onClick={() => {
                    onClose(); 
                    scrollToContactForm(); // scroll to the form
                  }}
                >
                  Or you can fill out our form here!
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThirdSlidingPanel;
