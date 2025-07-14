import { Button } from '@/components/ui/button'
import { Phone, Stethoscope, Heart, Baby, Wind, Brain, Shield, Bug, Briefcase } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Médecine générale",
      description: "Consultations pour tous les âges, suivi global de la santé",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Heart,
      title: "Médecine de famille",
      description: "Approche holistique centrée sur le bien-être familial",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Baby,
      title: "Pédiatrie",
      description: "Soins spécialisés pour nourrissons, enfants et adolescents",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: Wind,
      title: "Kinésithérapie respiratoire",
      description: "Rééducation des troubles respiratoires chez l'enfant et l'adulte",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Brain,
      title: "Psychiatrie",
      description: "Suivi psychologique, troubles mentaux, thérapies adaptées",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Urologie",
      description: "Soins du système urinaire et santé masculine",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Bug,
      title: "Infectiologie",
      description: "Prévention, diagnostic et traitement des maladies infectieuses",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Briefcase,
      title: "Médecine du travail",
      description: "Suivi médical des employés, bilan pré-embauche (pre-employment check-up), prévention et sécurité en milieu professionnel.",
      color: "bg-teal-100 text-teal-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Médicaux
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services médicaux pour répondre à tous vos besoins de santé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`rounded-full p-3 w-14 h-14 mb-4 ${service.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler
                  </Button>
                </div>
              )
            })}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'une consultation ?
              </h3>
              <p className="text-gray-700 mb-6">
                Notre équipe médicale est à votre disposition pour vous accompagner dans votre parcours de santé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Prendre rendez-vous
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Voir tous nos services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

