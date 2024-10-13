import LayoutComponent from "@/layouts/layout";
import useYourTeamContainer from "./your_team.hook";
import LoaderPokeballComponent from "@/atoms/loader/loader.atom";
import ModalSelectPokemonMoves from "@/molecules/modal_select_pokemon_moves/modal_select_pokemon_moves.molecule";
import { createPortal } from "react-dom";
import { PokemonMemberType } from "@/types/pokemon.types";
import { useEffect } from "react";
import PokemonInYourTeam from "@/molecules/pokemon_in_your_team/pokemon_in_your_team.molecule";

export default function YourTeamContainer() {

  const {
    pokemonTeamSelected,
    pokemonSelectedToModal,
    setPokemonSelectedToModal,
    loading,
    addMoveInPokemon,
    deleteMoveInPokemon
  } = useYourTeamContainer();

  useEffect(() => {
    if (pokemonSelectedToModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pokemonSelectedToModal]);

  return (
    <LayoutComponent>{loading
      ?
      <LoaderPokeballComponent />
      :
      <section className="flex flex-col p-10 gap-y-10">
        <h2>Your team</h2>
        <div className="flex items-center gap-4 flex-wrap">
          {pokemonTeamSelected?.map((pokemon) => {
            return (
              <PokemonInYourTeam
                key={`${pokemon.name}-pokemon-in-your-team`}
                pokemonTeamSelected={pokemon}
                onClick={setPokemonSelectedToModal}
              />
            )
          })}
        </div>
        {pokemonSelectedToModal && createPortal(
          <ModalSelectPokemonMoves
            key={pokemonSelectedToModal.id}
            pokemon={pokemonTeamSelected.find((pokemon) => pokemon.id === pokemonSelectedToModal.id) as PokemonMemberType}
            addMoveInPokemon={addMoveInPokemon}
            deleteMoveInPokemon={deleteMoveInPokemon}
            closeModal={() => setPokemonSelectedToModal(null)}
          />,
          document.body
        )}
      </section>
    }
    </LayoutComponent>
  )
}