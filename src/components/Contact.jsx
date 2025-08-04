import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [reply, setReply] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateAutoReply = (name, message) => {
    const keywords = ["website", "app", "project", "pricing", "timeline"];
    const lowerMessage = message.toLowerCase();

    const matchedKeyword = keywords.find((kw) => lowerMessage.includes(kw));

    switch (matchedKeyword) {
      case "website":
        return `Hi ${name}, thank you for reaching out! We'd love to help you build an awesome website. We'll contact you shortly.`;
      case "app":
        return `Hi ${name}, building apps is our passion! One of our experts will connect with you soon.`;
      case "project":
        return `Hi ${name}, thanks for your project query. Let’s collaborate! We’ll reach out soon.`;
      case "pricing":
        return `Hi ${name}, we’ll share detailed pricing information shortly. Thanks for asking!`;
      case "timeline":
        return `Hi ${name}, we’ll review your timeline and contact you with suggestions soon.`;
      default:
        return `Hi ${name}, thank you for your message! We'll be in touch very soon.`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const autoReply = generateAutoReply(form.name, form.message);
    setReply(autoReply);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Get in Touch
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 transition-colors text-black font-bold px-6 py-3 rounded-xl shadow-lg"
          >
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
        {reply && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-teal-300 bg-white/5 rounded-xl px-6 py-4"
          >
            <p className="text-sm md:text-base"> Auto-reply: {reply}</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
