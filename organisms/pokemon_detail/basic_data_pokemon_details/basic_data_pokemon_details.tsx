import TypeIconComponent from '@/atoms/type_icon.atom'
import SpritesPokemonDetailComponent from '@/molecules/sprites_pokemon_detail/sprites_pokemon_detail.component'
import { convertHeight, convertWeight, translateTypeToPrimaryColor, translateTypeToSecondaryColor } from '@/services/translator.service'
import { PokemonFullDataType, PokemonSpecieInfoType } from '@/types/pokemon.types'
import { IconArrowBigLeftFilled, IconArrowBigRightFilled } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useBasicDataPokemonDetails from './basic_data_pokemon_details.hook'

interface BasicDataPokemonDetailsProps {
  pokemonData: PokemonFullDataType | null;
  type1?: string;
  specieData: PokemonSpecieInfoType |null;
  spriteNormalVersion: string[];
  spriteShinyVersion: string[];
}

export default function BasicDataPokemonDetails({
  pokemonData,
  type1,
  specieData,
  spriteNormalVersion,
  spriteShinyVersion
}: BasicDataPokemonDetailsProps) {

  const {
    counterSpriteNormalVersion,
    setCounterSpriteNormalVersion,
    counterSpriteShinyVersion,
    setCounterSpriteShinyVersion,} = useBasicDataPokemonDetails()
  
  return (
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
            className='border-2 rounded-full bg-primaryBackground w-[50px] h-[50px]'
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
  )
}
