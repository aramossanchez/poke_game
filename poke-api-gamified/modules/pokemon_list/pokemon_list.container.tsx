'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonListComponent from "./pokemon_list.hook";
import LoaderPokeballComponent from "@/components/loader/loader";

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
        <div className='flex flex-row justify-start items-center flex-wrap gap-x-3'>
          {pokemonList?.map((pokemon: string) => {
            return (
              <span key={pokemon}>{pokemon}</span>
            );
          })}
        </div>
      }
    </LayoutComponent>
  )
}