import { getAbilityDataByUrl, getMovementDataByUrl, getPokemonDataById, getPokemonSpecieByUrl, getTypeDataByUrl } from "@/services/pokemon.service"
import { PokemonAbilityInfoType, PokemonFullDataType, PokemonMovementInfoType, PokemonSpecieInfoType, PokemonTypeInfoType } from "@/types/pokemon.types";
import { useEffect, useState } from "react";

export default function usePokemonDetailComponent(pokemon_id: string) {

  const [pokemonData, setPokemonData] = useState<PokemonFullDataType | null>(null);
  const [specieData, setSpecieData] = useState<PokemonSpecieInfoType |null>(null);
  const [typesData, setTypesData] = useState<PokemonTypeInfoType[] | null>(null);
  const [abilitiesData, setAbilitiesData] = useState<PokemonAbilityInfoType[] | null>(null);
  const [movementsData, setMovementsData] = useState<PokemonMovementInfoType[] | null>(null);
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
      // GET
      const pokemon = await getPokemonDataById(id);
      const specie = await getPokemonSpecieByUrl(pokemon.species.url);
      const arrayWithTypesData = [];
      for (const type of pokemon.types) {
        const typeData = await getTypeDataByUrl(type.type.url);
        arrayWithTypesData.push(typeData);
      }
      const arrayWithAbilities = [];
      for (const ability of pokemon.abilities) {
        const abilityData = await getAbilityDataByUrl(ability.ability.url);
        arrayWithAbilities.push(abilityData);
      }
      let arrayWithMovements = [];
      for (const move of pokemon.moves) {
        if (move.version_group_details[0].level_learned_at > 0) {
          const moveToPush = await getMovementDataByUrl(move.move.url)
          moveToPush.level_learned_at = move.version_group_details[0].level_learned_at;
          arrayWithMovements.push(moveToPush);          
        }
      }
      arrayWithMovements = arrayWithMovements.sort((a, b) => (a?.level_learned_at || 0) - (b?.level_learned_at || 0));
      // SET
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
      setTypesData(arrayWithTypesData);
      setAbilitiesData(arrayWithAbilities);
      setMovementsData(arrayWithMovements);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const orderByLevelLearned = (array: PokemonMovementInfoType[]) => {

  }
  
  return {
    loading,
    pokemonData,
    specieData,
    typesData,
    abilitiesData,
    movementsData,
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