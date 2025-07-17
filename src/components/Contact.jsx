import { MapPin, Clock, Phone, Mail, MessageCircle, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  
  const handleWhatsApp = () => {
    window.open('https://wa.me/22231244404', '_blank')
  }

  const handleEmail = () => {
    window.location.href = `mailto:${t('email_address')}`
  }

  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              {t('contact_appointment')}
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contact_subtitle')}
            </p>
          </div>

          {/* Prise de rendez-vous - Section mise en avant */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <Calendar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-white" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                {t('take_appointment')}
              </h3>
              <p className="text-lg sm:text-xl mb-6 opacity-90">
                {t('call_specialists')}
              </p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('whatsapp')}
              </Button>
            </div>
          </div>

          {/* Layout responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Informations de contact */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Adresse */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t('address')}</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      {t('full_address')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-green-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t('opening_hours')}</h3>
                    <div className="text-sm sm:text-base text-gray-700 space-y-1">
                      <p>{t('mon_thu')} : {t('hours_mon_thu')}</p>
                      <p>{t('fri')} : {t('hours_fri')}</p>
                      <p>{t('sat')} : {t('hours_sat')}</p>
                      <p className="text-red-600 font-medium">{t('sun')} : {t('closed')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Téléphone */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-orange-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t('phone')}</h3>
                    <div className="text-sm sm:text-base text-gray-700 space-y-2">
                      <button
                        onClick={() => handlePhoneCall('+22231244404')}
                        className="block hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        📞 {t('phone_number_1')}
                      </button>
                      <button
                        onClick={() => handlePhoneCall('+22244794404')}
                        className="block hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        📞 {t('phone_number_2')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{t('email')}</h3>
                    <button
                      onClick={handleEmail}
                      className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      ✉️ {t('email_address')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {t('access_map')}
              </h3>

              {/* Placeholder pour Google Maps - À remplacer par la vraie carte */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-64 sm:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
                {/* Google Maps sera intégré ici */}
                <div className="text-center px-4">
                  <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {t('cabinet_mimap')}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    {t('full_address')}
                  </p>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base mb-4">
                    "{t('health_priority')}"
                  </p>

                  {/* Bouton pour ouvrir Google Maps */}
                  <Button
                    onClick={() => window.open('https://maps.google.com/maps?q=Ilot+K+EXT+929+Nouakchott+Mauritanie', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {t('open_google_maps')}
                  </Button>
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
