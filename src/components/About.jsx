import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  
  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contenu texte - Mobile first */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4 sm:mb-6 lg:mb-8">
                {t('who_are_we')}
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg font-semibold text-blue-600 mb-4 sm:mb-6">
                  {t('about_title')}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t('about_description')}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-600">
                  <p className="text-sm sm:text-base font-medium text-gray-800">
                    <span className="font-bold text-blue-600">{t('our_objective')}</span> {t('objective_text')}
                  </p>
                </div>
              </div>
            </div>

            {/* Images - Layout avec chevauchement */}
            <div className="relative order-1 lg:order-2 h-96 sm:h-[28rem] lg:h-[32rem]">
              {/* Forme géométrique bleue */}
              <div className="hidden sm:block absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-blue-600 rounded-lg transform rotate-12 z-0"></div>

              {/* Image principale de l'équipe - En haut à droite */}
              <div className="absolute top-0 right-0 w-5/6 sm:w-4/5 lg:w-5/6 z-10">
                <div className="p-2 sm:p-3 lg:p-4 ">
                  <img
                    src="/Rectangle 1.png"
                    alt="Cabinet MIMAP - Équipe et installations"
                    className="w-full h-56 sm:h-64 lg:h-72 rounded-lg"
                  />
                </div>
              </div>

              {/* Image secondaire - En bas à gauche avec chevauchement */}
              <div className="absolute bottom-0 left-0 w-1/2 sm:w-3/5 lg:w-1/2 z-20">
                <div className="p-2">
                  <img
                    src="/Rectangle 2.png"
                    alt="Membre de l'équipe MIMAP"
                    className="w-full h-32 sm:h-40 lg:h-48"
                  />
                </div>
              </div>

              {/* Point vert décoratif */}
              <div className="absolute bottom-20 sm:bottom-24 right-4 sm:right-8 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-green-500 rounded-full z-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About