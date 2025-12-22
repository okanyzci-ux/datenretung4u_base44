import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Power, AlertCircle, CheckCircle, Clock, Phone } from "lucide-react";
import SEO from "../components/SEO";

export default function HandyStartetNicht() {
  const causes = [
    {
      problem: "Black Screen - Komplett schwarz",
      causes: ["Display defekt", "Akku tiefentladen", "Platinenschaden", "Wasserschaden"],
      solution: "Datenrettung möglich: 95%"
    },
    {
      problem: "Bootloop - Startet immer neu",
      causes: ["Softwarefehler", "Defekte App", "System-Update fehlgeschlagen", "Speicher voll"],
      solution: "Datenrettung möglich: 92%"
    },
    {
      problem: "Hängt beim Logo",
      causes: ["Softwareproblem", "Beschädigte Systemdateien", "Update unterbrochen"],
      solution: "Datenrettung möglich: 98%"
    },
    {
      problem: "Lädt nicht mehr",
      causes: ["Ladebuchse defekt", "Akku defekt", "Ladechip beschädigt"],
      solution: "Datenrettung möglich: 90%"
    }
  ];

  const quickChecks = [
    "Hard Reset versuchen (Power + Volume für 10 Sek.)",
    "Anderen Ladestecker/Kabel testen",
    "Mindestens 30 Min. laden lassen",
    "SIM-Karte und SD-Karte entfernen und neu starten"
  ];

  const whenToPro = [
    "Nach Wasserschaden",
    "Nach Sturz oder physischem Schaden",
    "Wichtige Daten sind auf dem Gerät",
    "Quick Fixes haben nicht geholfen",
    "Gerät macht komische Geräusche/riecht verbrannt"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Handy startet nicht mehr - Ursachen & Datenrettung | Bootloop"
        description="Handy startet nicht mehr? ✓ Black Screen ✓ Bootloop ✓ Hängt beim Logo ✓ Lädt nicht ✓ Ursachen & Lösungen ✓ Datenrettung möglich ✓ 95% Erfolgsquote"
        keywords="Handy startet nicht, Smartphone geht nicht mehr an, Bootloop, Black Screen, iPhone startet nicht, Android startet nicht"
        canonicalUrl="https://datenrettung4u.at/handy-startet-nicht"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Power className="w-12 h-12 text-red-400 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Handy <span className="text-red-400">startet nicht</span> mehr?
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Black Screen, Bootloop oder hängt beim Logo? Die häufigsten Ursachen und wie wir Ihre Daten retten können
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-5 h-5" />
              <span>8 Minuten Lesezeit • Aktualisiert: Dezember 2024</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Problems & Causes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Häufige <span className="text-cyan-600">Probleme</span> & Ursachen
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {causes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.problem}</h3>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-600 mb-2">Mögliche Ursachen:</p>
                  <ul className="space-y-1">
                    {item.causes.map((cause, idx) => (
                      <li key={idx} className="text-slate-700 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-cyan-600">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Checks */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Schnelle Selbstchecks
            </h2>
            <p className="text-lg text-slate-600 mb-6 text-center">
              Probieren Sie diese Schritte, bevor Sie professionelle Hilfe holen:
            </p>
            <div className="space-y-3">
              {quickChecks.map((check, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{check}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800">
                <strong>Wichtig:</strong> Wenn das Handy nicht startet und Sie wichtige Daten darauf haben, 
                versuchen Sie NICHT mehrfach Hard Resets oder andere aggressive Methoden. 
                Das kann die Daten gefährden.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to get professional help */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 text-white">
              <AlertCircle className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Wann professionelle Datenrettung?
              </h2>
              <p className="text-xl text-cyan-50 mb-6">
                In diesen Fällen sollten Sie uns sofort kontaktieren:
              </p>
              <ul className="space-y-3">
                {whenToPro.map((situation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recovery Options */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Wie wir Ihre Daten retten
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Selbst wenn das Handy nicht mehr startet, können wir in den meisten Fällen die Daten retten:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <p className="text-slate-300">Software-Probleme (Bootloop, Logo)</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                <p className="text-slate-300">Hardware-Defekte (Display, Akku)</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
                <p className="text-slate-300">Platinenschäden</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Handy startet nicht? Daten retten wir trotzdem!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Kostenlose Diagnose • 95% Erfolgsquote • Express möglich
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
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
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