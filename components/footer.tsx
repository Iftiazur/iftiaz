"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-pink-500/20 mt-20">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 text-center"
        >
          ✨ Thank you for visiting my website! ✨
        </motion.p>
      </div>
    </footer>
  );
}
