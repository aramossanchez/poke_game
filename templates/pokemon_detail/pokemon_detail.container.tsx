'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonDetailComponent from "./pokemon_detail.hook";
import LoaderPokeballComponent from "@/atoms/loader/loader.atom";
import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import useScreenWidth from "@/hooks/useScreenWidth";
import BasicDataPokemonDetails from "@/organisms/pokemon_detail/basic_data_pokemon_details/basic_data_pokemon_details";
import CombatDataPokemonDetail from "@/organisms/pokemon_detail/combat_data_pokemon_detail/combat_data_pokemon_detail";
import SkillDataPokemonDetail from "@/organisms/pokemon_detail/skill_data_pokemon_detail";
import Image from "next/image";

export default function PokemonDetailContainer({ pokemon_id }: { pokemon_id: string }) {

  const {
    loading,
    pokemonData,
    specieData,
    abilitiesData,
    movementsData,
    damagesReceivedByType,
    spriteNormalVersion,
    spriteShinyVersion,
  } = usePokemonDetailComponent(pokemon_id);

  const { windowSize } = useScreenWidth();

  const typesName: string[] | undefined = pokemonData?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  return (
    <LayoutComponent>
      {loading ?
        <LoaderPokeballComponent />
        :
        windowSize.width < 1024 ?
          // MOVIL VERSION
          <main className="w-full flex flex-col justify-center py-5 gap-y-5"
            style={{ background: `linear-gradient(0.25turn, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)})` }}
          >
            <div className="flex flex-col items-center">
              <span
                className='min-[768px]:text-[40px] min-[480px]:text-[30px] text-[20px] min-[768px]:leading-[40px] min-[480px]:leading-[30px] leading-[20px] font-bold'
                style={{ color: translateTypeToSecondaryColor(type1) }}
              >
                {pokemonData?.name.toLocaleUpperCase()}
              </span>
              <span
                className='min-[768px]:text-[30px] min-[480px]:text-[20px] text-[14px] min-[768px]:leading-[30px] min-[480px]:leading-[20px] leading-[14px] font-semibold'
                style={{ color: translateTypeToSecondaryColor(type1) }}
              >
                #{pokemonData?.id}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={pokemonData?.sprites.other.dream_world.front_default || '/'}
                alt='Pokemon image'
                width={500}
                height={0}
                className='w-[60%] h-[60%]'
              />
            </div>
          </main>
          :
          // DESKTOP VERSION
          <main
            className='flex flex-row items-center justify-center gap-40 flex-wrap w-full pt-4 px-2 pb-40'
            style={{ background: `linear-gradient(0.25turn, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)})` }}
          >
            <BasicDataPokemonDetails
              pokemonData={pokemonData}
              type1={type1}
              specieData={specieData}
              spriteNormalVersion={spriteNormalVersion}
              spriteShinyVersion={spriteShinyVersion}
            />
            <CombatDataPokemonDetail
              pokemonData={pokemonData}
              type1={type1}
              damagesReceivedByType={damagesReceivedByType}
            />
            <SkillDataPokemonDetail
              abilitiesData={abilitiesData}
              type1={type1}
              movementsData={movementsData}
            />
          </main>
      }
    </LayoutComponent >
  )
}