'use client';

import LayoutComponent from "@/layouts/layout";
import usePokemonDetailComponent from "./pokemon_detail.hook";
import LoaderPokeballComponent from "@/components/loader/loader";
import Image from "next/image";
import TypeIconComponent from "@/components/type_icon.component";
import { convertHeight, convertWeight, translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import SpritesPokemonDetailComponent from "@/components/sprites_pokemon_detail/sprites_pokemon_detail.component";
import { IconArrowBigLeftFilled, IconArrowBigRightFilled, IconBrandTorchain, IconHeartFilled, IconShieldCheckeredFilled, IconShieldHalfFilled, IconSword, IconSwords } from "@tabler/icons-react";
import style from './pokemon_detail.module.css';
import Link from "next/link";
import TypeDamageComponent from "@/components/type_damage.component";
import SectionTitleComponent from "@/components/section_title.component";

export default function PokemonDetailContainer({ pokemon_id }: { pokemon_id: string }) {

  const {
    loading,
    pokemonData,
    specieData,
    typesData,
    abilitiesData,
    movementsData,
    spriteNormalVersion,
    setCounterSpriteNormalVersion,
    counterSpriteNormalVersion,
    spriteShinyVersion,
    setCounterSpriteShinyVersion,
    counterSpriteShinyVersion
  } = usePokemonDetailComponent(pokemon_id);

  const typesName: string[] | undefined = pokemonData?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  return (
    <LayoutComponent>
      {loading ?
        <LoaderPokeballComponent />
        :
        <main
          className='flex flex-row items-center justify-center gap-40 flex-wrap w-full py-4 px-2'
          style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
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
              <span className='w-full text-center'>Weight: {convertWeight(pokemonData?.weight)} kgs</span>
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
          {/* STATS SECTION */}
          <section className='w-full flex flex-col items-center'>
            <SectionTitleComponent type={type1} label='Stats' />
            <div className='w-full flex flex-col items-start justify-start px-10 gap-5'>
              <div
                className='flex flex-row items-end gap-2'
                style={{ color: translateTypeToSecondaryColor(type1) }}
              >
                <IconHeartFilled size={30} color={translateTypeToSecondaryColor(type1)} />
                <span className='font-semibold text-[20px]'>Health Points (HP):</span>
                <span className='text-black text-[18px]'> It is a value that determines how much damage a Pokémon can receive. When a Pokémon´s HP is completely down to 0, the Pokémon will faint.</span>
              </div>
              <div
                className='flex flex-row items-end gap-2'
                style={{ color: translateTypeToSecondaryColor(type1) }}
              >
                <IconSword size={30} color={translateTypeToSecondaryColor(type1)} />
                <span className='font-semibold text-[20px]'>Attack (A):</span>
                <span className='text-black text-[18px]'> Determines how much damage a Pokémon will resist when hit by a physical move.</span>
              </div>
            </div>
            <article className='w-[990px]'>
              <div
                className='flex flex-row items-end justify-between border-l-2 px-8 h-[300px]'
                style={{ borderColor: translateTypeToSecondaryColor(type1) }}
              >
                {pokemonData?.stats.map((stat, index) => {
                  return (
                    <div
                      key={stat.base_stat + index}
                      className={`${style.stat_bar} w-[35px] rounded-t-lg`}
                      style={{ backgroundColor: translateTypeToSecondaryColor(type1), paddingBottom: (Number(stat.base_stat) * 2) }}
                    >
                      {/* {Number(stat.base_stat)} */}
                    </div>
                  )
                })}
              </div>
              <div
                className='flex flex-row items-center justify-between border-t-2 pt-3 px-8'
                style={{ borderColor: translateTypeToSecondaryColor(type1) }}
              >
                <IconHeartFilled size={40} color={translateTypeToSecondaryColor(type1)} />
                <IconSword size={40} color={translateTypeToSecondaryColor(type1)} />
                <IconShieldHalfFilled size={40} color={translateTypeToSecondaryColor(type1)} />
                <IconSwords size={40} color={translateTypeToSecondaryColor(type1)} />
                <IconShieldCheckeredFilled size={40} color={translateTypeToSecondaryColor(type1)} />
                <IconBrandTorchain size={40} color={translateTypeToSecondaryColor(type1)} />
              </div>
            </article>
          </section>
          {/* RESISTORS SECTION */}
          <section className='w-full'>
            <SectionTitleComponent type={type1} label='Resistors' />
            <div className='flex flex-row items-start justify-start mt-24 gap-10 flex-wrap w-full'>
              <div className='min-[1440px]:w-[33%] flex flex-row justify-start'>
                <TypeDamageComponent
                  typesData={typesData}
                  damage='double_damage_from'
                  label=' takes double damage vs'
                />
              </div>
              <div className='min-[1440px]:w-[33%] flex flex-row justify-start'>
                <TypeDamageComponent
                  typesData={typesData}
                  damage='half_damage_from'
                  label=' takes half damage vs'
                />
              </div>
              <div className='flex flex-row justify-start'>
                <TypeDamageComponent
                  typesData={typesData}
                  damage='no_damage_from'
                  label=' takes 0 damage vs'
                />
              </div>
            </div>
          </section>
          {/* SKILLS SECTION */}
          <section className='w-full flex flex-col items-center gap-10'>
            <SectionTitleComponent type={type1} label='Skills' />
            <div className='w-full flex flex-row items-center justify-start px-16'>
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
                      <span>{ability.name.toLocaleUpperCase()}</span>
                    </div>
                    <span className='text-[20px]'>{ability.effect_entries[1].effect}</span>
                  </div>
                )
              })}
            </div>
            <div className='w-full flex flex-row items-center justify-start px-16 mt-20'>
              <span
                className='text-[25px] font-semibold border-l-2 border-b-2 p-2'
                style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}
              >
                Movements
              </span>
            </div>
            <div className='w-full flex flex-col gap-10 px-20'>
              <table className='w-full'>
                <thead className='text-center border-b-2' style={{ color: translateTypeToSecondaryColor(type1), borderColor: translateTypeToSecondaryColor(type1) }}>
                  <th className='p-3'>Name</th>
                  <th className='p-3'>Type</th>
                  <th className='p-3 min-w-[120px]'>Learned at</th>
                  <th className='p-3 min-w-[150px]'>Damage class</th>
                  <th className='p-3'>Accuracy</th>
                  <th className='p-3'>Details</th>
                </thead>
                {movementsData?.map((move) => {
                  return (
                    <tr
                      key={move.name}
                      className='border-b-[1px] hover:text-yellow-400 hover:bg-black text-center'
                      style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                    >
                      <td className='px-1 font-semibold min-w-[160px]'>
                        {move.name.replaceAll('-', ' ').toLocaleUpperCase()}
                      </td>
                      <td className='flex flex-row items-center justify-center px-1 py-3'>
                        <div
                          className='bg-black border-2 font-semibold px-2 py-1 rounded-md flex flex-row items-center gap-1'
                          style={{ borderColor: translateTypeToSecondaryColor(move?.type?.name), color: translateTypeToPrimaryColor(move?.type?.name) }}
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
                        {move?.accuracy || '---'}
                      </td>
                      <td className='px-1'>
                        {move?.flavor_text_entries?.find((text) => text?.language?.name === 'en')?.flavor_text.replaceAll('SPCL.DEF', 'special defense').replaceAll('SPEED', 'speed').replaceAll('ATTACK', 'attack').replaceAll('Sp. Atk', 'special attack').replaceAll('DEFENSE', 'defense')}
                      </td>
                    </tr>
                  )
                })}
              </table>
              {/* {movementsData?.map((move) => {
                return (
                  <div className='flex flex-col items-start gap-2 border-b-2 border-black pb-10' key={move.name}
                    style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                  >
                    <div className='flex flex-col gap-2'>
                      <span className='font-medium'>Learned in level {move.level_learned_at}</span>
                      <div
                        className='bg-black border-2 text-[20px] font-semibold px-2 py-1 rounded-md flex flex-row items-center gap-1'
                        style={{ borderColor: translateTypeToSecondaryColor(move?.type?.name), color: translateTypeToPrimaryColor(move?.type?.name) }}
                      >
                        <TypeIconComponent type={move?.type?.name || ''} />
                        <span>{move.name.replaceAll('-', ' ').toLocaleUpperCase()}</span>
                      </div>
                    </div>
                    <span className='font-semibold'>Damage class: {move.damage_class.name}</span>
                    <span className='text-[20px]'>
                      {move?.flavor_text_entries?.find((text) => text?.language?.name === 'en')?.flavor_text.replaceAll('SPCL.DEF', 'special defense').replaceAll('SPEED', 'speed').replaceAll('ATTACK', 'attack').replaceAll('Sp. Atk', 'special attack').replaceAll('DEFENSE', 'defense')}
                    </span>
                  </div>
                )
              })} */}
            </div>
          </section>
          {/* <section>
            <div className='w-full flex flex-row justify-between items-start'>
              <div>
              </div>
              <div>
                <div
                  className='w-[140px] h-[140px] border-4 border-black flex flex-row items-center justify-center mb-2'
                  style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1 || '')}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
                >
                </div>
              </div>
            </div>
            <div className='flex lg:flex-row lg:justify-between items-start flex-col gap-3'>
              <div className='flex lg:flex-col lg:w-auto w-full flex-row gap-16 items-center justify-center'>

              </div>
            </div>
            <div>
              <h2>DATA</h2>
            </div>
            <div>
              <h2>ATTACKS</h2>
            </div>
            {/* <Image
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
            /> */}
          {/* <Image
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
            /> */}
          {/* <Image
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
            /> */}
          {/* <Image
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
            /> */}
          {/* <Image
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
            /> */}
          {/* <Image
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
            /> */}
          {/* <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.front_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            />
            <Image
              src={pokemonData?.sprites.versions['generation-ii'].crystal.front_shiny_transparent}
              alt='Pokemon image 14'
              width={200}
              height={200}
            /> */}
          {/* <Image
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
          </section> */}
        </main>
      }
    </LayoutComponent>
  )
}