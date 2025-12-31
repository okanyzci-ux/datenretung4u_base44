import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function FAQSection() {
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
      question: "Was kostet eine Datenrettung?",
      answer: "Die Kosten variieren je nach Schaden und Aufwand. Bei Datenrettung4u erfolgt zuerst eine kostenlose Analyse, danach erhältst du einen klaren Kostenvoranschlag. Keine Daten → keine Kosten (je nach Fall)."
    },
    {
      question: "Wie lange dauert eine Handy-Datenrettung?",
      answer: "Die Dauer hängt vom Schaden ab. Einfache Fälle: oft 1–3 Werktage. Komplexe Hardware-Schäden: mehrere Tage. Nach der ersten Diagnose informieren wir transparent über Dauer und Erfolgsaussichten."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Häufige Fragen zur <span className="text-cyan-600">Datenrettung</span>
          </h2>
          <p className="text-lg text-slate-600">
            Die wichtigsten Antworten auf Ihre Fragen
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to={createPageUrl("haeufige-fragen-datenrettung")}
            className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all"
          >
            Alle häufigen Fragen ansehen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}