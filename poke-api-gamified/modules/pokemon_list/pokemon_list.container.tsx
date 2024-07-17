'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonListComponent from "./pokemon_list.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import PokemonCardComponent from "@/components/pokemon_card/pokemon_card";

export default function PokemonListContainer() {

  const {
    pokemonList
  } = usePokemonListComponent();

  return (
    <LayoutComponent>
      {pokemonList?.length === 0
        ?
        <LoaderPokeballComponent />
        :
        <div className='flex flex-row justify-start items-center flex-wrap gap-x-6 gap-y-10'>
          {pokemonList?.map((pokemon: string) => {
            return (
              <PokemonCardComponent key={pokemon} pokemon={pokemon} />
            );
          })}
        </div>
      }
    </LayoutComponent>
  )
}