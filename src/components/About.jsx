import { Award, Users, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl text-blue-600 font-semibold mb-8">
              Cabinet MIMAP, votre partenaire pour la santé et le bien-être de toute la famille.
            </p>
          </div> 

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre mission est de placer le bien-être des individus au cœur de toutes nos actions.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Spécialistes dévoués à la santé et à la sérénité de toute la famille, quel que soit son âge, 
                nous proposons des approches novatrices qui englobent à la fois les besoins familiaux et 
                ceux des environnements professionnels. 
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Notre équipe, certifiée par l'American Heart Association, collabore avec des institutions 
                comme la Banque mondiale, Tasiast ou Aura Energy, pour construire un monde plus sain et sécurisé.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Bien-être familial</p>
                  <p className="text-sm text-gray-500">Approches personnalisées pour chaque membre de la famille.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Certifié AHA</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Équipe experte</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Heart className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Notre Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Construire un monde plus sain et sécurisé en plaçant le bien-être 
                  des individus au centre de toutes nos actions, avec des approches 
                  novatrices et personnalisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

