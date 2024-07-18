import Image from 'next/image';
import style from './pokemon_card.module.css';
import { IconReportAnalytics } from '@tabler/icons-react';
import { translateTypeToColor } from '@/services/translator.service';
import TypeIconComponent from '../type_icon.component';

export default function PokemonCardComponent({ number, pokemon, image, types }: { number: string, pokemon: string, image: string, types: { type: { name: string } }[] }) {

  const typesName: string[] = types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  return (
    <div className={`${style.card} p-[4px] w-[290px] h-[400px] bg-slate-700 relative hover:brightness-110 ease-in-out duration-100`}>
      <div
        className={`${style.card} bg-slate-200 w-full h-full shadow-lg p-2 flex flex-col justify-start`}
        style={{ background: `linear-gradient(to right bottom, ${translateTypeToColor(type1)}, ${type2 ? translateTypeToColor(type2) : translateTypeToColor(type1)}` }}
      >
        <div className='p-2 w-full bg-slate-700 flex flex-row justify-end items-center absolute top-0 left-0 h-[30px]'>
          <span className='text-[14px] text-white text-2xl font-bold'>#{number}</span>
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
        <span className='gap-1 flex flex-row items-center w-full justify-center text-xl font-bold'>
          {pokemon.toLocaleUpperCase()}
        </span>
        <div className='px-4 w-full bg-slate-700 flex flex-row justify-between items-center absolute bottom-0 left-0 h-[70px]'>
          <div className='flex flex-col gap-1 text-[]'>
            {typesName.map((type) => {
              return (
                <div key={type + '-' + number} className='flex flex-row items-center gap-1' style={{ color: translateTypeToColor(type) }}>
                  <TypeIconComponent type={type} />
                  <span
                    className='font-semibold'
                  >{type.toLocaleUpperCase()}</span>
                </div>
              )
            })}
          </div>
          <div className='px-2 py-1 h-auto rounded-lg flex flex-row items-center gap-1 bg-yellow-500 text-black font-semibold text-[14px] cursor-pointer border-2 border-slate-700 hover:border-white ease-in-out duration-200'>
            <IconReportAnalytics />
            <span>Details</span>
          </div>
        </div>
      </div>
    </div>
  )
}