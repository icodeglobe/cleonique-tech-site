// src/components/Hero.tsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 bg-gradient-to-b from-white to-teal-50"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Scalable Digital Solutions for the UK Market
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        Cleonique Tech Limited delivers responsive, secure, and high-performance software tailored to your business needs.
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block bg-teal-600 text-white py-3 px-6 rounded-xl shadow-md hover:bg-teal-700 transition"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}
