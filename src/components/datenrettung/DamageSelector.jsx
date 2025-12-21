import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Droplets, Smartphone, Cpu, RotateCcw, Trash2, Zap, AlertCircle, HelpCircle } from "lucide-react";

export default function DamageSelector({ selectedBrand, selectedModel, selectedDamage, setSelectedDamage, setStep }) {
  const damageTypes = [
    {
      id: "wasserschaden",
      icon: Droplets,
      title: "Wasserschaden",
      description: "Gerät war in Kontakt mit Wasser oder anderen Flüssigkeiten",
      recoveryChance: "Sehr gut",
      color: "blue"
    },
    {
      id: "sturzschaden",
      icon: Smartphone,
      title: "Sturz-/Displayschaden",
      description: "Gerät ist heruntergefallen, Display ist beschädigt oder zersplittert",
      recoveryChance: "Hervorragend",
      color: "orange"
    },
    {
      id: "platinenschaden",
      icon: Cpu,
      title: "Platinenschaden",
      description: "Komplexer Hardwaredefekt auf der Hauptplatine",
      recoveryChance: "Gut",
      color: "red"
    },
    {
      id: "bootloop",
      icon: RotateCcw,
      title: "Bootloop / Startet nicht",
      description: "Gerät startet ständig neu oder reagiert nicht mehr",
      recoveryChance: "Sehr gut",
      color: "purple"
    },
    {
      id: "geloescht",
      icon: Trash2,
      title: "Daten gelöscht",
      description: "Versehentlich gelöschte Daten oder formatierter Speicher",
      recoveryChance: "Gut",
      color: "green"
    },
    {
      id: "elektronik",
      icon: Zap,
      title: "Elektronikschaden",
      description: "Überspannung, Kurzschluss oder andere elektrische Defekte",
      recoveryChance: "Gut",
      color: "yellow"
    },
    {
      id: "andere",
      icon: HelpCircle,
      title: "Anderer Schaden",
      description: "Mein Problem ist hier nicht aufgelistet",
      recoveryChance: "Wird geprüft",
      color: "gray"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    orange: "bg-orange-100 text-orange-600 border-orange-200",
    red: "bg-red-100 text-red-600 border-red-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    green: "bg-green-100 text-green-600 border-green-200",
    yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
    gray: "bg-slate-100 text-slate-600 border-slate-200"
  };

  return (
    <div>
      <button
        onClick={() => setStep(2)}
        className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Zurück zur Modellauswahl
      </button>

      <div className="mb-6 p-4 bg-cyan-50 rounded-xl border border-cyan-100">
        <p className="text-sm text-cyan-700">
          <strong>Ausgewählt:</strong> {selectedBrand?.name} {selectedModel}
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
        Schritt 3: Was ist das Problem mit Ihrem Gerät?
      </h2>
      <p className="text-slate-600 mb-8">
        Wählen Sie den Schadenstyp, der am besten zutrifft
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {damageTypes.map((damage, index) => (
          <motion.button
            key={damage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => {
              setSelectedDamage(damage);
              setStep(4);
            }}
            className={`bg-white rounded-2xl p-5 text-left border-2 transition-all duration-300 group hover:shadow-lg ${
              selectedDamage?.id === damage.id 
                ? "border-cyan-500 shadow-lg" 
                : "border-slate-100 hover:border-cyan-300"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl ${colorClasses[damage.color]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <damage.icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">{damage.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{damage.description}</p>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Erfolgsaussicht: {damage.recoveryChance}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}