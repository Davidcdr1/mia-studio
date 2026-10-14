import { useState } from 'react'

const categories = ['Todos', 'Color', 'Cortes', 'Peinados']

const images = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85',
    alt: 'Inspiración de color y estilo para el cabello',
    category: 'Color',
    title: 'Luz natural',
  },
  {
    src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=85',
    alt: 'Corte de cabello con acabado elegante',
    category: 'Cortes',
    title: 'Corte con personalidad',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85',
    alt: 'Detalle de un peinado de peluquería',
    category: 'Peinados',
    title: 'Elegancia atemporal',
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85',
    alt: 'Inspiración para un nuevo look',
    category: 'Cortes',
    title: 'Belleza natural',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85',
    alt: 'Inspiración de belleza y cabello',
    category: 'Color',
    title: 'Tu mejor versión',
  },
  {
    src: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85',
    alt: 'Inspiración para un estilo sofisticado',
    category: 'Peinados',
    title: 'Un estilo único',
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedImage, setSelectedImage] = useState<
    (typeof images)[number] | null
  >(null)

  const filteredImages =
    activeCategory === 'Todos'
      ? images
      : images.filter((image) => image.category === activeCategory)

  return (
    <section id="galeria" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-[#8C7865]">
            NUESTRA INSPIRACIÓN
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-6xl">
            El arte de sentirte tú.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#77736D]">
            Cada detalle cuenta. Explora diferentes estilos, descubre nuevas
            ideas y encuentra la inspiración para tu próximo look.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border px-6 py-3 text-xs tracking-widest transition-colors duration-300 ${
                activeCategory === category
                  ? 'border-[#20201E] bg-[#20201E] !text-white'
                  : 'border-[#D8C8B5] bg-transparent !text-[#20201E] hover:border-[#8C7865] hover:bg-[#E8DFD4]'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group relative block aspect-[4/5] overflow-hidden bg-[#E8DFD4] text-left"
              aria-label={`Ampliar imagen: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-white/75">
                    {item.category.toUpperCase()}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {item.title}
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-xl transition group-hover:bg-white group-hover:text-[#20201E]">
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-2xl">
            ¿Preparada para tu próximo cambio?
          </p>

          <a
            href="#reservar"
            className="btn-primary"
          >
            ENCUENTRA TU ESTILO
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Cerrar imagen"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-4xl text-white"
          >
            ×
          </button>

          <div
            className="max-h-[90vh] max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src.replace('w=900', 'w=1600')}
              alt={selectedImage.alt}
              className="max-h-[78vh] w-auto object-contain"
            />

            <p className="mt-4 text-center font-serif text-2xl text-white">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}