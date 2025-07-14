import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Votre santé,
            <span className="text-blue-600 block">notre priorité</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            MIMAP vous accompagne dans la médecine préventive, 
            la santé familiale, la santé au travail et les formations en 
            premiers secours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Découvrir MIMAP
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Prendre RDV
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

