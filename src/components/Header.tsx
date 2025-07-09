// src/components/Header.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-600">Cleonique Tech</div>
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-gray-700 hover:text-teal-600 transition">
              {label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden block text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-teal-600 transition">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
