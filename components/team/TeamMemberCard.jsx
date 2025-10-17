import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#121816] rounded-2xl overflow-hidden border border-[#00ff88]/20 hover-glow transition-all group"
    >
      <div className="aspect-square overflow-hidden">
        {member.avatar_url ? (
          <img
            src={member.avatar_url}
            alt={member.full_name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00ff88] to-[#00ccff] flex items-center justify-center">
            <span className="text-8xl font-bold text-[#0a0f0d]">
              {member.full_name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
          {member.full_name}
        </h3>
        <p className="text-[#00ff88] mb-4">{member.position}</p>

        {member.bio && (
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {member.bio}
          </p>
        )}

        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#0a0f0d] text-gray-300 rounded-full text-xs border border-[#00ff88]/10"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          {member.social_linkedin && (
            <a
              href={member.social_linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0a0f0d] rounded-lg flex items-center justify-center hover:bg-[#00ff88]/20 transition-all border border-[#00ff88]/20"
            >
              <Linkedin className="w-5 h-5 text-[#00ff88]" />
            </a>
          )}
          {member.social_github && (
            <a
              href={member.social_github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#0a0f0d] rounded-lg flex items-center justify-center hover:bg-[#00ff88]/20 transition-all border border-[#00ff88]/20"
            >
              <Github className="w-5 h-5 text-[#00ff88]" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}