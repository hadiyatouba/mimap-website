import { useState } from 'react'
import { Users, Briefcase, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react'

const Expertise = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const expertises = [
    {
      icon: Heart,
      title: "Santé de la famille",
      description: "Programmes et ateliers adaptés à toutes les étapes de la vie : petite enfance, adultes, seniors.",
      color: "bg-green-100",
      iconColor: "text-green-600",
      bgCard: "bg-white"
    },
    {
      icon: Briefcase,
      title: "Santé au travail",
      description: "Prévention, sécurité en entreprise et gestion des urgences professionnelles.",
      color: "bg-blue-600",
      iconColor: "text-green-400",
      bgCard: "bg-blue-600 text-white"
    },
    {
      icon: Heart,
      title: "Santé de la famille",
      description: "Programmes et ateliers adaptés à toutes les étapes de la vie : petite enfance, adultes, seniors.",
      color: "bg-green-100",
      iconColor: "text-green-600",
      bgCard: "bg-white"
    },
    {
      icon: Shield,
      title: "Santé préventive",
      description: "Prévention et suivi médical personnalisé pour maintenir une santé optimale.",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <p className="text-green-600 font-semibold text-lg mb-2">
              Expertises Clés
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Nos Domaines d'Excellence
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Découvrez les piliers de notre engagement pour une santé complète, durable et accessible à tous.
            </p>
          </div>

          {/* Carrousel */}
          <div className="relative">
            {/* Conteneur du carrousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
              >
                {expertises.map((expertise, index) => {
                  const IconComponent = expertise.icon
                  return (
                    <div 
                      key={index}
                      className="w-1/3 flex-shrink-0 px-4"
                    >
                      <div className={`${expertise.bgCard} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out h-80 flex flex-col justify-center text-center transform hover:scale-105 hover:-translate-y-2 cursor-pointer group`}>
                        {/* Icône */}
                        <div className={`${expertise.color} rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                          <IconComponent className={`w-10 h-10 ${expertise.iconColor} transition-all duration-300 group-hover:scale-125`} />
                        </div>
                        
                        {/* Titre */}
                        <h3 className="text-2xl font-bold mb-4 transition-all duration-300 group-hover:text-blue-600">
                          {expertise.title}
                        </h3>
                        
                        {/* Ligne décorative */}
                        <div className="w-16 h-1 bg-green-500 mx-auto mb-4 transition-all duration-500 group-hover:w-24 group-hover:bg-blue-500"></div>
                        
                        {/* Description */}
                        <p className="leading-relaxed transition-all duration-300 group-hover:text-gray-600">
                          {expertise.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 active:scale-95"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
            </button>
          </div>

          {/* Indicateurs (points) */}
          <div className="flex justify-center mt-8 space-x-2">
            {expertises.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 active:scale-90 ${
                  index === currentSlide 
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