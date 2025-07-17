import { useState } from 'react'
import { Users, Briefcase, Heart, Shield, ChevronLeft, ChevronRight, Home, HardHat, UserCheck, Baby } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Expertise = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const expertises = [
    {
      icon: Home, // Icône maison pour "Santé de la famille"
      title: t('family_health'),
      description: t('family_health_desc'),
      color: "bg-green-100",
      iconColor: "text-green-600",
      bgCard: "bg-white"
    },
    {
      icon: HardHat, // Changé de Briefcase à HardHat pour "Santé au travail"
      title: t('occupational_health'),
      description: t('occupational_health_desc'),
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      bgCard: "bg-blue-600 text-white"
    },
    {
      icon: Users, // Icône communauté (groupe de personnes)
      title: t('community_health'),
      description: t('community_health_desc'),
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      bgCard: "bg-white"
    },
    {
      icon: Shield,
      title: t('preventive_health'),
      description: t('preventive_health_desc'),
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      bgCard: "bg-white"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % expertises.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + expertises.length) % expertises.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-green-500 font-semibold text-sm sm:text-base mb-2 uppercase tracking-wide">
              {t('key_expertise')}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              {t('excellence_domains')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              {t('excellence_subtitle')}
            </p>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          {/* Carousel - Mobile: single card, Tablet+: multiple cards */}
          <div className="relative">
            <div className="overflow-hidden">
              {/* Mobile: Stack cards vertically */}
              <div className="block sm:hidden">
                <div className="px-4">
                  {expertises.map((expertise, index) => {
                    if (index !== currentSlide) return null;
                    const IconComponent = expertise.icon
                    return (
                      <div
                        key={index}
                        className="w-full"
                      >
                        <div className={`${expertise.bgCard} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out min-h-[280px] flex flex-col justify-center text-center transform hover:scale-105 hover:-translate-y-2 cursor-pointer group`}>
                          {/* Icône */}
                          <div className={`${expertise.color} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                            <IconComponent className={`w-8 h-8 ${expertise.iconColor} transition-all duration-300 group-hover:scale-125`} />
                          </div>

                          {/* Titre */}
                          <h3 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:text-blue-600">
                            {expertise.title}
                          </h3>

                          {/* Ligne décorative */}
                          <div className="w-12 h-1 bg-green-500 mx-auto mb-3 transition-all duration-500 group-hover:w-20 group-hover:bg-blue-500"></div>

                          {/* Description */}
                          <p className="text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-600">
                            {expertise.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Tablet and Desktop: Horizontal carousel */}
              <div className="hidden sm:block">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
                >
                  {expertises.map((expertise, index) => {
                    const IconComponent = expertise.icon
                    return (
                      <div
                        key={index}
                        className="w-1/3 flex-shrink-0 px-2 sm:px-4"
                      >
                        <div className={`${expertise.bgCard} rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out h-64 sm:h-72 lg:h-80 flex flex-col justify-center text-center transform hover:scale-105 hover:-translate-y-2 cursor-pointer group`}>
                          {/* Icône */}
                          <div className={`${expertise.color} rounded-full p-3 sm:p-4 lg:p-6 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                            <IconComponent className={`w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 ${expertise.iconColor} transition-all duration-300 group-hover:scale-125`} />
                          </div>

                          {/* Titre */}
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 transition-all duration-300 group-hover:text-blue-600">
                            {expertise.title}
                          </h3>

                          {/* Ligne décorative */}
                          <div className="w-12 sm:w-14 lg:w-16 h-1 bg-green-500 mx-auto mb-2 sm:mb-3 lg:mb-4 transition-all duration-500 group-hover:w-16 sm:group-hover:w-20 lg:group-hover:w-24 group-hover:bg-blue-500"></div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm lg:text-base leading-relaxed transition-all duration-300 group-hover:text-gray-600">
                            {expertise.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Boutons de navigation - Responsive positioning */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 active:scale-95 z-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 lg:w-6 sm:h-5 lg:h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 active:scale-95 z-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 lg:w-6 sm:h-5 lg:h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
            </button>
          </div>

          {/* Indicateurs (points) - Responsive spacing */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {expertises.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 hover:scale-125 active:scale-90 ${index === currentSlide
                    ? 'bg-blue-600 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise