import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { RotateCcw, CheckCircle, Phone, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function AndroidBootloopStartetNicht() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Android Bootloop - Handy startet nicht | 98% Erfolgsquote"
        description="Android Bootloop oder startet nicht mehr? ✓ 98% Erfolgsquote ✓ Hängt beim Logo ✓ Startet immer neu ✓ Samsung, Huawei, Xiaomi ✓ Datenrettung möglich"
        keywords="Android Bootloop, Handy startet nicht, Samsung Bootloop, Xiaomi startet nicht, Android hängt beim Logo"
        canonicalUrl="https://datenrettung4u.at/android-bootloop-startet-nicht"
      />

      <div className="bg-gradient-to-br from-red-900 via-red-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <RotateCcw className="w-12 h-12 text-red-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Android <span className="text-red-300">Bootloop</span> - Startet nicht
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Handy hängt beim Logo oder startet ständig neu? Wir retten Ihre Daten mit 98% Erfolgsquote
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all"
              >
                Kostenlose Diagnose
              </Link>
              <a
                href="tel:+436609005454"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Notruf: 0660 900 54 54
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-900 mb-3">⚠️ Typische Bootloop Symptome:</h3>
                <ul className="space-y-2">
                  {[
                    "Handy startet immer wieder neu",
                    "Hängt beim Hersteller-Logo fest",
                    "Kommt nicht über den Boot-Screen hinaus",
                    "Nach Update nicht mehr startbar",
                    "Nach fehlgeschlagener Root-Installation"
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2 text-red-800">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Bootloop = Ihre Daten sind noch da!
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Ein Bootloop ist meist ein Software-Problem. Ihre Daten sind auf dem Speicher intakt und können gerettet werden.
            </p>
            <div className="bg-slate-50 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">98%</div>
                  <p className="text-slate-700">Erfolgsquote bei Bootloop</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">24-48h</div>
                  <p className="text-slate-700">Durchschnittliche Dauer</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
                  <p className="text-slate-700">Datenschutz garantiert</p>
                </div>
              </div>
            </div>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
            >
              Jetzt Datenrettung starten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}