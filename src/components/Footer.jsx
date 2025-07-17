import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const quickLinks = [
    { name: t('home'), href: "#accueil" },
    { name: t('about'), href: "#apropos" },
    { name: t('services'), href: "#services" },
    { name: t('team'), href: "#equipe" },
    { name: t('gallery'), href: "#galerie" },
    { name: t('contact'), href: "#contact" }
  ]

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Contenu principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Section Logo et slogan */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {/* Logo MIMAP */}
                <img
                  src="/ogoMIMAP by Toutou [Récupéré]-02 1.png"
                  alt="MIMAP Logo"
                  className="h-20 w-auto mb-4"
                />
                {/* Texte en arabe et anglais sous le logo */}
                <p className="text-xs text-gray-300 mb-4">
                  {t('mauritania_internal_medicine_ar')}
                  <br />
                  {t('mauritania_internal_medicine')}
                </p>
              </div>

              <p className="text-white font-medium text-lg mb-2">
                "{t('health_priority')}"
              </p>
            </div>

            {/* Liens rapides */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 text-white">{t('quick_links')}</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white hover:text-blue-300 transition-colors duration-300 text-base"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Informations de contact */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Coordonnées */}
                <div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <div className="text-white">
                        <a
                          href="https://maps.google.com/maps?q=Ilot+K+EXT+929,+Nouakchott,+Mauritanie"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-300 transition-colors duration-300 underline"
                        >
                          <p className="font-medium">{t('full_address')}</p>
                        </a>
                      </div>
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

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
                      <div className="text-white">
                        <p>{t('phone_number_1')} /</p>
                        <p>{t('phone_number_2')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/18pXwBKaiJ/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Facebook MIMAP"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/mimap_rim?igsh=MTd5OTNreDJkdW85Zg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="Instagram MIMAP"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cabinet-mimap-mauritania-internal-medecine-and-pediatrics/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label="LinkedIn MIMAP"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ligne de séparation et copyright */}
          <div className="border-t border-blue-700 mt-12 pt-8">
            <div className="text-center">
              <p className="text-blue-200 text-sm">
                {t('copyright_2025')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer