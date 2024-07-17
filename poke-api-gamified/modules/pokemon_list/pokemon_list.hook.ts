import { useEffect, useState } from "react"

export default function usePokemonListComponent () {

  const [pokemonList, setPokemonList] = useState<string[] | null>(null);

  useEffect(() => {
    setPokemonList(['Bulbasur', 'Charmander', 'Squirtle'])
  }, []);

  return {
    pokemonList
  }
}