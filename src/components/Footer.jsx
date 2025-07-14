import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Équipe", href: "#equipe" },
    { name: "Galerie", href: "#galerie" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-14 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contenu principal - Mobile first responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Informations principales - Mobile first */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">MIMAP</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "Votre santé, notre priorité"
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    Ilot K EXT 929, Nouakchott, Mauritanie
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    +222 3124 4404 / +222 4479 4404
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    cabinetmimap@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Liens rapides - Mobile first responsive */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Liens rapides</h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Horaires - Mobile first responsive */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Horaires d'ouverture</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span>Lun–Jeu</span>
                  <span>15h–22h</span>
                </div>
                <div className="flex justify-between">
                  <span>Vendredi</span>
                  <span>16h–22h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h–17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="text-red-400">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ligne de séparation - Responsive spacing */}
          <div className="border-t border-gray-700 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © 2025 MIMAP - Tous droits réservés
              </p>
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
                Cabinet médical certifié par l'American Heart Association
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

