import React from 'react';

/**
 * Layout component:
 * - Basic structure for the app (header, footer, etc.).
 */
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-indigo-500 text-white p-4">
        <h1 className="text-2xl font-bold">AI Insult Generator</h1>
      </header>

      <main className="flex-grow p-4 flex flex-col items-center justify-center">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-2 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} AI Insult Generator. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
