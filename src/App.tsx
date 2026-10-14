import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Team />
      <Reviews />
      <Contact />
      <Footer />

      <section className="bg-[#F7F4EF] px-6 py-20 text-center">
        <p className="text-xs tracking-[0.3em] text-[#8C7865]">
          BIENVENIDA A MÍA STUDIO
        </p>

        <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
          Tu momento, tu estilo.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#77736D]">
          Un espacio donde la belleza natural, la técnica y el cuidado
          personalizado se unen para crear un estilo único.
        </p>
      </section>
    </main>
  )
}

export default App
