import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index, isHovered, onHover }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all cursor-pointer"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay degradado */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
        />

        {/* Botón superior derecho */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#05292e]/80 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-5 h-5 text-[#80b635]" />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Categoría */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-[#80b635]/10 text-[#80b635] rounded-full text-xs font-medium border border-[#80b635]/20">
            {project.category}
          </span>
        </div>

        {/* Nombre */}
        <h3 className="text-xl font-bold mb-3 text-[#05292e] group-hover:text-[#80b635] transition-all">
          {project.name}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
