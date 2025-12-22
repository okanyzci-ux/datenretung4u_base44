import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { Smartphone, Droplet, Cpu, BookOpen, ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: Smartphone,
      title: "iPhone & Android",
      description: "Alle Smartphone-Marken und Modelle",
      link: "Leistungen"
    },
    {
      icon: Droplet,
      title: "Wasserschaden",
      description: "94% Erfolgsquote bei Wasserschäden",
      link: "handy-wasserschaden-erste-hilfe"
    },
    {
      icon: Cpu,
      title: "Platinenschaden",
      description: "Chip-Level Datenrettung",
      link: "Leistungen"
    },
    {
      icon: BookOpen,
      title: "Ratgeber & Tipps",
      description: "Erste Hilfe und Expertenwissen",
      link: "Ratgeber"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Beliebte <span className="text-cyan-600">Services</span>
          </h2>
          <p className="text-lg text-slate-600">
            Schnellzugriff auf unsere meistgenutzten Dienstleistungen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={createPageUrl(service.link)}
                className="block bg-slate-50 rounded-xl p-6 hover:bg-cyan-50 border border-slate-100 hover:border-cyan-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                  <service.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                <div className="flex items-center gap-1 text-cyan-600 text-sm font-medium group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}