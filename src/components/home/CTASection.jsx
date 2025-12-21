import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
          </div>

          <div className="relative px-8 py-16 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ihre Daten sind wichtig.
                  <br />
                  <span className="text-cyan-100">Wir retten sie.</span>
                </h2>
                <p className="text-xl text-cyan-100 mb-8">
                  Starten Sie jetzt Ihre kostenlose Diagnose und erfahren Sie innerhalb von 24 Stunden, 
                  ob Ihre Daten gerettet werden können.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={createPageUrl("Datenrettung")}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-cyan-50 transition-colors group"
                  >
                    Kostenlose Diagnose starten
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+436609005454"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600/50 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </div>
              </div>

              {/* Right Content - Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Besuchen Sie uns</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Handy Planet OG</p>
                      <p className="text-cyan-100">Goethestraße 3</p>
                      <p className="text-cyan-100">4020 Linz, Österreich</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Telefon</p>
                      <a href="tel:+436609005454" className="text-cyan-100 hover:text-white transition-colors">
                        0660 900 54 54
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Öffnungszeiten</p>
                      <p className="text-cyan-100">Mo - Fr: 9:00 - 18:00 Uhr</p>
                      <p className="text-cyan-100">Sa: nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}