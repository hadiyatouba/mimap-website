import { Users, Briefcase, Baby, Shield } from 'lucide-react'

const Expertise = () => {
  const expertises = [
    {
      icon: Users,
      title: "Santé de la famille",
      description: "Programmes et ateliers adaptés à toutes les étapes de la vie : petite enfance, adultes, seniors.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Briefcase,
      title: "Santé au travail",
      description: "Prévention, sécurité en entreprise et gestion des urgences professionnelles.",
      color: "bg-blue-100 text-blue-600"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expertises Clés
            </h2>
            <p className="text-xl text-gray-600">
              Nos Domaines d'Excellence
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Découvrez les piliers de notre engagement pour une santé complète, durable et accessible à tous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertises.map((expertise, index) => {
              const IconComponent = expertise.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`rounded-full p-4 ${expertise.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {expertise.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {expertise.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional features */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Baby className="w-8 h-8 text-pink-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Petite enfance</h4>
              <p className="text-sm text-gray-600">Soins spécialisés pour les plus petits</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Users className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Adultes</h4>
              <p className="text-sm text-gray-600">Suivi médical complet</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Seniors</h4>
              <p className="text-sm text-gray-600">Accompagnement personnalisé</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md">
                <Briefcase className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Entreprises</h4>
              <p className="text-sm text-gray-600">Solutions professionnelles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise

