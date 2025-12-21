import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { 
  Phone, Mail, MapPin, Menu, X, ChevronDown, 
  Facebook, Instagram, Youtube, Shield, Award, Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [standorteOpen, setStandorteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageName]);

  const standorte = [
    { name: "Linz", page: "DatenrettungLinz" },
    { name: "Wien", page: "DatenrettungWien" },
    { name: "Graz", page: "DatenrettungGraz" },
    { name: "Salzburg", page: "DatenrettungSalzburg" },
    { name: "Innsbruck", page: "DatenrettungInnsbruck" }
  ];

  const navLinks = [
    { name: "Startseite", page: "Home" },
    { name: "Datenrettung", page: "Datenrettung" },
    { name: "Preise", page: "Preise" },
    { name: "Ablauf", page: "Ablauf" },
    { name: "Über Uns", page: "UeberUns" },
    { name: "Kontakt", page: "Kontakt" }
  ];

  const hideLayoutPages = ["Impressum", "Datenschutz"];
  const showMinimalFooter = hideLayoutPages.includes(currentPageName);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary: #0F172A;
          --accent: #06B6D4;
          --accent-light: #22D3EE;
          --gold: #F59E0B;
          --gold-light: #FBBF24;
        }
        .gradient-text {
          background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-gradient {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
        }
        .card-shine {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              Zertifizierte Datenrettungs-Werkstatt
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              99% Erfolgsquote
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@datenrettung4u.at" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
              info@datenrettung4u.at
            </a>
            <a href="tel:+436609005454" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4" />
              0660 900 54 54
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">DatenRettung</span>
                <span className="text-xl font-bold text-cyan-500">4U</span>
                <p className="text-xs text-slate-500 -mt-1">Ihr Datenretter in Österreich</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPageName === link.page
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-slate-700 hover:text-cyan-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Standorte Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setStandorteOpen(!standorteOpen)}
                  className="px-4 py-2 rounded-lg font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 flex items-center gap-1 transition-all duration-200"
                >
                  Standorte
                  <ChevronDown className={`w-4 h-4 transition-transform ${standorteOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {standorteOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden"
                    >
                      {standorte.map((stadt) => (
                        <Link
                          key={stadt.page}
                          to={createPageUrl(stadt.page)}
                          onClick={() => setStandorteOpen(false)}
                          className="block px-4 py-2 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                        >
                          Datenrettung {stadt.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+436609005454"
                className="flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">0660 900 54 54</span>
              </a>
              <Link
                to={createPageUrl("Datenrettung")}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Kostenlose Diagnose
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <p className="px-4 py-2 text-sm font-semibold text-slate-500 uppercase">Standorte</p>
                  {standorte.map((stadt) => (
                    <Link
                      key={stadt.page}
                      to={createPageUrl(stadt.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2 text-slate-600 hover:text-cyan-600 transition-colors"
                    >
                      Datenrettung {stadt.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    to={createPageUrl("Datenrettung")}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl text-center"
                  >
                    Kostenlose Diagnose starten
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold">DatenRettung</span>
                  <span className="text-lg font-bold text-cyan-400">4U</span>
                </div>
              </div>
              <p className="text-slate-400 mb-6">
                Professionelle Smartphone Datenrettung in ganz Österreich. 
                Wir retten Ihre wertvollen Daten bei Sturz-, Wasser- und Platinenschäden.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Schnellzugriff</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link 
                      to={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standorte */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Standorte</h3>
              <ul className="space-y-3">
                {standorte.map((stadt) => (
                  <li key={stadt.page}>
                    <Link 
                      to={createPageUrl(stadt.page)}
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      Datenrettung {stadt.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-400">
                    DatenRettung4U<br />
                    Goethestraße 3<br />
                    4020 Linz, Österreich
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+436609005454" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    0660 900 54 54
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:info@datenrettung4u.at" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    info@datenrettung4u.at
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-400">Mo-Fr: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} DatenRettung4U. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to={createPageUrl("Impressum")} className="text-slate-500 hover:text-cyan-400 transition-colors">
                Impressum
              </Link>
              <Link to={createPageUrl("Datenschutz")} className="text-slate-500 hover:text-cyan-400 transition-colors">
                Datenschutz
              </Link>
              <span className="text-slate-600">UID: ATU77057845</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}