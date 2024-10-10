import FeatureInfoComponent from "@/components/feature_info";
import PrimaryButton from "@/components/primary_button.component";
import SecondaryButton from "@/components/secondary_button.component";
import StatisticsComponent from "@/components/statistics_component";
import TestimonialsComponent from "@/components/testimonials_component";
import LayoutComponent from "@/layouts/layout";
import { IconArrowRight, IconAwardFilled, IconBolt, IconDeviceGamepad2, IconFlag, IconIcons, IconList, IconPokeball, IconStar, IconVs } from "@tabler/icons-react";
import Image from "next/image";

export default function LandingContainer() {
  return (
    <LayoutComponent>
      <section className="flex w-full flex-col justify-center px-4 pb-32 pt-20 bg-primaryBackground gap-y-10">
        <div className="w-full flex justify-center">
          <Image
            src={'/images/logo.png'}
            alt="Logo para la landing page"
            width={500}
            height={200}
          />
        </div>
        <article className="lg:basis-3/5 flex flex-col justify-center items-center gap-y-6">
          <h2 className="text-center">¡Domina las batallas Pokémon!</h2>
          <h5 className="text-center">Conoce todos los datos de cada Pokémon, selecciona tu equipo, entréntate a los rivales más duros y conviértete en el mejor entrenador.</h5>
          <div className="flex justify-center gap-6 md:flex-row flex-col">
            <PrimaryButton text="Montar tu equipo" icon={<IconPokeball />} />
            <SecondaryButton text="Explorar Pokédex" icon={<IconArrowRight />} />
          </div>
        </article>
      </section>
      <section className="bg-secondaryBackground px-4 py-32 flex w-full justify-center">
        <article className="lg:basis-3/5 grid md:grid-cols-2 grid-cols-1 gap-2 gap-y-20 items-start">
          <FeatureInfoComponent
            icon={<IconBolt size={40} />}
            title="Batallas dinámicas"
            subtitle="Enfréntate a equipos de Pokémon controlados por un complejo algoritmo y mejora tus habilidades."
            hoverEffect
          />
          <FeatureInfoComponent
            icon={<IconList size={40} />}
            title="Información completa"
            subtitle="Accede a información detallada de todos los Pokémon, extraída de la base de datos oficial."
            hoverEffect
          />
          <FeatureInfoComponent
            icon={<IconIcons size={40} />}
            title="Para todos los dispositivos"
            subtitle="Diseñado para exprimir al máximo cada tamaño de pantalla y disfrutar de la mejor experiencia desde cualquier dispositivo."
            hoverEffect
          />
          <FeatureInfoComponent
            icon={<IconFlag size={40} />}
            title="Varios idiomas"
            subtitle="Escoge tu idioma favorito y no te pierdas nada de información."
            hoverEffect
          />
        </article>
      </section>
      <section className="bg-primaryBackground px-4 py-32 flex flex-col w-full justify-center gap-y-20">
        <h2 className="text-center w-full">Cómo funciona</h2>
        <div className="w-full flex justify-center">
          <article className="xl:basis-4/5 grid lg:grid-cols-3 grid-cols-1 gap-2 gap-y-20 items-start">
            <FeatureInfoComponent
              icon={<IconStar size={40} />}
              title="1. Elige tu equipo"
              subtitle="Investiga y elige a los Pokémon perfectos para tu equipo."
            />
            <FeatureInfoComponent
              icon={<IconVs size={40} />}
              title="2. Enfréntate al algoritmo"
              subtitle="Pon a prueba tus habilidades contra equipos cada vez más desafiantes."
            />
            <FeatureInfoComponent
              icon={<IconAwardFilled size={40} />}
              title="3. Prueba, aprende y consigue la victoria"
              subtitle="Analiza tus batallas, mejora tu estrategia y conviértete en un Maestro Pokémon."
            />
          </article>
        </div>
      </section>
      <section className="bg-secondaryBackground px-4 py-32 flex flex-col w-full justify-center gap-y-20">
        <h2 className="text-center w-full">Testimonios de entrenadores</h2>
        <div className="w-full flex justify-center">
          <article className="sm:basis-4/5 grid lg:grid-cols-2 grid-cols-1 gap-20 gap-y-20">
            <TestimonialsComponent
              message="¡Esta plataforma ha llevado mis habilidades al siguiente nivel!"
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
      <section className="bg-primaryBackground px-4 py-32 flex flex-col w-full justify-center gap-y-20">
        <h2 className="text-center w-full">Estadísticas en tiempo real</h2>
        <div className="w-full flex justify-center">
          <article className="sm:basis-4/5 grid lg:grid-cols-3 grid-cols-1 gap-6 gap-y-20 items-start">
            <StatisticsComponent number="1500+" subtitle="Entrenadores activos" />
            <StatisticsComponent number="25000+" subtitle="Batallas realizadas" />
            <StatisticsComponent number="150" subtitle="Pokémon disponibles" />
          </article>
        </div>
      </section>
      <section className="flex w-full justify-center px-4 py-32 bg-secondaryBackground">
        <article className="lg:basis-3/5 flex flex-col justify-center items-center gap-y-6">
          <h2 className="text-center">¿Listo para convertirte en un Maestro Pokémon?</h2>
          <h5 className="text-center">Únete a miles de entrenadores y comienza tu viaje hacia la cima.</h5>
          <PrimaryButton text="Jugar" icon={<IconDeviceGamepad2 />} />
        </article>
      </section>
    </LayoutComponent>
  )
}