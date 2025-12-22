import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Droplet, AlertTriangle, CheckCircle, XCircle, Clock, Phone } from "lucide-react";
import SEO from "../components/SEO";

export default function HandyWasserschadenErsteHilfe() {
  const doSteps = [
    "Gerät sofort ausschalten und NICHT wieder einschalten",
    "SIM-Karte und SD-Karte entfernen",
    "Mit weichem Tuch vorsichtig abtrocknen",
    "Gerät aufrecht hinstellen (Wasser läuft nach unten)",
    "An der Luft trocknen lassen (24-48 Stunden)",
    "Professionelle Hilfe kontaktieren"
  ];

  const dontSteps = [
    "Nicht einschalten oder laden - Kurzschlussgefahr!",
    "Keinen Föhn oder Heizung verwenden",
    "Nicht schütteln - Wasser verteilt sich",
    "Nicht in Reis legen (hilft nicht wirklich)",
    "Nicht zu lange warten - Korrosion setzt schnell ein"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Handy Wasserschaden - Erste Hilfe & Datenrettung | Was tun?"
        description="Handy ins Wasser gefallen? ⚠️ Diese Sofortmaßnahmen können Ihre Daten retten ✓ Was tun, was vermeiden ✓ Professionelle Wasserschaden-Rettung ✓ Expertenrat"
        keywords="Handy Wasserschaden was tun, iPhone Wasserschaden erste Hilfe, Smartphone ins Wasser gefallen, Wasserschaden Datenrettung, Handy nass geworden"
        canonicalUrl="https://datenrettung4u.at/handy-wasserschaden-erste-hilfe"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Droplet className="w-10 h-10 text-blue-300" />
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
                Ratgeber
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Handy Wasserschaden - <span className="text-blue-300">Was tun?</span>
            </h1>
            <p className="text-xl text-blue-100 mb-4">
              Erste Hilfe Maßnahmen, die Ihre Daten retten können
            </p>
            <div className="flex items-center gap-2 text-blue-200">
              <Clock className="w-5 h-5" />
              <span>7 Minuten Lesezeit • Aktualisiert: Dezember 2024</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Alert Box */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">Wichtig: Zeit ist entscheidend!</h3>
            <p className="text-amber-800">
              Jede Minute zählt. Wasser und Elektronik vertragen sich nicht - Korrosion kann innerhalb von Stunden beginnen. 
              Handeln Sie schnell und folgen Sie diesen Schritten.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Do's */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-slate-900">Das sollten Sie TUN</h2>
          </div>
          <div className="space-y-4">
            {doSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg text-slate-800 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Don'ts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <XCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-slate-900">Das sollten Sie VERMEIDEN</h2>
          </div>
          <div className="space-y-4">
            {dontSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-xl p-6">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* When Professional Help */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Wann ist professionelle Hilfe nötig?
          </h2>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <p className="text-lg text-slate-700 mb-6">
              In folgenden Fällen sollten Sie unbedingt professionelle Datenrettung in Anspruch nehmen:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                <span>Das Gerät wurde in Salzwasser getaucht (besonders aggressiv)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                <span>Das Smartphone startet nicht mehr oder zeigt Fehler</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                <span>Die Daten sind besonders wichtig (Fotos, Geschäftsdaten)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                <span>Es sind bereits 24 Stunden vergangen</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Success Rates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Erfolgsquoten bei Wasserschaden
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-slate-700">Sofortige Reaktion innerhalb 2 Stunden</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">85%</div>
              <p className="text-slate-700">Behandlung innerhalb 24 Stunden</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
              <p className="text-slate-700">Nach 48+ Stunden (Korrosion setzt ein)</p>
            </div>
          </div>
        </motion.section>
      </article>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Brauchen Sie professionelle Wasserschaden-Rettung?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Kostenlose Diagnose • 94% Erfolgsquote • Keine Daten, keine Kosten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
              >
                Jetzt Datenrettung starten
              </Link>
              <a
                href="tel:+436609005454"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                0660 900 54 54
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}