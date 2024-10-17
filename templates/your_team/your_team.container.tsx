import LayoutComponent from "@/layouts/layout";
import useYourTeamContainer from "./your_team.hook";
import LoaderPokeballComponent from "@/atoms/loader/loader.atom";
import ModalSelectPokemonMoves from "@/molecules/modal_select_pokemon_moves/modal_select_pokemon_moves.molecule";
import { createPortal } from "react-dom";
import { PokemonMemberType } from "@/types/pokemon.types";
import PokemonInYourTeam from "@/molecules/pokemon_in_your_team/pokemon_in_your_team.molecule";
import PrimaryButton from "@/atoms/primary_button.atom";
import { IconDeviceFloppy, IconPencil } from "@tabler/icons-react";

export default function YourTeamContainer() {

  const {
    pokemonTeamSelected,
    pokemonSelectedToModal,
    setPokemonSelectedToModal,
    loading,
    addMoveInPokemon,
    deleteMoveInPokemon,
    editingYourTeam,
    setEditingYourTeam,
    changePokemonOrderInTeam,
  } = useYourTeamContainer();

  return (
    <LayoutComponent>{loading
      ?
      <LoaderPokeballComponent />
      :
      <section className="flex flex-col p-10 gap-y-10">
        <div className="space-y-4">
          <h2>Your team</h2>
          <div>
            <PrimaryButton text={editingYourTeam ? "Save changes" : "Edit team"} icon={editingYourTeam ? <IconDeviceFloppy /> : <IconPencil />} onClick={() => setEditingYourTeam(!editingYourTeam)} />
          </div>
        </div>
        <div className="flex items-start gap-4 flex-wrap">
          {pokemonTeamSelected?.map((pokemon, index) => {
            return (
              <PokemonInYourTeam
                key={`${pokemon.name}-pokemon-in-your-team`}
                pokemonTeamSelected={pokemon}
                onClick={setPokemonSelectedToModal}
                editingYourTeam={editingYourTeam}
                index={index}
                changePokemonOrderInTeam={changePokemonOrderInTeam}
                teamSize={pokemonTeamSelected.length}
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