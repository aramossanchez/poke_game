import LayoutComponent from "@/layouts/layout";
import useYourTeamContainer from "./your_team.hook";
import LoaderPokeballComponent from "@/atoms/loader/loader.atom";
import ModalSelectPokemonMoves from "@/molecules/modal_select_pokemon_moves/modal_select_pokemon_moves.molecule";
import { createPortal } from "react-dom";
import { PokemonMemberType } from "@/types/pokemon.types";
import PokemonInYourTeam from "@/molecules/pokemon_in_your_team/pokemon_in_your_team.molecule";
import PrimaryButton from "@/atoms/primary_button.atom";
import { IconDeviceFloppy, IconPencil, IconPencilOff, IconPokeball, IconSwords, IconVs } from "@tabler/icons-react";
import useLocalStorage from "@/hooks/useLocalStorage.hook";
import SpecialButton from "@/atoms/special_button.atom";

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
    deletePokemonOrderTeam,
    saveYourTeamChanges,
  } = useYourTeamContainer();

  const { getDataFromLocalStorage, setDataFromLocalStorage } = useLocalStorage();

  return (
    <LayoutComponent>{loading
      ?
      <LoaderPokeballComponent />
      :
      <section className="flex flex-col p-10 gap-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <h2>Your team</h2>
            <SpecialButton
              icon={<IconSwords size={40} />}
              text="Battle!"
              onClick={() => { setDataFromLocalStorage("pokemon_for_combat", pokemonTeamSelected) }}
            />
          </div>
          <div className="flex gap-x-4">
            <PrimaryButton
              text={editingYourTeam ? "Stop editing" : "Edit team"}
              icon={editingYourTeam ? <IconPencilOff /> : <IconPencil />}
              onClick={() => setEditingYourTeam(!editingYourTeam)}
            />
            {!editingYourTeam &&
              <PrimaryButton
                text="Save changes"
                icon={<IconDeviceFloppy />}
                onClick={() => saveYourTeamChanges()}
              />
            }
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
                deletePokemonInTeam={() => deletePokemonOrderTeam(index)}
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