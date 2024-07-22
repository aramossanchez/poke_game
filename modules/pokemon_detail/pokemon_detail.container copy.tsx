'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonDetailComponent from "./pokemon_detail.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import Image from "next/image";

export default function PokemonDetailContainer({ pokemon_id }: { pokemon_id: string }) {

  const {
    loading,
    pokemonData
  } = usePokemonDetailComponent(pokemon_id);

  console.log(pokemonData);

  return (
    <LayoutComponent>
      {loading ?
        <LoaderPokeballComponent />
        :
        <div className='flex flex-row items-center gap-2 flex-wrap'>
          <Image
            src={pokemonData?.sprites.back_default}
            alt='Pokemon image 1'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.back_shiny}
            alt='Pokemon image 2'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.front_default}
            alt='Pokemon image 3'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.front_shiny}
            alt='Pokemon image 4'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.dream_world.front_default}
            alt='Pokemon image 5'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.home.front_default}
            alt='Pokemon image 6'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.home.front_shiny}
            alt='Pokemon image 7'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other['official-artwork'].front_default}
            alt='Pokemon image 8'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other['official-artwork'].front_shiny}
            alt='Pokemon image 9'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.showdown.back_default}
            alt='Pokemon image 10'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.showdown.back_shiny}
            alt='Pokemon image 11'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.showdown.front_default}
            alt='Pokemon image 12'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.other.showdown.front_shiny}
            alt='Pokemon image 13'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i']['red-blue'].back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i']['red-blue'].back_gray}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i']['red-blue'].back_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i']['red-blue'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i']['red-blue'].front_gray}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i']['red-blue'].front_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i'].yellow.back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i'].yellow.back_gray}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i'].yellow.back_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i'].yellow.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i'].yellow.front_gray}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-i'].yellow.front_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.back_shiny_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.back_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.front_shiny_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].crystal.front_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].gold.back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].gold.back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].gold.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].gold.front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].gold.front_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].silver.back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].silver.back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].silver.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].silver.front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-ii'].silver.front_transparent}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii'].emerald.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii'].emerald.front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['diamond-pearl'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv'].platinum.back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv'].platinum.back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv'].platinum.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-iv'].platinum.front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].animated.front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].back_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].back_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-v']['black-white'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vi']['x-y'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vi']['x-y'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vii'].icons.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_shiny}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
          <Image
            src={pokemonData?.sprites.versions['generation-viii'].icons.front_default}
            alt='Pokemon image 14'
            width={200}
            height={200}
          />
        </div>
      }
    </LayoutComponent>
  )
}