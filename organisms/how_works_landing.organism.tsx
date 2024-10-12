import FeatureInfoComponent from "@/molecules/feature_info";
import { IconAwardFilled, IconStar, IconVs } from "@tabler/icons-react";

export default function HowWorksLanding() {
  return (
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

  )
}