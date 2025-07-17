import { Button } from '@/components/ui/button'
import { Heart, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()

  const handleCallClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      title: t('general_medicine'),
      description: t('general_medicine_desc'),
      image: "/image.png",
      doctor: t('dr_fatimetou_kane'),
      price: t('consultation_500'),
      type: t('consultation')
    },
    {
      title: t('family_medicine'),
      description: t('family_medicine_desc'),
      image: "/Background image box (1).png",
      doctor: t('dr_amadou_kane_et_dr_cheikh_diouf'), // ✅ Clé corrigée
      price: t('consultation_500'),
      type: t('consultation')
    },
    {
      title: t('pediatrics'),
      description: t('pediatrics_desc'),
      image: "/image copy.png",
      doctor: t('dr_rokia_maguirega'),
      price: t('child_consultation_1000'), // ✅ Clé corrigée
      type: t('consultation')
    },
    {
      title: t('respiratory_physiotherapy'),
      description: t('respiratory_physiotherapy_desc'),
      image: "/Rectangle 2.png",
      doctor: t('dr_khadija_faye'),
      price: t('session_1500'),
      type: t('session')
    },
    {
      title: t('psychiatry'),
      description: t('psychiatry_desc'),
      image: "/user-cover-3.png",
      doctor: t('dr_mamoudou_mohamed_kane'), // ✅ Clé corrigée
      price: t('consultation_500'),
      type: t('consultation')
    },
    {
      title: t('urology'),
      description: t('urology_desc'),
      image: "/urologue-toulouse.jpg",
      doctor: t('dr_habiboulah'),
      price: t('consultation_1000'), // ✅ Clé corrigée
      type: t('consultation')
    },
    {
      title: t('infectiology'),
      description: t('infectiology_desc'),
      image: "/couverture-3.jpg",
      doctor: t('dr_hachim_kebe'),
      price: t('consultation_1000'), // ✅ Clé corrigée
      type: t('consultation')
    },
    {
      title: t('occupational_medicine'),
      description: t('occupational_medicine_desc'),
      image: "/1648445485574.png",
      doctor: t('dr_mohamed_yahya_bowba_et_dr_amadou_kane'), // ✅ Clé corrigée
      price: t('assessment_1000'), // ✅ Clé corrigée
      type: t('assessment')
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            {t('medical_services')}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                {/* Médecin */}
                <div className="flex items-start mb-3">
                  <User className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-600">{service.doctor}</span>
                </div>

                {/* Prix */}
                <div className="text-green-600 font-bold text-sm mb-4">
                  {service.price}
                </div>

                {/* Bouton Appel */}
                <Button
                  onClick={handleCallClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  {t('call_appointment')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

