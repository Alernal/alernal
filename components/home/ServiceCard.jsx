import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-[#121816] p-8 rounded-2xl border border-[#00ff88]/20 hover-glow transition-all cursor-pointer"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-[#0a0f0d]" />
      </div>
      <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
}