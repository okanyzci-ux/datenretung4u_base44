import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { 
  Droplets, Smartphone, Cpu, RotateCcw, 
  Trash2, Zap, ArrowRight
} from "lucide-react";

export default function DamageTypesSection() {
  const damageTypes = [
    {
      icon: Droplets,
      title: "Wasserschaden",
      description: "Ihr Handy ist ins Wasser gefallen? Wir retten Ihre Daten auch aus stark beschädigten Geräten.",
      successRate: "95%",
      image: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19?w=400&q=80"
    },
    {
      icon: Smartphone,
      title: "Display defekt",
      description: "Gebrochenes Display, schwarzer Bildschirm? Kein Hindernis für unsere Datenrettungs-Experten.",
      successRate: "99%",
      image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&q=80"
    },
    {
      icon: Cpu,
      title: "Platinenschaden",
      description: "Komplexe Platinenschäden erfordern Mikrochirurgie – unsere Spezialität mit höchster Präzision.",
      successRate: "90%",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80"
    },
    {
      icon: RotateCcw,
      title: "Bootloop / Startet nicht",
      description: "Handy startet ständig neu oder gar nicht mehr? Wir finden die Ursache und retten Ihre Daten.",
      successRate: "98%",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80"
    },
    {
      icon: Trash2,
      title: "Gelöschte Daten",
      description: "Versehentlich gelöscht oder formatiert? Unsere forensischen Tools können vieles wiederherstellen.",
      successRate: "85%",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
    },
    {
      icon: Zap,
      title: "Elektronikschaden",
      description: "Überspannung, Kurzschluss oder andere elektronische Defekte – wir analysieren und retten.",
      successRate: "92%",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium mb-4">
            Schadensarten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Wir retten Daten bei <span className="text-cyan-600">jedem Schaden</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Egal welcher Schaden – unsere Experten haben die Lösung. Hier sind die häufigsten Fälle, die wir erfolgreich lösen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {damageTypes.map((damage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={damage.image} 
                  alt={damage.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Success Rate Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                  {damage.successRate} Erfolg
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <damage.icon className="w-7 h-7 text-cyan-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{damage.title}</h3>
                <p className="text-slate-600 mb-4">{damage.description}</p>
                <Link
                  to={createPageUrl("Datenrettung")}
                  className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors group/link"
                >
                  Datenrettung anfragen
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}