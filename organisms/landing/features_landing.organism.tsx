import FeatureInfoComponent from "@/molecules/feature_info";
import { IconBolt, IconFlag, IconIcons, IconList } from "@tabler/icons-react";

export default function FeaturesLanding() {
  return (
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

  )
}