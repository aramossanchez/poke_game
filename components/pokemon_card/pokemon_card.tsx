import Image from 'next/image';
import style from './pokemon_card.module.css';
import { IconReportAnalytics } from '@tabler/icons-react';
import { translateTypeToPrimaryColor } from '@/services/translator.service';
import TypeIconComponent from '../type_icon.component';
import { Span } from 'next/dist/trace';
import Link from 'next/link';
import PrimaryButton from '../primary_button.component';

export default function PokemonCardComponent({ number, pokemon, image, types }: { number: string, pokemon: string, image: string, types: { type: { name: string } }[] }) {

  const typesName: string[] = types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  return (
    <div className={`${style.card} p-[4px] w-[290px] h-[335px] bg-slate-700 relative hover:brightness-110 ease-in-out duration-100`}>
      <div
        className={`${style.card} bg-slate-200 w-full h-full shadow-lg p-2 flex flex-col justify-start`}
        style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1)}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
      >
        <div className='text-white text-xl font-bold p-2 pl-5 w-full bg-slate-700 flex flex-row justify-between items-center absolute top-0 left-0 h-[30px] gap-1'>
          <span>#{number}</span>
          <span>{pokemon.toLocaleUpperCase()}</span>
        </div>
        <Image
          src={image}
          alt='Pokemon sprite'
          width={300}
          height={300}
          className='z-10'
        />
        <div className='absolute w-[266px] h-[266px] flex flex-row justify-center items-center'>
          <div className='bg-slate-100 opacity-50 h-[200px] w-[200px] rounded-full shadow-md shadow-slate-600'></div>
        </div>
        <div className='px-4 w-full bg-slate-700 flex flex-row justify-between items-center absolute bottom-0 left-0 h-[70px]'>
          <div className='flex flex-col gap-1 text-[]'>
            {typesName.map((type) => {
              return (
                <div key={type + '-' + number} className='flex flex-row items-center gap-1' style={{ color: translateTypeToPrimaryColor(type) }}>
                  <TypeIconComponent type={type} />
                  <span
                    className='font-semibold'
                  >{type.toLocaleUpperCase()}</span>
                </div>
              )
            })}
          </div>
          <Link href={`/pokemon/${number}`}>
            <PrimaryButton text='Details' />
          </Link>
        </div>
      </div>
    </div>
  )
}