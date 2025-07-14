import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête - Mobile first responsive */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nous trouver
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Venez nous rendre visite à notre cabinet médical
            </p>
          </div>

          {/* Layout responsive - Mobile first */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Informations de contact - Mobile first responsive */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Adresse */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Ilot K EXT 929<br />
                      NOUAKCHOTT, MAURITANIE
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Horaires d'ouverture</h3>
                    <div className="text-sm sm:text-base text-gray-700 space-y-1">
                      <p>Lun–Jeu : 15h–22h</p>
                      <p>Ven : 16h–22h</p>
                      <p>Sam : 10h–17h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Téléphone */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
                    <div className="text-sm sm:text-base text-gray-700 space-y-1">
                      <p>+222 3124 4404</p>
                      <p>+222 4479 4404</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-sm sm:text-base text-gray-700">cabinetmimap@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte ou image - Mobile first responsive */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Cabinet MIMAP
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    Ilot K EXT 929<br />
                    Nouakchott, Mauritanie
                  </p>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">
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

