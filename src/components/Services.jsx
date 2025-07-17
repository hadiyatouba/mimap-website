import { Button } from '@/components/ui/button'
import { Heart, Clock, User, Stethoscope } from 'lucide-react'
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
      image: "/Rectangle 3.png",
      equipment: t('tensiometer_stethoscope'),
      schedule: t('mon_thu_15_23') + ', ' + t('sat_10_17'),
      doctor: t('dr_fatimetou_kane'),
      price: t('consultation_2500'),
      type: t('consultation')
    },
    {
      title: t('family_medicine'),
      description: t('family_medicine_desc'),
      image: "/Rectangle 4.png",
      equipment: t('pediatric_equipment'),
      schedule: t('mon_thu_15_23') + ', ' + t('sat_10_17'),
      doctor: t('dr_kader_kane'),
      price: t('family_consultation_3000'),
      type: t('consultation')
    },
    {
      title: t('pediatrics'),
      description: t('pediatrics_desc'),
      image: "/Rectangle 5.png",
      equipment: t('pediatric_balance'),
      schedule: t('mon_thu_16_21') + ', ' + t('sat_10_16'),
      doctor: t('dr_aicha_sow'),
      price: t('child_consultation_2000'),
      type: t('consultation')
    },
    {
      title: t('respiratory_physiotherapy'),
      description: t('respiratory_physiotherapy_desc'),
      image: "/Rectangle 6.png",
      equipment: t('spirometer_drainage'),
      schedule: t('mon_fri_8_18') + ', ' + t('by_appointment'),
      doctor: t('dr_mariem_ba'),
      price: t('session_1500'),
      type: t('session')
    },
    {
      title: t('psychiatry'),
      description: t('psychiatry_desc'),
      image: "/Rectangle 7.png",
      equipment: t('consultation_office'),
      schedule: t('tue_thu_14_20') + ', ' + t('by_appointment'),
      doctor: t('dr_mohamed_kane'),
      price: t('consultation_4000'),
      type: t('consultation')
    },
    {
      title: t('urology'),
      description: t('urology_desc'),
      image: "/Rectangle 8.png",
      equipment: t('ultrasound_urological'),
      schedule: t('mon_wed_15_19') + ', ' + t('by_appointment'),
      doctor: t('dr_oumar_diallo'),
      price: t('consultation_3500'),
      type: t('consultation')
    },
    {
      title: t('infectiology'),
      description: t('infectiology_desc'),
      image: "/Rectangle 9.png",
      equipment: t('rapid_tests'),
      schedule: t('mon_thu_15_22') + ', ' + t('emergency_24_7'),
      doctor: t('dr_hachim_kebe'),
      price: t('consultation_3000'),
      type: t('consultation')
    },
    {
      title: t('occupational_medicine'),
      description: t('occupational_medicine_desc'),
      image: "/Rectangle 10.png",
      equipment: t('audiometer_spirometer'),
      schedule: t('mon_fri_8_17') + ', ' + t('company_appointment'),
      doctor: t('dr_ahmed_fall'),
      price: t('assessment_5000'),
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

                {/* Équipement */}
                <div className="flex items-start mb-3">
                  <Stethoscope className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-600">{service.equipment}</span>
                </div>

                {/* Horaires */}
                <div className="flex items-start mb-3">
                  <Clock className="w-4 h-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-xs text-gray-600">{service.schedule}</span>
                </div>

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

