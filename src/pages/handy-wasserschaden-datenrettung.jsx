import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Droplets, CheckCircle, Phone, AlertTriangle } from "lucide-react";
import SEO from "../components/SEO";

export default function HandyWasserschadenDatenrettung() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Handy Wasserschaden Datenrettung - 95% Erfolgsquote | Österreich"
        description="Handy Wasserschaden Datenrettung ✓ 95% Erfolgsquote ✓ iPhone & Android ✓ Auch nach Tagen im Wasser ✓ Professionelle Trocknung ✓ Keine Daten, keine Kosten"
        keywords="Handy Wasserschaden Datenrettung, iPhone Wasserschaden, Samsung Wasserschaden, Smartphone ins Wasser gefallen"
        canonicalUrl="https://datenrettung4u.at/handy-wasserschaden-datenrettung"
      />

      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Droplets className="w-12 h-12 text-blue-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Handy <span className="text-blue-300">Wasserschaden</span> Datenrettung
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ihr Handy ist ins Wasser gefallen? Wir retten Ihre Daten mit 95% Erfolgsquote – selbst nach Tagen im Wasser
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

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Erste Hilfe bei Wasserschaden!</h3>
            <ul className="space-y-2 text-amber-800">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Sofort ausschalten (nicht mehr einschalten!)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>SIM-Karte und Speicherkarte entfernen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>NICHT föhnen oder in Reis legen!</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Uns sofort kontaktieren für beste Erfolgschancen</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Professionelle Wasserschaden-Behandlung
          </h2>
          <p className="text-lg text-slate-700 mb-12">
            Mit speziellen Trocknungsverfahren und Reinraumlabor-Technologie retten wir Ihre wertvollen Daten.
          </p>
          <Link
            to={createPageUrl("Datenrettung")}
            className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
          >
            Jetzt Datenrettung starten
          </Link>
        </div>
      </section>
    </div>
  );
}