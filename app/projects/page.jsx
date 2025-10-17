"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Filter } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Sistema de Gestión Inteligente",
    description: "Plataforma integral para automatización de procesos empresariales con IA",
    category: "IA & Automatización",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Plataforma de Análisis de Datos",
    description: "Dashboard interactivo con visualizaciones en tiempo real y predicciones ML",
    category: "Data & Analytics",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "App Móvil de E-commerce",
    description: "Experiencia de compra innovadora con AR y recomendaciones personalizadas",
    category: "Móvil & Web",
    technologies: ["React Native", "Node.js", "MongoDB", "ARKit"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    color: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    name: "Arquitectura Cloud Escalable",
    description: "Infraestructura serverless para startup fintech con 99.9% uptime",
    category: "Cloud & DevOps",
    technologies: ["AWS Lambda", "Kubernetes", "Terraform", "Docker"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Chatbot Inteligente Multicanal",
    description: "Asistente virtual con NLP que atiende miles de consultas simultáneas",
    category: "IA & Automatización",
    technologies: ["Python", "DialogFlow", "NLP", "Firebase"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    name: "Portal de Educación Virtual",
    description: "Plataforma educativa con gamificación y aprendizaje adaptativo",
    category: "Móvil & Web",
    technologies: ["Next.js", "GraphQL", "Prisma", "WebRTC"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    color: "from-yellow-500 to-orange-500"
  }
];

const categories = ["Todos", "IA & Automatización", "Data & Analytics", "Móvil & Web", "Cloud & DevOps"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-xl flex items-center justify-center floating glow-effect">
                <Code2 className="w-8 h-8 text-[#0a0f0d]" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros <span className="gradient-text">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones innovadoras que han transformado negocios en Colombia y el mundo
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0f0d] glow-effect"
                    : "bg-[#121816] text-gray-300 hover:bg-[#1a201e] border border-[#00ff88]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHovered={hoveredProject === project.id}
                  onHover={setHoveredProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Filter className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-xl text-gray-400">
                No hay proyectos en esta categoría
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#121816]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0f0d] to-[#121816] rounded-3xl p-12 border border-[#00ff88]/20 hover-glow text-center"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-6 text-[#00ff88]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Trabajemos juntos para convertir tu visión en realidad
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0f0d] rounded-lg font-semibold text-lg hover-glow transition-all inline-flex items-center gap-2">
              Hablemos de tu proyecto
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}