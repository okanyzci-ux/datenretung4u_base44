import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  Send, Package, Search, FileText, Wrench, 
  CheckCircle, ArrowRight, Download, Truck, 
  Clock, Shield, Phone, MessageCircle
} from "lucide-react";
import SEO from "../components/SEO";

export default function Ablauf() {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Kontaktaufnahme",
      description: "Füllen Sie unser Online-Formular aus oder rufen Sie uns an. Wir beraten Sie kostenlos und unverbindlich zu Ihrem Fall.",
      details: ["Kostenlose Erstberatung", "Einschätzung der Erfolgsaussichten", "Transparente Preisinformation"]
    },
    {
      number: 2,
      icon: Package,
      title: "Gerät einsenden",
      description: "Senden Sie Ihr Gerät kostenlos und versichert mit unserem Versandlabel ein – oder bringen Sie es persönlich vorbei.",
      details: ["Kostenloses Versandlabel", "Versicherter Transport", "Persönliche Abgabe möglich"]
    },
    {
      number: 3,
      icon: Search,
      title: "Kostenlose Diagnose",
      description: "Unsere Experten analysieren Ihr Gerät gründlich und erstellen einen detaillierten Diagnosebericht.",
      details: ["Analyse innerhalb 24-48h", "Detaillierter Bericht", "Keine Kosten bei Diagnose"]
    },
    {
      number: 4,
      icon: FileText,
      title: "Angebot erhalten",
      description: "Sie erhalten ein verbindliches Angebot mit allen Details. Erst nach Ihrer Zustimmung beginnen wir mit der Datenrettung.",
      details: ["Transparente Preise", "Keine versteckten Kosten", "Unverbindliches Angebot"]
    },
    {
      number: 5,
      icon: Wrench,
      title: "Datenrettung",
      description: "Mit modernster Technik und jahrelanger Erfahrung retten unsere Spezialisten Ihre wertvollen Daten.",
      details: ["Modernste Technik", "Erfahrene Spezialisten", "Höchste Sorgfalt"]
    },
    {
      number: 6,
      icon: CheckCircle,
      title: "Daten zurück",
      description: "Sie erhalten Ihre geretteten Daten auf einem USB-Stick oder per sicherem Download-Link.",
      details: ["Daten auf USB-Stick", "Oder sicherer Download", "Gerät wird zurückgesendet"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Ablauf Datenrettung | So funktioniert's in 6 Schritten - Handy Planet"
        description="Einfacher Ablauf der Smartphone Datenrettung ✓ 6 transparente Schritte ✓ Von der Anfrage bis zur Datenrückgabe ✓ Kostenloser Versand ✓ 24-48h Diagnose ✓ Keine Vorauskasse"
        keywords="Datenrettung Ablauf, wie funktioniert Datenrettung, Handy Datenrettung Prozess, Smartphone Reparatur Ablauf, Datenrettung Schritte"
        canonicalUrl="https://handyplanet.at/ablauf"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-sm font-medium mb-6"
          >
            So funktioniert's
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Der Ablauf Ihrer <span className="text-cyan-400">Datenrettung</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            In 6 einfachen Schritten zu Ihren geretteten Daten – transparent, sicher und professionell
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-amber-500 to-green-500 transform -translate-x-1/2 rounded-full" />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-100 inline-block ${
                    index % 2 === 0 ? "" : "md:text-left"
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <span className="text-sm font-bold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                        Schritt {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className={`flex items-center gap-2 text-sm text-slate-500 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}>
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className={`hidden md:flex items-center ${
                  index % 2 === 0 ? "justify-start pl-12" : "md:order-1 justify-end pr-12"
                }`}>
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden absolute left-0 top-0 w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Warum bei uns?
            </h2>
            <p className="text-lg text-slate-600">
              Diese Vorteile erwarten Sie bei Handy Planet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "99% Erfolgsquote", desc: "Höchste Erfolgsrate in Österreich" },
              { icon: Truck, title: "Kostenloser Versand", desc: "Versichert in ganz Österreich" },
              { icon: Clock, title: "Schnelle Diagnose", desc: "Ergebnis in 24-48 Stunden" },
              { icon: Download, title: "Keine Vorauskasse", desc: "Zahlung nur bei Erfolg" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Starten Sie jetzt Ihre Datenrettung – kostenlose Diagnose inklusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              Jetzt starten
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+436609005454"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0660 900 54 54
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}