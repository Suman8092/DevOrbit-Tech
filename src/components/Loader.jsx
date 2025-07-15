"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 sec loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f0f1a] to-[#111111] flex flex-col items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 drop-shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            DevOrbit Tech 🚀
          </motion.h1>

          <div className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            <Typewriter
              options={{
                strings: [
                  "Launching Innovation...",
                  "Crafting Smart Solutions...",
                  "Accelerating Digital Future...",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
