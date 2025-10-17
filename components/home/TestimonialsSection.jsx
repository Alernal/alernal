"use client";

import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/lib/base44Client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["testimonials-featured"],
    queryFn: async () => {
      const all = await base44.entities.Testimonial.list("-created_date");
      return all.filter((t) => t.is_featured).slice(0, 3);
    },
    initialData: [],
  });

  const testimonials = data ?? [];

  if (isLoading || testimonials.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-[#121816]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Testimonios reales de quienes confían en nosotros
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => {
            const safeRating = Math.max(0, Math.min(5, Number(t.rating) || 0));
            return (
              <motion.div
                key={t.id ?? index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#0a0f0d] p-8 rounded-2xl border border-[#00ff88]/20 hover-glow transition-all"
              >
                <Quote className="w-10 h-10 text-[#00ff88] mb-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: safeRating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00ff88] text-[#00ff88]" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t.testimonial_text ? `"${t.testimonial_text}"` : "—"}
                </p>

                <div className="flex items-center gap-3">
                  {t.avatar_url ? (
                    // Si luego migras a next/image, cámbialo por <Image />
                    <img
                      src={t.avatar_url}
                      alt={t.client_name ?? "Cliente"}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-full flex items-center justify-center">
                      <span className="text-[#0a0f0d] font-bold">
                        {(t.client_name ?? "?").charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-white">{t.client_name ?? "Cliente"}</p>
                    <p className="text-sm text-gray-400">
                      {t.client_position}
                      {t.client_company ? ` • ${t.client_company}` : ""}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
