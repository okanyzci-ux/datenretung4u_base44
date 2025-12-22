import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { 
  Smartphone, Droplet, Monitor, Cpu, Trash2, 
  ArrowRight, CheckCircle, Apple
} from "lucide-react";
import SEO from "../components/SEO";

export default function Leistungen() {
  const deviceServices = [
    {
      icon: Apple,
      title: "iPhone Datenrettung",
      description: "Professionelle Datenrettung für alle iPhone Modelle - vom iPhone 6 bis zum neuesten iPhone 15 Pro Max",
      features: ["Alle iOS Versionen", "Face ID Geräte", "Verschlüsselte Daten"],
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: Smartphone,
      title: "Samsung Galaxy Datenrettung",
      description: "Samsung Galaxy Datenrettung für S-Serie, Note, A-Serie und alle weiteren Samsung Smartphones",
      features: ["Galaxy S24 Ultra", "Foldable Geräte", "Knox Verschlüsselung"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Smartphone,
      title: "Android Datenrettung",
      description: "Datenrettung für Huawei, Xiaomi, OnePlus, Google Pixel, Sony und alle Android Smartphones",
      features: ["Alle Hersteller", "Root-Geräte", "Custom ROMs"],
      color: "from-green-600 to-green-700"
    }
  ];

  const damageServices = [
    {
      icon: Droplet,
      title: "Wasserschaden Datenrettung",
      description: "Spezialisiert auf Wasserschaden - vom kleinen Spritzer bis zum kompletten Untertauchen",
      successRate: "94%"
    },
    {
      icon: Monitor,
      title: "Display Schaden",
      description: "Datenrettung bei zerstörtem Display, wenn das Gerät nicht mehr bedienbar ist",
      successRate: "98%"
    },
    {
      icon: Cpu,
      title: "Platinenschaden",
      description: "Komplexe Datenrettung bei Mainboard-Schäden und Chip-Level Reparaturen",
      successRate: "89%"
    },
    {
      icon: Trash2,
      title: "Gelöschte Daten wiederherstellen",
      description: "Wiederherstellung versehentlich gelöschter Fotos, Videos, Kontakte und Nachrichten",
      successRate: "92%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Unsere Leistungen - Professionelle Handy Datenrettung | DatenRettung4U"
        description="Alle Datenrettungs-Services im Überblick ✓ iPhone & Android Datenrettung ✓ Wasserschaden ✓ Display & Platinenschaden ✓ Gelöschte Daten wiederherstellen ✓ 99% Erfolgsquote"
        keywords="Datenrettung Leistungen, iPhone Datenrettung, Samsung Datenrettung, Wasserschaden, Platinenschaden, gelöschte Daten wiederherstellen, Android Datenrettung"
        canonicalUrl="https://datenrettung4u.at/leistungen"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              Unsere Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professionelle <span className="text-cyan-400">Datenrettungs-Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Von iPhone bis Android, von Wasserschaden bis Platinenschaden – 
              wir retten Ihre wertvollen Daten mit höchster Erfolgsquote
            </p>
          </motion.div>
        </div>
      </div>

      {/* Device Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Datenrettung nach <span className="text-cyan-600">Gerät</span>
            </h2>
            <p className="text-lg text-slate-600">
              Spezialisierte Services für jeden Smartphone-Typ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {deviceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="w-4 h-4 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Damage Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Datenrettung nach <span className="text-cyan-600">Schadenart</span>
            </h2>
            <p className="text-lg text-slate-600">
              Spezialisierte Lösungen für jeden Schadensfall
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {damageServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-600">{service.successRate}</div>
                    <div className="text-xs text-slate-500">Erfolgsquote</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für die Datenrettung?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Starten Sie jetzt die kostenlose Diagnose
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Kostenlose Diagnose starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}