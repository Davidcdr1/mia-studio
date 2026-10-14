export default function About() {
    return (
      <section id="salon" className="overflow-hidden bg-[#F0EBE4]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Fotografía */}
          <div className="relative min-h-[450px] lg:min-h-[700px]">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=85"
              alt="Interior de inspiración para un salón de peluquería elegante"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
  
            <div className="absolute inset-0 bg-black/10" />
  
            <div className="absolute bottom-8 left-8 border border-white/70 p-5 text-white sm:bottom-10 sm:left-10">
              <p className="text-[10px] tracking-[0.3em]">
                MÍA STUDIO
              </p>
              <p className="mt-2 font-serif text-2xl">
                Beauty in simplicity.
              </p>
            </div>
          </div>
  
          {/* Texto */}
          <div className="flex items-center px-7 py-20 sm:px-12 lg:px-16 xl:px-20">
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.3em] text-[#8C7865]">
                NUESTRA FILOSOFÍA
              </p>
  
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl xl:text-6xl">
                Mucho más que
                <br />
                un salón.
              </h2>
  
              <div className="my-8 h-px w-16 bg-[#B9A590]" />
  
              <p className="text-base leading-8 text-[#65615B]">
                Creemos que sentirse bien empieza por dedicarte tiempo.
                En MÍA Studio, cada visita es una oportunidad para
                desconectar, cuidarte y descubrir una versión de ti que
                te haga sentir especial.
              </p>
  
              <p className="mt-5 text-base leading-8 text-[#65615B]">
                Nos inspira la belleza natural, nos apasionan los pequeños
                detalles y creemos que el mejor estilo es aquel que encaja
                contigo, con tu personalidad y con tu forma de vivir.
              </p>
  
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#D5C9BB] pt-8">
                <div>
                  <span className="font-serif text-3xl">01</span>
                  <p className="mt-3 text-xs tracking-[0.15em]">
                    ATENCIÓN PERSONALIZADA
                  </p>
                </div>
  
                <div>
                  <span className="font-serif text-3xl">02</span>
                  <p className="mt-3 text-xs tracking-[0.15em]">
                    CUIDADO EN CADA DETALLE
                  </p>
                </div>
              </div>
  
              <a
                href="#contacto"
                className="mt-10 inline-flex items-center gap-4 border-b border-[#20201E] pb-2 text-xs tracking-[0.2em] transition hover:text-[#8C7865]"
              >
                VEN A CONOCERNOS
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }