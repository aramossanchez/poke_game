'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonDetailComponent from "./pokemon_detail.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import Image from "next/image";
import TypeIconComponent from "@/components/type_icon.component";
import { convertHeight, convertWeight, translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import SpritesPokemonDetailComponent from "@/components/sprites_pokemon_detail/sprites_pokemon_detail.component";
import { IconArrowBigLeftFilled, IconArrowBigRightFilled, IconBrandTorchain, IconChevronDown, IconHeartFilled, IconShieldCheckeredFilled, IconShieldHalfFilled, IconSword, IconSwords } from "@tabler/icons-react";
import style from './pokemon_detail.module.css';
import Link from "next/link";
import SectionTitleComponent from "@/components/section_title.component";
import StatisticsExplanationComponent from "@/components/statistics_explanation.component";
import TypeTagComponent from "@/components/type_tag.component";

export default function PokemonDetailContainer({ pokemon_id }: { pokemon_id: string }) {

  const {
    loading,
    pokemonData,
    specieData,
    abilitiesData,
    movementsData,
    damagesReceivedByType,
    spriteNormalVersion,
    setCounterSpriteNormalVersion,
    counterSpriteNormalVersion,
    spriteShinyVersion,
    setCounterSpriteShinyVersion,
    counterSpriteShinyVersion,
    useScreenWidth,
    setOpenedInfo,
    openedInfo
  } = usePokemonDetailComponent(pokemon_id);

  const typesName: string[] | undefined = pokemonData?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  const isScreenSmall = useScreenWidth();

  return (
    <LayoutComponent>
      {loading ?
        <LoaderPokeballComponent />
        :
        <main
          className='flex flex-row items-center justify-center gap-40 flex-wrap w-full py-4 px-2'
          style={{ background: `linear-gradient(0.25turn, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)})` }}
        >
          {/* PRESENTATION SECTION */}
          <section className='w-full flex flex-row gap-y-10 justify-between items-center relative pt-32'>
            <div className='w-full mt-2 mb-20 absolute top-0'>
              <div className='flex flex-row items-center justify-between'>
                <Link href={`/pokemon/${(Number(pokemonData?.id) - 1).toString()}`}>
                  <IconArrowBigLeftFilled size={40} color={translateTypeToSecondaryColor(type1)} className='cursor-pointer' />
                </Link>
                <hr className='w-[40%] h-[2px] border-0' style={{ backgroundColor: translateTypeToSecondaryColor(type1) }} />
                <Image
                  src={pokemonData?.sprites.other.dream_world.front_default || '/'}
                  alt='Pokemon image'
                  width={50}
                  height={0}
                  className='border-2 rounded-full bg-white w-[50px] h-[50px]'
                  style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                />
                <hr className='w-[40%] h-[2px] border-0' style={{ backgroundColor: translateTypeToSecondaryColor(type1) }} />
                <Link href={`/pokemon/${(Number(pokemonData?.id) + 1).toString()}`}>
                  <IconArrowBigRightFilled size={40} color={translateTypeToSecondaryColor(type1)} className='cursor-pointer' />
                </Link>
              </div>
              <span className='block font-bold text-[18px] w-full text-center'>#{pokemonData?.id}</span>
            </div>
            <article className='w-[33%] flex flex-col h-full items-start justify-center'>
              <span className='text-[40px] font-semibold leading-9'>#{pokemonData?.id}</span>
              <span className='text-[50px] font-bold leading-9'>{pokemonData?.name.toLocaleUpperCase()}</span>
              <div className='flex flex-row gap-3 bg-black px-2 py-1 rounded-md my-5'>
                {pokemonData?.types.map((type: { type: { name: string } }) => {
                  return (
                    <div key={type.type.name + '-' + pokemonData?.id} className='flex flex-row items-center gap-1 text-2xl' style={{ color: translateTypeToPrimaryColor(type.type.name) }}>
                      <TypeIconComponent type={type.type.name} />
                      <span className='font-semibold'>{type.type.name.toLocaleUpperCase()}</span>
                    </div>
                  )
                })}
              </div>
              <div
                className='flex flex-row items-center gap-1 mb-1 rounded-md px-2 py-1'
                style={{ backgroundColor: translateTypeToSecondaryColor(type1) }}
              >
                <span>Egg groups:</span>
                <div className='flex flex-row gap-1'>
                  {specieData?.egg_groups.map((egg, index) => {
                    return (
                      <span key={egg.name + '-egg_group'}>{index === 1 ? 'and ' : ''}{egg.name.replaceAll('-', ' ')}</span>
                    )
                  })}
                </div>
              </div>
              <span
                className='block mb-5 rounded-md px-2 py-1'
                style={{ backgroundColor: translateTypeToSecondaryColor(type1) }}
              >
                Habitat: {specieData?.habitat.name.replaceAll('-', ' ')}
              </span>
              <span className='max-w-[80%] text-[14px]'>{specieData?.flavor_text_entries[2].flavor_text.replaceAll('', ' ')}</span>
              <span className='max-w-[80%] text-[14px]'>{specieData?.flavor_text_entries[3].flavor_text.replaceAll('', ' ')}</span>
            </article>
            <article className='w-[33%] h-full flex flex-col justify-center items-start relative'>
              <Image
                src={pokemonData?.sprites.other.dream_world.front_default || '/'}
                alt='Pokemon image'
                width={400}
                height={400}
                className='border-l-2 border-b-2 relative w-full'
                style={{ borderColor: translateTypeToSecondaryColor(type1) }}
              />
              <span className='absolute top-[50%] min-[1440px]:left-[-13%] min-[1024px]:left-[-18%] rotate-[270deg]'>Height: {convertHeight(pokemonData?.height)} m</span>
              <span className='w-full text-center mt-2 block'>Weight: {convertWeight(pokemonData?.weight)} kgs</span>
            </article>
            <article className='w-[33%] flex flex-col justify-center items-end gap-10'>
              <SpritesPokemonDetailComponent
                type={type1}
                counter={counterSpriteNormalVersion}
                setCounter={setCounterSpriteNormalVersion}
                array={spriteNormalVersion}
                label='Normal version'
              />
              <SpritesPokemonDetailComponent
                type={type1}
                counter={counterSpriteShinyVersion}
                setCounter={setCounterSpriteShinyVersion}
                array={spriteShinyVersion}
                label='Shiny version'
              />
            </article>
          </section>
          {/* COMBAT DATA SECTION */}
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
                        key={stat.base_stat + index}
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
                    text='Determines how much damage a Pokémon will resist when hit by a physical move.'
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
          {/* SKILLS SECTION */}
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
              {!isScreenSmall ?
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
        </main>
      }
    </LayoutComponent>
  )
}