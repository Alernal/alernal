import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="w-14 h-14 bg-[#80b635] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#80b635]/20">
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-[#05292e] group-hover:text-[#80b635] transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
