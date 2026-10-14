const services = [
    {
      number: '01',
      name: 'Corte & peinado',
      description: 'Un corte personalizado y un acabado que refleja tu estilo.',
      price: '35 €',
      duration: '45 min',
    },
    {
      number: '02',
      name: 'Lavado & peinado',
      description: 'Limpieza, cuidado y un peinado impecable para cualquier ocasión.',
      price: '22 €',
      duration: '30 min',
    },
    {
      number: '03',
      name: 'Coloración completa',
      description: 'Un color luminoso y personalizado para realzar tu cabello.',
      price: '55 €',
      duration: '90 min',
    },
    {
      number: '04',
      name: 'Balayage',
      description: 'Reflejos naturales y multidimensionales con un acabado sofisticado.',
      price: 'Desde 90 €',
      duration: '150 min',
    },
    {
      number: '05',
      name: 'Mechas',
      description: 'Luz y dimensión para conseguir un resultado lleno de movimiento.',
      price: 'Desde 75 €',
      duration: '120 min',
    },
    {
      number: '06',
      name: 'Tratamiento capilar',
      description: 'Un cuidado intensivo adaptado a las necesidades de tu cabello.',
      price: 'Desde 30 €',
      duration: '45 min',
    },
    {
      number: '07',
      name: 'Corte masculino',
      description: 'Precisión, estilo y un acabado cuidado hasta el último detalle.',
      price: '20 €',
      duration: '30 min',
    },
    {
      number: '08',
      name: 'Peinado para eventos',
      description: 'Un look especial para bodas, celebraciones y momentos únicos.',
      price: 'Desde 45 €',
      duration: '60 min',
    },
  ]
  
  export default function Services() {
    return (
      <section id="servicios" className="bg-[#F7F4EF] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#8C7865]">
                NUESTROS SERVICIOS
              </p>
  
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                Belleza en cada
                <br />
                detalle.
              </h2>
            </div>
  
            <p className="max-w-lg leading-7 text-[#77736D] md:justify-self-end">
              Cada cabello es diferente. Por eso, trabajamos contigo para
              encontrar el tratamiento, el color y el estilo que mejor encajen
              contigo.
            </p>
          </div>
  
          <div className="grid gap-x-12 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-t border-[#D8C8B5] py-7"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-2 text-xs tracking-widest text-[#A69A8B]">
                    {service.number}
                  </span>
  
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-serif text-2xl transition group-hover:text-[#8C7865] sm:text-3xl">
                        {service.name}
                      </h3>
  
                      <span className="whitespace-nowrap text-sm">
                        {service.price}
                      </span>
                    </div>
  
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#77736D]">
                      {service.description}
                    </p>
  
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs tracking-wider text-[#8C7865]">
                        {service.duration}
                      </span>
  
                      <a
                        href="#reservar"
                        className="btn-primary"
                      >
                        RESERVAR ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
  
          <div className="mt-12 border border-[#D8C8B5] p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="font-serif text-2xl">¿Buscas algo diferente?</h3>
              <p className="mt-2 text-sm leading-6 text-[#77736D]">
                Cuéntanos qué tienes en mente y encontraremos la mejor opción.
              </p>
            </div>
  
            <a
              href="#contacto"
              className="btn-primary"
            >
              CONTACTAR CON EL SALÓN
            </a>
          </div>
  
          <p className="mt-5 text-xs leading-5 text-[#8C7865]">
            Precios orientativos de esta web de demostración. Los importes
            definitivos dependerán de los servicios y necesidades de cada cliente.
          </p>
        </div>
      </section>
    )
  }