import { PokemonAbilityInfoType, PokemonBasicInfoType, PokemonFullDataType, PokemonMovementInfoType, PokemonSpecieInfoType, PokemonTypeInfoType } from "@/types/pokemon.types";

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

export const getPokemonDataById = (id: string): Promise<PokemonFullDataType> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getPokemonSpecieByUrl = (url: string): Promise<PokemonSpecieInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getTypeDataByUrl = (url: string): Promise<PokemonTypeInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getAbilityDataByUrl = (url: string): Promise<PokemonAbilityInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getMovementDataByUrl = (url: string): Promise<PokemonMovementInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}