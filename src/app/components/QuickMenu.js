// src/app/components/QuickMenu.jsx

'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function QuickMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 left-8 z-50 p-2 rounded-full bg-zinc-800 text-white md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-900 bg-opacity-95 backdrop-blur-md overflow-y-auto md:hidden">
          {/* Render the children inside the opened menu */}
          <div className="p-8">{children}</div>
        </div>
      )}
    </>
  );
}