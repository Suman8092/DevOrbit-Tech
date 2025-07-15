import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f1a] to-[#111] text-white py-10 px-6 border-t border-white/10 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            DevOrbit Tech 🚀
          </h2>
          <p className="text-gray-400">
            Accelerating Digital Innovation – From AI-driven apps to immersive 3D websites, we build for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#hero" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="mailto:info@devorbit.tech" className="hover:text-green-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DevOrbit Tech. All rights reserved.
      </div>
    </footer>
  );
}
