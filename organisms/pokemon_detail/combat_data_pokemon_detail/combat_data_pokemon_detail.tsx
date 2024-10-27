import SectionTitleComponent from '@/molecules/section_title.component'
import StatisticsExplanationComponent from '@/molecules/statistics_explanation.component'
import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from '@/services/translator.service'
import { PokemonFullDataType } from '@/types/pokemon.types';
import { IconBrandTorchain, IconChevronDown, IconHeartFilled, IconShieldCheckeredFilled, IconShieldHalfFilled, IconSword, IconSwords } from '@tabler/icons-react'
import React from 'react';
import style from './combat_data_pokemon_detail.module.css';
import useCombatDataPokemonDetail from './combat_data_pokemon_detail.hook';
import TypeTagComponent from '@/molecules/type_tag.molecule';

interface CombatDataPokemonDetailProps {
  pokemonData: PokemonFullDataType | null;
  type1?: string;
  damagesReceivedByType: {[key: string]: number} | undefined
}

export default function CombatDataPokemonDetail({
  pokemonData,
  type1,
  damagesReceivedByType
}: CombatDataPokemonDetailProps) {

  const { setOpenedInfo, openedInfo } = useCombatDataPokemonDetail();

  return (
    <section className='w-full flex flex-col items-center'>
      <SectionTitleComponent type={type1} label='Combat data' />
      <div className='min-[1653px]:flex-row flex-col w-full flex items-start justify-around gap-y-20'>
        <article className='min-[1653px]:w-[40%] w-full min-[1653px]:px-0 px-20 flex flex-col items-start'>
          <span
            className='text-[25px] font-semibold border-l-2 border-b-2 p-2 mb-10 ml-[-20px]'
            style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}
          >
            Stats
          </span>
          <div
            className='flex flex-row items-end justify-between border-l-2 px-8 h-[250px] w-full'
            style={{ borderColor: translateTypeToSecondaryColor(type1) }}
          >
            {pokemonData?.stats.map((stat, index) => {
              return (
                <div
                  key={`${stat.base_stat}-${index}`}
                  className={`${style.stat_bar} w-[35px] rounded-t-lg relative`}
                  style={{ backgroundColor: translateTypeToSecondaryColor(type1), paddingBottom: (Number(stat.base_stat)) }}
                >
                  <span
                    className='absolute top-[-30px] font-bold w-full text-center'
                    style={{ color: translateTypeToSecondaryColor(type1) }}
                  >
                    {Number(stat.base_stat)}
                  </span>
                </div>
              )
            })}
          </div>
          <div
            className='flex flex-row items-center justify-between border-t-2 pt-3 px-8 w-full'
            style={{ borderColor: translateTypeToSecondaryColor(type1) }}
          >
            <IconHeartFilled size={40} color={translateTypeToSecondaryColor(type1)} />
            <IconSword size={40} color={translateTypeToSecondaryColor(type1)} />
            <IconShieldHalfFilled size={40} color={translateTypeToSecondaryColor(type1)} />
            <IconSwords size={40} color={translateTypeToSecondaryColor(type1)} />
            <IconShieldCheckeredFilled size={40} color={translateTypeToSecondaryColor(type1)} />
            <IconBrandTorchain size={40} color={translateTypeToSecondaryColor(type1)} />
          </div>
          <div
            className='flex flex-row items-center gap-1 cursor-pointer mt-5 text-xl font-bold'
            style={{ color: translateTypeToSecondaryColor(type1) }}
            onClick={() => setOpenedInfo(!openedInfo)}
          >
            <IconChevronDown className={`${!openedInfo ? 'rotate-0' : 'rotate-180'} ease-in-out duration-200`} />
            <span>Explanation</span>
          </div>
          <div className={`${openedInfo ? style.legend_container_opened : style.legend_container_closed} w-[100%] flex flex-col items-start justify-start gap-5 mt-10`}>
            <StatisticsExplanationComponent
              icon={<IconHeartFilled size={30} color={translateTypeToSecondaryColor(type1)} />}
              type={type1 || ''}
              label='Health Points (HP)'
              text='Determines how much damage a Pokémon can receive. When a Pokémon´s HP is completely down to 0, the Pokémon will faint.'
            />
            <StatisticsExplanationComponent
              icon={<IconSword size={30} color={translateTypeToSecondaryColor(type1)} />}
              type={type1 || ''}
              label='Attack (A)'
              text='Determines how much damage a Pokémon can cause while using a physical move.'
            />
            <StatisticsExplanationComponent
              icon={<IconShieldHalfFilled size={30} color={translateTypeToSecondaryColor(type1)} />}
              type={type1 || ''}
              label='Defense (D)'
              text='Determines how much damage a Pokémon will resist when hit by a physical move.'
            />
            <StatisticsExplanationComponent
              icon={<IconSwords size={30} color={translateTypeToSecondaryColor(type1)} />}
              type={type1 || ''}
              label='Special Attack (SA)'
              text='Determines how much damage a Pokémon can cause while using a special move.'
            />
            <StatisticsExplanationComponent
              icon={<IconShieldCheckeredFilled size={30} color={translateTypeToSecondaryColor(type1)} />}
              type={type1 || ''}
              label='Special Defense (SD)'
              text='Determines how much damage a Pokémon will resist when hit by a special move.'
            />
            <StatisticsExplanationComponent
              icon={<IconBrandTorchain size={30} color={translateTypeToSecondaryColor(type1)} />}
              type={type1 || ''}
              label='Speed (S)'
              text='Determines which Pokémon will act first during battle. Generally, the Pokémon with the higher Speed will be the one to attack first.'
            />
          </div>
        </article>
        <article className='min-[1653px]:w-[40%] w-full min-[1653px]:px-0 px-20 flex flex-col items-start gap-10'>
          <span
            className='text-[25px] font-semibold border-l-2 border-b-2 p-2 block ml-[-20px]'
            style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}
          >
            Damage received
          </span>
          <div className='grid min-[1653px]:grid-cols-3 grid-cols-4 gap-y-8 gap-x-10 w-full'>
            {Object.keys(damagesReceivedByType as { [key: string]: number })?.map((key) => {
              return (
                <div key={key} className='flex flex-row justify-start items-center gap-3 '>
                  <div
                    className='flex flex-row items-center justify-center bg-black px-2 py-1 rounded-md'
                    style={{ color: translateTypeToPrimaryColor(key) }}
                  >
                    <TypeTagComponent type={key} />
                  </div>
                  <span className='text-[23px] font-semibold whitespace-nowrap'>x {damagesReceivedByType?.[key]}</span>
                </div>

              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
