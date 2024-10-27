import TypeIconComponent from '@/atoms/type_icon.atom'
import useScreenWidth from '@/hooks/useScreenWidth';
import SectionTitleComponent from '@/molecules/section_title.component'
import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from '@/services/translator.service'
import { PokemonAbilityInfoType, PokemonMovementInfoType } from '@/types/pokemon.types';
import React from 'react';

interface SkillDataPokemonDetailProps {
  abilitiesData: PokemonAbilityInfoType[] | null;
  type1?: string;
  movementsData: PokemonMovementInfoType[] | null;
}

export default function SkillDataPokemonDetail({
  abilitiesData,
  type1,
  movementsData
}: SkillDataPokemonDetailProps) {

  const { windowSize } = useScreenWidth();
  
  return (
    <section className='w-full flex flex-col items-center gap-10'>
      <SectionTitleComponent type={type1} label='Skills' />
      <div className='w-full flex flex-row items-center justify-start px-16 pb-10'>
        <span
          className='text-[25px] font-semibold border-l-2 border-b-2 p-2'
          style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}
        >
          Abilities
        </span>
      </div>
      <div className='w-full flex flex-col gap-10 px-20'>
        {abilitiesData?.map((ability) => {
          return (
            <div className='flex flex-col items-start gap-2' key={ability.name}>
              <div
                className='bg-black border-2 text-[20px] font-semibold px-2 py-1 rounded-md flex flex-row items-center gap-1'
                style={{ borderColor: translateTypeToSecondaryColor(type1), color: translateTypeToPrimaryColor(type1) }}
              >
                <TypeIconComponent type={type1 || ''} />
                <span>{ability.name.toLocaleUpperCase().replaceAll('-', ' ')}</span>
              </div>
              <span className='text-[20px]'>{ability?.effect_entries?.[1]?.effect || ability?.flavor_text_entries?.find((text) => text?.language?.name === 'en')?.flavor_text.replaceAll('SPCL.DEF', 'special defense').replaceAll('SPEED', 'speed').replaceAll('ATTACK', 'attack').replaceAll('Sp. Atk', 'special attack').replaceAll('DEFENSE', 'defense')}</span>
            </div>
          )
        })}
      </div>
      <div className='w-full flex flex-row items-center justify-start px-16 mt-20 pb-10'>
        <span
          className='text-[25px] font-semibold border-l-2 border-b-2 p-2'
          style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}
        >
          Movements
        </span>
      </div>
      <div className='w-full flex flex-col gap-10 px-20'>
        {windowSize.width >= 1280 ?
          <table className='w-full'>
            <thead>
              <tr className='border-b-2' style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}>
                <th className='p-3 text-center'>Name</th>
                <th className='p-3 text-center'>Type</th>
                <th className='p-3 text-center min-w-[120px]'>Learned at</th>
                <th className='p-3 text-center min-w-[150px]'>Damage class</th>
                <th className='p-3 text-center'>Power</th>
                <th className='p-3 text-center'>Accuracy</th>
                <th className='p-3 text-center min-w-[140px]'>Power points</th>
                <th className='p-3 text-left'>Details</th>
              </tr>
            </thead>
            <tbody>
              {movementsData?.map((move, index) => {
                return (
                  <tr
                    key={move.name}
                    className={`${(index + 1) === movementsData.length ? 'border-b-0' : 'border-b-[1px]'} hover:bg-[#ffffffab] text-center`}
                    style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                  >
                    <td className='px-1 font-semibold min-w-[160px]'>
                      {move.name.replaceAll('-', ' ').toLocaleUpperCase()}
                    </td>
                    <td className='px-1 py-3'>
                      <div
                        className='bg-black border-2 font-semibold px-2 py-1 rounded-md flex flex-row items-center justify-center gap-1'
                        style={{ borderColor: translateTypeToPrimaryColor(move?.type?.name), color: translateTypeToPrimaryColor(move?.type?.name) }}
                      >
                        <TypeIconComponent type={move?.type?.name || ''} />
                        <span>{move?.type?.name.toLocaleUpperCase()}</span>
                      </div>
                    </td>
                    <td className='px-1'>
                      Level {move.level_learned_at}
                    </td>
                    <td className='px-1'>
                      {move.damage_class.name.toLocaleUpperCase()}
                    </td>
                    <td className='px-1'>
                      {move.power || '---'}
                    </td>
                    <td className='px-1'>
                      {move?.accuracy || '---'}
                    </td>
                    <td className='px-1'>
                      {move?.pp || '---'}
                    </td>
                    <td className='px-1 text-left pl-3'>
                      {move?.flavor_text_entries?.find((text) => text?.language?.name === 'en')?.flavor_text.replaceAll('SPCL.DEF', 'special defense').replaceAll('SPEED', 'speed').replaceAll('ATTACK', 'attack').replaceAll('Sp. Atk', 'special attack').replaceAll('DEFENSE', 'defense')}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          :
          <div className='w-full flex flex-col items-start justify-start gap-8'>
            {movementsData?.map((move) => {
              return (
                <div
                  key={move.name}
                  className='border-2 w-full'
                  style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                >
                  <div
                    className='w-full border-b-2 p-3 flex flex-row gap-3 items-center'
                    style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                  >
                    <span className='text-xl font-bold'>
                      {move.name.replaceAll('-', ' ').toLocaleUpperCase()}
                    </span>
                    <div
                      className='bg-black border-2 font-semibold px-2 py-1 rounded-md flex flex-row items-center justify-center gap-1'
                      style={{ borderColor: translateTypeToPrimaryColor(move?.type?.name), color: translateTypeToPrimaryColor(move?.type?.name) }}
                    >
                      <TypeIconComponent type={move?.type?.name || ''} />
                      <span>{move?.type?.name.toLocaleUpperCase()}</span>
                    </div>
                  </div>
                  <div className=' bg-[#ffffffab] p-3'>
                    <div className='flex flex-row items-start'>
                      <span className='min-w-[130px]'>Learned at</span>
                      <span className='font-bold'>{move.level_learned_at}</span>
                    </div>
                    <div className='flex flex-row items-start'>
                      <span className='min-w-[130px]'>Damage class</span>
                      <span className='font-bold'>{move.damage_class.name.toLocaleUpperCase()}</span>
                    </div>
                    <div className='flex flex-row items-start'>
                      <span className='min-w-[130px]'>Power</span>
                      <span className='font-bold'>{move.power || '---'}</span>
                    </div>
                    <div className='flex flex-row items-start'>
                      <span className='min-w-[130px]'>Accuracy</span>
                      <span className='font-bold'>{move?.accuracy || '---'}</span>
                    </div>
                    <div className='flex flex-row items-start'>
                      <span className='min-w-[130px]'>Power points</span>
                      <span className='font-bold'>{move?.pp || '---'}</span>
                    </div>
                    <div className='flex flex-row items-start'>
                      <span className='min-w-[130px]'>Description</span>
                      <span className='font-bold'>
                        {move?.flavor_text_entries?.find((text) => text?.language?.name === 'en')?.flavor_text.replaceAll('SPCL.DEF', 'special defense').replaceAll('SPEED', 'speed').replaceAll('ATTACK', 'attack').replaceAll('Sp. Atk', 'special attack').replaceAll('DEFENSE', 'defense')}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        }
      </div>
    </section>
  )
}
