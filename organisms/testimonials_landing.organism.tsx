import TestimonialsComponent from "@/molecules/testimonials.molecules";

export default function TestimonialLanding() {
  return (
    <section className="bg-secondaryBackground px-4 py-32 flex flex-col w-full justify-center gap-y-20">
      <h2 className="text-center w-full">Testimonios de entrenadores</h2>
      <div className="w-full flex justify-center">
        <article className="sm:basis-4/5 grid lg:grid-cols-2 grid-cols-1 gap-20 gap-y-20">
          <TestimonialsComponent
            message="¡Esta plataforma ha sido clave para convertirme en campeón de la liga Pokémon!"
            author="Ash K."
            profile="ash.webp"
          />
          <TestimonialsComponent
            message="La IA proporciona desafíos únicos en cada batalla. ¡No sabes a qué te vas a enfrentar!"
            author="Misty W."
            profile="misty.jpg"
          />
          <TestimonialsComponent
            message="La Pokédex es increíblemente detallada y útil. En cada consulta descubro cosas nuevas."
            author="Brock T."
            profile="brook.jpg"
          />
          <TestimonialsComponent
            message="¡Me encanta el diseño móvil, no puedo parar de mirar detalles de los Pokémon!"
            author="Giovanni TR."
            profile="giovanni.jpg"
          />
        </article>
      </div>
    </section>

  )
}