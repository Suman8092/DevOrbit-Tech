import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
      

        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-600 tracking-wide">
          DevOrbit <span className="text-gray-800">Tech</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600 relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Let's Talk
          </a>
        </nav>

        {/* Hamburger - Mobile */}
        <div
          className="md:hidden text-3xl text-indigo-700 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 animate-slideDown">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-full"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
