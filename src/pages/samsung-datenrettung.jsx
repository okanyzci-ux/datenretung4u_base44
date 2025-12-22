import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Shield, Phone } from "lucide-react";
import SEO, { StructuredData } from "../components/SEO";

export default function SamsungDatenrettung() {
  const features = [
    "Alle Samsung Galaxy Modelle (S, Note, A, Z-Serie)",
    "Knox Verschlüsselung und Secure Folder",
    "Foldable Geräte (Z Fold, Z Flip)",
    "Android 9 bis Android 14",
    "Samsung Cloud Integration",
    "Wasserschaden, Display kaputt, Mainboard defekt"
  ];

  const models = [
    { series: "S-Serie", devices: "S24 Ultra, S24+, S24, S23, S22, S21, S20, S10, S9, S8, S7" },
    { series: "Note-Serie", devices: "Note 20 Ultra, Note 20, Note 10+, Note 10, Note 9, Note 8" },
    { series: "A-Serie", devices: "A54, A53, A52, A51, A50, A34, A33, A14, A13" },
    { series: "Z-Serie", devices: "Z Fold 5, Z Fold 4, Z Fold 3, Z Flip 5, Z Flip 4, Z Flip 3" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Samsung Galaxy Datenrettung",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DatenRettung4U"
    },
    "description": "Professionelle Samsung Datenrettung für Galaxy S, Note, A und Z-Serie",
    "areaServed": "AT"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Samsung Datenrettung - Galaxy S, Note, A-Serie | 98% Erfolgsquote"
        description="Samsung Galaxy Datenrettung ✓ S24 Ultra bis S7 ✓ Note, A-Serie, Z Fold/Flip ✓ Knox Verschlüsselung ✓ Wasserschaden ✓ 98% Erfolgsquote ✓ Kostenlose Diagnose"
        keywords="Samsung Datenrettung, Galaxy Datenrettung, Samsung S24 Datenrettung, Galaxy Wasserschaden, Knox Datenrettung"
        canonicalUrl="https://datenrettung4u.at/samsung-datenrettung"
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
              <Smartphone className="w-12 h-12 text-blue-300" />
              <span className="px-4 py-2 bg-blue-700/50 rounded-full text-blue-200 text-sm">
                Samsung Experten
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-blue-300">Samsung Galaxy</span> Datenrettung
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Spezialisiert auf Samsung Galaxy S-Serie, Note, A-Serie und Foldables – inklusive Knox Verschlüsselung
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
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                <span className="text-blue-600">Samsung</span> Datenrettungs-Experten
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Samsung Galaxy Smartphones haben spezielle Sicherheitsfunktionen wie Knox und Secure Folder. 
                Wir kennen diese Systeme genau und können Ihre Daten professionell wiederherstellen.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Unterstützte Modelle</h3>
                <div className="space-y-4">
                  {models.map((category, index) => (
                    <div key={index}>
                      <div className="font-semibold text-blue-600 mb-2">{category.series}</div>
                      <div className="text-sm text-slate-600">{category.devices}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knox Info */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Knox Verschlüsselung? Kein Problem!
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Samsung Knox ist eine der sichersten Verschlüsselungen auf dem Markt. 
              Mit unserer Expertise können wir dennoch Ihre Daten retten – selbst bei verschlüsselten Secure Folder Inhalten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-slate-600">Erfolgsquote bei Samsung</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24-72h</div>
              <p className="text-slate-600">Durchschnittliche Bearbeitungszeit</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4000+</div>
              <p className="text-slate-600">Gerettete Samsung Geräte</p>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Samsung Datenrettung starten
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kostenlose Diagnose • Keine Daten, keine Kosten
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
            >
              Jetzt starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}