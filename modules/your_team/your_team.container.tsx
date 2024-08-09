import LayoutComponent from "@/layouts/layout";
import useYourTeamContainer from "./your_team.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import PokemonInTeam from "@/components/pokemon_in_team.component";
import PrimaryButton from "@/components/primary_button.component";

export default function YourTeamContainer() {

  const {
    pokemonTeamSelected,
    loading,
    addMoveInPokemon,
    deleteMoveInPokemon
  } = useYourTeamContainer();

  return (
    <LayoutComponent>{loading
      ?
      <LoaderPokeballComponent />
      :
      <section className='flex flex-row flex-wrap items-start gap-y-10 justify-around p-10'>
        {pokemonTeamSelected.length > 0 ?
          pokemonTeamSelected?.map((pokemon) => {
            return (
              <PokemonInTeam key={pokemon.id} pokemon={pokemon} addMoveInPokemon={addMoveInPokemon} deleteMoveInPokemon={deleteMoveInPokemon} />
            )
          })
          :
          <div className='flex flex-col items-start w-full'>
            <span className='w-full text-2xl font-semibold'>No pokemon selected for your team.</span>
            <span className='w-full text-2xl font-semibold'>Go to &quot;Pokemon List&quot; and select your dreamed pokemon team.</span>
            <PrimaryButton text='Go to Pokemon List' />
          </div>
        }
      </section>
    }
    </LayoutComponent>
  )
}