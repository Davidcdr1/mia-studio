const whatsappNumber = '34600000000'

const whatsappMessage = encodeURIComponent(
  'Hola, me gustaría pedir información sobre los servicios de MÍA Studio.'
)

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#F7F4EF] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Introducción */}
          <div>
            <p className="text-xs tracking-[0.3em] text-[#8C7865]">
              ESTAMOS AQUÍ PARA TI
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
              Hablemos de
              <br />
              tu próximo look.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#77736D]">
              ¿Tienes dudas sobre un servicio o necesitas asesoramiento?
              Estaremos encantadas de ayudarte a encontrar la mejor opción
              para tu cabello.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              CONTACTAR POR WHATSAPP
              <span className="text-lg">↗</span>
            </a>

            <p className="mt-4 text-xs text-[#8C7865]">
              Número de WhatsApp ficticio para la demostración.
            </p>
          </div>

          {/* Información */}
          <div className="border-t border-[#D8C8B5]">
            <div className="grid grid-cols-[90px_1fr] gap-5 border-b border-[#D8C8B5] py-7 sm:grid-cols-[120px_1fr]">
              <span className="text-xs tracking-[0.15em] text-[#8C7865]">
                DIRECCIÓN
              </span>

              <div>
                <p className="font-serif text-2xl">Girona, España</p>
                <p className="mt-2 text-sm leading-6 text-[#77736D]">
                  Dirección ficticia pendiente de personalización.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-5 border-b border-[#D8C8B5] py-7 sm:grid-cols-[120px_1fr]">
              <span className="text-xs tracking-[0.15em] text-[#8C7865]">
                HORARIO
              </span>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[#77736D]">Lunes – Viernes</span>
                  <span>09:30 – 19:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#77736D]">Sábados</span>
                  <span>09:30 – 14:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#77736D]">Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-5 border-b border-[#D8C8B5] py-7 sm:grid-cols-[120px_1fr]">
              <span className="text-xs tracking-[0.15em] text-[#8C7865]">
                CONTACTO
              </span>

              <div>
                <p className="text-sm">hola@miastudio.example</p>
                <p className="mt-2 text-sm text-[#77736D]">
                  Instagram · @mia.studio.demo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa ilustrativo */}
        <div className="relative mt-16 flex min-h-[280px] items-center justify-center overflow-hidden bg-[#E8DFD4] sm:min-h-[360px]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-[10%] top-0 h-full w-px rotate-[18deg] bg-[#8C7865]" />
            <div className="absolute left-[35%] top-0 h-full w-px rotate-[-12deg] bg-[#8C7865]" />
            <div className="absolute left-[65%] top-0 h-full w-px rotate-[22deg] bg-[#8C7865]" />
            <div className="absolute left-0 top-[30%] h-px w-full rotate-[-8deg] bg-[#8C7865]" />
            <div className="absolute left-0 top-[70%] h-px w-full rotate-[5deg] bg-[#8C7865]" />
          </div>

          <div className="relative z-10 bg-[#F7F4EF] px-8 py-7 text-center shadow-lg">
            <span className="text-2xl">⌖</span>

            <h3 className="mt-3 font-serif text-2xl">
              MÍA Studio
            </h3>

            <p className="mt-2 text-xs tracking-widest text-[#8C7865]">
              GIRONA · ESPAÑA
            </p>

            <p className="mt-3 text-xs text-[#77736D]">
              Ubicación ilustrativa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}