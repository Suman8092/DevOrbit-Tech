import { motion } from "framer-motion";

const projects = [
  {
    title: "Landing Page Creator",
    description: "Create and customize landing pages with templates.",
    image: "/projects/landingpage.png",
    liveLink: "https://your-live-link.com",
    codeLink: "https://github.com/your-repo",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack advanced shopping platform with cart & auth.",
    image: "/projects/musa.png",
    liveLink: "https://ecom-live.com",
    codeLink: "https://github.com/your-ecom",
  },
  {
    title: "AI Quiz Generator",
    description: "Smart quiz app using OpenAI for question generation.",
    image: "/projects/quiz.png",
    liveLink: "https://quizai.app",
    codeLink: "https://github.com/quiz-ai",
  },
  // Add more as needed
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f7f7f7] py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">🚀 Our Work</h2>
        <p className="text-gray-600 mt-2">Projects we’ve proudly built</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{project.description}</p>

              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-indigo-500 font-semibold hover:underline"
                >
                  🌐 Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="text-gray-700 font-semibold hover:underline"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
