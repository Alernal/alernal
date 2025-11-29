"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ServiceDetailCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#80b635] hover:shadow-xl transition-all cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        
        {/* Icon */}
        <div className="w-14 h-14 bg-[#80b635] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#80b635]/20">
          <service.icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-[#05292e] group-hover:text-[#80b635] transition-all">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Expandable Features */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-[#80b635] mb-3">
              Características:
            </h4>

            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#80b635]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Toggle Button */}
        <button className="mt-6 flex items-center gap-2 text-[#80b635] font-medium group-hover:gap-3 transition-all">
          {isExpanded ? "Ver menos" : "Ver más"}
          <ChevronRight 
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} 
          />
        </button>

      </div>
    </motion.div>
  );
}
