import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-gray-50 overflow-hidden">
      {/* Formes géométriques vertes */}
      <div className="absolute inset-0">
        {/* Grande forme verte à gauche */}
        <div className="absolute -left-20 top-0 w-80 h-full bg-green-400 transform -skew-x-12 opacity-90"></div>

        {/* Forme verte à droite */}
        <div className="absolute -right-32 top-20 w-96 h-96 bg-green-300 rounded-full opacity-70"></div>
        <div className="absolute -right-20 bottom-0 w-64 h-64 bg-green-400 transform rotate-45 opacity-80"></div>
      </div>

      {/* Image du médecin à droite */}
      <div className="absolute right-0 top-1 w-2/5 h-full z-5">
        <img
          src="/Image docteur.png"
          alt="Médecin MIMAP"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            console.log('Image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-full sm:max-w-2xl lg:max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 sm:mb-6 leading-tight">
            Votre santé,
            <br />
            <span className="text-blue-900">notre priorité</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-black mb-6 sm:mb-8 leading-relaxed max-w-full sm:max-w-lg lg:max-w-xl">
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-900 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-lg w-full sm:w-auto"
            >
              Découvrir MIMAP
            </Button>
          </div>
        </div>
      </div>

      {/* Image de fond overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
        }}
      ></div>
    </section>
  )
}

export default Hero