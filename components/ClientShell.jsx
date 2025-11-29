"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/lib/routes";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/lib/base44Client";

const navigationItems = [
  { title: "Inicio", url: createPageUrl("Home") },
  { title: "Nosotros", url: createPageUrl("About") },
  { title: "Qué Hacemos", url: createPageUrl("WhatWeDo") },
  { title: "Proyectos", url: createPageUrl("Projects") },
  { title: "Equipo", url: createPageUrl("Team") },
];

export default function ClientShell({ children }) {
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
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#05292e] overflow-x-hidden">
      <style>{`
        :root {
          --primary-green: #80b635;
          --dark-bg: #05292e;
          --light-bg: #ffffff;
          --light-gray: #f8f9fa;
          --gray: #e9ecef;
          --text-dark: #05292e;
          --text-gray: #6c757d;
          --glow-green: rgba(128, 182, 53, 0.15);
          --border-light: rgba(5, 41, 46, 0.1);
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #ffffff;
        }

        .glow-effect {
          box-shadow: 0 4px 20px rgba(128, 182, 53, 0.15);
        }

        .text-glow {
          text-shadow: 0 0 10px rgba(128, 182, 53, 0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .hover-glow:hover {
          box-shadow: 0 8px 30px rgba(128, 182, 53, 0.25);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #80b635;
          color: #05292e;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: #96cc47;
          box-shadow: 0 6px 20px rgba(128, 182, 53, 0.4);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={createPageUrl("Home")}
              className="flex items-center gap-2 group"
            >
                <img
                  src="/logo.png"
                  alt="AlernAL Logo"
                  className="w-40 h-full object-contain"
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => {
                const active = pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`text-sm font-medium transition-all hover:text-[#80b635] relative group ${
                      active ? "text-[#80b635]" : "text-[#05292e]"
                    }`}
                  >
                    {item.title}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#80b635] transition-all ${
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
              className="md:hidden p-2 text-[#05292e] hover:text-[#80b635] transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navigationItems.map((item, index) => {
                const active = pathname === item.url;
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
                      className={`text-2xl font-bold transition-all hover:text-[#80b635] ${
                        active ? "text-[#80b635]" : "text-[#05292e]"
                      }`}
                    >
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
      <footer className="relative bg-gray-50 border-t border-gray-200 mt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#80b635]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#80b635]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* BRAND */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#80b635] rounded-xl flex items-center justify-center shadow-lg shadow-[#80b635]/20">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#05292e]">ALERNAL</h3>
                  <p className="text-xs text-gray-600">
                    Architecture of Tomorrow
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-base mb-6">
                Creamos tecnología que une lo imposible con lo necesario.
                Soluciones innovadoras que transforman el futuro digital.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4 text-[#05292e] uppercase text-sm tracking-wider">
                Navegación
              </h4>
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="block text-sm text-gray-600 hover:text-[#80b635] transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-[#05292e] uppercase text-sm tracking-wider">
                Contacto
              </h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  Colombia
                  <br />
                  Bogotá
                </p>
                <p>info@alernal.co</p>
                <p>+57 (300) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#80b635]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 ALERNAL. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-gray-600">
              <a href="#" className="hover:text-[#80b635]">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-[#80b635]">
                Términos
              </a>
              <a href="#" className="hover:text-[#80b635]">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
