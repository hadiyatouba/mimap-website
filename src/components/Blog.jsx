import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const articles = [
    {
      image: "/consultation-diabete.jpg",
      category: "Prévention / Sensibilisation",
      title: "Journée Portes Ouvertes avec SOS Diabète",
      description: "Une journée de dépistage et de sensibilisation organisée par MIMAP en collaboration avec SOS Diabète, dédiée à la prévention du diabète.",
      date: "24 avril 2025"
    },
    {
      image: "/formation-secours.jpg",
      category: "Formation",
      title: "Formation en Premiers Secours",
      description: "Nouvelle session de formation certifiée AHA pour les entreprises et particuliers.",
      date: "15 mai 2025"
    },
    {
      image: "/check-up-entreprise.jpg",
      category: "Médecine du travail",
      title: "Programme Check-up Entreprise",
      description: "Lancement de notre nouveau programme de bilan de santé pour les employés.",
      date: "30 mai 2025"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length)
  }

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête - Mobile first responsive */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Actualités et Blog
            </h2>
          </div>

          {/* Carrousel d'articles - Mobile first responsive */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
            {/* Navigation - Responsive positioning */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Contenu de l'article - Mobile first responsive layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Image - Mobile first responsive */}
              <div className="relative order-1 md:order-1">
                {/* Bordure verte décorative - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-full h-full bg-green-500 rounded-lg z-0"></div>
                <div className="relative z-10 bg-white p-2 sm:p-3 lg:p-4 rounded-lg shadow-lg">
                  <img 
                    src={articles[currentSlide].image} 
                    alt={articles[currentSlide].title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Contenu - Mobile first responsive */}
              <div className="space-y-4 sm:space-y-6 order-2 md:order-2">
                {/* Badge catégorie - Responsive sizing */}
                <div className="inline-block">
                  <span className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    {articles[currentSlide].category}
                  </span>
                </div>

                {/* Titre - Responsive text sizing */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900">
                  {articles[currentSlide].title}
                </h3>

                {/* Description - Responsive text sizing */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {articles[currentSlide].description}
                </p>

                {/* Date et bouton - Responsive spacing */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base text-gray-600 font-semibold">
                    {articles[currentSlide].date}
                  </p>
                  
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                    Voir sur facebook
                  </Button>
                </div>
              </div>
            </div>

            {/* Indicateurs de slide - Responsive spacing */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog