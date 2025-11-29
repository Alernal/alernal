import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

export default function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all group"
    >
      {/* Avatar */}
      <div className="aspect-square overflow-hidden">
        {member.avatar_url ? (
          <img
            src={member.avatar_url}
            alt={member.full_name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#80b635]/10 flex items-center justify-center">
            <span className="text-7xl font-bold text-[#80b635]">
              {member.full_name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#05292e] mb-1 group-hover:text-[#80b635] transition-colors">
          {member.full_name}
        </h3>

        <p className="text-[#80b635] font-medium mb-4">{member.position}</p>

        {member.bio && (
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {member.bio}
          </p>
        )}

        {/* Skills */}
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs border border-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Social Icons */}
        <div className="flex gap-3">
          {member.social_linkedin && (
            <a
              href={member.social_linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-[#80b635] hover:border-[#80b635] transition-all"
            >
              <Linkedin className="w-5 h-5 text-[#05292e] group-hover:text-white transition-colors" />
            </a>
          )}

          {member.social_github && (
            <a
              href={member.social_github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-[#80b635] hover:border-[#80b635] transition-all"
            >
              <Github className="w-5 h-5 text-[#05292e] group-hover:text-white transition-colors" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
