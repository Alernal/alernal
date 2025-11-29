"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Sparkles, Network, Lightbulb, 
  Rocket, Zap, Target 
} from "lucide-react";
import ServiceDetailCard from "@/components/whatwedo/ServiceDetailCard";

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software Personalizado",
    description: "Creamos soluciones a medida que se adaptan perfectamente a las necesidades únicas de tu negocio",
    features: [
      "Aplicaciones web y móviles",
      "Sistemas empresariales",
      "Plataformas SaaS",
      "APIs y microservicios"
    ],
    color: "from-[#80b635] to-[#00ccaa]"
  },
  {
    icon: Sparkles,
    title: "Integración de Tecnologías Inteligentes",
    description: "Implementamos IA, automatización y APIs para potenciar tus operaciones",
    features: [
      "Inteligencia Artificial",
      "Machine Learning",
      "Automatización de procesos",
      "Integración de APIs"
    ],
    color: "from-[#00ccff] to-[#0088ff]"
  },
  {
    icon: Network,
    title: "Diseño de Arquitecturas Digitales",
    description: "Construimos infraestructuras escalables, seguras y eficientes para tu crecimiento",
    features: [
      "Arquitectura cloud",
      "Microservicios",
      "Sistemas distribuidos",
      "DevOps y CI/CD"
    ],
    color: "from-[#ff00ff] to-[#cc00ff]"
  },
  {
    icon: Lightbulb,
    title: "Innovación Estratégica Empresarial",
    description: "Te ayudamos a identificar oportunidades tecnológicas que impulsen tu transformación digital",
    features: [
      "Consultoría tecnológica",
      "Transformación digital",
      "Estrategia de innovación",
      "Análisis de datos"
    ],
    color: "from-[#ffaa00] to-[#ff8800]"
  }
];

export default function WhatWeDo() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 mx-auto bg-[#80b635] rounded-xl flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#05292e]">
              <span className="text-[#80b635]">Servicios</span> especializados
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones tecnológicas end-to-end diseñadas para impulsar el crecimiento de tu empresa
            </p>
          </motion.div>

          {/* Services */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard 
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#05292e]">
              <span className="text-[#80b635]">Resultados</span> medibles
            </h2>
            <p className="text-xl text-gray-600">
              Lo que nuestros clientes logran al trabajar con nosotros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Rocket, 
                title: "Reducción de costos operativos", 
                value: "40%",
                desc: "Promedio de ahorro en procesos automatizados"
              },
              { 
                icon: Zap, 
                title: "Tiempo de salida al mercado", 
                value: "60%",
                desc: "Más rápido con metodología ágil"
              },
              { 
                icon: Target, 
                title: "Retorno de inversión", 
                value: "12 meses",
                desc: "ROI promedio en proyectos implementados"
              }
            ].map((b, index) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#80b635] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#80b635]/20">
                  <b.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-4xl font-bold text-[#80b635] mb-2">{b.value}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#05292e]">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#05292e]">
              Nuestro <span className="text-[#80b635]">proceso</span>
            </h2>
            <p className="text-xl text-gray-600">
              Metodología ágil enfocada en resultados medibles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Descubrimiento", desc: "Entendemos tu visión y objetivos" },
              { step: "02", title: "Diseño", desc: "Creamos la arquitectura perfecta" },
              { step: "03", title: "Desarrollo", desc: "Construimos con precisión" },
              { step: "04", title: "Lanzamiento", desc: "Desplegamos y optimizamos" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-[#80b635] mb-3">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2 text-[#05292e]">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#80b635] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
