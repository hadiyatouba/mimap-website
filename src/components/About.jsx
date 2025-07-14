const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contenu texte à gauche */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                Qui sommes-nous ?
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900 mb-6">
                  Cabinet MIMAP, votre partenaire pour la santé
                  <br />
                  et le bien-être de toute la famille.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Notre mission est de placer le bien-être des individus au cœur de toutes nos actions. 
                  Spécialistes dévoués à la santé et à la sérénité de toute la famille, quel que soit son âge, nous 
                  proposons des approches novatrices qui englobent à la fois les besoins familiaux et ceux 
                  des environnements professionnels.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Notre équipe, certifiée par l'American Heart Association, collabore avec des institutions 
                  comme la Banque mondiale, Tasiast ou Aura Energy, pour construire un monde plus sain et 
                  sécurisé.
                </p>
              </div>
            </div>

            {/* Images à droite */}
            <div className="relative">
              {/* Forme géométrique bleue */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600 rounded-lg transform rotate-12 z-0"></div>
              
              {/* Image principale de l'équipe */}
              <div className="relative z-10 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <img 
                    src="/Rectangle 1.png" 
                    alt="Équipe MIMAP" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Images secondaires */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Image de présentation */}
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <img 
                    src="/Rectangle 2.png" 
                    alt="Présentation MIMAP" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                {/* Image d'équipe secondaire */}
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <img 
                    src="/Section Hero.png" 
                    alt="Équipe médicale" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Point vert décoratif */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About