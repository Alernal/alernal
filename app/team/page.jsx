"use client";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/lib/base44Client";
import { motion } from "framer-motion";
import { Users, Linkedin, Github } from "lucide-react";
import TeamMemberCard from "@/components/team/TeamMemberCard";

export default function Team() {
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ['team-members'],
    queryFn: () => base44.entities.TeamMember.list('order'),
    initialData: [],
  });

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
                <Users className="w-8 h-8 text-[#0a0f0d]" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestro <span className="gradient-text">equipo</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conoce a las mentes brillantes detrás de las soluciones innovadoras de ALERNAL
            </p>
          </motion.div>

          {/* Team Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#121816] rounded-2xl p-8 animate-pulse">
                  <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4" />
                  <div className="h-6 bg-gray-700 rounded mb-2" />
                  <div className="h-4 bg-gray-700 rounded mb-4" />
                  <div className="h-20 bg-gray-700 rounded" />
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
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-xl text-gray-400">
                Pronto conocerás a nuestro increíble equipo
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 px-6 bg-[#121816]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0f0d] to-[#121816] rounded-3xl p-12 border border-[#00ff88]/20 hover-glow text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ser parte del equipo?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Estamos siempre buscando talento excepcional para unirse a nuestra misión
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0f0d] rounded-lg font-semibold text-lg hover-glow transition-all">
              Ver oportunidades
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}