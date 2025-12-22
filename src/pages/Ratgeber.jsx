import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Ratgeber() {
  const articles = [
    {
      title: "iPhone vs Samsung Datenrettung",
      description: "Die wichtigsten Unterschiede zwischen iOS und Android Datenrettung im Experten-Vergleich",
      readTime: "5 min",
      category: "Vergleich",
      link: "iphone-vs-samsung-datenrettung",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
    },
    {
      title: "Gelöschte Fotos wiederherstellen",
      description: "Fotos versehentlich gelöscht? So retten Sie Ihre wertvollen Erinnerungen mit 95% Erfolgsquote",
      readTime: "6 min",
      category: "Anleitung",
      link: "geloeschte-fotos-wiederherstellen",
      image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=800&q=80"
    },
    {
      title: "Handy startet nicht mehr",
      description: "Black Screen, Bootloop oder hängt beim Logo? Die häufigsten Ursachen und Lösungen",
      readTime: "8 min",
      category: "Problemlösung",
      link: "handy-startet-nicht",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80"
    },
    {
      title: "Platinenschaden Datenrettung",
      description: "Mainboard defekt? Wir retten Ihre Daten mit Chip-Level Reparatur im Reinraumlabor",
      readTime: "7 min",
      category: "Expertise",
      link: "platinenschaden-datenrettung",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    {
      title: "Gelöschte Daten wiederherstellen",
      description: "Versehentlich gelöscht? Nach Formatierung? So retten wir Ihre Daten",
      readTime: "6 min",
      category: "Anleitung",
      link: "geloeschte-daten-wiederherstellen",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
      title: "Wasserschaden Datenrettung",
      description: "Smartphone ins Wasser gefallen? Erste Hilfe und professionelle Datenrettung",
      readTime: "5 min",
      category: "Notfall",
      link: "wasserschaden-datenrettung",
      image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80"
    }
  ];

  const categories = ["Alle", "Anleitung", "Vergleich", "Problemlösung", "Expertise", "Notfall"];
  const [selectedCategory, setSelectedCategory] = React.useState("Alle");

  const filteredArticles = selectedCategory === "Alle" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEO 
        title="Datenrettung Ratgeber - Anleitungen & Tipps | DatenRettung4U"
        description="Expertenwissen zur Smartphone Datenrettung ✓ Anleitungen ✓ Vergleiche ✓ Problemlösungen ✓ Tipps & Tricks ✓ Kostenlose Ratgeber von Profis"
        keywords="Datenrettung Ratgeber, Smartphone Datenrettung Tipps, Handy Datenrettung Anleitung, iPhone Datenrettung Guide"
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
            <BookOpen className="w-12 h-12 text-cyan-400 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Datenrettung <span className="text-cyan-400">Ratgeber</span>
            </h1>
            <p className="text-xl text-slate-300">
              Expertenwissen, Anleitungen und Tipps zur Smartphone Datenrettung – verständlich erklärt von unseren Profis
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link
                key={index}
                to={createPageUrl(article.link)}
                className="block group"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} Lesezeit</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-cyan-600 font-semibold group-hover:gap-3 transition-all">
                      Weiterlesen
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Brauchen Sie professionelle Hilfe?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Unsere Experten stehen Ihnen bei allen Datenrettungs-Fragen zur Seite
            </p>
            <Link
              to={createPageUrl("Datenrettung")}
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
            >
              Kostenlose Diagnose starten
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}