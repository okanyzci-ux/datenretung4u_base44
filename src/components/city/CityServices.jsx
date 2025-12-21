import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { 
  Droplets, Smartphone, Cpu, RotateCcw, 
  Trash2, Zap, ArrowRight
} from "lucide-react";

export default function CityServices({ city }) {
  const services = [
    {
      icon: Droplets,
      title: "Wasserschaden Rettung",
      description: `Ihr Smartphone ist in ${city} ins Wasser gefallen? Wir retten Ihre Daten auch bei schweren Wasserschäden.`,
      success: "95%"
    },
    {
      icon: Smartphone,
      title: "Display & Sturzschaden",
      description: "Zerbrochenes Display, schwarzer Bildschirm – kein Hindernis für unsere Datenrettungs-Experten.",
      success: "99%"
    },
    {
      icon: Cpu,
      title: "Platinenschaden",
      description: "Komplexe Platinenschäden erfordern Mikrochirurgie. Mit Präzisionsarbeit retten wir Ihre Daten.",
      success: "90%"
    },
    {
      icon: RotateCcw,
      title: "Bootloop / Startet nicht",
      description: "Handy startet ständig neu oder reagiert nicht? Wir finden die Ursache und retten Ihre Daten.",
      success: "98%"
    },
    {
      icon: Trash2,
      title: "Gelöschte Daten",
      description: "Versehentlich gelöscht oder formatiert? Mit forensischen Methoden können wir vieles wiederherstellen.",
      success: "85%"
    },
    {
      icon: Zap,
      title: "Elektronikschaden",
      description: "Überspannung, Kurzschluss oder andere elektronische Defekte – wir analysieren und retten.",
      success: "92%"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Unsere Datenrettungs-Services in <span className="text-cyan-600">{city}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Egal welcher Schaden – wir haben die Lösung für Ihr Smartphone aus {city}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:scale-110 transition-all">
                  <service.icon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.success} Erfolg
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to={createPageUrl("Datenrettung")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Jetzt Datenrettung anfragen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}