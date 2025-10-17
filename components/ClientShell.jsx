"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/lib/routes";
import { Menu, X, Sparkles, ShoppingBag, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/lib/base44Client";

const navigationItems = [
  { title: "Inicio", url: createPageUrl("Home") },
  { title: "Nosotros", url: createPageUrl("About") },
  { title: "Qué Hacemos", url: createPageUrl("WhatWeDo") },
  { title: "Proyectos", url: createPageUrl("Projects") },
  { title: "Equipo", url: createPageUrl("Team") },
];

export default function ClientShell({ children, currentPageName }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await base44.auth.me();
        setUser(currentUser);
      } catch (e) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-white overflow-x-hidden">
      <style>{`
        :root {
          --primary-green: #00ff88;
          --dark-bg: #0a0f0d;
          --dark-card: #121816;
          --glow-green: rgba(0, 255, 136, 0.3);
        }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
        .glow-effect { box-shadow: 0 0 20px var(--glow-green); }
        .text-glow { text-shadow: 0 0 20px var(--glow-green); }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-20px) } }
        .floating { animation: float 6s ease-in-out infinite; }
        .gradient-text {
          background: linear-gradient(135deg, #00ff88 0%, #00ccff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hover-glow:hover { box-shadow: 0 0 30px var(--glow-green); transition: box-shadow .3s ease; }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0f0d]/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={createPageUrl("Home")} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-lg flex items-center justify-center hover-glow transition-all">
                {/* <Sparkles className="w-6 h-6 text-[#0a0f0d]" /> */}
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">ALERNAL</h1>
                <p className="text-[10px] text-gray-400 -mt-1">Architecture of Tomorrow</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => {
                const active = pathname === item.url;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`text-sm font-medium transition-all hover:text-[#00ff88] relative group flex items-center gap-1 ${
                      active ? "text-[#00ff88]" : "text-gray-300"
                    }`}
                  >
                    {Icon ? <Icon className="w-4 h-4" /> : null}
                    {item.title}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#00ff88] transition-all ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#00ff88] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-[#0a0f0d]/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navigationItems.map((item, index) => {
                const active = pathname === item.url;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold transition-all hover:text-[#00ff88] flex items-center gap-2 ${
                        active ? "text-[#00ff88] text-glow" : "text-white"
                      }`}
                    >
                      {Icon ? <Icon className="w-6 h-6" /> : null}
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#121816] border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00ff88] to-[#00ccff] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#0a0f0d]" />
                </div>
                <h3 className="text-lg font-bold gradient-text">ALERNAL</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Creamos tecnología que une lo imposible con lo necesario.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#00ff88]">Navegación</h4>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="block text-sm text-gray-400 hover:text-[#00ff88] transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[#00ff88]">Ubicación</h4>
              <p className="text-sm text-gray-400">
                Colombia<br />
                Architecture of Tomorrow
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ALERNAL. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
