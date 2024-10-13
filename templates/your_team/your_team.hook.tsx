import { extractValidMovesFromAllMoves } from "@/services/general.service";
import { getPokemonDataById } from "@/services/pokemon.service";
import { PokemonMemberType, PokemonMovementInfoType } from "@/types/pokemon.types";
import { useEffect, useState } from "react"

export default function useYourTeamContainer() {

  const [pokemonTeamSelected, setPokemonTeamSelected] = useState<PokemonMemberType[]>([]);
  const [pokemonSelectedToModal, setPokemonSelectedToModal] = useState<PokemonMemberType | null >();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('your_team')) {
      const team = JSON.parse(localStorage.getItem('your_team') as string);
      getPoKemonTeamFullData(team);
    } else {
      setLoading(false);
    }
  }, []);

  const getPoKemonTeamFullData = async (team: PokemonMemberType[]) => {
    let newTeam = [];
    try {
      for (const pokemon of team) {
        let pokemonData = await getPokemonDataById(pokemon.id);
        const pokemonMoves = await extractValidMovesFromAllMoves(pokemonData.moves);
        const pokemonForTeam = {
          id: pokemonData.id,
          name: pokemonData.name,
          types: pokemonData.types,
          stats: pokemonData.stats,
          moves: pokemonMoves,
          selected_moves: [],
          sprites: pokemonData.sprites
        }
        newTeam.push(pokemonForTeam);
      }
      setPokemonTeamSelected(newTeam);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const addMoveInPokemon = (id: string, move: PokemonMovementInfoType) => {
    const newPokemonTeamSelected = structuredClone(pokemonTeamSelected);
    newPokemonTeamSelected.forEach(pokemon => {
      if (pokemon.id === id) {
        if (pokemon.selected_moves.length < 4) {
          pokemon.selected_moves.push(move);
        }
      }
    });
    setPokemonTeamSelected(newPokemonTeamSelected);
  }

  const deleteMoveInPokemon = (id: string, move: PokemonMovementInfoType) => {
    const newPokemonTeamSelected = structuredClone(pokemonTeamSelected);
    newPokemonTeamSelected.forEach(pokemon => {
      if (pokemon.id === id) {
        if (pokemon?.selected_moves?.length > 0) {
          pokemon.selected_moves = pokemon?.selected_moves?.filter((selected) => selected.name !== move.name);
          setPokemonTeamSelected(newPokemonTeamSelected);
        }
      }
    });
    setPokemonTeamSelected(newPokemonTeamSelected);
  }

  return {
    pokemonTeamSelected,
    pokemonSelectedToModal,
    setPokemonSelectedToModal,
    loading,
    addMoveInPokemon,
    deleteMoveInPokemon
  }
}