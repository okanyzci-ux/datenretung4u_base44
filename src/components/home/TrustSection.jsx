import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, Clock, Award, CreditCard, 
  Truck, HeadphonesIcon, CheckCircle2, Lock
} from "lucide-react";

export default function TrustSection() {
  const trustItems = [
    {
      icon: Shield,
      title: "99% Erfolgsquote",
      description: "Höchste Erfolgsrate bei der Datenrettung in Österreich",
      color: "cyan"
    },
    {
      icon: CreditCard,
      title: "Keine Daten, Keine Kosten",
      description: "Sie zahlen nur bei erfolgreicher Datenrettung",
      color: "green"
    },
    {
      icon: Truck,
      title: "Kostenloser Versand",
      description: "Versicherter Hin- und Rückversand in ganz Österreich",
      color: "amber"
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Schnelle Bearbeitung innerhalb von 24-72 Stunden",
      color: "purple"
    },
    {
      icon: Lock,
      title: "100% Datenschutz",
      description: "Ihre Daten werden streng vertraulich behandelt",
      color: "blue"
    },
    {
      icon: HeadphonesIcon,
      title: "Persönliche Beratung",
      description: "Direkte Ansprechpartner für Ihr Anliegen",
      color: "rose"
    }
  ];

  const colorClasses = {
    cyan: "bg-cyan-500/10 text-cyan-500",
    green: "bg-green-500/10 text-green-500",
    amber: "bg-amber-500/10 text-amber-500",
    purple: "bg-purple-500/10 text-purple-500",
    blue: "bg-blue-500/10 text-blue-500",
    rose: "bg-rose-500/10 text-rose-500"
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Warum Handy Planet?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Vertrauen Sie den <span className="text-cyan-600">Experten</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mit jahrelanger Erfahrung und modernster Technologie retten wir Ihre wertvollen Daten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-cyan-200"
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[item.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10.000+", label: "Gerettete Geräte" },
              { value: "99%", label: "Erfolgsquote" },
              { value: "24h", label: "Express Service" },
              { value: "10+", label: "Jahre Erfahrung" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.p
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}