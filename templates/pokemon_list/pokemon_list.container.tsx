'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonListComponent from "./pokemon_list.hook";
import LoaderPokeballComponent from "@/atoms/loader/loader.atom";
import { PokemonFullDataType } from "@/types/pokemon.types";
import style from './pokemon_list.module.css';
import PokemonCardComponent from "@/molecules/pokemon_card/pokemon_card.molecule";

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
        <div className={`${style.pokelist_container} grid items-center justify-items-center gap-y-10 p-5`}>
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