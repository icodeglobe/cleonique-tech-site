import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    { title: "Landing Page Redesign", tech: "Next.js, TailwindCSS", client: "UK Law Firm" },
    { title: "SaaS Dashboard", tech: "React, Firebase", client: "Cleonique Internal" },
    { title: "Booking System", tech: "Node.js, MongoDB", client: "Healthcare Startup" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-20 bg-gray-50 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.title}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl border bg-white shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-600 mb-1">Tech: {proj.tech}</p>
            <p className="text-sm text-gray-500">Client: {proj.client}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}