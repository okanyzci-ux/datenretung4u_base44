import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Droplet, AlertTriangle, CheckCircle, Clock, Phone, XCircle } from "lucide-react";
import SEO, { StructuredData } from "../components/SEO";

export default function WasserschadenDatenrettung() {
  const steps = [
    { title: "Gerät sofort ausschalten", desc: "Kein Einschaltversuch!" },
    { title: "Vorsichtig abtrocknen", desc: "Weiches Tuch verwenden" },
    { title: "Professionelle Hilfe", desc: "Innerhalb 24h kontaktieren" }
  ];

  const damages = [
    { type: "Kleiner Spritzer", rate: "98%", desc: "Schnelle Reaktion = höchste Erfolgsrate" },
    { type: "Komplett untertaucht", rate: "89%", desc: "Auch bei vollständigem Wasserschaden möglich" },
    { type: "Salzwasser", rate: "75%", desc: "Besonders aggressiv, aber rettbar" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wasserschaden Datenrettung",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DatenRettung4U"
    },
    "description": "Professionelle Wasserschaden Datenrettung für Smartphones - 94% Erfolgsquote",
    "areaServed": "AT"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Wasserschaden Datenrettung - 94% Erfolgsquote | Handy ins Wasser"
        description="Handy Wasserschaden Datenrettung ✓ 94% Erfolgsquote ✓ iPhone & Android ✓ Salzwasser ✓ Express 24h ✓ Kostenlose Diagnose ✓ Keine Daten, keine Kosten"
        keywords="Wasserschaden Datenrettung, Handy ins Wasser gefallen, iPhone Wasserschaden, Smartphone Wasserschaden, Salzwasser Handy"
        canonicalUrl="https://datenrettung4u.at/wasserschaden-datenrettung"
      />
      <StructuredData data={structuredData} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-12 h-12 text-blue-300" />
              <span className="px-4 py-2 bg-blue-700/50 rounded-full text-blue-200 text-sm">
                Wasserschaden-Spezialisten
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-blue-300">Wasserschaden</span> Datenrettung
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Handy ins Wasser gefallen? Wir retten Ihre Daten mit 94% Erfolgsquote – auch bei Salzwasser und kompletter Überflutung
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all"
              >
                Sofort-Diagnose starten
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

      {/* Alert */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Zeit ist kritisch!</h3>
            <p className="text-amber-800">
              Korrosion beginnt innerhalb von Stunden. Je schneller Sie reagieren, desto höher die Erfolgsrate. 
              Schalten Sie das Gerät NICHT ein und kontaktieren Sie uns sofort!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Erste Hilfe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Erste Hilfe bei <span className="text-blue-600">Wasserschaden</span>
            </h2>
            <p className="text-lg text-slate-600">
              Diese Sofortmaßnahmen erhöhen Ihre Erfolgschancen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border border-red-200 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">Das sollten Sie NICHT tun:</h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Gerät nicht einschalten oder laden (Kurzschlussgefahr!)</li>
                  <li>• Keinen Föhn verwenden (Hitze schadet)</li>
                  <li>• Nicht in Reis legen (hilft nicht wirklich)</li>
                  <li>• Nicht zu lange warten (Korrosion setzt schnell ein)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Erfolgsraten */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Erfolgsquoten nach Wasserschaden-Art
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {damages.map((damage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center border border-blue-200"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{damage.rate}</div>
                <h3 className="font-bold text-slate-900 mb-2">{damage.type}</h3>
                <p className="text-slate-600 text-sm">{damage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Unser Wasserschaden-Rettungsprozess
          </h2>
          <div className="space-y-6">
            {[
              { step: "1", title: "Sofort-Analyse", desc: "Kostenlose Erstdiagnose innerhalb von 2 Stunden nach Erhalt" },
              { step: "2", title: "Professionelle Reinigung", desc: "Ultraschallreinigung und Korrosionsentfernung im Reinraumlabor" },
              { step: "3", title: "Chip-Level Reparatur", desc: "Bei Bedarf Reparatur auf Platinen-Ebene" },
              { step: "4", title: "Datenrettung", desc: "Sichere Extraktion aller Daten (Fotos, Kontakte, Nachrichten)" },
              { step: "5", title: "Qualitätskontrolle", desc: "Prüfung aller geretteten Daten auf Vollständigkeit" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Jede Minute zählt!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Express 24h Service verfügbar • 94% Erfolgsquote • Keine Daten, keine Kosten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
              >
                Sofort starten
              </Link>
              <a
                href="tel:+436609005454"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Notruf: 0660 900 54 54
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}