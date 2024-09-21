// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'orange.JUICE.STUDIOS',
  description: 'A modern and artistic website built with Next.js, TypeScript, and Three.js',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-rubik">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
