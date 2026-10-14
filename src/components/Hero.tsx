export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-[680px] items-center overflow-hidden bg-[#E8DFD4] lg:min-h-[760px]"
        >
            <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=85"
                alt="Interior elegante de un salón de peluquería"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/5" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
                <div className="max-w-2xl text-white">
                    <p className="mb-6 text-xs tracking-[0.35em] sm:text-sm">
                        MÍA STUDIO · HAIR ATELIER
                    </p>

                    <h1 className="font-serif text-5xl leading-[1.08] sm:text-6xl lg:text-8xl">
                        Tu cabello,
                        <br />
                        tu esencia.
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
                        Un estilo que habla de ti. Descubre una nueva forma de cuidar tu
                        cabello con una experiencia pensada para resaltar tu belleza
                        natural.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#reservar"
                            className="btn-light"
                        >
                            RESERVAR MI CITA
                        </a>

                        <a
                            href="#servicios"
                            className="border border-white/70 bg-transparent px-8 py-4 text-center text-xs tracking-[0.18em] text-white transition hover:border-[#D8C8B5] hover:bg-[#D8C8B5] hover:text-[#20201E]"
                        >
                            DESCUBRIR SERVICIOS
                        </a>
                    </div>

                    <div className="mt-14 flex items-center gap-4 text-xs tracking-widest text-white/80">
                        <span className="h-px w-12 bg-white/70" />
                        BELLEZA · CUIDADO · ESTILO
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 right-10 hidden text-xs tracking-[0.25em] text-white/80 lg:block">
                GIRONA · HAIR EXPERIENCE
            </div>
        </section>
    )
}