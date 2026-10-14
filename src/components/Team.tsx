const team = [
    {
      name: 'Laura Martínez',
      role: 'Directora creativa',
      specialty: 'Corte · Estilismo · Asesoría de imagen',
      image:
        'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85',
      number: '01',
    },
    {
      name: 'Marta Soler',
      role: 'Especialista en color',
      specialty: 'Balayage · Coloración · Mechas',
      image:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=85',
      number: '02',
    },
    {
      name: 'Sofía Romero',
      role: 'Estilista profesional',
      specialty: 'Peinados · Tratamientos · Eventos',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
      number: '03',
    },
  ]
  
  export default function Team() {
    return (
      <section className="bg-[#F7F4EF] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#8C7865]">
                LAS PERSONAS DETRÁS DE MÍA
              </p>
  
              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
                Talento, pasión
                <br />y sensibilidad.
              </h2>
            </div>
  
            <p className="max-w-lg leading-7 text-[#77736D] md:justify-self-end">
              Cada persona aporta una mirada única. Nuestro objetivo es
              escucharte, entender tu estilo y ayudarte a encontrar el look
              con el que te sientas tú misma.
            </p>
          </div>
  
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.number} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DFD4]">
                  <img
                    src={member.image}
                    alt={`Retrato ilustrativo de ${member.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
  
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F4EF] font-serif text-sm">
                    {member.number}
                  </span>
                </div>
  
                <div className="border-b border-[#D8C8B5] py-6">
                  <p className="text-xs tracking-[0.2em] text-[#8C7865]">
                    {member.role.toUpperCase()}
                  </p>
  
                  <h3 className="mt-3 font-serif text-3xl">
                    {member.name}
                  </h3>
  
                  <p className="mt-3 text-sm leading-6 text-[#77736D]">
                    {member.specialty}
                  </p>
                </div>
              </article>
            ))}
          </div>
  
          <div className="mt-16 bg-[#E8DFD4] px-6 py-10 text-center sm:px-12 sm:py-14">
            <p className="text-xs tracking-[0.3em] text-[#8C7865]">
              TU EXPERIENCIA EMPIEZA AQUÍ
            </p>
  
            <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
              Estamos deseando conocerte.
            </h3>
  
            <a
              href="#reservar"
              className="btn-primary"
            >
              RESERVAR UNA CITA
            </a>
          </div>
  
          <p className="mt-5 text-xs leading-5 text-[#8C7865]">
            Equipo y perfiles ficticios creados exclusivamente para esta
            demostración. Las fotografías son ilustrativas.
          </p>
        </div>
      </section>
    )
  }