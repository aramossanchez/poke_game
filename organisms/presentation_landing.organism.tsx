import PrimaryButton from "@/atoms/primary_button.atom";
import SecondaryButton from "@/atoms/secondary_button.atom";
import { IconArrowRight, IconPokeball } from "@tabler/icons-react";
import Image from "next/image";

export default function PresentationLanding() {
  return (
    <section className="flex w-full flex-col justify-center px-4 pb-32 pt-20 bg-primaryBackground gap-y-10">
      <div className="w-full flex justify-center">
        <Image
          src={'/images/logo.png'}
          alt="Logo para la landing page"
          width={500}
          height={200}
        />
      </div>
      <div className="flex w-full justify-center">
        <article className="lg:basis-3/5 flex flex-col justify-center items-center gap-y-6">
          <h2 className="text-center">¡Conviértete en el mejor entrenador!</h2>
          <h5 className="text-center">Conoce todos los datos de cada Pokémon, selecciona tu equipo, entréntate a los rivales más duros y lleva tus habilidades como entrenador Pokémon al siguiente nivel.</h5>
          <div className="flex justify-center gap-6 md:flex-row flex-col">
            <PrimaryButton
              text="Monta tu equipo"
              icon={<IconPokeball />}
            />
            <SecondaryButton
              text="Explora la Pokédex"
              icon={<IconArrowRight />}
            />
          </div>
        </article>
      </div>
    </section>

  )
}