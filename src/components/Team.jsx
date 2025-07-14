import { useState } from 'react'
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      name: "Dr. Kader Kane",
      specialty: "Médecin de famille",
      image: "/dr-kader-kane.jpg"
    },
    {
      name: "Dr. Hachim Kebe",
      specialty: "Infectiologue",
      image: "/dr-hachim-kebe.jpg"
    },
    {
      name: "Dr. Mohamed Kane",
      specialty: "Psychiatre",
      image: "/dr-mohamed-kane.jpg"
    },
    {
      name: "Dr. Fatimetou Kane",
      specialty: "Généraliste",
      image: "/dr-fatimetou-kane.jpg"
    },
    {
      name: "Dr. Ahmed Fall",
      specialty: "Cardiologue",
      image: "/dr-ahmed-fall.jpg"
    },
    {
      name: "Dr. Aicha Sow",
      specialty: "Pédiatre",
      image: "/dr-aicha-sow.jpg"
    },
    {
      name: "Dr. Oumar Diallo",
      specialty: "Urologue",
      image: "/dr-oumar-diallo.jpg"
    },
    {
      name: "Dr. Mariem Ba",
      specialty: "Kinésithérapeute",
      image: "/dr-mariem-ba.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, teamMembers.length - 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, teamMembers.length - 3)) % Math.max(1, teamMembers.length - 3))
  }

  return (
    <section id="equipe" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Illustration médicale décorative */}
      <div className="absolute top-16 right-8 w-48 h-48 bg-green-400 rounded-full flex items-center justify-center opacity-90">
        <div className="text-center">
          {/* Illustration d'un médecin avec stéthoscope */}
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-2">
            <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 11.8 12.8 14 10 14S5 11.8 5 9V7L3 7V9C3 12.9 6.1 16 10 16C13.9 16 17 12.9 17 9ZM16 20V18L14 18V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V18L8 18V20C8 22.2 9.8 24 12 24C14.2 24 16 22.2 16 20Z"/>
            </svg>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-8 bg-blue-500 rounded"></div>
            <div className="w-4 h-8 bg-red-500 rounded"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              L'Équipe Médicale
            </h2>
            {/* Ligne verte décorative */}
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Carrousel */}
          <div className="relative">
            {/* Conteneur du carrousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 25}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="w-1/4 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                      {/* Photo du médecin */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Informations du médecin */}
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {member.specialty}
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex justify-center space-x-3">
                          <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                            <Facebook className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                            <Instagram className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                            <Twitter className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team