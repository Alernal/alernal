"use client";

import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/lib/base44Client";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPageUrl } from "@/lib/routes";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products-featured"],
    queryFn: async () => {
      const all = await base44.entities.Product.list("-created_date");
      return all.filter((p) => p.is_featured).slice(0, 3);
    },
    initialData: [],
  });

  if (isLoading || products.length === 0) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#05292e]">
            Proyectos <span className="text-[#80b635]">destacados</span>
          </h2>
          <p className="text-xl text-gray-600">
            Conoce algunos de nuestros casos de éxito más recientes
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#80b635] hover:shadow-xl transition-all group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center relative">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <ShoppingBag className="w-16 h-16 text-[#80b635]/30" />
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#80b635]/10 text-[#80b635] rounded-full text-xs border border-[#80b635]/30 font-medium">
                    {product.type === "physical" ? "Físico" : "Digital"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#05292e] mb-2 group-hover:text-[#80b635] transition-all">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">
                      {product.category}
                    </p>
                    <p className="text-xs text-gray-400">
                      {product.type === "physical"
                        ? "Solución física"
                        : "Solución digital"}
                    </p>
                  </div>

                  <Link href={`${createPageUrl("ProductDetail")}?id=${product.id}`}>
                    <button className="px-4 py-2 bg-[#80b635]/10 text-[#80b635] rounded-lg hover:bg-[#80b635] hover:text-white transition-all border border-[#80b635]/30 font-medium inline-flex items-center gap-2">
                      Ver más
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA – See All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={createPageUrl("Shop")}>
            <button className="btn-primary group px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-lg shadow-[#80b635]/20">
              Ver todos los proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
