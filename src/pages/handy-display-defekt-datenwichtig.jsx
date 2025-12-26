import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Smartphone, CheckCircle, Phone, Monitor, Shield, Clock, AlertCircle, Zap, Database, Lock } from "lucide-react";
import SEO, { StructuredData } from "../components/SEO";

export default function HandyDisplayDefektDatenwichtig() {
  const displayProblems = [
    {
      title: "Komplett schwarzer Bildschirm",
      desc: "Keine Anzeige, aber Gerät vibriert oder macht Geräusche",
      severity: "Hoch",
      recovery: "99%"
    },
    {
      title: "Touchscreen reagiert nicht",
      desc: "Display zeigt Bild, aber Touch funktioniert nicht",
      severity: "Mittel",
      recovery: "99%"
    },
    {
      title: "Display gesprungen/zerbrochen",
      desc: "Physischer Schaden am Displayglas",
      severity: "Mittel",
      recovery: "98%"
    },
    {
      title: "Streifen oder Flecken",
      desc: "LCD-Schaden mit Verfärbungen",
      severity: "Mittel",
      recovery: "99%"
    },
    {
      title: "Hintergrundbeleuchtung defekt",
      desc: "Display sehr dunkel oder nicht sichtbar",
      severity: "Niedrig",
      recovery: "99%"
    },
    {
      title: "Keine Anzeige nach Sturz",
      desc: "Display zeigt nichts mehr nach Fallschaden",
      severity: "Hoch",
      recovery: "97%"
    }
  ];

  const dataTypes = [
    { icon: Database, title: "Fotos & Videos", desc: "Alle Ihre Erinnerungen" },
    { icon: Phone, title: "Kontakte", desc: "Telefonnummern & Details" },
    { icon: Smartphone, title: "WhatsApp Chats", desc: "Nachrichten & Medien" },
    { icon: Lock, title: "Dokumente", desc: "PDFs, Office-Dateien" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Kostenlose Analyse",
      desc: "Wir prüfen Ihr Gerät und erstellen eine Diagnose",
      icon: Shield
    },
    {
      step: 2,
      title: "Datenextraktion",
      desc: "Professionelle Auslesung ohne funktionierendes Display",
      icon: Database
    },
    {
      step: 3,
      title: "Datenübergabe",
      desc: "Sie erhalten alle Daten auf Wunschmedium",
      icon: CheckCircle
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Handy Datenrettung bei Display-Defekt",
    "description": "Professionelle Smartphone-Datenrettung auch bei defektem Display - 99% Erfolgsquote in Österreich",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DatenRettung4U",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Goethestraße 3",
        "addressLocality": "Linz",
        "postalCode": "4020",
        "addressCountry": "AT"
      },
      "telephone": "+436609005454"
    },
    "areaServed": "AT",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://datenrettung4u.at/handy-display-defekt-datenwichtig"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Handy Display defekt aber Daten wichtig? Professionelle Datenrettung 99% Erfolg | Österreich"
        description="Display kaputt, schwarzer Bildschirm oder Touchscreen defekt? ✓ Wir retten Ihre Fotos, Kontakte & WhatsApp ✓ 99% Erfolgsquote ✓ Keine Daten = Keine Kosten ✓ iPhone & Android ✓ Kostenlose Diagnose in ganz Österreich"
        keywords="Handy Display defekt Datenrettung, schwarzer Bildschirm Daten retten, Touchscreen kaputt Daten wichtig, Display zerbrochen Datenrettung, iPhone Display defekt Fotos retten, Samsung Display kaputt Daten sichern, Smartphone Bildschirm schwarz Datenrettung Österreich"
        canonicalUrl="https://datenrettung4u.at/handy-display-defekt-datenwichtig"
      />
      <StructuredData data={structuredData} />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Spezialisiert auf Display-Defekte</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Handy Display defekt – aber Ihre <span className="text-cyan-400">Daten sind wichtig</span>?
            </h1>
            
            <p className="text-xl text-slate-300 mb-4">
              Schwarzer Bildschirm, zerbrochenes Display oder Touchscreen reagiert nicht mehr? <strong className="text-white">Ihre Daten sind trotzdem rettbar!</strong> Mit professioneller Datenrettung in Österreich holen wir Fotos, Kontakte, WhatsApp-Nachrichten und mehr von Ihrem Smartphone – auch ohne funktionierendes Display.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-200">99% Erfolgsquote</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-200">24-72h Bearbeitung</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-slate-200">Keine Daten = Keine Kosten</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                Kostenlose Diagnose starten
              </Link>
              <a
                href="tel:+436609005454"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center gap-2 border border-white/10"
              >
                <Phone className="w-5 h-5" />
                0660 900 54 54
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Alert Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Wichtig bei Display-Defekt</h3>
            <p className="text-amber-800">
              Versuchen Sie nicht, das Gerät zu reparieren oder das Display selbst zu tauschen. Dies kann die Datenrettung erschweren oder unmöglich machen. Kontaktieren Sie uns für eine professionelle Lösung.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Display Problems Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Diese <span className="text-cyan-600">Display-Probleme</span> lösen wir täglich
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Egal welches Display-Problem Ihr Smartphone hat – wir können Ihre Daten retten. 
              Unsere Techniker in Österreich sind auf alle Display-Defekte spezialisiert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <Monitor className="w-8 h-8 text-cyan-600" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-600">{problem.recovery}</div>
                    <div className="text-xs text-slate-500">Erfolg</div>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{problem.desc}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  problem.severity === 'Hoch' ? 'bg-red-100 text-red-700' :
                  problem.severity === 'Mittel' ? 'bg-amber-100 text-amber-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {problem.severity} Dringlichkeit
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Data Can Be Saved */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Was können wir <span className="text-cyan-600">retten</span>?
            </h2>
            <p className="text-lg text-slate-600">
              Auch ohne Display haben wir Zugriff auf alle Ihre wichtigen Daten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dataTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-sm text-slate-600">{type.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Display kaputt ≠ Daten verloren!
            </h3>
            <p className="text-lg text-slate-700 text-center mb-4">
              <strong>Wichtig zu wissen:</strong> Ihr Display ist nur die Anzeige. Die Daten sind auf dem internen Speicher gespeichert und bleiben erhalten – auch wenn das Display komplett zerstört ist.
            </p>
            <p className="text-slate-600 text-center">
              Mit professioneller Auslesetechnik können wir direkt auf den Speicher zugreifen und alle Daten extrahieren – ohne dass Sie das Display bedienen müssen.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              So läuft die <span className="text-cyan-600">Datenrettung</span> ab
            </h2>
            <p className="text-lg text-slate-600">
              Einfach, schnell und transparent – in 3 Schritten zu Ihren Daten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-300 to-cyan-500 z-0" />
                )}
                <div className="relative z-10 bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-cyan-300 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold mb-3">
                      Schritt {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Warum <span className="text-cyan-400">DatenRettung4U</span>?
            </h2>
            <p className="text-xl text-slate-300">
              Ihre Vorteile bei Display-Defekt Datenrettung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "99% Erfolgsquote", desc: "Höchste Erfolgsrate in Österreich" },
              { icon: Clock, title: "Schnelle Bearbeitung", desc: "Meist innerhalb 24-72h" },
              { icon: Lock, title: "Datenschutz", desc: "DSGVO-konforme Behandlung" },
              { icon: Zap, title: "Faire Preise", desc: "Keine versteckten Kosten" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <benefit.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Häufige Fragen zu Display-Defekt Datenrettung
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Kann man Daten retten, wenn das Display komplett schwarz ist?",
                a: "Ja, absolut! Ein schwarzes Display bedeutet nicht, dass die Daten verloren sind. Ihre Daten sind auf dem internen Speicher gespeichert, nicht im Display. Mit professioneller Auslesetechnik können wir direkt auf den Speicher zugreifen – 99% Erfolgsquote."
              },
              {
                q: "Funktioniert die Datenrettung auch bei Touch-Defekt?",
                a: "Ja! Wenn das Display zwar etwas anzeigt, aber der Touchscreen nicht reagiert, können wir dennoch alle Daten auslesen. Wir benötigen keine Interaktion über den Touchscreen für die Datenrettung."
              },
              {
                q: "Was kostet die Datenrettung bei Display-Defekt?",
                a: "Die Diagnose ist kostenlos. Die Kosten für die Datenrettung hängen vom Gerätetyp und Aufwand ab. Wichtig: Bei uns gilt 'Keine Daten = Keine Kosten' – Sie zahlen nur bei erfolgreicher Rettung."
              },
              {
                q: "Wie lange dauert die Datenrettung?",
                a: "In den meisten Fällen 24-72 Stunden. Bei einfachen Display-Defekten oft schon am selben Tag. Express-Service ist nach Absprache möglich."
              },
              {
                q: "Muss ich mein Display reparieren lassen für die Datenrettung?",
                a: "Nein! Wir können die Daten auch ohne Display-Reparatur auslesen. Eine Display-Reparatur ist für die Datenrettung nicht notwendig und könnte sie sogar gefährden."
              },
              {
                q: "Welche Daten können gerettet werden?",
                a: "Alle Daten: Fotos, Videos, Kontakte, WhatsApp-Nachrichten, SMS, E-Mails, Dokumente, Apps und mehr. Wir erstellen ein komplettes Backup Ihres Smartphones."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Monitor className="w-16 h-16 text-white/90 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Display defekt? Ihre Daten sind uns wichtig!
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Kostenlose Diagnose • 99% Erfolgsquote • 24-72h Bearbeitung • Keine Daten = Keine Kosten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Jetzt Daten retten lassen
              </Link>
              <a
                href="tel:+436609005454"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                0660 900 54 54 - Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}