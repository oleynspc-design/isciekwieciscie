'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/uslugi', label: 'Usługi' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-bottle-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Leaf className="h-8 w-8 text-bottle-600 group-hover:text-bottle-700 transition-colors" />
            <span className="font-display text-xl font-semibold text-bottle-800">
              Iście Kwieciście
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-bottle-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-bottle-600 text-white px-6 py-2 rounded-full hover:bg-bottle-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-semibold"
            >
              Kontakt
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-bottle-700 hover:text-bottle-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-bottle-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-bottle-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block bg-bottle-600 text-white px-6 py-3 rounded-full hover:bg-bottle-700 transition-all duration-300 font-semibold text-center shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
