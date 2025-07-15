import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#0f0f1a] overflow-hidden">
      {/* Gradient Blobs Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500 opacity-20 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* Fancy Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
              alt="DevOrbit Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            🔥 About DevOrbit Tech
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            We’re a futuristic digital agency transforming brands with design, code, and AI.
            Our mission is simple: build immersive, scalable, and intelligent products
            that grow with you.
          </p>
          <p className="text-gray-400 text-md">
            With global clients, startup partners, and student innovators, we deliver real-world results with modern tools — from 3D hero sections to AI-powered experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
