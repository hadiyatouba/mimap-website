import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Nouakchott Lun–Jeu 15h–22h ; Sam : 10h–17h</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+222 3124 4404 / 4479 4404</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>cabinetmimap@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Ilot K EXT 929</span>
            </div>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-600">
              Connect on Whatsapp
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MIMAP
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#equipe" className="text-gray-700 hover:text-blue-600 transition-colors">Équipe</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
            <a href="#galerie" className="text-gray-700 hover:text-blue-600 transition-colors">Galerie</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Call to action button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="w-4 h-4 mr-2" />
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
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#equipe" className="text-gray-700 hover:text-blue-600 transition-colors">Équipe</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#galerie" className="text-gray-700 hover:text-blue-600 transition-colors">Galerie</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <Phone className="w-4 h-4 mr-2" />
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

