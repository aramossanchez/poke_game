import Image from 'next/image';
import style from './pokemon_card.module.css';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { translateTypeToPrimaryColor } from '@/services/translator.service';
import Link from 'next/link';
import { addPokemonToTeam, pokemonExistInTeam } from '@/services/general.service';
import { useState } from 'react';
import ButtonPokemonCard from '../../atoms/button_pokemon_card.atom';
import TypeIconComponent from '@/atoms/type_icon.atom';
import ImageForPokemonCard from '@/atoms/image_for_pokemon_card.atom';

export default function PokemonCardComponent({ number, pokemon, image, types }: { number: string, pokemon: string, image: string, types: { type: { name: string } }[] }) {

  const typesName: string[] = types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];
  const [addedInTeam, setAddedInTeam] = useState(pokemonExistInTeam(number));

  return (
    <div className={`${style.card} p-2 w-[150px] h-[245px] bg-primaryColor relative hover:brightness-110 ease-in-out duration-100 flex flex-col gap-y-2`}>
      <div
        className='absolute top-[165px] right-3 z-10 rounded-full'
        onClick={() => { addPokemonToTeam(number); setAddedInTeam(pokemonExistInTeam(number)) }}
      >
        {!addedInTeam ?
          <IconPlus size={20} className='text-primaryColor hover:border-white ease-in-out duration-300 cursor-pointer bg-secondaryColor border-2 border-primaryColor rounded-full' />
          :
          <IconMinus size={20} className='text-primaryColor hover:border-white ease-in-out duration-300 cursor-pointer bg-secondaryColor border-2 border-primaryColor rounded-full' />
        }
      </div>
      <div className='text-white text-sm font-bold pl-2 w-full bg-primaryColor flex justify-between items-center'>
        <span>#{number}</span>
        <span>{pokemon.toLocaleUpperCase()}</span>
      </div>
      <div className='flex text-sm items-center justify-between w-full'>
        {typesName.map((type) => {
          return (
            <div key={type + '-' + number} className='flex flex-row items-center gap-1' style={{ color: translateTypeToPrimaryColor(type) }}>
              <TypeIconComponent type={type} size={12} />
              <span
                className='font-semibold text-xs'
              >{type.toLocaleUpperCase()}</span>
            </div>
          )
        })}
      </div>
      <ImageForPokemonCard
        image={image}
        imageSize={100}
        type1={type1}
        type2={type2}
      />
      <div className='w-full bg-primaryColor flex flex-col items-start justify-between gap-y-1'>
        <Link href={`/pokemon/${number}`} className='w-full flex flex-row justify-center mb-2'>
          <ButtonPokemonCard text='Details' />
        </Link>
      </div>
    </div>
  )
}