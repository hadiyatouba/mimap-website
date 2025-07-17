import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#accueil')
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (href) => {
    setActiveLink(href)
    // Smooth scroll vers la section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Fermer le menu mobile
    setIsMenuOpen(false)
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/22231244404', '_blank')
  }

  const handleCallNowClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Fermer le menu mobile si ouvert
    setIsMenuOpen(false)
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact bar - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-xs lg:text-sm space-y-2 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="text-xs lg:text-sm">{t('phone_number_1')} / {t('phone_number_2').replace('+222 ', '')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                <a
                  href={`mailto:${t('email_address')}`}
                  className="text-xs lg:text-sm hover:text-blue-200 transition-colors underline"
                >
                  {t('email_address')}
                </a>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center xl:space-x-8 space-y-2 xl:space-y-0">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm">{t('nouakchott')}</span>
                  <span className="text-xs lg:text-sm">Ilot K EXT 929</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs lg:text-sm">🕐</span>
                <div className="flex flex-col">
                  <span className="text-xs lg:text-sm">{t('mon_thu')}</span>
                  <span className="text-xs lg:text-sm">{t('schedule_summary')}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                <button
                  onClick={handleWhatsApp}
                  className="underline text-xs lg:text-sm hover:text-blue-200 transition-colors"
                >
                  {t('connect_whatsapp')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Responsive sizing - Increased size */}
          <div className="flex items-center">
            <img
              src="/ogoMIMAP by Toutou [Récupéré]_Plan de travail 1 1 (1).png"
              alt="MIMAP Logo"
              className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto"
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
              {t('home')}
            </a>
            <a
              href="#apropos"
              onClick={() => handleLinkClick('#apropos')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#apropos' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              {t('about')}
            </a>
            <a
              href="#services"
              onClick={() => handleLinkClick('#services')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#services' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              {t('services')}
            </a>
            <a
              href="#equipe"
              onClick={() => handleLinkClick('#equipe')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#equipe' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              {t('team')}
            </a>
            <a
              href="#blog"
              onClick={() => handleLinkClick('#blog')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#blog' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              {t('blog')}
            </a>
            <a
              href="#gallery"
              onClick={() => handleLinkClick('#gallery')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#gallery' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              {t('gallery')}
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium pb-2 border-b-2 text-sm xl:text-base ${activeLink === '#contact' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
            >
              {t('contact')}
            </a>
            <div className="flex items-center space-x-2">
              <button onClick={() => changeLanguage('fr')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base">FR</button>
              <button onClick={() => changeLanguage('en')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base">EN</button>
              <button onClick={() => changeLanguage('ar')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm xl:text-base">AR</button>
            </div>
          </div>

          {/* Call to action button - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 xl:px-6 py-2 text-sm xl:text-base"
              onClick={handleCallNowClick}
            >
              {t('call_now')}
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
                {t('home')}
              </a>
              <a
                href="#apropos"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </a>
              <a
                href="#equipe"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('team')}
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('gallery')}
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </a>
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <button onClick={() => changeLanguage('fr')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50">FR</button>
                <button onClick={() => changeLanguage('en')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50">EN</button>
                <button onClick={() => changeLanguage('ar')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-2 rounded-lg hover:bg-gray-50">AR</button>
              </div>

              {/* Mobile contact info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{t('phone_number_1')}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{t('email_address')}</span>
                </div>
              </div>

              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full rounded-full py-3 mt-4"
                onClick={handleCallNowClick}
              >
                {t('call_now')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header