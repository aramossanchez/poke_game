import { getPokemonDataById, getPokemonSpecieByUrl } from "@/services/pokemon.service"
import { PokemonFullDataType, PokemonSpecieInfoType } from "@/types/pokemon.types";
import { useEffect, useState } from "react";

export default function usePokemonDetailComponent(pokemon_id: string) {

  const [pokemonData, setPokemonData] = useState<PokemonFullDataType | null>(null);
  const [specieData, setSpecieData] = useState<PokemonSpecieInfoType |null>(null);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonData(pokemon_id);
    // eslint-disable-next-line
  }, []);

  const getPokemonData = async (id: string) => {
    try {
      const pokemon = await getPokemonDataById(id);
      const specie = await getPokemonSpecieByUrl(pokemon.species.url);
      setPokemonData(pokemon);
      setSpecieData(specie);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }
  return {
    loading,
    pokemonData,
    specieData,
    setCounter,
    counter
  }
}