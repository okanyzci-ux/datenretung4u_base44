import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Apple, Smartphone, CheckCircle, Clock, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function IPhoneVsSamsungDatenrettung() {
  const comparison = [
    {
      aspect: "Verschlüsselung",
      iphone: "iOS FileVault - sehr stark verschlüsselt",
      samsung: "Knox Secure Folder - ebenfalls sehr sicher",
      difficulty: "Beide: Hoch"
    },
    {
      aspect: "Biometrische Sicherheit",
      iphone: "Face ID / Touch ID",
      samsung: "Fingerabdruck / Gesichtserkennung",
      difficulty: "Beide: Hoch"
    },
    {
      aspect: "Speicher-Zugriff",
      iphone: "Fest verlötet, direkte Chip-Auslese nötig",
      samsung: "Meist auch fest verlötet",
      difficulty: "iPhone: Schwieriger"
    },
    {
      aspect: "Betriebssystem",
      iphone: "iOS - geschlossenes System",
      samsung: "Android - offener",
      difficulty: "iPhone: Schwieriger"
    },
    {
      aspect: "Hardware-Design",
      iphone: "Sehr kompakt, schwer zu öffnen",
      samsung: "Etwas zugänglicher",
      difficulty: "iPhone: Schwieriger"
    },
    {
      aspect: "Erfolgsquote",
      iphone: "99%",
      samsung: "98%",
      difficulty: "Beide: Sehr hoch"
    }
  ];

  const iphoneAdvantages = [
    "Standardisierte Hardware über viele Modelle",
    "Konsistentes iOS-System",
    "Gut dokumentierte Strukturen",
    "Spezialisierte Tools verfügbar"
  ];

  const samsungAdvantages = [
    "Mehr Modell-Varianten",
    "Android bietet mehr Zugriffsmöglichkeiten",
    "Offeneres System",
    "Custom Recovery möglich"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="iPhone vs Samsung Datenrettung - Unterschiede & Vergleich 2024"
        description="iPhone vs Samsung Datenrettung im Vergleich ✓ iOS vs Android ✓ Knox vs FileVault ✓ Welches ist schwieriger? ✓ Erfolgsquoten ✓ Expertenwissen"
        keywords="iPhone vs Samsung Datenrettung, iOS Android Datenrettung Vergleich, iPhone schwieriger Datenrettung, Samsung Knox Datenrettung"
        canonicalUrl="https://datenrettung4u.at/iphone-vs-samsung-datenrettung"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Apple className="w-10 h-10 text-slate-300" />
              <span className="text-3xl font-bold text-slate-500">vs</span>
              <Smartphone className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              iPhone vs Samsung <span className="text-cyan-400">Datenrettung</span>
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Die wichtigsten Unterschiede zwischen iOS und Android Datenrettung im Experten-Vergleich
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-5 h-5" />
              <span>5 Minuten Lesezeit • Aktualisiert: Dezember 2024</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 mb-6">
              iPhone und Samsung Galaxy Smartphones sind die beiden beliebtesten Smartphone-Marken weltweit. 
              Doch wenn es um Datenrettung geht, unterscheiden sie sich fundamental. 
              Hier erfahren Sie, welche Herausforderungen beide Systeme mit sich bringen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Direkter Vergleich
          </h2>
          <div className="space-y-4">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-4">{item.aspect}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                      <Apple className="w-4 h-4" />
                      iPhone
                    </div>
                    <p className="text-slate-700">{item.iphone}</p>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1 flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      Samsung
                    </div>
                    <p className="text-slate-700">{item.samsung}</p>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Schwierigkeit</div>
                    <p className="font-medium text-cyan-600">{item.difficulty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Vorteile bei der Datenrettung
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Apple className="w-8 h-8 text-slate-700" />
                <h3 className="text-2xl font-bold text-slate-900">iPhone</h3>
              </div>
              <ul className="space-y-3">
                {iphoneAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl p-8 border border-blue-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Samsung</h3>
              </div>
              <ul className="space-y-3">
                {samsungAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Fazit</h2>
            <div className="bg-white rounded-2xl p-8 border border-cyan-200">
              <p className="text-lg text-slate-700 mb-4">
                <strong>Beide Systeme stellen einzigartige Herausforderungen dar.</strong> iPhone mit seiner starken 
                iOS-Verschlüsselung und geschlossenen Architektur erfordert spezialisierte Tools und Kenntnisse. 
                Samsung mit Knox-Verschlüsselung ist ebenfalls anspruchsvoll, bietet aber durch Android etwas mehr Flexibilität.
              </p>
              <p className="text-lg text-slate-700">
                <strong>Die gute Nachricht:</strong> Mit professioneller Expertise sind beide Systeme mit sehr hohen 
                Erfolgsquoten rettbar (iPhone 99%, Samsung 98%). Wichtig ist, dass der Datenretter Erfahrung mit 
                beiden Plattformen hat.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              iPhone oder Samsung? Wir retten beide!
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Expertise für iOS und Android • Höchste Erfolgsquoten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("iphone-datenrettung")}
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all"
              >
                iPhone Datenrettung
              </Link>
              <Link
                to={createPageUrl("samsung-datenrettung")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
              >
                Samsung Datenrettung
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}