// src/components/Testimonials.tsx
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { name: "James H.", text: "Cleonique delivered exactly what we needed – efficient and premium." },
    { name: "Sarah L.", text: "Professional, responsive, and very easy to work with. Highly recommend!" },
    { name: "Ali M.", text: "Our website is sleek, fast, and user-friendly – clients love it." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-40 bg-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-teal-50 border rounded-xl shadow-md"
          >
            <p className="text-gray-700 italic">“{t.text}”</p>
            <p className="mt-4 font-semibold text-teal-700">– {t.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}