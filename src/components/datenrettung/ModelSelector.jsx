import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Smartphone } from "lucide-react";

export default function ModelSelector({ selectedBrand, selectedModel, setSelectedModel, setStep }) {
  if (!selectedBrand) return null;

  return (
    <div>
      <button
        onClick={() => setStep(1)}
        className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Zurück zur Markenauswahl
      </button>

      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
        Schritt 2: Wählen Sie Ihr {selectedBrand.name} Modell
      </h2>
      <p className="text-slate-600 mb-8">
        Klicken Sie auf Ihr genaues Modell
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {selectedBrand.models.map((model, index) => (
          <motion.button
            key={model}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            onClick={() => {
              setSelectedModel(model);
              setStep(3);
            }}
            className={`bg-white rounded-xl px-4 py-3 text-left border-2 transition-all duration-300 group hover:shadow-md ${
              selectedModel === model 
                ? "border-cyan-500 shadow-md" 
                : "border-slate-100 hover:border-cyan-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-slate-400 group-hover:text-cyan-500" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                {model}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}