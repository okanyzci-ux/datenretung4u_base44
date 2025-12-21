import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";

export default function BrandsSection() {
  const brands = [
    { name: "Apple", logo: "🍎", models: "iPhone 6 - iPhone 15 Pro Max" },
    { name: "Samsung", logo: "📱", models: "Galaxy S, A, Note Serie" },
    { name: "Huawei", logo: "📲", models: "P Serie, Mate Serie, Nova" },
    { name: "Xiaomi", logo: "🔲", models: "Mi, Redmi, Poco Serie" },
    { name: "Google", logo: "🔍", models: "Pixel 2 - Pixel 8 Pro" },
    { name: "OnePlus", logo: "➕", models: "Nord, Pro Serie" },
    { name: "Sony", logo: "🎵", models: "Xperia Serie" },
    { name: "Nokia", logo: "📞", models: "Alle Modelle" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
            Alle Marken
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Datenrettung für <span className="text-cyan-600">alle Smartphone-Marken</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wir sind spezialisiert auf alle gängigen Smartphone-Hersteller und -Modelle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {brand.logo}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{brand.name}</h3>
              <p className="text-sm text-slate-500">{brand.models}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Ihre Marke nicht dabei? Kein Problem – wir retten Daten von <strong>allen Smartphones</strong>!
          </p>
          <Link
            to={createPageUrl("Datenrettung")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
          >
            Gerät prüfen lassen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}