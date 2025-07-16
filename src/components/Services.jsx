import { Button } from '@/components/ui/button'
import { Heart, Clock, User, Stethoscope } from 'lucide-react'

const Services = () => {
  const handleCallClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      image: "/Background image box (1).png",
      title: "Médecine générale",
      description: "Consultations pour tous les âges, suivi global de la santé",
      equipments: "Tensiomètre, stéthoscope, otoscope, balance",
      hours: "Lun-Jeu: 15h-22h, Sam: 10h-17h",
      doctor: "Dr. Fatimetou Kane",
      price: "Consultation: 2500 MRU"
    },
    {
      image: "/image box (1).png",
      title: "Médecine de famille",
      description: "Approche holistique centrée sur le bien-être familial",
      equipments: "Équipement pédiatrique, matériel de consultation",
      hours: "Lun-Jeu: 15h-22h, Sam: 10h-17h",
      doctor: "Dr. Kader Kane",
      price: "Consultation famille: 3000 MRU"
    },
    {
      image: "/Background image box (3).png",
      title: "Pédiatrie",
      description: "Soins spécialisés pour nourrissons, enfants et adolescents",
      equipments: "Balance pédiatrique, toise, thermomètre infrarouge",
      hours: "Lun-Jeu: 16h-21h, Sam: 10h-16h",
      doctor: "Dr. Aicha Sow",
      price: "Consultation enfant: 2000 MRU"
    },
    {
      image: "/Background image box (4).png",
      title: "Kinésithérapie respiratoire",
      description: "Rééducation des troubles respiratoires chez l'enfant et l'adulte",
      equipments: "Spiromètre, appareils de drainage, inhalateurs",
      hours: "Lun-Ven: 8h-18h, Sur RDV",
      doctor: "Dr. Mariem Ba",
      price: "Séance: 1500 MRU"
    },
    {
      image: "/Background image box.png",
      title: "Psychiatrie",
      description: "Suivi psychologique, troubles mentaux, thérapies adaptées",
      equipments: "Bureau de consultation, tests psychologiques",
      hours: "Mar-Jeu: 14h-20h, Sur RDV",
      doctor: "Dr. Mohamed Kane",
      price: "Consultation: 4000 MRU"
    },
    {
      image: "/Background image box (2).png",
      title: "Urologie",
      description: "Soins du système urinaire et santé masculine",
      equipments: "Échographe, matériel d'examen urologique",
      hours: "Lun-Mer: 15h-19h, Sur RDV",
      doctor: "Dr. Oumar Diallo",
      price: "Consultation: 3500 MRU"
    },
    {
      image: "/Background image box (5).png",
      title: "Infectiologie",
      description: "Prévention, diagnostic et traitement des maladies infectieuses",
      equipments: "Tests rapides, microscope, matériel de prélèvement",
      hours: "Lun-Jeu: 15h-22h, Urgences 24h/7j",
      doctor: "Dr. Hachim Kebe",
      price: "Consultation: 3000 MRU"
    },
    {
      image: "/image box (2).png",
      title: "Médecine du travail",
      description: "Suivi médical des employés, bilan pré-embauche, prévention et sécurité en milieu professionnel",
      equipments: "Audiomètre, spiromètre, matériel de bilan complet",
      hours: "Lun-Ven: 8h-17h, Sur RDV entreprises",
      doctor: "Dr. Ahmed Fall",
      price: "Bilan: 5000 MRU"
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              Nos Services Médicaux
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Grille des services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Image du service */}
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Contenu de la carte */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {/* Informations détaillées */}
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-start space-x-2">
                      <Stethoscope className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service.equipments}</span>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Clock className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service.hours}</span>
                    </div>

                    <div className="flex items-start space-x-2">
                      <User className="w-3 h-3 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service.doctor}</span>
                    </div>

                    <div className="text-green-600 font-semibold">
                      {service.price}
                    </div>
                  </div>

                  {/* Bouton Appeler */}
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base py-2 sm:py-2.5"
                    onClick={handleCallClick}
                  >
                    Appeler pour prendre RDV
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