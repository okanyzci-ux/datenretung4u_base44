import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Droplet, Smartphone, HardDrive, AlertCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function Ratgeber() {
  const articles = [
    {
      icon: Droplet,
      title: "Handy Wasserschaden - Was tun? Erste Hilfe & Datenrettung",
      excerpt: "Ihr Handy ist ins Wasser gefallen? Diese Sofortmaßnahmen können Ihre Daten retten. Plus: Wann ist professionelle Hilfe nötig?",
      readTime: "7 Min",
      category: "Wasserschaden",
      link: "handy-wasserschaden-erste-hilfe",
      date: "15. Dezember 2024",
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "iPhone vs Samsung Datenrettung - Die wichtigsten Unterschiede",
      excerpt: "iOS und Android unterscheiden sich fundamental. Was bedeutet das für die Datenrettung? Alle Unterschiede im Überblick.",
      readTime: "5 Min",
      category: "Geräte-Vergleich",
      link: "iphone-vs-samsung-datenrettung",
      date: "12. Dezember 2024",
      color: "purple"
    },
    {
      icon: HardDrive,
      title: "Gelöschte Fotos wiederherstellen - So funktioniert's",
      excerpt: "Versehentlich Fotos gelöscht? In vielen Fällen können diese noch gerettet werden. Hier erfahren Sie wie.",
      readTime: "6 Min",
      category: "Datenverlust",
      link: "geloeschte-fotos-wiederherstellen",
      date: "8. Dezember 2024",
      color: "green"
    },
    {
      icon: AlertCircle,
      title: "Handy startet nicht mehr - Ursachen und Lösungen",
      excerpt: "Black Screen, Bootloop oder keine Reaktion? Die häufigsten Ursachen und was Sie jetzt tun können.",
      readTime: "8 Min",
      category: "Problembehebung",
      link: "handy-startet-nicht",
      date: "5. Dezember 2024",
      color: "red"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500/10 text-blue-600",
    purple: "bg-purple-500/10 text-purple-600",
    green: "bg-green-500/10 text-green-600",
    red: "bg-red-500/10 text-red-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Ratgeber - Handy Datenrettung Tipps & Anleitungen | DatenRettung4U"
        description="Hilfreiche Tipps zur Smartphone Datenrettung ✓ Wasserschaden Erste Hilfe ✓ Gelöschte Daten wiederherstellen ✓ iPhone vs Android ✓ Expertenrat vom Profi"
        keywords="Handy Datenrettung Tipps, Wasserschaden erste Hilfe, gelöschte Fotos wiederherstellen, iPhone Datenrettung Anleitung, Smartphone Probleme lösen"
        canonicalUrl="https://datenrettung4u.at/ratgeber"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-10 h-10 text-cyan-400" />
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                Ratgeber
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expertenwissen zur <span className="text-cyan-400">Datenrettung</span>
            </h1>
            <p className="text-xl text-slate-300">
              Hilfreiche Tipps, Anleitungen und Fachwissen rund um Smartphone-Datenrettung. 
              Von Sofortmaßnahmen bis zur professionellen Rettung.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={createPageUrl(article.link)}
                  className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full"
                >
                  {/* Icon Header */}
                  <div className="bg-gradient-to-br from-slate-50 to-white p-8 border-b border-slate-100">
                    <div className={`w-16 h-16 rounded-xl ${colorClasses[article.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <article.icon className="w-8 h-8" />
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses[article.color]}`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                        Lesen
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Brauchen Sie professionelle Hilfe?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Unsere Experten stehen Ihnen zur Verfügung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
              >
                Kostenlose Diagnose
              </Link>
              <Link
                to={createPageUrl("Kontakt")}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}