import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria K.",
      location: "Wien",
      rating: 5,
      text: "Nach einem Wasserschaden dachte ich, alle Fotos meiner Kinder wären verloren. Handy Planet hat alles gerettet! Unfassbar dankbar!",
      device: "iPhone 13 Pro"
    },
    {
      name: "Thomas S.",
      location: "Linz",
      rating: 5,
      text: "Professioneller Service, faire Preise und vor allem: meine wichtigen Geschäftsdaten wurden vollständig wiederhergestellt.",
      device: "Samsung Galaxy S22"
    },
    {
      name: "Anna M.",
      location: "Graz",
      rating: 5,
      text: "Mein Handy ist 3 Stockwerke gefallen und war komplett zerstört. Die Experten haben trotzdem alle meine Daten retten können!",
      device: "Huawei P40 Pro"
    },
    {
      name: "Stefan B.",
      location: "Salzburg",
      rating: 5,
      text: "Schneller, unkomplizierter Service. Innerhalb von 48 Stunden hatte ich meine Daten zurück. Absolute Empfehlung!",
      device: "Google Pixel 7"
    },
    {
      name: "Lisa W.",
      location: "Innsbruck",
      rating: 5,
      text: "Versehentlich alle Fotos gelöscht – nach der Formatierung dachte ich, alles sei verloren. Handy Planet hat das Unmögliche möglich gemacht!",
      device: "iPhone 14"
    },
    {
      name: "Michael R.",
      location: "Klagenfurt",
      rating: 5,
      text: "Top Beratung am Telefon, transparente Preise und ein super Ergebnis. Mein Handy startete nicht mehr, aber alle Daten sind jetzt sicher.",
      device: "Samsung Galaxy A53"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-sm font-medium mb-4">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Das sagen unsere <span className="text-cyan-400">Kunden</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Über 10.000 zufriedene Kunden vertrauen auf unsere Datenrettungs-Expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-cyan-500/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">Gerät</p>
                  <p className="text-sm text-cyan-400">{testimonial.device}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-sm text-slate-400">Durchschnittliche Bewertung</p>
            </div>
          </div>
          <div className="h-12 w-px bg-slate-700 hidden md:block" />
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-white">10.000+</p>
            <p className="text-sm text-slate-400">Zufriedene Kunden österreichweit</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}