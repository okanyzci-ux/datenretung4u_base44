import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { 
  Send, Search, Wrench, CheckCircle, ArrowRight 
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Send,
      title: "Gerät einsenden",
      description: "Nutzen Sie unseren kostenlosen & versicherten Versand oder bringen Sie Ihr Gerät persönlich vorbei.",
      color: "cyan"
    },
    {
      number: "02",
      icon: Search,
      title: "Kostenlose Diagnose",
      description: "Unsere Experten analysieren Ihr Gerät und erstellen einen detaillierten Diagnosebericht.",
      color: "amber"
    },
    {
      number: "03",
      icon: Wrench,
      title: "Datenrettung",
      description: "Mit modernster Technik und jahrelanger Erfahrung retten wir Ihre wertvollen Daten.",
      color: "purple"
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Daten zurück",
      description: "Sie erhalten Ihre geretteten Daten sicher per USB-Stick oder Download-Link.",
      color: "green"
    }
  ];

  const colorClasses = {
    cyan: "from-cyan-500 to-cyan-600",
    amber: "from-amber-500 to-amber-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-green-500 to-green-600"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            Einfacher Ablauf
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            So einfach funktioniert die <span className="text-cyan-600">Datenrettung</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In nur 4 Schritten zu Ihren geretteten Daten – transparent, sicher und professionell
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-amber-500 via-purple-500 to-green-500 transform -translate-y-1/2 rounded-full opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-slate-900 text-white text-sm font-bold rounded-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[step.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to={createPageUrl("Datenrettung")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Jetzt Datenrettung starten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}