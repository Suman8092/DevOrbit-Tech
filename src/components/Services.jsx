import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaBrain, FaRocket } from 'react-icons/fa';

const services = [
  {
    title: "Web Development",
    icon: <FaCode size={32} className="text-pink-500" />,
    desc: "Modern, blazing-fast websites with stunning UI and SEO in mind.",
    bg: "from-pink-100 to-pink-50",
    shadow: "shadow-pink-300/40"
  },
  {
    title: "Mobile Apps",
    icon: <FaMobileAlt size={32} className="text-purple-500" />,
    desc: "Beautiful, responsive, cross-platform apps for Android & iOS.",
    bg: "from-purple-100 to-purple-50",
    shadow: "shadow-purple-300/40"
  },
  {
    title: "AI Integration",
    icon: <FaBrain size={32} className="text-blue-500" />,
    desc: "Build smarter apps with AI-driven logic, chatbots, and insights.",
    bg: "from-blue-100 to-blue-50",
    shadow: "shadow-blue-300/40"
  },
  {
    title: "Startup Growth",
    icon: <FaRocket size={32} className="text-orange-500" />,
    desc: "Tech stack, branding, launch support – we scale your vision.",
    bg: "from-orange-100 to-orange-50",
    shadow: "shadow-orange-300/40"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-[#fdfcfb] to-[#e8edec]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-800">🎨 Our Services</h2>
        <p className="text-gray-600 text-lg mt-3">Creative, colorful, and cutting-edge digital solutions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#fff"
              glarePosition="all"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className={`bg-gradient-to-br ${service.bg} border border-white/30 backdrop-blur-2xl rounded-3xl p-6 transition-transform duration-300 hover:scale-[1.03] shadow-xl ${service.shadow}`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
