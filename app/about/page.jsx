"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Rocket, Globe, Users } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de resolver problemas y crear valor"
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y nos apasiona crear tecnología que importa"
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Creemos en el poder del trabajo en equipo y la diversidad de ideas"
  },
  {
    icon: Globe,
    title: "Impacto Global",
    description: "Construimos soluciones que trascienden fronteras y transforman industrias"
  }
];

export default function About() {
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
                <Heart className="w-8 h-8 text-[#0a0f0d]" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Nosotros</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos un equipo apasionado por la tecnología y la innovación, 
              comprometidos con transformar el futuro digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-[#121816]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Nuestra <span className="gradient-text">historia</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                ALERNAL nació de la visión de crear tecnología que realmente marque la diferencia. 
                Desde Colombia, trabajamos con empresas de todo el mundo para construir soluciones 
                que desafían lo convencional.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Combinamos ingeniería de software de clase mundial con diseño innovador e 
                inteligencia artificial para crear herramientas que no solo resuelven problemas, 
                sino que transforman industrias completas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-[#00ff88]/20 hover-glow">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Equipo ALERNAL"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#121816] p-10 rounded-3xl border border-[#00ff88]/20 hover-glow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#0a0f0d]" />
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Nuestra Misión</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Construir soluciones de base tecnológica que desafían lo tradicional, 
                combinando ingeniería, diseño e inteligencia artificial para crear 
                herramientas que transformen el futuro digital.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#121816] p-10 rounded-3xl border border-[#00ff88]/20 hover-glow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ccff] to-[#0088ff] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Nuestra Visión</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ser reconocidos como líderes en innovación tecnológica, creando soluciones 
                que no solo resuelven problemas actuales, sino que anticipan las necesidades 
                del futuro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros <span className="gradient-text">valores</span>
            </h2>
            <p className="text-xl text-gray-300">
              Los principios que guían cada decisión y cada línea de código
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#0a0f0d] p-8 rounded-2xl border border-[#00ff88]/20 hover-glow transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-[#0a0f0d]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}