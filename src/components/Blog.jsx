import { Button } from '@/components/ui/button'
import { Calendar, ExternalLink, Quote } from 'lucide-react'

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Actualités et Blog
            </h2>
            <p className="text-lg text-gray-600">
              Prévention / Sensibilisation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Article principal */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                Événement à venir
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Journée Portes Ouvertes avec SOS Diabète
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Une journée de dépistage et de sensibilisation organisée par MIMAP en collaboration 
                avec SOS Diabète, dédiée à la prévention du diabète.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-600 font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  24 avril 2025
                </div>
                
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir sur Facebook
                </Button>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Témoignages et Avis
                </h3>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "Nous voulons venir en aide aux personnes en situation difficile… les personnes 
                  atteintes du diabète et de l'hypertension seront suivies par les spécialistes."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">DF</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr Khadija Faye</p>
                    <p className="text-blue-600 text-sm">Directrice MIMAP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section galerie */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Galerie MIMAP
              </h3>
              <p className="text-gray-700 mb-6">
                Découvrez nos actions, notre équipe et nos infrastructures en images.
              </p>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir plus sur Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

