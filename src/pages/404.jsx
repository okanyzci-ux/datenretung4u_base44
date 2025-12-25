import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { Home, Search, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const popularPages = [
    { name: "Startseite", path: "Home", icon: Home },
    { name: "Datenrettung prüfen", path: "Datenrettung", icon: Search },
    { name: "Kontakt", path: "Kontakt", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-cyan-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {popularPages.map((page, index) => (
            <Link
              key={index}
              to={createPageUrl(page.path)}
              className="bg-slate-800 hover:bg-slate-700 rounded-xl p-6 transition-all hover:scale-105 group"
            >
              <page.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium">{page.name}</p>
            </Link>
          ))}
        </div>

        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Zurück zur Startseite
        </Link>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 mb-4">Oder kontaktieren Sie uns direkt:</p>
          <a
            href="tel:+436609005454"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            <Phone className="w-5 h-5" />
            0660 900 54 54
          </a>
        </div>
      </div>
    </div>
  );
}