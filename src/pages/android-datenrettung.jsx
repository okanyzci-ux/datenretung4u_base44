import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Phone } from "lucide-react";
import SEO, { StructuredData } from "../components/SEO";

export default function AndroidDatenrettung() {
  const brands = [
    { name: "Huawei", models: "P60, P50, P40, P30, Mate 50, Mate 40, Mate 30" },
    { name: "Xiaomi", models: "13 Pro, 12 Pro, 11, Redmi Note 12, 11" },
    { name: "OnePlus", models: "11, 10 Pro, 9 Pro, 8 Pro, Nord" },
    { name: "Google Pixel", models: "8 Pro, 7 Pro, 6 Pro, 5, 4" },
    { name: "Sony", models: "Xperia 1 V, 5 IV, 10 IV" },
    { name: "Oppo", models: "Find X6, Find X5, Reno 10" },
    { name: "Realme", models: "GT 3, GT 2 Pro, 11 Pro" },
    { name: "Motorola", models: "Edge 40, Edge 30, Moto G" }
  ];

  const features = [
    "Alle Android Hersteller und Modelle",
    "Root-Geräte und Custom ROMs",
    "Android 8 bis Android 14",
    "Verschlüsselte Geräte",
    "Dual-SIM Smartphones",
    "Wasserschaden, Display defekt, Platinenschaden"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Android Datenrettung",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DatenRettung4U"
    },
    "description": "Professionelle Android Datenrettung für alle Hersteller - Huawei, Xiaomi, OnePlus, Google Pixel",
    "areaServed": "AT"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Android Datenrettung - Alle Hersteller | Huawei, Xiaomi, OnePlus"
        description="Android Datenrettung für alle Marken ✓ Huawei ✓ Xiaomi ✓ OnePlus ✓ Google Pixel ✓ Sony ✓ Root-Geräte ✓ 97% Erfolgsquote ✓ Kostenlose Diagnose"
        keywords="Android Datenrettung, Huawei Datenrettung, Xiaomi Datenrettung, OnePlus Datenrettung, Google Pixel Datenrettung"
        canonicalUrl="https://datenrettung4u.at/android-datenrettung"
      />
      <StructuredData data={structuredData} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-12 h-12 text-green-300" />
              <span className="px-4 py-2 bg-green-700/50 rounded-full text-green-200 text-sm">
                Alle Android Hersteller
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-green-300">Android</span> Datenrettung
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Professionelle Datenrettung für Huawei, Xiaomi, OnePlus, Google Pixel, Sony und alle anderen Android Smartphones
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

      {/* Brands */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Alle <span className="text-green-600">Android Hersteller</span>
            </h2>
            <p className="text-lg text-slate-600">
              Wir retten Daten von allen Android Smartphones
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-slate-900 mb-2">{brand.name}</h3>
                <p className="text-sm text-slate-600">{brand.models}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Android Datenrettungs-Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
              <p className="text-slate-600">Erfolgsquote bei Android</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-slate-600">Unterstützte Hersteller</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">3000+</div>
              <p className="text-slate-600">Gerettete Android Geräte</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Android Datenrettung starten
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Kostenlose Diagnose • Alle Hersteller • 97% Erfolgsquote
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