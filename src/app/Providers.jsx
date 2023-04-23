'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" min-h-screen select-none text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
