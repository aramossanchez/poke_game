import { getPokemonDataByUrl, getPokemonList } from "@/services/pokemon.service";
import { PokemonFullDataType } from "@/types/pokemon.types";
import { useEffect, useState } from "react"

export default function usePokemonListComponent () {

  const [pokemonList, setPokemonList] = useState<PokemonFullDataType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListOfPokemon();
  }, []);

  const getListOfPokemon = async () => {
    const arrayOfPokemonFullData = [];
    try {
      const arrayOfPokemonBasicInfo = await getPokemonList();
      for (const pokemon of arrayOfPokemonBasicInfo) {
        const pokemonData = await getPokemonDataByUrl(pokemon.url);
        arrayOfPokemonFullData.push(pokemonData);        
      }
      setPokemonList(arrayOfPokemonFullData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const orderPokemonList = (pokemonList: []) => {

  }

  return {
    pokemonList,
    loading
  }
}