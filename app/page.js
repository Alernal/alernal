"use client";

import Link from "next/link";
import { createPageUrl } from "@/lib/routes";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Layers, Brain } from "lucide-react";
import HeroParticles from "@/components/home/HeroParticles";
import ServiceCard from "@/components/home/ServiceCard";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TeamPreview from "@/components/home/TeamPreview";

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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-center">
              <span className="text-[#80b635]">Architecture of Tomorrow</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
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
                <button className="btn-primary group px-8 py-4 rounded-lg text-lg flex items-center gap-2 shadow-lg shadow-[#80b635]/20">
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
          <div className="w-6 h-10 border-2 border-[#80b635] rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#80b635] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#05292e]">
              ¿Por qué elegir <span className="text-[#80b635]">ALERNAL</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos ideas complejas en soluciones tecnológicas elegantes que impulsan el crecimiento de tu negocio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="Innovación Estratégica"
              description="Combinamos tecnología de vanguardia con pensamiento estratégico para crear soluciones que marcan la diferencia"
              delay={0.1}
            />
            <ServiceCard
              icon={Zap}
              title="Ejecución Ágil"
              description="Metodologías probadas que entregan resultados rápidos sin comprometer la calidad"
              delay={0.2}
            />
            <ServiceCard
              icon={Layers}
              title="Arquitectura Sólida"
              description="Construimos sistemas escalables y mantenibles que crecen con tu empresa"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Services Section – Expanded */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#05292e]">
              Nuestros <span className="text-[#80b635]">servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones tecnológicas integrales para cada etapa de tu transformación digital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#80b635] rounded-lg flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#05292e]">Desarrollo a Medida</h3>
                  <p className="text-gray-600 mb-4">
                    Aplicaciones web, móviles y sistemas empresariales diseñados específicamente para tus necesidades
                  </p>
                  <Link href={createPageUrl("WhatWeDo")} className="text-[#80b635] font-semibold hover:underline inline-flex items-center gap-2">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#80b635] rounded-lg flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#05292e]">Inteligencia Artificial</h3>
                  <p className="text-gray-600 mb-4">
                    Implementación de IA y automatización para optimizar procesos y tomar mejores decisiones
                  </p>
                  <Link href={createPageUrl("WhatWeDo")} className="text-[#80b635] font-semibold hover:underline inline-flex items-center gap-2">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#80b635] rounded-lg flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#05292e]">Arquitectura Cloud</h3>
                  <p className="text-gray-600 mb-4">
                    Infraestructuras escalables y seguras en la nube para soportar tu crecimiento
                  </p>
                  <Link href={createPageUrl("WhatWeDo")} className="text-[#80b635] font-semibold hover:underline inline-flex items-center gap-2">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#80b635] rounded-lg flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#05292e]">Consultoría Tecnológica</h3>
                  <p className="text-gray-600 mb-4">
                    Estrategia y roadmap tecnológico para maximizar el ROI de tus inversiones digitales
                  </p>
                  <Link href={createPageUrl("WhatWeDo")} className="text-[#80b635] font-semibold hover:underline inline-flex items-center gap-2">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Team Preview */}
      <TeamPreview />

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all text-center"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-[#80b635]" />

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#05292e]">
              ¿Listo para <span className="text-[#80b635]">transformar</span> tu negocio?
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={createPageUrl("Projects")}>
                <button className="btn-primary px-8 py-4 rounded-lg text-lg shadow-lg shadow-[#80b635]/20">
                  Ver casos de éxito
                </button>
              </Link>

              <Link href={createPageUrl("About")}>
                <button className="px-8 py-4 bg-white text-[#05292e] border-2 border-gray-300 hover:border-[#80b635] rounded-lg text-lg font-semibold transition-all">
                  Conocer más sobre nosotros
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
