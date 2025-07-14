import { User, Stethoscope, Brain, Bug, Heart } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Kader Kane",
      specialty: "Médecin de famille",
      icon: Heart,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Dr. Hachim Kebe",
      specialty: "Infectiologue",
      icon: Bug,
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Dr. Mohamed Kane",
      specialty: "Psychiatre",
      icon: Brain,
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Dr. Fatimetou Kane",
      specialty: "Généraliste",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              L'Équipe Médicale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une équipe de professionnels dévoués à votre santé et votre bien-être
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Profile image placeholder */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                    {/* Specialty icon */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full p-2 ${member.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-semibold text-sm">
                    {member.specialty}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Team description */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Une équipe certifiée et expérimentée
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Notre équipe médicale est certifiée par l'American Heart Association et collabore 
                avec des institutions prestigieuses comme la Banque mondiale, Tasiast et Aura Energy. 
                Nous nous engageons à fournir des soins de qualité supérieure avec une approche 
                personnalisée pour chaque patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

