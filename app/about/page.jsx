"use client";

import React from "react";
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
      <section className="relative py-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

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
              <div className="w-16 h-16 mx-auto bg-[#80b635] rounded-xl flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#05292e]">
              Quiénes <span className="text-[#80b635]">somos</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un socio tecnológico comprometido con el éxito de tu negocio a través de la innovación
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#05292e]">
                La <span className="text-[#80b635]">diferencia</span> ALERNAL
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Somos una consultora tecnológica especializada en transformación digital. 
                Ayudamos a empresas medianas y grandes a modernizar sus operaciones, optimizar 
                procesos y crear ventajas competitivas sostenibles a través de la tecnología.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Con sede en Colombia y proyectos en toda Latinoamérica, combinamos experiencia 
                técnica con conocimiento profundo del mercado local para entregar soluciones que 
                realmente funcionan.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#80b635] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Más de 50 proyectos exitosos entregados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#80b635] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Equipo multidisciplinario de expertos certificados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#80b635] rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-600">Metodología ágil con entregas predecibles</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Equipo ALERNAL"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#80b635] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#80b635]/20">
                <Target className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-[#05292e]">
                Nuestra <span className="text-[#80b635]">Misión</span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Construir soluciones de base tecnológica que desafían lo tradicional, 
                combinando ingeniería, diseño e inteligencia artificial para crear 
                herramientas que transformen el futuro digital.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-[#80b635] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#80b635]/20">
                <Eye className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4 text-[#05292e]">
                Nuestra <span className="text-[#80b635]">Visión</span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Ser reconocidos como líderes en innovación tecnológica, creando soluciones 
                que no solo resuelven problemas actuales, sino que anticipan las necesidades 
                del futuro.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros <span className="text-[#80b635]">valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada línea de código
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-[#80b635]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#80b635] transition-all border border-[#80b635]/30">
                  <value.icon className="w-6 h-6 text-[#80b635] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#05292e] group-hover:text-[#80b635] transition-all">
                  {value.title}
                </h3>

                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
