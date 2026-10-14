const reviews = [
    {
      name: 'Claudia R.',
      service: 'Corte y peinado',
      text: 'Una experiencia maravillosa. Me escucharon, entendieron lo que buscaba y el resultado superó mis expectativas.',
      number: '01',
    },
    {
      name: 'Elena M.',
      service: 'Coloración y balayage',
      text: 'El ambiente es precioso y el cuidado por los detalles se nota desde el primer momento. El color quedó precioso.',
      number: '02',
    },
    {
      name: 'Andrea S.',
      service: 'Tratamiento capilar',
      text: 'Me encantó el trato personalizado. Me asesoraron para cuidar mejor mi cabello y salí sintiéndome renovada.',
      number: '03',
    },
  ]
  
  export default function Reviews() {
    return (
      <section className="bg-[#20201E] px-6 py-24 text-[#F7F4EF] sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-[#D8C8B5]">
              PALABRAS QUE INSPIRAN
            </p>
  
            <h2 className="mt-5 font-serif text-4xl sm:text-6xl">
              La belleza de sentirse bien.
            </h2>
  
            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
              Cada visita es una oportunidad para dedicarte tiempo,
              descubrir tu estilo y disfrutar de un momento para ti.
            </p>
  
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="text-2xl tracking-widest text-[#D8C8B5]">
                ★★★★★
              </span>
              <span className="text-xs tracking-widest text-white/60">
                UNA EXPERIENCIA PERSONALIZADA
              </span>
            </div>
          </div>
  
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.number}
                className="flex flex-col border border-white/15 p-7 transition duration-300 hover:border-[#D8C8B5]/60 sm:p-9"
              >
                <span className="font-serif text-5xl text-[#D8C8B5]">
                  “
                </span>
  
                <p className="mt-3 flex-1 text-base leading-8 text-white/80">
                  {review.text}
                </p>
  
                <div className="mt-8 border-t border-white/15 pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl">
                      {review.name}
                    </h3>
  
                    <span className="text-xs tracking-widest text-[#D8C8B5]">
                      ★★★★★
                    </span>
                  </div>
  
                  <p className="mt-2 text-xs tracking-wider text-white/50">
                    {review.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
  
          <p className="mt-8 text-center text-xs leading-6 text-white/50">
            Testimonios ficticios creados para esta demostración. No representan
            opiniones reales de clientes.
          </p>
        </div>
      </section>
    )
  }