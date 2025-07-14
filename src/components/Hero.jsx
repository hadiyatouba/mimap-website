import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
      {/* Formes géométriques vertes - Responsive positioning */}
      <div className="absolute inset-0">
        {/* Grande forme verte à gauche - Adjusted for mobile */}
        <div className="absolute -left-10 sm:-left-20 top-0 w-40 sm:w-60 lg:w-80 h-full bg-green-400 transform -skew-x-12 opacity-90"></div>
        
        {/* Forme verte à droite - Hidden on mobile, visible on tablet+ */}
        <div className="hidden sm:block absolute -right-16 sm:-right-32 top-10 sm:top-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-green-300 rounded-full opacity-70"></div>
        <div className="hidden sm:block absolute -right-10 sm:-right-20 bottom-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-green-400 transform rotate-45 opacity-80"></div>
      </div>

      {/* Image du médecin en arrière-plan - Responsive positioning */}
      <div className="absolute right-0 top-0 w-full sm:w-3/5 lg:w-1/2 h-full">
        <img 
          src="/Image docteur.png" 
          alt="Médecin MIMAP" 
          className="w-full h-full object-cover object-left opacity-80 sm:opacity-100"
        />
      </div>

      {/* Contenu principal - Mobile first responsive */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-full sm:max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 sm:mb-6 leading-tight">
            Votre santé,
            <br />
            <span className="text-blue-800">notre priorité</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-full sm:max-w-lg lg:max-w-xl">
            MIMAP vous accompagne dans la médecine préventive,
            la santé familiale, la santé au travail et les formations en
            premiers secours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg shadow-lg w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Prendre RDV
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg w-full sm:w-auto"
            >
              Découvrir MIMAP
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay pour améliorer la lisibilité du texte - Responsive opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-30 sm:bg-opacity-20"></div>
    </section>
  )
}

export default Hero