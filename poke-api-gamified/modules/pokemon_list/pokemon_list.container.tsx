'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonListComponent from "./pokemon_list.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import PokemonCardComponent from "@/components/pokemon_card/pokemon_card";
import { PokemonFullDataType } from "@/types/pokemon.types";

export default function PokemonListContainer() {

  const {
    pokemonList,
    loading
  } = usePokemonListComponent();

  return (
    <LayoutComponent>
      {loading
        ?
        <LoaderPokeballComponent />
        :
        <div className='flex flex-row justify-start items-center flex-wrap gap-x-6 gap-y-10'>
          {pokemonList?.map((pokemon: PokemonFullDataType) => {
            return (
              <PokemonCardComponent key={pokemon.name} number={pokemon.id} pokemon={pokemon.name} image={pokemon.sprites.other['official-artwork'].front_default} types={pokemon.types} />
            );
          })}
        </div>
      }
    </LayoutComponent>
  )
}