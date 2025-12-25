import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Image, CheckCircle, Clock, Phone, AlertTriangle, XCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function GeloeschteFotosWiederherstellen() {
  const scenarios = [
    { situation: "Versehentlich gelöscht", chance: "95%", time: "Sofort handeln" },
    { situation: "Nach Formatierung", chance: "85%", time: "Innerhalb 24h" },
    { situation: "Nach Werksreset", chance: "75%", time: "Je schneller, desto besser" },
    { situation: "Überschrieben", chance: "30%", time: "Teilweise möglich" }
  ];

  const steps = [
    "Smartphone sofort nicht mehr verwenden",
    "Keine neuen Fotos machen",
    "Keine Apps installieren oder updaten",
    "Flugmodus aktivieren",
    "Professionelle Hilfe kontaktieren"
  ];

  const whatNotToDo = [
    "Keine Recovery-Apps selbst installieren (überschreibt Daten!)",
    "Nicht weiter fotografieren",
    "Keine Cloud-Sync durchführen",
    "Nicht zu lange warten"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Gelöschte Fotos wiederherstellen - Handy | 95% Erfolgsquote"
        description="Gelöschte Fotos vom Handy wiederherstellen ✓ iPhone & Android ✓ Nach Formatierung ✓ Ohne Backup ✓ 95% Erfolgsquote ✓ Auch Videos ✓ Kostenlose Diagnose"
        keywords="gelöschte Fotos wiederherstellen, iPhone Fotos wiederherstellen, Android Fotos wiederherstellen, formatierte Fotos retten, ohne Backup"
        canonicalUrl="https://datenrettung4u.at/geloeschte-fotos-wiederherstellen"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-pink-900 via-pink-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image className="w-12 h-12 text-pink-300 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-pink-300">Gelöschte Fotos</span> wiederherstellen – Ursachen & Datenrettung in Österreich
            </h1>
            <p className="text-xl text-pink-100 mb-4">
              Wenn wertvolle Fotos versehentlich gelöscht werden, ist schnelles Handeln entscheidend. Bei DatenRettung4U retten wir täglich Smartphones in ganz Österreich – auch bei versehentlichem Löschen oder nach Formatierung. Mit professioneller Datenrettung erreichen wir 95% Erfolgsquote bei Foto-Wiederherstellungen.
            </p>
            <div className="flex items-center gap-2 text-pink-200">
              <Clock className="w-5 h-5" />
              <span>6 Minuten Lesezeit • Aktualisiert: Dezember 2024</span>
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
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Stopp! Nicht weitermachen!</h3>
            <p className="text-amber-800">
              Jede weitere Nutzung des Smartphones kann gelöschte Fotos überschreiben. 
              Schalten Sie das Gerät aus und kontaktieren Sie uns für die besten Erfolgschancen.
            </p>
          </div>
        </motion.div>
      </div>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Wie funktioniert Foto-Wiederherstellung?
            </h2>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8">
              <p className="text-lg text-slate-700 mb-4">
                Wenn Sie ein Foto löschen, wird es nicht sofort vom Speicher entfernt. 
                Stattdessen wird nur der Verweis darauf gelöscht, und der Speicherplatz wird als "frei" markiert.
              </p>
              <p className="text-lg text-slate-700">
                <strong>Das bedeutet:</strong> Solange dieser Speicherplatz nicht mit neuen Daten überschrieben wurde, 
                können wir die Fotos mit professioneller Datenrettung und spezialisierter Software wiederherstellen. Unsere Erfahrung aus täglichen Datenrettungsfällen in Österreich zeigt: Die Erfolgsquote ist am höchsten, wenn Sie sofort nach dem Löschen reagieren.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Erfolgsquoten nach Situation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-pink-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{scenario.situation}</h3>
                    <p className="text-sm text-slate-600">{scenario.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-pink-600">{scenario.chance}</div>
                    <div className="text-xs text-slate-500">Erfolg</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Erste Hilfe */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Was Sie jetzt tun sollten
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Das SOLLTEN Sie tun:
            </h3>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-green-50 border border-green-200 rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Das sollten Sie NICHT tun:
            </h3>
            <div className="space-y-3">
              {whatNotToDo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* iPhone vs Android */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            iPhone vs Android Foto-Wiederherstellung
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">iPhone</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Fotos im "Zuletzt gelöscht" Ordner 30 Tage lang</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">iCloud Backup kann helfen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">HEIC Format bei neueren iPhones</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Android / Samsung</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Papierkorb in Google Fotos (60 Tage)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">SD-Karte oft einfacher zu retten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">JPG/PNG Standard-Format</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zusammenfassung */}
      <section className="py-20 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Zusammenfassung</h2>
            <div className="bg-white rounded-2xl p-8 border border-pink-200">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Warum gelöschte Fotos oft rettbar sind:</strong> Beim Löschen wird nur der Dateiverweis entfernt – die eigentlichen Bilddaten bleiben physisch auf dem Speicher, bis sie überschrieben werden.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wann Selbstversuche riskant sind:</strong> Recovery-Apps können Daten überschreiben. Weiteres Fotografieren oder App-Installationen gefährden die Rettungschancen erheblich.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Wann eine professionelle Datenrettung sinnvoll ist:</strong> Bei wichtigen Erinnerungsfotos, nach Formatierung oder wenn der "Zuletzt gelöscht" Ordner bereits geleert wurde.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Warum eine Datenrettung in Österreich oft erfolgreich ist:</strong> Mit zertifizierter Datenrettung, modernen Technologien und Erfahrung aus täglichen Rettungsfällen erreichen wir 95% Erfolgsquote bei Foto-Wiederherstellungen.
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
                  q: "Kann man gelöschte Fotos nach Formatierung wiederherstellen?",
                  a: "Ja, in vielen Fällen ist eine Wiederherstellung möglich. Nach einer Formatierung werden Fotos nicht sofort physisch gelöscht. Mit professioneller Datenrettung können wir diese oft noch extrahieren – Erfolgsquote liegt bei 85% nach Formatierung."
                },
                {
                  q: "Wie lange dauert eine Foto-Datenrettung?",
                  a: "Bei einfachen Fällen (versehentliches Löschen) dauert die Wiederherstellung meist 24-48 Stunden. Bei komplexeren Hardware-Schäden kann es 3-5 Werktage dauern. Express-Service ist nach Absprache möglich."
                },
                {
                  q: "Was kostet eine Foto-Datenrettung in Österreich?",
                  a: "Die Diagnose ist kostenlos. Die Kosten hängen vom Aufwand ab – bei Software-Wiederherstellung ab €99, bei Hardware-Schäden individuell. Wichtig: Keine Daten, keine Kosten."
                },
                {
                  q: "Sind meine Fotos während der Rettung sicher?",
                  a: "Ja, Datenschutz hat höchste Priorität. Alle Daten werden vertraulich behandelt und nach erfolgreicher Übergabe sicher gelöscht. Wir unterliegen der österreichischen DSGVO."
                },
                {
                  q: "Funktioniert Foto-Wiederherstellung auch ohne iCloud/Google Backup?",
                  a: "Ja, professionelle Datenrettung funktioniert komplett ohne Cloud-Backup. Wir arbeiten direkt mit dem Gerätespeicher und können Fotos wiederherstellen, selbst wenn nie ein Backup angelegt wurde."
                },
                {
                  q: "Kann man Fotos retten, die vor Monaten gelöscht wurden?",
                  a: "Das hängt von der Nutzung des Geräts ab. Je weniger das Gerät seit dem Löschen genutzt wurde, desto besser die Chancen. Selbst nach Monaten sind Wiederherstellungen möglich, wenn der Speicherbereich nicht überschrieben wurde."
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
      <section className="py-20 bg-gradient-to-br from-pink-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image className="w-16 h-16 text-pink-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retten Sie Ihre Erinnerungen!
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Kostenlose Diagnose • 95% Erfolgsquote • Auch Videos & Screenshots
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
              >
                Jetzt Fotos retten
              </Link>
              <a
                href="tel:+436609005454"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
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