import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Facebook, Eye, Users, Building, Stethoscope, Heart } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      src: "/fixed-height sec-.png",
      alt: "Équipe MIMAP en réunion",
      category: "Équipe",
      description: "Réunion d'équipe pour planifier les activités de santé préventive"
    },
    {
      id: 2,
      src: "/fixed-height sec-.png",
      alt: "Consultation médicale",
      category: "Soins",
      description: "Consultation avec nos spécialistes en diabète et hypertension"
    },
    {
      id: 3,
      src: "/fixed-height sec-.png",
      alt: "Infrastructure moderne",
      category: "Infrastructure",
      description: "Nos installations modernes pour un accueil optimal"
    },
    {
      id: 4,
      src: "/fixed-height sec-.png",
      alt: "Formation du personnel",
      category: "Formation",
      description: "Formation continue de notre équipe médicale"
    },
    {
      id: 5,
      src: "/fixed-height sec-.png",
      alt: "Équipement médical",
      category: "Équipement",
      description: "Équipements de pointe pour diagnostics précis"
    },
    {
      id: 6,
      src: "/fixed-height sec-.png",
      alt: "Accueil patients",
      category: "Accueil",
      description: "Espace d'accueil chaleureux pour nos patients"
    }
  ]

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Équipe': return <Users className="w-4 h-4" />
      case 'Soins': return <Heart className="w-4 h-4" />
      case 'Infrastructure': return <Building className="w-4 h-4" />
      case 'Formation': return <Stethoscope className="w-4 h-4" />
      case 'Équipement': return <Stethoscope className="w-4 h-4" />
      case 'Accueil': return <Users className="w-4 h-4" />
      default: return <Eye className="w-4 h-4" />
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-4">
              Galerie MIMAP
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Découvrez nos actions, notre équipe et nos infrastructures en images
            </p>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Grille de galerie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => openModal(image, index)}
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay avec animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        {getCategoryIcon(image.category)}
                        {image.category}
                      </div>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Bouton d'agrandissement */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Bouton Facebook */}
          <div className="text-center">
            <a 
              href="https://www.facebook.com/watch/?v=1690970188052652" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Facebook className="w-5 h-5" />
              Voir plus sur Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Modal d'image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image principale */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Informations de l'image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      {getCategoryIcon(selectedImage.category)}
                      {selectedImage.category}
                    </div>
                  </div>
                  <p className="text-white text-lg font-medium">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setSelectedImage(galleryImages[index])
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery