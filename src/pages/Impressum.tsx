import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-white p-10 shadow-lg rounded-xl">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Impressum</h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <hr className="my-4" />
            <h3 className="text-xl font-bold mt-8 mb-2">Angaben gemäß § 5 TMG:</h3>
            <p className="mb-2"><strong>Luka Martic</strong></p>
            <p className="mb-2">Einzelunternehmen</p>
            <p className="mb-2">Wesselstraße 10</p>
            <p className="mb-2">22399 Hamburg</p>
            <p className="mb-4">Deutschland</p>
            <p className="mb-2"><strong>Telefon:</strong> +49 176 47663929</p>
            <p className="mb-2"><strong>E-Mail:</strong> <a href="mailto:kontakt@marticsolutions.de" className="text-blue-600 hover:text-blue-800 underline">kontakt@marticsolutions.de</a></p>
            <p className="mb-6"><strong>Website:</strong> <a href="https://www.marticsolutions.de" className="text-blue-600 hover:text-blue-800 underline">www.marticsolutions.de</a></p>
            <hr className="my-4" />

            <h3 className="text-xl font-bold mt-8 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
            <p className="mb-2"><strong>Luka Martic</strong></p>
            <p className="mb-2">Wesselstraße 10</p>
            <p className="mb-2">22399 Hamburg</p>
            <p className="mb-6">Deutschland</p>
            <hr className="my-4" />

            <h3 className="text-xl font-bold mt-8 mb-2">Umsatzsteuer-ID</h3>
            <p className="mb-6">Die Umsatzsteuer-Identifikationsnummer wurde beantragt und wird nach Erteilung ergänzt.</p>
            <hr className="my-4" />

            <h3 className="text-xl font-bold mt-8 mb-2">Haftungsausschluss</h3>
            
            <h4 className="text-lg font-semibold mt-6 mb-2">Haftung für Inhalte</h4>
            <p className="mb-4">Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
            <p className="mb-4">Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p className="mb-6">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>

            <h4 className="text-lg font-semibold mt-6 mb-2">Haftung für Links</h4>
            <p className="mb-4">Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.</p>
            <p className="mb-4">Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
            <p className="mb-4">Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
            <p className="mb-4">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</p>
            <p className="mb-6">Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>

            <hr className="my-4" />

            <h3 className="text-xl font-bold mt-8 mb-2">Urheberrecht</h3>
            <p className="mb-4">Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
            <p className="mb-4">Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            <p className="mb-4">Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
            <p className="mb-4">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet.</p>
            <p className="mb-4">Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.</p>
            <p className="mb-6">Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
            <hr className="my-4" />

            <h3 className="text-xl font-bold mt-8 mb-2">Online-Streitbeilegung</h3>
            <p className="mb-4">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
            <p className="mb-4">🔗 <a href="https://ec.europa.eu/consumers/odr" target="_blank" className="text-blue-600 hover:text-blue-800 underline">https://ec.europa.eu/consumers/odr</a></p>
            <p className="mb-6">Meine E-Mail-Adresse findest du oben im Impressum.</p>
            <hr className="my-4" />

            <h3 className="text-xl font-bold mt-8 mb-2">Verbraucherschlichtung</h3>
            <p className="mb-6">Ich bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <hr className="my-4" />

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Kontakt für Impressumsanfragen
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

export default Impressum;
