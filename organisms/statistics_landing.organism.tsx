import StatisticsComponent from "@/molecules/statistics_component";

export default function StatisticsLanding() {
  return (
    <section className="bg-primaryBackground px-4 py-32 flex flex-col w-full justify-center gap-y-20">
      <h2 className="text-center w-full">Estadísticas en tiempo real</h2>
      <div className="w-full flex justify-center">
        <article className="sm:basis-4/5 grid lg:grid-cols-3 grid-cols-1 gap-6 gap-y-20 items-start">
          <StatisticsComponent number="1500+" subtitle="Entrenadores activos" />
          <StatisticsComponent number="25000+" subtitle="Batallas realizadas" />
          <StatisticsComponent number="151" subtitle="Pokémon disponibles" />
        </article>
      </div>
    </section>

  )
}