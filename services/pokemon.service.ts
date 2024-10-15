import { PokemonAbilityInfoType, PokemonBasicInfoType, PokemonFullDataType, PokemonMovementInfoType, PokemonSpecieInfoType, PokemonTypeInfoType } from "@/types/pokemon.types";

export const getPokemonList =  async (): Promise<PokemonBasicInfoType[]> => {
  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
  .then(response => response.json())
  .then(data => {
    return data.results
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon list!', error);
  })
}

export const getPokemonDataByUrl = async (url: string): Promise<PokemonFullDataType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getPokemonDataById = async (id: string): Promise<PokemonFullDataType> => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getPokemonSpecieByUrl = async (url: string): Promise<PokemonSpecieInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getTypeDataByUrl = async (url: string): Promise<PokemonTypeInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getAbilityDataByUrl = async (url: string): Promise<PokemonAbilityInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getMovementDataByUrl = async (url: string): Promise<PokemonMovementInfoType> => {
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}

export const getAllTypesData = async (): Promise<{name: string}[]> => {
  return fetch('https://pokeapi.co/api/v2/type//?limit=18&offset=0')
  .then(response => response.json())
  .then(data => {
    return data.results
  })
  .catch(error => {
    throw new Error('Error to obtain pokemon data!', error);
  })
}