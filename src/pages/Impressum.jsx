import React from "react";
import { motion } from "framer-motion";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 ECG</h2>
              <p className="text-slate-700">
                <strong>Handy Planet OG</strong><br />
                Goethestraße 3<br />
                4020 Linz<br />
                Österreich
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
              <p className="text-slate-700">
                Telefon: <a href="tel:+436609005454" className="text-cyan-600 hover:underline">0660 900 54 54</a><br />
                E-Mail: <a href="mailto:info@handyplanet.at" className="text-cyan-600 hover:underline">info@handyplanet.at</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Unternehmensgegenstand</h2>
              <p className="text-slate-700">
                Smartphone Reparatur und Datenrettung
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">UID-Nummer</h2>
              <p className="text-slate-700">
                ATU77057845
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Firmenbuchnummer</h2>
              <p className="text-slate-700">
                Eingetragen beim Landesgericht Linz
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Aufsichtsbehörde</h2>
              <p className="text-slate-700">
                Magistrat der Stadt Linz
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p className="text-slate-700">
                Berufsbezeichnung: Gewerbliche Dienstleistung<br />
                Verliehen in: Österreich
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">EU-Streitschlichtung</h2>
              <p className="text-slate-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-slate-700 mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="text-slate-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Haftung für Inhalte</h2>
              <p className="text-slate-700">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 ECG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen 
                zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-slate-700 mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Haftung für Links</h2>
              <p className="text-slate-700">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten 
                ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt 
                der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}