import React from "react";
import { motion } from "framer-motion";
import { Package, Search, Wrench, CheckCircle } from "lucide-react";

export default function CityProcess({ city }) {
  const steps = [
    {
      icon: Package,
      title: "Einsenden oder vorbeibringen",
      description: `Senden Sie Ihr Gerät aus ${city} kostenlos ein oder besuchen Sie uns in Linz.`
    },
    {
      icon: Search,
      title: "Kostenlose Diagnose",
      description: "Unsere Experten analysieren Ihr Gerät und erstellen einen detaillierten Bericht."
    },
    {
      icon: Wrench,
      title: "Professionelle Datenrettung",
      description: "Mit modernster Technik retten wir Ihre wertvollen Daten."
    },
    {
      icon: CheckCircle,
      title: "Daten zurück",
      description: "Sie erhalten Ihre geretteten Daten per USB-Stick oder Download."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            So funktioniert Datenrettung aus <span className="text-cyan-600">{city}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In 4 einfachen Schritten zu Ihren geretteten Daten
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}