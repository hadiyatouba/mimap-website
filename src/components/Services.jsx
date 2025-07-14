import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

const Services = () => {
  const services = [
    {
      image: "/Rectangle 1.png",
      title: "Médecine générale",
      description: "Consultations pour tous les âges, suivi global de la santé"
    },
    {
      image: "/Rectangle 1.png",
      title: "Médecine de famille",
      description: "Approche holistique centrée sur le bien-être familial"
    },
    {
      image: "/Rectangle 1.png",
      title: "Pédiatrie",
      description: "Soins spécialisés pour nourrissons, enfants et adolescents"
    },
    {
      image: "/Rectangle 1.png",
      title: "Kinésithérapie respiratoire",
      description: "Rééducation des troubles respiratoires chez l'enfant et l'adulte"
    },
    {
      image: "/Rectangle 1.png",
      title: "Psychiatrie",
      description: "Suivi psychologique, troubles mentaux, thérapies adaptées"
    },
    {
      image: "/Rectangle 1.png",
      title: "Urologie",
      description: "Soins du système urinaire et santé masculine"
    },
    {
      image: "/Rectangle 1.png",
      title: "Infectiologie",
      description: "Prévention, diagnostic et traitement des maladies infectieuses"
    },
    {
      image: "/Rectangle 1.png",
      title: "Médecine du travail",
      description: "Suivi médical des employés, bilan pré-embauche (pre-employment check-up), prévention et sécurité en milieu professionnel"
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête - Mobile first responsive */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Nos Services Médicaux
            </h2>
            {/* Ligne verte décorative */}
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Grille des services - Mobile first responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Image du service - Responsive height */}
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Icône coeur en overlay - Responsive sizing */}
                  <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 bg-blue-600 rounded-full p-2 sm:p-2.5 lg:p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white fill-current" />
                  </div>
                </div>

                {/* Contenu de la carte - Responsive padding and text */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 lg:mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Bouton Appeler - Responsive sizing */}
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base py-2 sm:py-2.5"
                  >
                    Appeler
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services