import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const articles = [
    {
      image: "/image box.png",
      category: "Prévention / Sensibilisation",
      title: "Journée Portes Ouvertes avec SOS Diabète",
      description: "Une journée de dépistage et de sensibilisation organisée par MIMAP en collaboration avec SOS Diabète, dédiée à la prévention du diabète.",
      date: "24 avril 2025"
    },
    {
      image: "/ogoMIMAP by Toutou [Récupéré]_Plan de travail 1 1 (1).png",
      category: "Formation",
      title: "Formation en Premiers Secours",
      description: "Nouvelle session de formation certifiée AHA pour les entreprises et particuliers.",
      date: "15 mai 2025"
    },
    {
      image: "/Rectangle 1.png",
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
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Actualités et Blog
            </h2>
          </div>

          {/* Carrousel d'articles */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Contenu de l'article */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image à gauche */}
              <div className="relative">
                {/* Bordure verte décorative */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-green-500 rounded-lg z-0"></div>
                <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg">
                  <img 
                    src={articles[currentSlide].image} 
                    alt={articles[currentSlide].title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Contenu à droite */}
              <div className="space-y-6">
                {/* Badge catégorie */}
                <div className="inline-block">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {articles[currentSlide].category}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
                  {articles[currentSlide].title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {articles[currentSlide].description}
                </p>

                {/* Date et bouton */}
                <div className="space-y-4">
                  <p className="text-gray-600 font-semibold">
                    {articles[currentSlide].date}
                  </p>
                  
                  <Button 
                    onClick={() => window.open('https://www.facebook.com/share/18pXwBKaiJ/?mibextid=wwXIfr', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Voir sur Facebook
                  </Button>
                </div>
              </div>
            </div>

            {/* Indicateurs de slide */}
            <div className="flex justify-center mt-8 space-x-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
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