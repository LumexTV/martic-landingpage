import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Send, CheckCircle, Globe, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Ich stimme den Datenschutzbestimmungen zu.');
      return;
    }
    // Here you would typically send the form data to your backend
    fetch('https://n8n.marticsolutions.de/webhook/kontaktformular', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Fehler beim Senden des Formulars');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Erfolg:', data);
    setIsSubmitted(true);
  })
  .catch((error) => {
    console.error('Fehler:', error);
    alert('Es gab ein Problem beim Senden des Formulars.');
  });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', website: '', message: '' });
      setAgreedToTerms(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
            Jetzt unverbindlich{' '}
            <span className="text-blue-600 break-words">beraten lassen</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Lassen Sie uns gemeinsam herausfinden, wie KI-Automatisierung 
            Ihren Handwerksbetrieb voranbringen kann.
          </p>
        </motion.div>

        {/* Full Width Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center break-words">
              Kontaktformular - Ihr sicherer Weg in die Zukunft
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

          {/* Benefits of consultation */}
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                    Website oder LinkedIn
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Globe className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Website oder LinkedIn"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 break-words">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Anliegen..."
                  />
                </div>

                {/* Terms and Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 break-words">
                    Ich stimme den{' '}
                    <Link to="/datenschutz" className="text-blue-600 hover:text-blue-800 underline">
                      Datenschutzbestimmungen
                    </Link>{' '}
                    zu. *
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!agreedToTerms}
                  className={`w-full px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                    agreedToTerms 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Send size={20} />
                  <span className="whitespace-nowrap">Erstberatung anfragen</span>
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Vielen Dank!
                </h4>
                <p className="text-sm sm:text-base text-gray-600 px-4">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-blue-50 rounded-2xl p-8">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 text-center break-words">
              Das erwartet Sie in der Erstberatung:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Kostenlose Analyse Ihrer aktuellen Prozesse',
                'Individuelle Lösungsvorschläge für Ihr Gewerk',
                'Transparente Kosten- und Zeitplanung',
                'Keine Verpflichtungen – erst überzeugen, dann entscheiden'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm sm:text-base text-gray-700 break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;