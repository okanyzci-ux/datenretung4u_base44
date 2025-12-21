import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { ChevronLeft, Send, CheckCircle, Loader2, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm({ selectedBrand, selectedModel, selectedDamage, setStep }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.ContactRequest.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      brand: selectedBrand?.name || "Unbekannt",
      model: selectedModel || "Unbekannt",
      damage_type: selectedDamage?.title || "Andere",
      message: formData.message,
      status: "neu",
      data_recovery_possible: true
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          Anfrage erfolgreich gesendet!
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
        </p>
        <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto">
          <h3 className="font-semibold text-slate-900 mb-4">Ihre Zusammenfassung:</h3>
          <div className="space-y-2 text-left">
            <p><span className="text-slate-500">Gerät:</span> <strong>{selectedBrand?.name} {selectedModel}</strong></p>
            <p><span className="text-slate-500">Schaden:</span> <strong>{selectedDamage?.title}</strong></p>
            <p><span className="text-slate-500">Kontakt:</span> <strong>{formData.email}</strong></p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-slate-600 mb-4">Oder rufen Sie uns direkt an:</p>
          <a 
            href="tel:+436609005454"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            0660 900 54 54
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setStep(3)}
        className="flex items-center gap-2 text-slate-600 hover:text-cyan-600 mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Zurück zur Schadensauswahl
      </button>

      {/* Summary */}
      <div className="mb-8 p-4 bg-gradient-to-r from-cyan-50 to-green-50 rounded-xl border border-cyan-100">
        <h3 className="font-semibold text-slate-900 mb-3">✅ Datenrettung möglich!</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-slate-500">Gerät:</span>
            <p className="font-medium text-slate-900">{selectedBrand?.name} {selectedModel}</p>
          </div>
          <div>
            <span className="text-slate-500">Schadensart:</span>
            <p className="font-medium text-slate-900">{selectedDamage?.title}</p>
          </div>
          <div>
            <span className="text-slate-500">Erfolgsaussicht:</span>
            <p className="font-medium text-green-600">{selectedDamage?.recoveryChance}</p>
          </div>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
        Schritt 4: Ihre Kontaktdaten
      </h2>
      <p className="text-slate-600 mb-8">
        Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden
      </p>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Vollständiger Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Max Mustermann"
                required
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefonnummer</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+43 660 123 4567"
                className="h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail Adresse *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="ihre@email.at"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Zusätzliche Informationen (optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Beschreiben Sie kurz, was passiert ist und welche Daten Sie retten möchten..."
              rows={4}
              className="resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold text-lg rounded-xl transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Kostenlose Diagnose anfordern
              </>
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir behandeln Ihre Daten vertraulich.
          </p>
        </form>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900 rounded-2xl p-6 text-white sticky top-24">
            <h3 className="text-lg font-semibold mb-6">Direkter Kontakt</h3>
            <div className="space-y-6">
              <a href="tel:+436609005454" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Telefon</p>
                  <p className="font-semibold group-hover:text-cyan-400 transition-colors">0660 900 54 54</p>
                </div>
              </a>
              <a href="mailto:info@handyplanet.at" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">E-Mail</p>
                  <p className="font-semibold group-hover:text-cyan-400 transition-colors">info@handyplanet.at</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Adresse</p>
                  <p className="font-semibold">Goethestraße 3</p>
                  <p className="text-slate-400">4020 Linz, Österreich</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-slate-400">
                <span className="text-green-400 font-semibold">Kostenloser Versand</span> in ganz Österreich – versichert mit DHL & Post AT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}