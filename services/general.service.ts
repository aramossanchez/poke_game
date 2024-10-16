import { PokemonMemberType, PokemonMovementInfoType } from "@/types/pokemon.types";
import { getMovementDataByUrl } from "./pokemon.service";

export const extractValidMovesFromAllMoves = async (moves: {
  move: {
    name: string,
    url: string
  },
  version_group_details: {
    level_learned_at: number
  }[]
}[]): Promise<PokemonMovementInfoType[]> => {
  const arrayWithMovements = [];
  for (const move of moves) {
    if (move.version_group_details[0].level_learned_at > 0) {
      try {
        const moveToPush = await getMovementDataByUrl(move.move.url);
        moveToPush.level_learned_at = move.version_group_details[0].level_learned_at;
        arrayWithMovements.push(moveToPush);
      } catch (error) {
        console.error("url not works in pokemon api ->", move.move.url);
      }
    }
  }
  const arrayOrdered = arrayWithMovements.sort((a, b) => (a?.level_learned_at || 0) - (b?.level_learned_at || 0));
  return arrayOrdered;
}

export const addPokemonToTeam = (id: string) => {

  if (!localStorage.getItem("your_team")) {
    const newTeam = [{ id: id }];
    localStorage.setItem("your_team", JSON.stringify(newTeam));
    return;
  }

  const yourTeam = JSON.parse(localStorage.getItem("your_team") as string);
  if (yourTeam.length < 6 && !yourTeam.find((pokemon: PokemonMemberType) => pokemon.id === id)) {
    yourTeam.push({ id: id });
  }

  localStorage.setItem("your_team", JSON.stringify(yourTeam));
}

export const deletePokemonToTeam = (id: string) => {

  if (localStorage.getItem("your_team")) {
    let yourTeam = JSON.parse(localStorage.getItem("your_team") as string);
    if (yourTeam.length < 6 && yourTeam.find((pokemon: PokemonMemberType) => pokemon.id === id)) {
      yourTeam = yourTeam.filter((pokemon: PokemonMemberType) => pokemon.id !== id);
    }
  
    localStorage.setItem("your_team", JSON.stringify(yourTeam));

  }
}

export const pokemonExistInTeam = (id: string) => {

  if (!localStorage.getItem("your_team")) {
    return false;
  }

  const yourTeam = JSON.parse(localStorage.getItem("your_team") as string);


  if (yourTeam.find((pokemon: PokemonMemberType) => pokemon.id === id)) {
    return true;
  } else {
    return false;
  }
}