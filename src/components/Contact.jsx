import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nous trouver
            </h2>
            <p className="text-lg text-gray-600">
              Venez nous rendre visite à notre cabinet médical
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-700">
                      Ilot K EXT 929<br />
                      NOUAKCHOTT, MAURITANIE
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Horaires d'ouverture</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Lun–Jeu : 15h–22h</p>
                      <p>Ven : 16h–22h</p>
                      <p>Sam : 10h–17h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>+222 3124 4404</p>
                      <p>+222 4479 4404</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">cabinetmimap@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte ou image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Cabinet MIMAP
                  </h3>
                  <p className="text-gray-700">
                    Ilot K EXT 929<br />
                    Nouakchott, Mauritanie
                  </p>
                  <p className="text-blue-600 font-semibold mt-4">
                    "Votre santé, notre priorité"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

