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
      {/* Top contact bar - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-xs lg:text-sm space-y-2 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-xs lg:text-sm">+222 3124 4404 / 4479 4404</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-xs lg:text-sm">cabinetmimap@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center xl:space-x-8 space-y-2 xl:space-y-0">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm">NOUAKCHOTT</span>
                  <span className="text-xs lg:text-sm">Ilot K EXT 929</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs lg:text-sm">🕐</span>
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm">LUN–JEU</span>
                  <span className="text-xs lg:text-sm">15h–22h ; Sam : 10h–17h</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="underline text-xs lg:text-sm">Connect on Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center">
            <img
              src="/ogoMIMAP by Toutou [Récupéré]_Plan de travail 1 1 (1).png"
              alt="MIMAP Logo"
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#accueil"
              onClick={() => handleLinkClick('#accueil')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#accueil' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Accueil
            </a>
            <a
              href="#apropos"
              onClick={() => handleLinkClick('#apropos')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#apropos' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              À propos
            </a>
            <a
              href="#services"
              onClick={() => handleLinkClick('#services')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#services' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Services
            </a>
            <a
              href="#equipe"
              onClick={() => handleLinkClick('#equipe')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#equipe' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Équipe
            </a>
            <a
              href="#blog"
              onClick={() => handleLinkClick('#blog')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#blog' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Blog
            </a>
            <a
              href="#galerie"
              onClick={() => handleLinkClick('#galerie')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#galerie' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Galerie
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#contact' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              Contact
            </a>
          </div>

          {/* Call to action button - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 xl:px-6 py-2 text-sm xl:text-base">
              Appeler maintenant
            </Button>
          </div>

          {/* Mobile menu button - Visible on mobile and tablet */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Improved responsive design */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#accueil" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="#apropos" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#equipe" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Équipe
              </a>
              <a 
                href="#blog" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#galerie" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile contact info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+222 3124 4404</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>cabinetmimap@gmail.com</span>
                </div>
              </div>
              
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white w-full rounded-full py-3 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
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