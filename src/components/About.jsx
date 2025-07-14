const About = () => {
  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contenu texte - Mobile first */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 lg:mb-8">
                Qui sommes-nous ?
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Cabinet MIMAP, votre partenaire pour la santé
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>et le bien-être de toute la famille.
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Notre mission est de placer le bien-être des individus au cœur de toutes nos actions. 
                  Spécialistes dévoués à la santé et à la sérénité de toute la famille, quel que soit son âge, nous 
                  proposons des approches novatrices qui englobent à la fois les besoins familiaux et ceux 
                  des environnements professionnels.
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Notre équipe, certifiée par l'American Heart Association, collabore avec des institutions 
                  comme la Banque mondiale, Tasiast ou Aura Energy, pour construire un monde plus sain et 
                  sécurisé.
                </p>
              </div>
            </div>

            {/* Images - Mobile first responsive layout */}
            <div className="relative order-1 lg:order-2">
              {/* Forme géométrique bleue - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-blue-600 rounded-lg transform rotate-12 z-0"></div>
              
              {/* Image principale de l'équipe */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg shadow-lg">
                  <img 
                    src="/Rectangle 1.png" 
                    alt="Équipe MIMAP" 
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Images secondaires - Responsive grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 relative z-10">
                {/* Image de présentation */}
                <div className="bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                  <img 
                    src="/Rectangle 2.png" 
                    alt="Présentation MIMAP" 
                    className="w-full h-20 sm:h-24 lg:h-32 object-cover rounded-lg"
                  />
                </div>
                
                {/* Image d'équipe secondaire */}
                <div className="bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                  <img 
                    src="/Section Hero.png" 
                    alt="Équipe médicale" 
                    className="w-full h-20 sm:h-24 lg:h-32 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Point vert décoratif - Responsive positioning */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 bg-green-500 rounded-full z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About