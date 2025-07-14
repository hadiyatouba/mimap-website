import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#accueil')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (href) => {
    setActiveLink(href)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+222 3124 4404 / 4479 4404</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>cabinetmimap@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-14">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <div className="flex flex-col">
                <span>NOUAKCHOTT</span>
                <span>Ilot K EXT 929</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span>🕐</span>
              <div className="flex flex-col">
                <span>LUN–JEU</span>
                <span>15h–22h ; Sam : 10h–17h</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span className="underline">Connect on Whatsapp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Remplacez le src par le chemin vers votre image */}
          <div className="flex items-center">
            <img
              src="/ogoMIMAP by Toutou [Récupéré]_Plan de travail 1 1 (1).png"
              alt="MIMAP Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#accueil"
              onClick={() => handleLinkClick('#accueil')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#accueil' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Accueil
            </a>
            <a
              href="#apropos"
              onClick={() => handleLinkClick('#apropos')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#apropos' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              À propos
            </a>
            <a
              href="#services"
              onClick={() => handleLinkClick('#services')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#services' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Services
            </a>
            <a
              href="#equipe"
              onClick={() => handleLinkClick('#equipe')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#equipe' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Équipe
            </a>
            <a
              href="#blog"
              onClick={() => handleLinkClick('#blog')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#blog' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Blog
            </a>
            <a
              href="#galerie"
              onClick={() => handleLinkClick('#galerie')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#galerie' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Galerie
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 ${activeLink === '#contact' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Contact
            </a>
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2">
              Appeler maintenant
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">À propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#equipe" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Équipe</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
              <a href="#galerie" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Galerie</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full rounded-full">
                Appeler maintenant
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header