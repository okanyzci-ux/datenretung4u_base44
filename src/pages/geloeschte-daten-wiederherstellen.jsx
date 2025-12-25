import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Trash2, CheckCircle, Phone, AlertTriangle, Clock } from "lucide-react";
import SEO from "../components/SEO";

export default function GeloeschteDatenWiederherstellen() {
  const dataTypes = [
    { type: "Fotos & Videos", rate: "95%", desc: "Selbst nach Formatierung oft rettbar" },
    { type: "WhatsApp Nachrichten", rate: "90%", desc: "Chats, Medien und Sprachnachrichten" },
    { type: "Kontakte", rate: "98%", desc: "Telefonnummern und gespeicherte Infos" },
    { type: "SMS & iMessages", rate: "92%", desc: "Textnachrichten aller Art" },
    { type: "E-Mails", rate: "88%", desc: "Lokal gespeicherte E-Mails" },
    { type: "Dokumente", rate: "85%", desc: "PDFs, Office-Dateien, Notizen" }
  ];

  const scenarios = [
    "Versehentlich gelöscht",
    "Nach Formatierung",
    "Nach Werksreset",
    "Nach iOS/Android Update",
    "Nach fehlgeschlagenem Backup",
    "Ohne Backup verfügbar"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Gelöschte Daten wiederherstellen - Fotos, WhatsApp | 92% Erfolgsquote"
        description="Gelöschte Daten wiederherstellen ✓ Fotos & Videos ✓ WhatsApp Nachrichten ✓ Kontakte ✓ Nach Formatierung ✓ Ohne Backup ✓ 92% Erfolgsquote ✓ iPhone & Android"
        keywords="gelöschte Daten wiederherstellen, gelöschte Fotos wiederherstellen, WhatsApp Nachrichten wiederherstellen, Handy Formatierung Datenrettung"
        canonicalUrl="https://datenrettung4u.at/geloeschte-daten-wiederherstellen"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Trash2 className="w-12 h-12 text-amber-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-amber-300">Gelöschte Daten</span> wiederherstellen – Professionelle Datenrettung in Österreich
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Wenn Daten versehentlich gelöscht wurden oder nach einer Formatierung verloren sind, können wir bei DatenRettung4U helfen. Mit unserer Erfahrung aus täglichen Datenrettungsfällen in ganz Österreich retten wir Ihre Fotos, Videos, WhatsApp Chats und mehr – 92% Erfolgsquote.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all"
              >
                Kostenlose Analyse
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

      {/* Alert */}
      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Wichtig: Gerät nicht mehr verwenden!</h3>
            <p className="text-amber-800">
              Gelöschte Daten können überschrieben werden, wenn Sie das Gerät weiter nutzen. 
              Für beste Erfolgschancen: Smartphone sofort ausschalten und uns kontaktieren.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Data Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Was können wir <span className="text-amber-600">wiederherstellen</span>?
            </h2>
            <p className="text-lg text-slate-600">
              Erfolgsquoten nach Datentyp
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTypes.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{data.type}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">{data.rate}</div>
                    <div className="text-xs text-slate-500">Erfolg</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{data.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Auch in diesen Fällen helfen wir
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {scenarios.map((scenario, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-amber-200">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{scenario}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Wie funktioniert die Wiederherstellung?
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Wenn Daten "gelöscht" werden, sind sie nicht wirklich weg – nur unsichtbar. 
            Mit professioneller Datenrettung und spezialisierter Software können wir sie wiederherstellen, solange sie nicht überschrieben wurden. Unsere Erfahrung aus Österreich zeigt: Je schneller Sie handeln, desto besser die Erfolgsaussichten.
          </p>

          <div className="space-y-4">
            {[
              { title: "Tiefenanalyse", desc: "Wir scannen den Speicher nach gelöschten Daten" },
              { title: "Daten-Rekonstruktion", desc: "Fragmentierte Dateien werden zusammengesetzt" },
              { title: "Wiederherstellung", desc: "Alle gefundenen Daten werden extrahiert" },
              { title: "Qualitätsprüfung", desc: "Wir prüfen die Integrität aller Dateien" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Factor */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Zeit ist entscheidend!</h2>
            <p className="text-xl text-slate-300 mb-8">
              Je länger Sie das Gerät nach dem Löschen nutzen, desto höher die Wahrscheinlichkeit, 
              dass Daten überschrieben werden. Kontaktieren Sie uns schnellstmöglich.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-green-400 mb-2">95%+</div>
                <p className="text-sm text-slate-300">Sofortige Reaktion (innerhalb 24h)</p>
              </div>
              <div className="bg-amber-500/20 border border-amber-500/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400 mb-2">80%</div>
                <p className="text-sm text-slate-300">Nach 1 Woche Nutzung</p>
              </div>
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4">
                <div className="text-3xl font-bold text-red-400 mb-2">50%</div>
                <p className="text-sm text-slate-300">Nach intensiver Weiternutzung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zusammenfassung */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Zusammenfassung</h2>
            <div className="bg-white rounded-2xl p-8 border border-amber-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Warum Daten "gelöscht" aussehen:</strong> Gelöschte Dateien werden nur unsichtbar markiert, bleiben aber physisch auf dem Speicher, bis sie überschrieben werden.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wann Selbstversuche riskant sind:</strong> Recovery-Apps können Daten überschreiben. Bei wichtigen Daten sollten Sie sofort das Gerät ausschalten und professionelle Hilfe kontaktieren.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wann eine professionelle Datenrettung sinnvoll ist:</strong> Bei versehentlichem Löschen, nach Formatierung oder Werksreset – besonders wenn es um unwiederbringliche Erinnerungen oder geschäftliche Daten geht.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Warum eine Datenrettung in Österreich oft erfolgreich ist:</strong> Mit zertifizierter Datenrettung und modernen Technologien erreichen wir 92% Erfolgsquote – auch ohne Backup.
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
                  q: "Kann man gelöschte Daten nach Formatierung wiederherstellen?",
                  a: "Ja, in vielen Fällen ist eine Wiederherstellung möglich. Nach einer Formatierung werden Dateien nicht sofort physisch gelöscht, sondern nur als 'überschreibbar' markiert. Mit professioneller Datenrettung können wir diese Daten oft noch extrahieren – vorausgesetzt, sie wurden nicht bereits überschrieben."
                },
                {
                  q: "Wie lange dauert eine Datenrettung?",
                  a: "Die Dauer hängt vom Schadensbild ab. Einfache Software-Wiederherstellungen können innerhalb von 24-48 Stunden abgeschlossen sein. Bei komplexeren Fällen mit Hardware-Schäden kann es 3-7 Werktage dauern. Express-Service ist nach Absprache möglich."
                },
                {
                  q: "Was kostet eine Datenrettung in Österreich?",
                  a: "Die Kosten variieren je nach Aufwand und Schadensart. Die Diagnose ist bei uns kostenlos. Danach erhalten Sie ein transparentes Angebot. Bei uns gilt: Keine Daten, keine Kosten – Sie zahlen nur bei erfolgreicher Wiederherstellung."
                },
                {
                  q: "Sind meine Daten während der Rettung sicher?",
                  a: "Ja, Datenschutz hat höchste Priorität. Alle Datenrettungsprozesse erfolgen in gesicherten Laboren, und Ihre Daten werden vertraulich behandelt und nach erfolgreicher Übergabe sicher gelöscht."
                },
                {
                  q: "Funktioniert Datenrettung auch ohne Backup?",
                  a: "Ja, professionelle Datenrettung funktioniert auch komplett ohne Backup. Wir arbeiten direkt mit dem Gerätespeicher und können Daten wiederherstellen, selbst wenn nie ein Backup angelegt wurde."
                },
                {
                  q: "Kann ich gelöschte WhatsApp Nachrichten wiederherstellen?",
                  a: "Ja, WhatsApp Nachrichten, Bilder und Videos können wir mit 90% Erfolgsquote wiederherstellen – auch wenn kein Cloud-Backup vorhanden ist. Wichtig ist, das Gerät nach dem Löschen nicht weiter zu verwenden."
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
      <section className="py-20 bg-gradient-to-br from-amber-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gelöschte Daten jetzt retten!
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Kostenlose Analyse • 92% Erfolgsquote • Auch ohne Backup
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
            >
              Jetzt Wiederherstellung starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}