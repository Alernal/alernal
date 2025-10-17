"use client";

import Link from "next/link";
import { createPageUrl } from "@/lib/routes";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Layers, Brain } from "lucide-react";
import HeroParticles from "@/components/home/HeroParticles";
import ServiceCard from "@/components/home/ServiceCard";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamPreview from "@/components/home/TeamPreview";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">ALERNAL</span>
              <br />
              <span className="text-white">Architecture of Tomorrow</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Creamos tecnología que une lo imposible con lo necesario
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <Link href={createPageUrl("WhatWeDo")}>
                <button className="group px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0f0d] rounded-lg font-semibold text-lg hover-glow transition-all flex items-center gap-2">
                  Explora nuestras soluciones
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#00ff88] rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#00ff88] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0a0f0d] to-[#121816]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Innovación</span> que transforma
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En ALERNAL, construimos soluciones tecnológicas que desafían lo
              tradicional, combinando ingeniería, diseño e inteligencia
              artificial para crear herramientas que transforman el futuro
              digital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="Visionaria"
              description="Anticipamos las necesidades del mañana con soluciones que trascienden lo convencional"
              delay={0.1}
            />
            <ServiceCard
              icon={Zap}
              title="Disruptiva"
              description="Desafiamos el status quo con tecnologías que rompen esquemas y abren nuevas posibilidades"
              delay={0.2}
            />
            <ServiceCard
              icon={Layers}
              title="Precisa"
              description="Cada línea de código, cada diseño, cada decisión está cuidadosamente pensada"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Team Preview */}
      <TeamPreview />

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#121816] to-[#0a0f0d] rounded-3xl p-12 border border-[#00ff88]/20 hover-glow"
          >
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Listo para construir el{" "}
                <span className="gradient-text">futuro</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Descubre cómo nuestras soluciones pueden transformar tu visión
                en realidad
              </p>
              <Link href={createPageUrl("Projects")}>
                <button className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0f0d] rounded-lg font-semibold text-lg hover-glow transition-all">
                  Ver nuestros proyectos
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
