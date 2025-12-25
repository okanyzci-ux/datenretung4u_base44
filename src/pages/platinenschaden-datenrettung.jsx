import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Cpu, CheckCircle, Phone, Shield } from "lucide-react";
import SEO from "../components/SEO";

export default function PlatinenschadenDatenrettung() {
  const damages = [
    { type: "Kurzschluss", desc: "Gerät reagiert nicht mehr", rate: "85%" },
    { type: "Chip-Defekt", desc: "CPU oder Speicher-Controller defekt", rate: "82%" },
    { type: "Korrosion", desc: "Platine durch Feuchtigkeit beschädigt", rate: "78%" },
    { type: "Überhitzung", desc: "Platine durch Hitze beschädigt", rate: "80%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Platinenschaden Datenrettung - Chip-Level | 89% Erfolgsquote"
        description="Professionelle Platinenschaden Datenrettung ✓ Chip-Level Reparatur ✓ Mainboard defekt ✓ Kurzschluss ✓ Korrosion ✓ 89% Erfolgsquote ✓ Reinraumlabor"
        keywords="Platinenschaden Datenrettung, Mainboard Datenrettung, Chip-Level Reparatur, Logicboard Datenrettung, Kurzschluss Handy"
        canonicalUrl="https://datenrettung4u.at/platinenschaden-datenrettung"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Cpu className="w-12 h-12 text-purple-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-purple-300">Platinenschaden</span> Datenrettung – Chip-Level Reparatur in Österreich
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Wenn die Platine defekt ist, sind konventionelle Methoden oft machtlos. Bei DatenRettung4U retten wir täglich Geräte mit Platinenschäden in ganz Österreich. Mit professioneller Datenrettung und Chip-Level Reparatur im Reinraumlabor erreichen wir 89% Erfolgsquote – auch bei Kurzschluss, Korrosion oder defekten Chips.
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

      {/* What is it */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Was ist ein <span className="text-purple-600">Platinenschaden</span>?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Die Platine (auch Mainboard oder Logicboard genannt) ist das Herzstück Ihres Smartphones. 
              Sie verbindet alle Komponenten und enthält wichtige Chips wie CPU, RAM und Speicher-Controller. 
              Bei einem Platinenschaden ist oft eine professionelle Datenrettung mit Chip-Level Reparatur nötig. Unsere Erfahrung aus täglichen Datenrettungsfällen in Österreich zeigt: Selbst bei schweren Platinenschäden ist eine Rettung in den meisten Fällen möglich.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-4">Häufige Anzeichen:</h3>
              <ul className="space-y-2">
                {[
                  "Gerät startet nicht mehr (kein Logo, kein Bild)",
                  "Bootloop (Gerät startet immer wieder neu)",
                  "Überhitzung oder seltsame Geräusche",
                  "Nach Wasserschaden komplett tot",
                  "Nach Sturz keine Funktion mehr"
                ].map((sign, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Damages */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Platinenschäden die wir reparieren
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {damages.map((damage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-purple-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{damage.type}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{damage.rate}</div>
                    <div className="text-xs text-slate-500">Erfolg</div>
                  </div>
                </div>
                <p className="text-slate-600">{damage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chip-Level */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 text-white"
          >
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-12 h-12 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-4">Chip-Level Reparatur im Reinraumlabor</h2>
                <p className="text-purple-100 mb-6">
                  Platinenschäden erfordern höchste Präzision. In unserem Reinraumlabor arbeiten wir mit:
                </p>
                <ul className="space-y-3">
                  {[
                    "Mikroskop-gestützter Reparatur (bis zu 200x Vergrößerung)",
                    "Reballing und Reflow von defekten Chips",
                    "Leiterbahn-Reparatur mit Feinstdrähten",
                    "Korrosionsentfernung und Platinen-Reinigung",
                    "NAND-Speicher Direktauslese bei CPU-Defekt"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Unser Chip-Level Rettungsprozess
          </h2>
          <div className="space-y-4">
            {[
              "Mikroskop-Diagnose: Genaue Analyse der Platine unter dem Mikroskop",
              "Fehlersuche: Lokalisierung des defekten Chips oder der beschädigten Leiterbahn",
              "Chip-Level Reparatur: Reparatur oder Austausch auf Chip-Ebene",
              "Datenextraktion: Direkter Zugriff auf den Speicher-Chip",
              "Vollständige Sicherung: Alle Daten werden professionell extrahiert"
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 border border-slate-200"
              >
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-700 pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusammenfassung */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Zusammenfassung</h2>
            <div className="bg-white rounded-2xl p-8 border border-purple-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Warum Platinenschäden auftreten:</strong> Ursachen sind Kurzschlüsse, defekte Chips (CPU/Speicher-Controller), Korrosion durch Feuchtigkeit oder Überhitzung. Die Platine ist das Herzstück des Smartphones.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wann Selbstversuche riskant sind:</strong> Bei Platinenschäden ist professionelle Chip-Level Reparatur im Reinraumlabor nötig. Selbstversuche können die Platine weiter beschädigen und eine Rettung unmöglich machen.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wann eine professionelle Datenrettung sinnvoll ist:</strong> Wenn das Gerät nicht mehr startet, nach Wasserschaden mit Korrosion, bei Überhitzung oder wenn konventionelle Reparaturen gescheitert sind.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Warum eine Datenrettung in Österreich oft erfolgreich ist:</strong> Mit zertifizierter Datenrettung, Chip-Level Reparatur im Reinraumlabor und NAND-Speicher Direktauslese erreichen wir 89% Erfolgsquote bei Platinenschäden.
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Häufige Fragen zur Datenrettung in Österreich
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Kann man Daten retten, wenn die Platine defekt ist?",
                  a: "Ja, in den meisten Fällen ist eine Datenrettung möglich. Mit Chip-Level Reparatur im Reinraumlabor können wir defekte Chips reparieren oder den Speicher direkt auslesen. Erfolgsquote liegt bei 89%."
                },
                {
                  q: "Wie lange dauert eine Platinenschaden-Datenrettung?",
                  a: "Chip-Level Reparaturen sind komplex und dauern meist 5-7 Werktage. Bei dringenden Fällen bieten wir Express-Service (3-4 Tage) an. Die Diagnose dauert 24-48 Stunden."
                },
                {
                  q: "Was kostet eine Platinenschaden Datenrettung in Österreich?",
                  a: "Chip-Level Reparaturen starten ab €399. Die genauen Kosten hängen vom Schadensumfang ab. Diagnose ist kostenlos. Wichtig: Keine Daten, keine Kosten."
                },
                {
                  q: "Sind meine Daten bei Chip-Level Reparatur sicher?",
                  a: "Ja, alle Prozesse erfolgen in gesicherten Reinraumlaboren. Datenschutz hat höchste Priorität. Ihre Daten werden vertraulich behandelt und nach Übergabe sicher gelöscht."
                },
                {
                  q: "Ist Datenrettung nach Wasserschaden mit Platinenschaden möglich?",
                  a: "Ja, auch bei Korrosion durch Wasserschaden können wir oft Daten retten. Wichtig: Gerät nicht einschalten und sofort zu uns bringen. Wir entfernen die Korrosion und reparieren die Leiterbahnen."
                },
                {
                  q: "Was ist der Unterschied zwischen normaler Reparatur und Chip-Level?",
                  a: "Normale Reparatur tauscht Komponenten aus. Chip-Level Reparatur arbeitet auf Mikroskop-Ebene direkt mit einzelnen Chips, Leiterbahnen und dem NAND-Speicher – nötig bei schweren Platinenschäden."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platinenschaden? Wir retten Ihre Daten!
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Chip-Level Expertise • 89% Erfolgsquote • Keine Daten, keine Kosten
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
            >
              Kostenlose Diagnose starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}