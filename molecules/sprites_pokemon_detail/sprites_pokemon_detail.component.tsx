import { translateTypeToSecondaryColor } from '@/services/translator.service';
import { IconArrowBadgeLeftFilled, IconArrowBadgeRightFilled } from '@tabler/icons-react';
import Image from 'next/image';
import style from './sprites_pokemon_detail.module.css';

export default function SpritesPokemonDetailComponent({
  type = '',
  counter = 1,
  setCounter = (e: number) => { },
  array = [''],
  label = ''
}) {
  return (
    <div className='flex flex-row items-center'>
      <IconArrowBadgeLeftFilled
        size={40}
        color={translateTypeToSecondaryColor(type)}
        className={`${counter === 0 ? 'pointer-events-none opacity-0' : ''} cursor-pointer z-10`}
        onClick={() => setCounter(counter - 1)}
      />
      <div className='flex flex-col gap-4 items-center'>
        <Image
          key={counter + '-' + label}
          src={array[counter]}
          alt='Pokemon sprite normal'
          width={200}
          height={200}
          className={`${style.image} `}
        />
        <span className='text-xl font-semibold'>{label}</span>
      </div>
      <IconArrowBadgeRightFilled
        size={40}
        color={translateTypeToSecondaryColor(type)}
        className={`${counter === 2 ? 'pointer-events-none  opacity-0' : ''} cursor-pointer`}
        onClick={() => setCounter(counter + 1)}
      />
    </div>
  )
}