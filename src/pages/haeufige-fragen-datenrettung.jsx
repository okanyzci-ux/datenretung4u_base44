import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function HaeufigeFragen() {
  const faqs = [
    {
      question: "Kann man Daten von einem Handy retten, das nicht mehr einschaltet?",
      answer: "Ja. Auch wenn ein Smartphone nicht mehr startet, ist eine Datenrettung oft möglich. Bei Datenrettung4u analysieren wir das Gerät auf Hardware-Ebene (Chip-Level) und versuchen, Fotos, Videos, Kontakte und andere wichtige Daten direkt vom Speicher auszulesen."
    },
    {
      question: "Ist eine Datenrettung bei Wasserschaden möglich?",
      answer: "In vielen Fällen ja. Ein Wasserschaden bedeutet nicht automatisch Datenverlust. Entscheidend ist, wie schnell das Gerät behandelt wird. Datenrettung4u ist auf Datenrettung bei Wasserschäden spezialisiert und kann häufig Daten von iPhones und Android-Geräten erfolgreich wiederherstellen."
    },
    {
      question: "Welche Daten können gerettet werden?",
      answer: "Wir können unter anderem folgende Daten retten: Fotos und Videos, Kontakte und Anruflisten, WhatsApp- und Messenger-Chats, Dokumente und Notizen. Die Erfolgschancen hängen vom Schaden und vom Zustand des internen Speichers ab."
    },
    {
      question: "Welche Marken unterstützt Datenrettung4u?",
      answer: "Datenrettung4u bietet professionelle Datenrettung für: iPhone (Apple), Samsung, Huawei, Xiaomi, Google Pixel und andere Android-Smartphones."
    },
    {
      question: "Wie lange dauert eine Handy-Datenrettung?",
      answer: "Die Dauer hängt vom Schaden ab. Einfache Fälle: oft 1–3 Werktage. Komplexe Hardware-Schäden: mehrere Tage. Nach der ersten Diagnose informieren wir transparent über Dauer und Erfolgsaussichten."
    },
    {
      question: "Was kostet eine Datenrettung?",
      answer: "Die Kosten variieren je nach Schaden und Aufwand. Bei Datenrettung4u erfolgt zuerst eine Analyse, danach erhältst du einen klaren Kostenvoranschlag. Keine Daten → keine Kosten (je nach Fall)."
    },
    {
      question: "Sind meine Daten sicher und vertraulich?",
      answer: "Ja. Datenschutz hat bei Datenrettung4u höchste Priorität. Alle Daten werden streng vertraulich behandelt und nicht gespeichert oder weitergegeben."
    },
    {
      question: "Wo befindet sich Datenrettung4u?",
      answer: "Datenrettung4u befindet sich in Linz, Oberösterreich. Kunden aus Linz und Umgebung können ihr Gerät direkt vorbeibringen oder per Versand einsenden."
    },
    {
      question: "Warum Datenrettung4u und nicht ein normaler Handyshop?",
      answer: "Normale Handyshops tauschen meist nur Bauteile. Datenrettung4u ist auf professionelle Datenrettung und Chip-Level-Reparaturen spezialisiert und kann auch komplexe Fälle lösen, bei denen andere Werkstätten aufgeben."
    },
    {
      question: "Was soll ich tun, wenn mir Daten wichtig sind?",
      answer: "Gerät nicht weiter einschalten. Keine Ladeversuche bei Wasserschaden. So schnell wie möglich zu Datenrettung4u bringen. Je schneller gehandelt wird, desto höher ist die Erfolgschance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Häufige Fragen zur Handy-Datenrettung | FAQ - DatenRettung4U"
        description="Alle wichtigen Fragen zur Smartphone-Datenrettung beantwortet: Wasserschaden, defekte Geräte, Kosten, Dauer und Datensicherheit. Experten aus Linz helfen weiter."
        keywords="Datenrettung FAQ, Handy Datenrettung Fragen, iPhone reparieren Kosten, Wasserschaden Datenrettung möglich, wie lange dauert Datenrettung"
        canonicalUrl="https://datenrettung4u.at/haeufige-fragen-datenrettung"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Häufig gestellte Fragen
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Häufige Fragen zur Handy-Datenrettung in <span className="text-cyan-400">Linz</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um professionelle Smartphone-Datenrettung
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                <HelpCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                {faq.question}
              </h2>
              <p className="text-slate-600 leading-relaxed pl-9">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Noch Fragen? Wir helfen Ihnen gerne weiter!</h2>
          <p className="text-cyan-50 mb-6 max-w-2xl mx-auto">
            Unsere Experten beraten Sie kostenlos und unverbindlich zu Ihrem konkreten Fall
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Kostenlose Diagnose starten
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+436609005454"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              0660 900 54 54
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}