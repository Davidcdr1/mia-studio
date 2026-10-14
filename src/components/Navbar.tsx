import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'El salón', href: '#salon' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F4EF]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-serif text-3xl tracking-[0.16em]">
            MÍA
          </span>
          <span className="mt-1 text-[9px] tracking-[0.38em]">
            HAIR ATELIER
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#55534F] transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#reservar"
          className="btn-primary"
        >
          RESERVAR CITA
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col border-t border-black/5 bg-[#F7F4EF] px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/5 py-4 text-sm"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reservar"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#20201E] px-6 py-4 text-center text-xs tracking-widest text-white"
          >
            RESERVAR CITA
          </a>
        </div>
      )}
    </header>
  )
}