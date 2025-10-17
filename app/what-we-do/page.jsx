"use client";
import { motion } from "framer-motion";
import { Code2, Sparkles, Network, Lightbulb, Database, Cpu, Globe, Rocket } from "lucide-react";
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
    color: "from-[#00ff88] to-[#00ccaa]"
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
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#121816] to-[#0a0f0d]" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-xl flex items-center justify-center floating glow-effect">
                <Rocket className="w-8 h-8 text-[#0a0f0d]" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Soluciones</span> que transforman
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unimos diferentes ideas, tecnologías y disciplinas para crear 
              herramientas que resuelven problemas complejos de manera elegante
            </p>
          </motion.div>

          {/* Services Grid */}
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

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-[#121816]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Tecnologías</span> de vanguardia
            </h2>
            <p className="text-xl text-gray-300">
              Trabajamos con las herramientas más avanzadas del ecosistema tecnológico
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Database, name: "Cloud & DevOps" },
              { icon: Cpu, name: "AI & ML" },
              { icon: Globe, name: "Web & Mobile" },
              { icon: Network, name: "APIs & Integration" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#0a0f0d] p-8 rounded-2xl border border-[#00ff88]/20 hover-glow transition-all group cursor-pointer"
              >
                <tech.icon className="w-12 h-12 mx-auto mb-4 text-[#00ff88] group-hover:scale-110 transition-transform" />
                <h3 className="text-center font-semibold text-gray-200">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro <span className="gradient-text">proceso</span>
            </h2>
            <p className="text-xl text-gray-300">
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
                <div className="bg-[#121816] p-6 rounded-2xl border border-[#00ff88]/20 hover-glow transition-all">
                  <div className="text-5xl font-bold gradient-text mb-3">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{phase.title}</h3>
                  <p className="text-gray-400">{phase.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00ff88] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}