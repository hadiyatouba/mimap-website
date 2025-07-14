import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[600px] bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
      {/* Formes géométriques vertes */}
      <div className="absolute inset-0">
        {/* Grande forme verte à gauche */}
        <div className="absolute -left-20 top-0 w-80 h-full bg-green-400 transform -skew-x-12 opacity-90"></div>
        
        {/* Forme verte à droite */}
        <div className="absolute -right-32 top-20 w-96 h-96 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-green-400 transform rotate-45 opacity-80"></div>
      </div>

      {/* Image du médecin en arrière-plan */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <img 
          src="/Image docteur.png" 
          alt="Médecin MIMAP" 
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Votre santé,
            <br />
            <span className="text-blue-800">notre priorité</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
            MIMAP vous accompagne dans la médecine préventive,
            la santé familiale, la santé au travail et les formations en
            premiers secours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Prendre RDV
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-white px-8 py-3 text-lg rounded-lg"
            >
              Découvrir MIMAP
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
    </section>
  )
}

export default Hero