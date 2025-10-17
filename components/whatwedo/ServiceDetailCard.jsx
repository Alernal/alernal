    "use client";
    import { useState } from "react";
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
        className="group bg-[#121816] rounded-2xl border border-[#00ff88]/20 overflow-hidden hover-glow transition-all cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        >
        <div className="p-8">
            <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <service.icon className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all">
            {service.title}
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
            </p>

            <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            >
            <div className="pt-4 border-t border-[#00ff88]/20">
                <h4 className="text-sm font-semibold text-[#00ff88] mb-3">Características:</h4>
                <ul className="space-y-2">
                {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400">
                    <ChevronRight className="w-4 h-4 text-[#00ff88]" />
                    {feature}
                    </li>
                ))}
                </ul>
            </div>
            </motion.div>

            <button className="mt-6 flex items-center gap-2 text-[#00ff88] font-medium group-hover:gap-3 transition-all">
            {isExpanded ? "Ver menos" : "Ver más"}
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
            </button>
        </div>
        </motion.div>
    );
    }