import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-white p-10 shadow-lg rounded-xl">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Datenschutzerklärung</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6 text-gray-600">
              <strong>Stand:</strong> 17. Juli 2025
            </p>
      <hr className="my-4" />
      <h3 className="text-xl font-bold mt-8 mb-2">1. Verantwortlicher</h3>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
      <p>Luka Martic<br />marticsolutions.de<br />Wesselstraat 10<br />22399 Hamburg<br />Deutschland<br />E-Mail: kontakt@marticsolutions.de</p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">2. Allgemeines zur Datenverarbeitung</h3>
      <p>Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Ihre Daten werden von uns vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung verarbeitet.</p>
      <p>Die Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich. Technische Zugriffsdaten werden automatisch erhoben (siehe Punkt 3). Weitere Daten werden nur verarbeitet, wenn Sie uns diese aktiv übermitteln – z. B. über das Kontaktformular.</p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">3. Hosting und Server-Logfiles</h3>
      <p>Diese Website wird betrieben auf Servern der:</p>
      <p>Hetzner Online GmbH<br />Industriestr. 25<br />91710 Gunzenhausen<br />Deutschland<br />Ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO wurde abgeschlossen.</p>
      <p>Automatisch verarbeitete Daten beim Websitebesuch:</p>
      <ul className="list-disc px-8">
        <li>IP-Adresse (anonymisiert durch Kürzung des letzten Oktetts)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name der abgerufenen Datei</li>
        <li>Referrer-URL</li>
        <li>Browsertyp und -version</li>
        <li>Betriebssystem</li>
        <li>Übertragene Datenmenge</li>
      </ul>
      <p>Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung unseres Angebots ausgewertet. Eine Zusammenführung mit anderen Datenquellen erfolgt nicht.</p>
      <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischer Sicherheit und Stabilität)</p>
      <p><strong>Speicherdauer:</strong> 3 Monate</p>
      <p><strong>Drittlandübermittlung:</strong> Findet nicht statt. Alle Daten werden ausschließlich innerhalb der EU verarbeitet.</p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">4. Kontaktformular</h3>
      <p>Wenn Sie uns über das Kontaktformular kontaktieren, werden folgende Daten verarbeitet:</p>
      <ul className="list-disc px-8">
        <li>Name (Pflichtfeld)</li>
        <li>Firmenname (optional)</li>
        <li>E-Mail-Adresse (Pflichtfeld)</li>
        <li>Telefonnummer (Pflichtfeld, um Sie zurückrufen zu können)</li>
        <li>Website oder LinkedIn-Profil (optional)</li>
        <li>Nachricht (Pflichtfeld)</li>
      </ul>
      <p>Diese Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>
      <p><strong>Rechtsgrundlagen:</strong></p>
      <ul className="list-disc px-8">
        <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung durch Absenden</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO – zur Durchführung vorvertraglicher Maßnahmen</li>
      </ul>
      <p><strong>Speicherdauer:</strong> Die Daten werden für bis zu 3 Monate gespeichert, um auf Rückfragen oder Folgeanfragen reagieren zu können. Auf Wunsch löschen wir Ihre Daten früher, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">5. Empfänger der Daten</h3>
      <p>Ihre personenbezogenen Daten werden grundsätzlich nicht an Dritte weitergegeben. Eine Weitergabe erfolgt nur:</p>
      <ul className="list-disc px-8">
        <li>an unseren Hosting-Dienstleister Hetzner Online GmbH (siehe Punkt 3)</li>
        <li>wenn Sie eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
        <li>wenn dies zur Erfüllung eines Vertrags erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
        <li>wenn eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
      </ul>
      <p>Weitere Empfänger oder Datenübermittlungen an Drittländer finden nicht statt.</p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">6. Sicherheit Ihrer Daten</h3>
      <p>Unsere Website nutzt eine verschlüsselte Verbindung via SSL/TLS („https“). Darüber hinaus setzen wir gemeinsam mit unserem Hosting-Anbieter technische und organisatorische Maßnahmen ein, um Ihre Daten bestmöglich zu schützen.</p>
      <p>Informationen zu den Maßnahmen von Hetzner:<br />🔗 <a href="https://docs.hetzner.com/de/general/others/technical-and-organizational-measures" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Technische und organisatorische Maßnahmen</a></p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">7. Keine Cookies / Kein Tracking</h3>
      <p>Diese Website verwendet <strong>keine Cookies</strong>, <strong>kein Tracking</strong> und <strong>keine eingebetteten Inhalte Dritter</strong> (z. B. Google Fonts, YouTube, Maps, etc.).</p>
      <p>Sollten zukünftig Cookies oder Webanalyse-Tools zum Einsatz kommen, wird ein entsprechender Cookie-Banner implementiert und diese Datenschutzerklärung angepasst.</p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">8. Ihre Rechte</h3>
      <p>Sie haben als betroffene Person gemäß DSGVO folgende Rechte:</p>
      <ul className="list-disc px-8">
        <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
        <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
        <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
        <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
        <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
        <li><strong>Recht auf Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li><strong>Recht auf Widerruf</strong> Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
        <li><strong>Recht auf Beschwerde</strong> bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>Zuständige Aufsichtsbehörde für Hamburg:</p>
      <p>Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />Ludwig-Erhard-Str. 22, 20459 Hamburg<br />Telefon: +49 40 428 54 – 4040<br />E-Mail: <a href="mailto:mailbox@datenschutz.hamburg.de" className="text-blue-600 hover:text-blue-800 underline">mailbox@datenschutz.hamburg.de</a></p>
      <p>🔗 <a href="https://datenschutz-hamburg.de" target="_blank" className="text-blue-600 hover:text-blue-800 underline">datenschutz-hamburg.de</a></p>
      <hr className="my-4" />

      <h3 className="text-xl font-bold mt-8 mb-2">9. Datenschutz bei externen Links</h3>
      <p>Unsere Website enthält Links zu externen Websites. Beim Klick auf solche Links verlassen Sie unsere Seite. Für die dort geltenden Datenschutzbestimmungen übernehmen wir keine Verantwortung. Bitte prüfen Sie die Datenschutzhinweise der jeweiligen Anbieter.</p>
      <hr className="my-4" />
      
      <h3 className="text-xl font-bold mt-8 mb-2">10. Änderungen dieser Datenschutzerklärung</h3>
      <p>Diese Datenschutzerklärung kann jederzeit an geänderte gesetzliche, technische oder organisatorische Anforderungen angepasst werden. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.</p>
      <p><strong>Stand dieser Erklärung:</strong> 17. Juli 2025</p>
      <hr className="my-4" />

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Kontakt für Datenschutzanfragen
            </h3>
            <p className="text-lg text-gray-700">
              Luka Martic
              <br />E-Mail: <a href="mailto:kontakt@marticsolutions.de" className="text-blue-600 hover:text-blue-800 underline">kontakt@marticsolutions.de</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

