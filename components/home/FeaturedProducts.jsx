"use client";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/lib/base44Client";
import { motion } from "framer-motion";
import Link from "next/link";
import { createPageUrl } from "@/lib/routes";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products-featured'],
    queryFn: async () => {
      const all = await base44.entities.Product.list('-created_date');
      return all.filter(p => p.is_featured).slice(0, 3);
    },
    initialData: [],
  });

  if (isLoading || products.length === 0) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Productos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-xl text-gray-300">
            Soluciones tecnológicas listas para impulsar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#121816] rounded-2xl overflow-hidden border border-[#00ff88]/20 hover-glow transition-all group"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-[#1a201e] to-[#121816] flex items-center justify-center">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <ShoppingBag className="w-16 h-16 text-[#00ff88]/30" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded text-xs border border-[#00ff88]/20">
                    {product.type === "physical" ? "Físico" : "Digital"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">
                    ${product.price?.toLocaleString()}
                  </span>
                  <button className="px-4 py-2 bg-[#00ff88]/10 text-[#00ff88] rounded-lg hover:bg-[#00ff88]/20 transition-all border border-[#00ff88]/20">
                    Ver más
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={createPageUrl("Shop")}>
            <button className="group px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00ccff] text-[#0a0f0d] rounded-lg font-semibold hover-glow transition-all inline-flex items-center gap-2">
              Ver todos los productos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}