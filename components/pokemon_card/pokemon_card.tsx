import Image from 'next/image';
import style from './pokemon_card.module.css';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { translateTypeToPrimaryColor } from '@/services/translator.service';
import TypeIconComponent from '../type_icon.component';
import Link from 'next/link';
import PrimaryButton from '../primary_button.component';
import { addPokemonToTeam, pokemonExistInTeam } from '@/services/general.service';
import { useState } from 'react';

export default function PokemonCardComponent({ number, pokemon, image, types }: { number: string, pokemon: string, image: string, types: { type: { name: string } }[] }) {

  const typesName: string[] = types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];
  const [addedInTeam, setAddedInTeam] = useState(pokemonExistInTeam(number));

  return (
    <div className={`${style.card} p-[4px] w-[150px] h-[260px] bg-primaryColor relative hover:brightness-110 ease-in-out duration-100`}>
      <div
        className='absolute top-[136px] right-2 z-10 rounded-full'
        onClick={() => {addPokemonToTeam(number); setAddedInTeam(pokemonExistInTeam(number))}}
      >
        {!addedInTeam ?
          <IconPlus size={20} className='text-primaryColor hover:border-white ease-in-out duration-300 cursor-pointer bg-secondaryColor border-2 border-primaryColor rounded-full' />
        :       
          <IconMinus size={20} className='text-primaryColor hover:border-white ease-in-out duration-300 cursor-pointer bg-secondaryColor border-2 border-primaryColor rounded-full' />
        }
      </div>
      <div
        className={`${style.card} bg-slate-200 w-full h-full shadow-lg p-2 flex flex-col justify-start`}
        style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1)}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
      >
        <div className='text-white text-sm font-bold p-2 pl-5 w-full bg-primaryColor flex flex-row justify-between items-center absolute top-0 left-0 h-[30px] gap-1'>
          <span>#{number}</span>
          <span>{pokemon.toLocaleUpperCase()}</span>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[70%]'>
          <Image
            src={image}
            alt='Pokemon sprite'
            width={120}
            height={120}
            className='z-10'
          />
        </div>
        <div className='absolute w-[150px] h-[180px] flex flex-row justify-center items-center top-1 left-0'>
          <div className='bg-slate-100 opacity-50 h-[110px] w-[110px] rounded-full shadow-md shadow-slate-600'></div>
        </div>
        <div className='px-4 w-full bg-primaryColor flex flex-col items-start justify-between absolute bottom-0 left-0 h-[100px]'>
          <div className='flex flex-col gap-1 text-sm items-center justify-center w-full h-full ml-[-3px]'>
            {typesName.map((type) => {
              return (
                <div key={type + '-' + number} className='flex flex-row items-center gap-1' style={{ color: translateTypeToPrimaryColor(type) }}>
                  <TypeIconComponent type={type} size={12} />
                  <span
                    className='font-semibold'
                  >{type.toLocaleUpperCase()}</span>
                </div>
              )
            })}
          </div>
          <Link href={`/pokemon/${number}`} className='w-full flex flex-row justify-center mb-2'>
            <PrimaryButton text='Details' />
          </Link>
        </div>
      </div>
    </div>
  )
}