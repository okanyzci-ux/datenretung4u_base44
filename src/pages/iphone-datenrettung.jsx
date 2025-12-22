import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Apple, CheckCircle, Shield, Clock, ArrowRight, Phone } from "lucide-react";
import SEO, { StructuredData } from "../components/SEO";

export default function IPhoneDatenrettung() {
  const features = [
    "Alle iPhone Modelle (iPhone 6 bis iPhone 15 Pro Max)",
    "Face ID und Touch ID Geräte",
    "iOS 12 bis iOS 17 und neuer",
    "Verschlüsselte Daten (FileVault)",
    "iCloud gesperrte Geräte",
    "Wasserschaden, Sturzschaden, Platinenschaden"
  ];

  const models = [
    "iPhone 15 Pro Max, 15 Pro, 15 Plus, 15",
    "iPhone 14 Pro Max, 14 Pro, 14 Plus, 14",
    "iPhone 13 Pro Max, 13 Pro, 13 Mini, 13",
    "iPhone 12 Pro Max, 12 Pro, 12 Mini, 12",
    "iPhone 11 Pro Max, 11 Pro, 11",
    "iPhone XS Max, XS, XR, X",
    "iPhone 8 Plus, 8, 7 Plus, 7, 6S Plus, 6S, 6 Plus, 6"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "iPhone Datenrettung",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DatenRettung4U"
    },
    "description": "Professionelle iPhone Datenrettung für alle Modelle und iOS Versionen",
    "areaServed": "AT",
    "serviceType": "Datenrettung"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="iPhone Datenrettung - Alle Modelle | 99% Erfolgsquote"
        description="Professionelle iPhone Datenrettung ✓ iPhone 15 Pro Max bis iPhone 6 ✓ Wasserschaden ✓ Display defekt ✓ iOS verschlüsselt ✓ 99% Erfolgsquote ✓ Kostenlose Diagnose"
        keywords="iPhone Datenrettung, iPhone 15 Datenrettung, iPhone Wasserschaden, iPhone Display kaputt Daten retten, iOS Datenrettung"
        canonicalUrl="https://datenrettung4u.at/iphone-datenrettung"
      />
      <StructuredData data={structuredData} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Apple className="w-12 h-12 text-slate-300" />
              <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">
                iOS Spezialisten
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyan-400">iPhone</span> Datenrettung
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Professionelle Datenrettung für alle iPhone Modelle – vom iPhone 6 bis zum neuesten iPhone 15 Pro Max
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

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Spezialisiert auf <span className="text-cyan-600">iOS</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                iPhone Datenrettung erfordert spezielles Know-how. Wir kennen die iOS-Verschlüsselung, 
                Face ID/Touch ID Systeme und können Daten selbst von schwer beschädigten iPhones retten.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Unterstützte Modelle</h3>
              <div className="space-y-2">
                {models.map((model, index) => (
                  <div key={index} className="flex items-center gap-3 py-2">
                    <Apple className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-700">{model}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
              <p className="text-slate-300">Erfolgsquote bei iPhones</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">24-72h</div>
              <p className="text-slate-300">Express Datenrettung möglich</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">5000+</div>
              <p className="text-slate-300">Gerettete iPhones</p>
            </motion.div>
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
              iPhone Datenrettung starten
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Kostenlose Diagnose • Keine Daten, keine Kosten • Express möglich
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Jetzt starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}