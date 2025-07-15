import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    message:
      "DevOrbit Tech delivered beyond expectations. The 3D interface and smooth performance gave our platform a premium look!",
    image: "/avatars/1.jpg",
    rating: 5,
  },
  {
    name: "Lisa Müller",
    role: "Business Consultant",
    message:
      "I loved working with the team. They’re professional, creative, and tech-savvy. Highly recommended!",
    image: "/avatars/2.jpg",
    rating: 4,
  },
  {
    name: "John Doe",
    role: "App Developer",
    message:
      "They truly understand modern UI/UX and delivered a stunning portfolio site that helps me land new clients easily.",
    image: "/avatars/3.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-tr from-gray-800 to-gray-900 rounded-3xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-white object-cover shadow-lg"
              />
              <p className="text-lg italic mb-4 max-w-xl">"{testimonials[index].message}"</p>
              <div className="flex gap-1 mb-2">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h3 className="text-xl font-semibold mt-2">
                {testimonials[index].name}
              </h3>
              <p className="text-sm text-gray-400">{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white text-black hover:bg-gray-300 shadow-md"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <button
            onClick={next}
            className="p-2 rounded-full bg-white text-black hover:bg-gray-300 shadow-md"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
