"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Zap, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Clientes satisfechos" },
  { icon: CheckCircle, value: "100+", label: "Proyectos completados" },
  { icon: Zap, value: "24/7", label: "Soporte disponible" },
  { icon: Globe, value: "5+", label: "Países" }
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-[#121816]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-[#0a0f0d]" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}