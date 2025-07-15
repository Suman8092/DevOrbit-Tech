import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1e1d22] to-[#2b2930] px-6 md:px-20 flex items-center justify-center">
      
      {/* Glowing Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-ping"></div>

      {/* Text Content */}
      <div className="z-10 text-center text-white max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Empowering the Future with <br />
          <span className="text-indigo-400">Next-Gen Tech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg text-gray-300"
        >
          DevOrbit Tech builds cutting-edge digital solutions that scale startups, empower students, and drive global innovation.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-700 transition">
            Let’s Build Together 🚀
          </button>
          <button className="border border-indigo-400 px-6 py-3 rounded-full text-indigo-300 hover:bg-indigo-500 hover:text-white transition">
            Explore More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
