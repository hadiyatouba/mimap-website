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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos Services Médicaux
            </h2>
            {/* Ligne verte décorative */}
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Grille des services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Image du service */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Icône coeur en overlay */}
                  <div className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bouton Appeler */}
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105"
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