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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Informations principales */}
            <div>
              <h3 className="text-2xl font-bold mb-6">MIMAP</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Votre santé, notre priorité"
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    Ilot K EXT 929, Nouakchott, Mauritanie
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    +222 3124 4404 / +222 4479 4404
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    cabinetmimap@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-xl font-bold mb-6">Liens rapides</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="text-xl font-bold mb-6">Horaires d'ouverture</h4>
              <div className="space-y-2 text-gray-300">
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

          {/* Ligne de séparation */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 MIMAP - Tous droits réservés
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
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

