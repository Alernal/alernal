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
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#80b635]/10 rounded-xl flex items-center justify-center border border-[#80b635]/20 group-hover:bg-[#80b635] transition-all">
                <stat.icon className="w-8 h-8 text-[#80b635] group-hover:text-white transition-colors" />
              </div>

              <div className="text-4xl font-bold text-[#05292e] mb-2">
                {stat.value}
              </div>

              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
