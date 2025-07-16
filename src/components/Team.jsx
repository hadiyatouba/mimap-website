import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)

  const teamMembers = [
    {
      name: "Dr. Kader Kane",
      specialty: "Médecin de famille",
      image: "/image box.png",
      diplomas: "Diplôme d'état de médecine générale",
      schedule: "Lun-Jeu: 15h-22h, Sam: 10h-17h"
    },
    {
      name: "Dr. M.Mohamed Kane",
      specialty: "Psychiatre",
      image: "/user-cover-3.png",
      diplomas: "Diplôme d'état de médecine générale 2017 (Faculté de médecine St Christopher - Dakar), Diplôme de spécialité en psychiatrie (Sfax - Tunisie)",
      schedule: "Mar-Jeu: 14h-20h, Sur RDV"
    },
    {
      name: "Dr. Fatimetou Kane",
      specialty: "Généraliste",
      image: "/public/Box 3.png",
      diplomas: "Diplôme d'état de médecine générale",
      schedule: "Lun-Jeu: 15h-22h, Sam: 10h-17h"
    },
    {
      name: "Dr. Rokia Maguirega",
      specialty: "Pédiatre",
      image: "/fixed-height sec- (1).png",
      diplomas: "Diplôme de spécialité en pédiatrie",
      schedule: "Lun-Jeu: 16h-21h, Sam: 10h-16h"
    },
    {
      name: "Dr. Faty Gata Ba",
      specialty: "Cardiologue",
      image: "/Background image box (1).png",
      diplomas: "Diplôme de spécialité en cardiologie",
      schedule: "Lun-Ven: 8h-17h, Sur RDV"
    },
    {
      name: "Dr. Cheikh Diouf",
      specialty: "Généraliste et Médecine du sport",
      image: "/Background image box.png",
      diplomas: "Diplôme d'état de médecine générale, Spécialisation en médecine du sport",
      schedule: "Lun-Ven: 8h-17h, Sur RDV entreprises"
    },
    {
      name: "Dr. Mohamed.Y Bowba",
      specialty: "Généraliste",
      image: "/Image docteur.png",
      diplomas: "Diplôme d'état de médecine générale",
      schedule: "Lun-Jeu: 15h-22h, Sam: 10h-17h"
    },
    {
      name: "Dr. Habiboulah",
      specialty: "Urologue",
      image: "/public/Box 3.png",
      diplomas: "Diplôme de spécialité en urologie",
      schedule: "Lun-Mer: 15h-19h, Sur RDV"
    },
    {
      name: "Dr. Kebe Hassimiou",
      specialty: "Assistant chef de clinique - Maladies infectieuses",
      image: "/fixed-height sec-.png",
      diplomas: "Assistant chef de clinique hospitalo-universitaire des maladies infectieuses",
      schedule: "Lun-Jeu: 15h-22h, Urgences 24h/7j"
    }
  ]

  // Fonction pour déterminer le nombre de cartes par vue selon la taille d'écran
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth
      if (width < 640) { // sm
        setCardsPerView(1)
      } else if (width < 768) { // md
        setCardsPerView(2)
      } else if (width < 1024) { // lg
        setCardsPerView(3)
      } else { // xl et plus
        setCardsPerView(4)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // Calculer le nombre maximum de slides
  const maxSlides = Math.max(0, teamMembers.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (maxSlides + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides + 1) % (maxSlides + 1))
  }

  // Calculer le pourcentage de translation
  const translatePercentage = (100 / cardsPerView) * currentSlide

  return (
    <section id="equipe" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              L'Équipe Médicale
            </h2>
            {/* Ligne verte décorative */}
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Carrousel */}
          <div className="relative">
            {/* Conteneur du carrousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${translatePercentage}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2 sm:px-3 lg:px-4"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                      {/* Photo du médecin */}
                      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Informations du médecin */}
                      <div className="p-4 sm:p-5 lg:p-6 text-center">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {member.specialty}
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex justify-center space-x-2 sm:space-x-3">
                          <a
                            href="https://www.facebook.com/share/18pXwBKaiJ/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                            aria-label="Facebook MIMAP"
                          >
                            <Facebook className="w-5 h-5 text-white" />
                          </a>
                          <a
                            href="https://www.instagram.com/mimap_rim?igsh=MTd5OTNreDJkdW85Zg%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300"
                            aria-label="Instagram MIMAP"
                          >
                            <Instagram className="w-5 h-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation - cachés si pas assez de cartes */}
            {maxSlides > 0 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Indicateurs de pagination - optionnel */}
          {maxSlides > 0 && (
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: maxSlides + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                      ? 'bg-green-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Team 