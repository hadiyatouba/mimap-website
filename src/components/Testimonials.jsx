import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: t('testimonial_quote'),
      author: t('dr_khadija_faye'),
      role: t('mimap_director'),
      image: "/Rectangle 2.png",
      source: t('kassataya_interview')
    },
    {
      text: t('innovation_model'),
      author: t('institutional_partner'),
      role: t('world_bank'),
      image: "/images.jpeg",
      source: t('evaluation_report')
    },
    {
      text: t('workplace_health'),
      author: t('hr_manager'),
      role: t('tasiast_mining'),
      image: "/d4f89f63d56af996103c2508e15aba0f.jpeg",
      source: t('client_testimonial')
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              {t('testimonials_reviews')}
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Carrousel de témoignages */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              {/* Flèches de navigation */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>

              {/* Contenu du témoignage */}
              <div className="text-center px-8 sm:px-16">
                {/* Guillemets décoratifs */}
                <div className="flex justify-center mb-6">
                  <div className="bg-green-500 rounded-full p-3">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Texte du témoignage */}
                <blockquote className="text-lg sm:text-xl text-gray-700 italic mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </blockquote>

                {/* Informations sur l'auteur */}
                <div className="flex flex-col items-center">
                  <div className="w-50 h-50 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-50 h-50 rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center hidden">
                      <span className="text-blue-600 font-bold text-lg">
                        {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm mb-2">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[currentTestimonial].source}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials