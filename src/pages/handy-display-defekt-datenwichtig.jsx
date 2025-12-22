import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Phone } from "lucide-react";
import SEO from "../components/SEO";

export default function HandyDisplayDefektDatenwichtig() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Handy Display defekt - Daten wichtig | 99% Erfolgsquote"
        description="Display defekt aber Daten wichtig? ✓ 99% Erfolgsquote ✓ Schwarzer Bildschirm ✓ Touchscreen defekt ✓ Keine Anzeige ✓ Wir retten Ihre Daten trotzdem"
        keywords="Display defekt Datenrettung, schwarzer Bildschirm Daten retten, Touchscreen kaputt Datenrettung, Display gebrochen Daten wichtig"
        canonicalUrl="https://datenrettung4u.at/handy-display-defekt-datenwichtig"
      />

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Smartphone className="w-12 h-12 text-slate-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Display defekt - <span className="text-cyan-400">Daten wichtig</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Schwarzer Bildschirm oder gebrochenes Display? Wir retten Ihre Daten mit 99% Erfolgsquote
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
                0660 900 54 54
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Display-Probleme die wir lösen:
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Komplett schwarzer Bildschirm",
                "Touchscreen reagiert nicht",
                "Display gesprungen/zerbrochen",
                "Streifen oder Flecken im Display",
                "Hintergrundbeleuchtung defekt",
                "Keine Anzeige, aber Gerät läuft"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Display kaputt = Daten nicht verloren!
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Auch ohne funktionstüchtiges Display können wir auf Ihre Daten zugreifen und diese vollständig sichern.
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
            >
              Jetzt Daten retten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}