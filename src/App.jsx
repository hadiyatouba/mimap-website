import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Services from './components/Services'
import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
