import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Shield, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";

export default function CityHero({ city, description, bgImage }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-[70vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={bgImage}
          alt={`Datenrettung ${city}`}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Datenrettung in {city}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Smartphone{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Datenrettung
            </span>
            <br />
            in {city}
          </h1>

          <p className="text-xl text-slate-300 mb-8">
            {description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8">
            {["99% Erfolgsquote", "Kostenlose Diagnose", "Keine Vorauskasse"].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to={createPageUrl("Datenrettung")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Kostenlose Diagnose starten
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+436609005454"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0660 900 54 54
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}