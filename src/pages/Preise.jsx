import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  CheckCircle, AlertCircle, ArrowRight, Shield, 
  Smartphone, Cpu, Droplets, Phone, HelpCircle
} from "lucide-react";

export default function Preise() {
  const pricingTiers = [
    {
      name: "Standard",
      price: "99",
      priceNote: "ab",
      description: "Für einfache Schäden wie defekte Displays oder Softwareprobleme",
      features: [
        "Display-/Touchschäden",
        "Bootloop Probleme",
        "Softwarefehler",
        "Einfache Hardwaredefekte",
        "Kostenlose Diagnose",
        "Versicherter Versand"
      ],
      icon: Smartphone,
      color: "cyan",
      popular: false
    },
    {
      name: "Forensik",
      price: "299",
      priceNote: "ab",
      description: "Für komplexere Fälle die forensische Methoden erfordern",
      features: [
        "Wasserschäden",
        "Platinenschäden",
        "Gelöschte Daten",
        "Chip-Level Reparatur",
        "Mikroskop-Lötarbeiten",
        "Express-Service möglich"
      ],
      icon: Cpu,
      color: "amber",
      popular: true
    },
    {
      name: "Komplex",
      price: "499",
      priceNote: "ab",
      description: "Für schwierigste Fälle mit mehrfachen Schäden",
      features: [
        "Schwere Platinenschäden",
        "Brand-/Explosionsschäden",
        "Mehrfache Defekte",
        "Spezialhardware nötig",
        "Längere Bearbeitungszeit",
        "Höchste Priorität"
      ],
      icon: Droplets,
      color: "purple",
      popular: false
    }
  ];

  const colorClasses = {
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      icon: "bg-cyan-500",
      button: "bg-cyan-500 hover:bg-cyan-600"
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      icon: "bg-amber-500",
      button: "bg-amber-500 hover:bg-amber-600"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "bg-purple-500",
      button: "bg-purple-500 hover:bg-purple-600"
    }
  };

  const faqs = [
    {
      q: "Muss ich vorab bezahlen?",
      a: "Nein! Sie zahlen erst, wenn wir Ihre Daten erfolgreich gerettet haben und Sie unserem Angebot zustimmen. Die Diagnose ist komplett kostenlos."
    },
    {
      q: "Was ist, wenn keine Datenrettung möglich ist?",
      a: "Dann entstehen für Sie keine Kosten. Unser Motto: Keine Daten, keine Kosten."
    },
    {
      q: "Wie lange dauert die Datenrettung?",
      a: "Die Diagnose dauert in der Regel 24-48 Stunden. Die eigentliche Datenrettung kann je nach Komplexität zwischen 1-14 Tagen dauern."
    },
    {
      q: "Sind meine Daten bei Ihnen sicher?",
      a: "Absolut! Wir unterliegen der DSGVO und behandeln alle Daten streng vertraulich. Nach erfolgreicher Rückgabe werden alle Daten bei uns gelöscht."
    },
    {
      q: "Wie bekomme ich mein Gerät zu Ihnen?",
      a: "Wir bieten kostenlosen und versicherten Versand in ganz Österreich an. Alternativ können Sie uns auch persönlich in Linz besuchen."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-sm font-medium mb-6"
          >
            Transparente Preise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Faire Preise für <span className="text-cyan-400">Ihre Datenrettung</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Keine versteckten Kosten. Sie zahlen nur bei erfolgreicher Datenrettung.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  tier.popular ? colorClasses[tier.color].border : "border-slate-100"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm font-bold rounded-full">
                    Beliebteste Wahl
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl ${colorClasses[tier.color].icon} flex items-center justify-center mb-6`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-slate-600 mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-sm text-slate-500">{tier.priceNote}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900">€{tier.price}</span>
                    <span className="text-slate-500">inkl. MwSt.</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={createPageUrl("Datenrettung")}
                  className={`block w-full py-4 ${colorClasses[tier.color].button} text-white font-semibold rounded-xl text-center transition-all hover:shadow-lg`}
                >
                  Jetzt anfragen
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Wichtiger Hinweis</h3>
                <p className="text-slate-600 mb-4">
                  Die genannten Preise sind Richtwerte. Der genaue Preis hängt vom individuellen Schadensfall ab 
                  und wird nach der kostenlosen Diagnose ermittelt. <strong>Sie erhalten immer ein verbindliches 
                  Angebot, bevor wir mit der Datenrettung beginnen.</strong>
                </p>
                <p className="text-slate-600">
                  Unsere Preise sind bewusst fair kalkuliert. Wir verzichten auf Lockangebote mit niedrigen 
                  Einstiegspreisen, die später zu Überraschungen führen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Häufig gestellte Fragen</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit für Ihre Datenrettung?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Starten Sie jetzt Ihre kostenlose Diagnose – unverbindlich und ohne Risiko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-colors"
            >
              Kostenlose Diagnose starten
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+436609005454"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
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