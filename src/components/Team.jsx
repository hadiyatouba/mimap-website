import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Team = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(4)

  const teamMembers = [
    {
      name: t('dr_amadou_kane'), // ✅ Ajouté aux traductions
      specialty: t('family_doctor'),
      image: "/Background image box (1).png",
      diplomas: t('general_medicine_diploma'),
    },
    {
      name: t('dr_mamoudou_mohamed_kane'), // ✅ Déjà traduit
      specialty: t('psychiatrist'),
      image: "/user-cover-3.png",
      diplomas: t('psychiatry_diplomas'),
      schedule: t('tue_thu_14_20') + ', ' + t('by_appointment')
    },
    {
      name: t('dr_fatimetou_kane'), // ✅ Déjà traduit
      specialty: t('general_practitioner'),
      image: "/image.png",
      diplomas: t('general_medicine_diploma'),
    },
    {
      name: t('dr_rokia_maguirega'), // ✅ Déjà traduit
      specialty: t('pediatrician'),
      image: "/image copy.png",
      diplomas: t('pediatrics_diploma'),
    },
    {
      name: t('dr_faty_gata_ba'), // ✅ Ajouté aux traductions
      specialty: t('cardiologist'),
      image: "/medecin-afro-americain-montrant-image-cardiovasculaire-tablette-au-patient-pour-diagnostic-cardiologie-medecin-noir-expliquant-etat-cardiaque-flux-sanguin-jeune-gadget_482257-42642.avif",
      diplomas: t('cardiology_diploma'),
    },
    {
      name: t('dr_cheikh_diouf'), // ✅ Ajouté aux traductions
      specialty: t('general_sports_medicine'),
      image: "/Box 3.png",
      diplomas: t('sports_medicine_diplomas'),
    },
    {
      name: t('dr_mohamed_y_bowba'), // ✅ Ajouté aux traductions
      specialty: t('urologist'),
      image: "/xuroflometria-box.jpg.pagespeed.ic.H24sOCaR67.webp",
      diplomas: t('urology_diploma'),
    },
    {
      name: t('dr_hassimiou_kebe'), // ✅ Ajouté aux traductions (corrigé)
      specialty: t('assistant_chief_infectious'),
      image: "/fixed-height sec-.png",
      diplomas: t('infectious_diseases_diploma'),
    },
    {
      name: t('dr_mohamed_yahya_bowba_et_dr_amadou_kane'), // ✅ Clé corrigée
      specialty: t('occupational_medicine'),
      image: "/Background image box (1).png",
      diplomas: t('occupational_medicine_diploma'),
    }
  ]

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(4)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxSlides = Math.max(0, teamMembers.length - cardsPerView)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1))
  }

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            {t('medical_team')}
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Carrousel */}
        <div className="relative">
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label={t('previous')}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label={t('next')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Conteneur des cartes */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
                width: `${(teamMembers.length / cardsPerView) * 100}%`
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / teamMembers.length}%` }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>

                      <p className="text-blue-600 font-medium mb-3">
                        {member.specialty}
                      </p>

                      <p className="text-gray-600 text-sm mb-3">
                        {member.diplomas}
                      </p>

                      <p className="text-gray-500 text-xs mb-4">
                        {member.schedule}
                      </p>

                      {/* Réseaux sociaux */}
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                aria-label={`${t('slide')} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

