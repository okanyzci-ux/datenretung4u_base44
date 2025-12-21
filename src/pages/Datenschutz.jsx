import React from "react";
import { motion } from "framer-motion";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Allgemeine Hinweise</h3>
              <p className="text-slate-700">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-slate-700">
                <strong>Handy Planet OG</strong><br />
                Goethestraße 3<br />
                4020 Linz<br />
                Österreich<br /><br />
                Telefon: 0660 900 54 54<br />
                E-Mail: info@handyplanet.at
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Kontaktformular</h3>
              <p className="text-slate-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
                Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-lg font-semibold text-slate-800 mb-2">Server-Log-Dateien</h3>
              <p className="text-slate-700">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-slate-700 mt-2">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Ihre Rechte</h2>
              <p className="text-slate-700">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside text-slate-700 mt-2">
                <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                <li>die Einschränkung der Verarbeitung zu verlangen</li>
                <li>der Verarbeitung zu widersprechen</li>
                <li>die Übertragbarkeit Ihrer Daten zu verlangen</li>
              </ul>
              <p className="text-slate-700 mt-4">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum 
                angegebenen Adresse an uns wenden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Datenrettung und Vertraulichkeit</h2>
              <p className="text-slate-700">
                Bei der Datenrettung behandeln wir alle Daten mit höchster Vertraulichkeit. Wir verpflichten uns:
              </p>
              <ul className="list-disc list-inside text-slate-700 mt-2">
                <li>Ihre Daten nur zum Zweck der Datenrettung zu verwenden</li>
                <li>Keine Daten an Dritte weiterzugeben</li>
                <li>Alle Daten nach erfolgreicher Rückgabe zu löschen</li>
                <li>Sichere Datenübertragungswege zu nutzen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. SSL-Verschlüsselung</h2>
              <p className="text-slate-700">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Cookies</h2>
              <p className="text-slate-700">
                Diese Website verwendet nur technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. 
                Tracking-Cookies oder Cookies für Marketingzwecke werden nicht verwendet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Änderungen dieser Datenschutzerklärung</h2>
              <p className="text-slate-700">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. 
                Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
              <p className="text-slate-700 mt-4">
                <strong>Stand:</strong> Januar 2024
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}