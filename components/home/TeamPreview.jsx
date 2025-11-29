"use client";

import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/lib/base44Client";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPageUrl } from "@/lib/routes";
import { ArrowRight } from "lucide-react";

export default function TeamPreview() {
  const { data: teamMembers, isLoading } = useQuery({
    queryKey: ["team-preview"],
    queryFn: async () => {
      const all = await base44.entities.TeamMember.list("order");
      return all.slice(0, 4);
    },
    initialData: [],
  });

  if (isLoading || teamMembers.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#05292e]">
            Conoce al <span className="text-[#80b635]">equipo</span>
          </h2>
          <p className="text-xl text-gray-600">
            Las mentes brillantes detrás de ALERNAL
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all group"
            >
              {/* Avatar */}
              <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                {member.avatar_url ? (
                  <img
                    src={member.avatar_url}
                    alt={member.full_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-[#80b635]/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#80b635]">
                      {member.full_name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#05292e] mb-1 group-hover:text-[#80b635] transition-colors">
                  {member.full_name}
                </h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={createPageUrl("Team")}>
            <button className="btn-primary group px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-lg shadow-[#80b635]/20">
              Ver todo el equipo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
