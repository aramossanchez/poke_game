import { PokemonBasicInfoType, PokemonFullDataType } from "@/types/pokemon.types";

export const getPokemonList = (): Promise<PokemonBasicInfoType[]> => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
  .then(response => response.json())
  .then(data => {
    return data.results
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon list!', error);
  })
}

export const getPokemonDataByUrl = (url: string): Promise<PokemonFullDataType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}