import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Phone, MapPin, Clock, Truck } from "lucide-react";

export default function CityCTA({ city }) {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Datenrettung für {city} und Umgebung
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Auch wenn Sie nicht in Linz wohnen – wir bieten kostenlosen und versicherten Versand 
              aus ganz Österreich. Ihre Daten aus {city} sind bei uns in besten Händen.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <span>Kostenloser Versand aus {city}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span>Express-Service innerhalb 24-48h möglich</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Persönliche Beratung auch für {city}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl("Datenrettung")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-colors"
              >
                Jetzt starten
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+436609005454"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                0660 900 54 54
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-xl font-bold mb-6">Handy Planet Zentrale</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-cyan-100">Goethestraße 3, 4020 Linz</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Telefon</p>
                  <p className="text-cyan-100">0660 900 54 54</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-semibold">Öffnungszeiten</p>
                  <p className="text-cyan-100">Mo-Fr: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-cyan-100">
                <strong>Tipp:</strong> Rufen Sie uns aus {city} an – wir senden Ihnen ein kostenloses Versandlabel zu!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}