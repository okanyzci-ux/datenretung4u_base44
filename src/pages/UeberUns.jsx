import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  Shield, Award, Users, Clock, Target, Heart,
  MapPin, Phone, Mail, ArrowRight, CheckCircle
} from "lucide-react";
import SEO from "../components/SEO";

export default function UeberUns() {
  const values = [
    {
      icon: Target,
      title: "Präzision",
      description: "Jede Datenrettung erfordert höchste Genauigkeit. Wir arbeiten mit modernster Technik und geschultem Blick."
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Datenrettung ist für uns mehr als ein Job – es ist unsere Berufung, Menschen ihre wertvollen Erinnerungen zurückzugeben."
    },
    {
      icon: Shield,
      title: "Vertrauen",
      description: "Ihre Daten sind bei uns sicher. Wir behandeln jeden Fall mit höchster Diskretion und Vertraulichkeit."
    },
    {
      icon: Users,
      title: "Kundennähe",
      description: "Persönliche Beratung und transparente Kommunikation stehen bei uns an erster Stelle."
    }
  ];

  const milestones = [
    { year: "2014", event: "Gründung von DatenRettung4U in Linz" },
    { year: "2016", event: "Erste 1.000 erfolgreiche Datenrettungen" },
    { year: "2018", event: "Erweiterung des Labors mit Reinraumtechnik" },
    { year: "2020", event: "5.000 gerettete Geräte erreicht" },
    { year: "2022", event: "Spezialisierung auf forensische Datenrettung" },
    { year: "2024", event: "Über 10.000 erfolgreiche Datenrettungen" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Über Uns | DatenRettung4U - 10+ Jahre Datenrettungs-Expertise"
        description="Seit über 10 Jahren Ihr Partner für Smartphone Datenrettung in Österreich ✓ 10.000+ gerettete Geräte ✓ 99% Erfolgsquote ✓ Zertifiziertes Labor in Linz ✓ Erfahrene Techniker"
        keywords="DatenRettung4U, Datenrettung Firma Österreich, Datenrettung Labor Linz, Smartphone Reparatur Firma, iPhone Datenrettung Experten"
        canonicalUrl="https://datenrettung4u.at/ueber-uns"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-sm font-medium mb-6">
                Über uns
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ihr Partner für <span className="text-cyan-400">Smartphone Datenrettung</span> in Österreich
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Seit über 10 Jahren retten wir Daten aus Smartphones und Tablets. 
                Was als kleine Reparaturwerkstatt begann, ist heute eines der führenden 
                Datenrettungs-Labore in Österreich.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">10.000+</p>
                  <p className="text-sm text-slate-400">Gerettete Geräte</p>
                </div>
                <div className="h-12 w-px bg-slate-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">99%</p>
                  <p className="text-sm text-slate-400">Erfolgsquote</p>
                </div>
                <div className="h-12 w-px bg-slate-700" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">10+</p>
                  <p className="text-sm text-slate-400">Jahre Erfahrung</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-slate-800/50 rounded-3xl p-8 border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
                  alt="Datenrettung Labor"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Unsere Werte</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diese Grundsätze leiten uns bei jeder Datenrettung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Unsere Geschichte</h2>
            <p className="text-lg text-slate-600">
              Der Weg von der kleinen Werkstatt zum führenden Datenrettungs-Labor
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-green-500 transform md:-translate-x-1/2 rounded-full" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 inline-block">
                    <span className="text-sm font-bold text-cyan-600">{milestone.year}</span>
                    <p className="text-slate-900 font-medium">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center transform md:-translate-x-1/2 shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">DatenRettung4U</h2>
              <p className="text-slate-300 mb-8">
                Als österreichisches Unternehmen mit Sitz in Linz sind wir stolz darauf, 
                unseren Kunden in ganz Österreich professionelle Datenrettungs-Dienstleistungen 
                anzubieten. Unser Team aus erfahrenen Technikern arbeitet täglich daran, 
                das Unmögliche möglich zu machen – Ihre wertvollen Daten zu retten.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-slate-400">Goethestraße 3, 4020 Linz, Österreich</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a href="tel:+436609005454" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      0660 900 54 54
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <a href="mailto:info@datenrettung4u.at" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      info@datenrettung4u.at
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-slate-500">
                  Betrieben von Handy Planet OG<br />
                  <strong>UID-Nummer:</strong> ATU77057845
                </p>
              </div>
            </div>

            <div>
              <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Montag - Freitag</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Samstag</span>
                    <span className="font-medium">Nach Vereinbarung</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sonntag</span>
                    <span className="font-medium">Geschlossen</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to={createPageUrl("Kontakt")}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-colors"
                  >
                    Kontakt aufnehmen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}