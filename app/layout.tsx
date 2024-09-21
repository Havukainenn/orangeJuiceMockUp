// src/app/layout.tsx

import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'orange.JUICE.STUDIOS',
  description: 'A modern and artistic website built with Next.js, TypeScript, and Three.js',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Include Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-rubik">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
