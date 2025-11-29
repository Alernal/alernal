"use client";

import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/lib/base44Client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import TeamMemberCard from "@/components/team/TeamMemberCard";

export default function Team() {
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ['team-members'],
    queryFn: () => base44.entities.TeamMember.list('order'),
    initialData: [],
  });

  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

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
                <Users className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#05292e]">
              Nuestro <span className="text-[#80b635]">equipo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a las mentes brillantes detrás de las soluciones innovadoras de ALERNAL
            </p>
          </motion.div>

          {/* TEAM GRID */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 animate-pulse"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                  <div className="h-6 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded mb-4" />
                  <div className="h-20 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          ) : teamMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-500" />
              <p className="text-xl text-gray-500">
                Pronto conocerás a nuestro increíble equipo
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#05292e]">
              ¿Quieres ser parte del equipo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Estamos siempre buscando talento excepcional para unirse a nuestra misión
            </p>

            <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-[#80b635]/20">
              Ver oportunidades
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
