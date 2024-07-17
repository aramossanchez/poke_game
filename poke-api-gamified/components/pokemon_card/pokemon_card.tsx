import style from './pokemon_card.module.css';

export default function PokemonCardComponent({ pokemon }: { pokemon: string }) {
  return (
    <div className={`${style.card} p-1 w-[290px] h-[480px] bg-black`}>
      <div className={`${style.card} bg-red-200 w-full h-full shadow-lg p-2 flex flex-col justify-between`}>
        <span>{pokemon}</span>
      </div>
    </div>
  )
}