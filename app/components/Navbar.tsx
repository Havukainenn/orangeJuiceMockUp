// src/app/components/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end p-6 space-x-8 bg-transparent z-50">
      <Link
        href="#about"
        className="text-lg font-roboto hover:text-teal-300 transition-colors duration-300"
      >
        About
      </Link>
      <Link
        href="#contact"
        className="text-lg font-roboto hover:text-teal-300 transition-colors duration-300"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
