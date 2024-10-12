import PrimaryButton from "@/atoms/primary_button.atom";
import { IconDeviceGamepad2 } from "@tabler/icons-react";

export default function BaitLanding() {
  return (
    <section className="flex w-full justify-center px-4 py-32 bg-secondaryBackground">
      <article className="lg:basis-3/5 flex flex-col justify-center items-center gap-y-6">
        <h2 className="text-center">¿Listo para convertirte en un Maestro Pokémon?</h2>
        <h5 className="text-center">Únete a miles de entrenadores y comienza tu viaje hacia la cima.</h5>
        <PrimaryButton text="Jugar" icon={<IconDeviceGamepad2 />} />
      </article>
    </section>

  )
}