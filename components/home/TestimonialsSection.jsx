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
    <section className="py-20 px-6 bg-gray-50">
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
            Lo que dicen nuestros <span className="text-[#80b635]">clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Testimonios reales de quienes confían en nosotros
          </p>
        </motion.div>

        {/* Testimonials grid */}
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
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#80b635]/10 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-[#80b635]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: safeRating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#80b635] text-[#80b635]"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  {t.testimonial_text ? `"${t.testimonial_text}"` : "—"}
                </p>

                {/* Footer: Avatar + Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  {t.avatar_url ? (
                    <img
                      src={t.avatar_url}
                      alt={t.client_name ?? "Cliente"}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#80b635]/30"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-[#80b635] rounded-full flex items-center justify-center border-2 border-[#80b635]/30">
                      <span className="text-white font-bold">
                        {(t.client_name ?? "?").charAt(0)}
                      </span>
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-[#05292e]">
                      {t.client_name ?? "Cliente"}
                    </p>
                    <p className="text-sm text-gray-600">
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
