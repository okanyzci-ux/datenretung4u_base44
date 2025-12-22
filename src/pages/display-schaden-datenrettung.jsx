import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Monitor, CheckCircle, Phone, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function DisplaySchadenDatenrettung() {
  const scenarios = [
    { title: "Display komplett schwarz", desc: "Touchscreen reagiert nicht mehr", rate: "99%" },
    { title: "Display zerbrochen", desc: "Glas gesplittert, aber noch bedienbar", rate: "100%" },
    { title: "Grüne/Bunte Linien", desc: "Display zeigt Fehler an", rate: "98%" },
    { title: "Touchscreen defekt", desc: "Display zeigt Bild, aber keine Touch-Funktion", rate: "99%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Display Schaden Datenrettung - 98% Erfolgsquote | Display kaputt"
        description="Handy Display kaputt? Datenrettung trotz defektem Display ✓ Schwarzer Bildschirm ✓ Touch defekt ✓ Display zerbrochen ✓ 98% Erfolgsquote ✓ iPhone & Android"
        keywords="Display Schaden Datenrettung, Display kaputt Daten retten, schwarzer Bildschirm Datenrettung, Touchscreen defekt Datenrettung"
        canonicalUrl="https://datenrettung4u.at/display-schaden-datenrettung"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Monitor className="w-12 h-12 text-slate-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Display Schaden <span className="text-cyan-400">Datenrettung</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Display kaputt, schwarz oder Touch defekt? Wir retten Ihre Daten mit 98% Erfolgsquote – auch wenn nichts mehr zu sehen ist
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

      {/* Scenarios */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Display-Schäden die wir <span className="text-cyan-600">beheben</span>
            </h2>
            <p className="text-lg text-slate-600">
              Höchste Erfolgsraten bei allen Display-Defekten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{scenario.title}</h3>
                    <p className="text-slate-600 text-sm">{scenario.desc}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-cyan-600">{scenario.rate}</div>
                    <div className="text-xs text-slate-500">Erfolg</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-cyan-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Display kaputt ≠ Daten verloren
                </h3>
                <p className="text-slate-700 mb-4">
                  Viele denken, wenn das Display nicht mehr funktioniert, sind die Daten verloren. 
                  Das stimmt nicht! In 98% der Fälle können wir alle Daten retten, auch wenn:
                </p>
                <ul className="space-y-2">
                  {[
                    "Der Bildschirm komplett schwarz ist",
                    "Das Touch nicht mehr reagiert",
                    "Das Display nur noch Streifen zeigt",
                    "Das Handy nicht mehr bedienbar ist"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            So retten wir Ihre Daten
          </h2>
          <div className="space-y-4">
            {[
              "Display-Diagnose: Wir prüfen, ob Logikboard oder nur Display defekt ist",
              "Direkter Daten-Zugriff: Über spezielle Interfaces greifen wir auf den Speicher zu",
              "Vollständige Extraktion: Alle Fotos, Videos, Kontakte und Nachrichten werden gesichert",
              "Qualitätskontrolle: Wir prüfen die Vollständigkeit aller Daten"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-700 pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Display kaputt? Daten retten!
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              98% Erfolgsquote • Keine Daten, keine Kosten
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Jetzt Daten retten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}