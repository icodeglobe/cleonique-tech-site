// src/components/Footer.tsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-8 px-6 text-center"
    >
      <p className="text-sm">© {new Date().getFullYear()} Cleonique Tech Limited. All rights reserved.</p>
      <div className="mt-2 text-xs text-gray-400">
        Built with ❤️ by iCODE Software Solutions
      </div>
    </motion.footer>
  );
}
