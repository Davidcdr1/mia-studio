const footerLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'El salón', href: '#salon' },
    { label: 'Contacto', href: '#contacto' },
  ]
  
  export default function Footer() {
    return (
      <footer className="bg-[#20201E] px-6 text-[#F7F4EF]">
        <div className="mx-auto max-w-7xl py-16 sm:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Marca */}
            <div>
              <a href="#inicio" className="inline-flex flex-col leading-none">
                <span className="font-serif text-4xl tracking-[0.16em]">
                  MÍA
                </span>
  
                <span className="mt-2 text-[9px] tracking-[0.38em]">
                  HAIR ATELIER
                </span>
              </a>
  
              <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
                Un espacio dedicado a la belleza natural, el cuidado del cabello
                y la búsqueda de tu propio estilo.
              </p>
            </div>
  
            {/* Navegación */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-[#D8C8B5]">
                EXPLORA
              </h3>
  
              <ul className="mt-6 space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contacto */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-[#D8C8B5]">
                CONTACTO
              </h3>
  
              <div className="mt-6 space-y-4 text-sm text-white/65">
                <p>Girona, España</p>
                <p>hola@miastudio.example</p>
                <p>Lun – Vie · 09:30 – 19:00</p>
                <p>Sáb · 09:30 – 14:00</p>
              </div>
            </div>
  
            {/* Redes y reservas */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-[#D8C8B5]">
                SÍGUENOS
              </h3>
  
              <p className="mt-6 text-sm leading-7 text-white/55">
                Inspírate, descubre nuevos estilos y encuentra tu próximo look.
              </p>
  
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block border-b border-white/30 pb-2 text-sm transition hover:border-white"
              >
                Instagram ↗
              </a>
  
              <div>
                <a
                  href="#reservar"
                  className="mt-8 inline-block bg-[#D8C8B5] px-6 py-4 text-xs tracking-[0.15em] text-[#20201E] transition hover:bg-white"
                >
                  RESERVAR CITA
                </a>
              </div>
            </div>
          </div>
  
          {/* Separador */}
          <div className="my-12 h-px bg-white/15" />
  
          {/* Aviso de demostración */}
          <div className="mb-8 border border-white/15 p-4">
            <p className="text-xs leading-6 text-white/60">
              Web de demostración creada por NexoSites. MÍA Studio es una marca
              ficticia y los datos mostrados son ilustrativos.
            </p>
          </div>
  
          {/* Pie legal */}
          <div className="flex flex-col gap-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} MÍA Studio. Diseño de demostración.
            </p>
  
            <div className="flex flex-wrap gap-5">
              <a
                href="#aviso-legal"
                className="transition hover:text-white"
              >
                Aviso legal
              </a>
  
              <a
                href="#privacidad"
                className="transition hover:text-white"
              >
                Privacidad
              </a>
  
              <a
                href="#cookies"
                className="transition hover:text-white"
              >
                Cookies
              </a>
            </div>
  
            <a
              href="https://nexosites.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Creado por NexoSites ↗
            </a>
          </div>
        </div>
      </footer>
    )
  }