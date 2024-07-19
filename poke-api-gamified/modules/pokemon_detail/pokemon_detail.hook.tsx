import { getPokemonDataById, getPokemonSpecieByUrl } from "@/services/pokemon.service"
import { PokemonFullDataType, PokemonSpecieInfoType } from "@/types/pokemon.types";
import { useEffect, useState } from "react";

export default function usePokemonDetailComponent(pokemon_id: string) {

  const [pokemonData, setPokemonData] = useState<PokemonFullDataType | null>(null);
  const [specieData, setSpecieData] = useState<PokemonSpecieInfoType |null>(null);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [spriteNormalVersion, setSpriteNormalVersion] = useState<string[]>([]);
  const [counterSpriteNormalVersion, setCounterSpriteNormalVersion] = useState(1);
  const [spriteShinyVersion, setSpriteShinyVersion] = useState<string[]>([]);
  const [counterSpriteShinyVersion, setCounterSpriteShinyVersion] = useState(1);

  useEffect(() => {
    getPokemonData(pokemon_id);
    // eslint-disable-next-line
  }, []);

  const getPokemonData = async (id: string) => {
    try {
      const pokemon = await getPokemonDataById(id);
      const specie = await getPokemonSpecieByUrl(pokemon.species.url);
      setPokemonData(pokemon);
      setSpriteNormalVersion([
        pokemon?.sprites.versions['generation-ii'].crystal.front_transparent,
        pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default,
        pokemon?.sprites.other.showdown.front_default
      ])
      setSpriteShinyVersion([
        pokemon?.sprites.versions['generation-ii'].crystal.front_shiny_transparent,
        pokemon?.sprites.versions['generation-v']['black-white'].animated.front_shiny,
        pokemon?.sprites.other.showdown.front_shiny
      ])
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
    counter,
    spriteNormalVersion,
    setCounterSpriteNormalVersion,
    counterSpriteNormalVersion,
    spriteShinyVersion,
    setCounterSpriteShinyVersion,
    counterSpriteShinyVersion
  }
}