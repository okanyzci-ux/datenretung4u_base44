import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeviceSelector from "../components/datenrettung/DeviceSelector";
import ModelSelector from "../components/datenrettung/ModelSelector";
import DamageSelector from "../components/datenrettung/DamageSelector";
import ContactForm from "../components/datenrettung/ContactForm";
import { Shield, Truck, CheckCircle, Clock } from "lucide-react";
import SEO from "../components/SEO";

export default function Datenrettung() {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedDamage, setSelectedDamage] = useState(null);

  const steps = [
    { num: 1, label: "Marke" },
    { num: 2, label: "Modell" },
    { num: 3, label: "Schaden" },
    { num: 4, label: "Kontakt" }
  ];

  const features = [
    { icon: Shield, text: "99% Erfolgsquote" },
    { icon: Truck, text: "Kostenloser Versand" },
    { icon: CheckCircle, text: "Keine Daten, keine Kosten" },
    { icon: Clock, text: "24h Express möglich" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Datenrettung prüfen | Kostenlose Diagnose - Handy Planet"
        description="Prüfen Sie jetzt kostenlos, ob eine Datenrettung für Ihr Smartphone möglich ist. Einfacher 4-Schritt-Prozess ✓ Alle Marken ✓ Schnelle Antwort innerhalb 24h"
        keywords="Datenrettung anfragen, Handy Datenrettung prüfen, iPhone Datenrettung anfrage, kostenlose Diagnose, Smartphone Datenrettung Formular"
        canonicalUrl="https://handyplanet.at/datenrettung"
      />
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Datenrettung <span className="text-cyan-400">prüfen</span>
          </motion.h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Finden Sie in wenigen Schritten heraus, ob eine Datenrettung für Ihr Gerät möglich ist
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-slate-300"
              >
                <feature.icon className="w-5 h-5 text-cyan-400" />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
          <div className="flex justify-between items-center">
            {steps.map((s, index) => (
              <React.Fragment key={s.num}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s.num 
                      ? "bg-cyan-500 text-white" 
                      : "bg-slate-100 text-slate-400"
                  }`}>
                    {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`text-xs mt-2 ${
                    step >= s.num ? "text-cyan-600 font-medium" : "text-slate-400"
                  }`}>
                    {s.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-2 rounded-full bg-slate-100 overflow-hidden">
                    <div 
                      className={`h-full bg-cyan-500 transition-all duration-500 ${
                        step > s.num ? "w-full" : "w-0"
                      }`} 
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <DeviceSelector 
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                setStep={setStep}
              />
            )}
            {step === 2 && (
              <ModelSelector
                selectedBrand={selectedBrand}
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                setStep={setStep}
              />
            )}
            {step === 3 && (
              <DamageSelector
                selectedBrand={selectedBrand}
                selectedModel={selectedModel}
                selectedDamage={selectedDamage}
                setSelectedDamage={setSelectedDamage}
                setStep={setStep}
              />
            )}
            {step === 4 && (
              <ContactForm
                selectedBrand={selectedBrand}
                selectedModel={selectedModel}
                selectedDamage={selectedDamage}
                setStep={setStep}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}