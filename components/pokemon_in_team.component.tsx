import { PokemonMemberType } from "@/types/pokemon.types";
import Image from "next/image"

export default function PokemonInTeam({ pokemon, addMoveInPokemon, deleteMoveInPokemon }: {pokemon: PokemonMemberType, addMoveInPokemon, deleteMoveInPokemon}) {

  return (
    <div className='min-w-[100px] min-h-[100px] flex flex-col gap-2'>
      <span>Name: {pokemon?.name.toLocaleUpperCase()}</span>
      <Image
        src={pokemon?.sprites?.other?.dream_world?.front_default || '/'}
        alt='Pokemon image'
        width={80}
        height={0}
        className='border-2 rounded-xl bg-secondaryColor border-primaryColor w-[80px] h-[80px] p-2'
      />
      <div className='flex flex-row items-start gap-10'>
        <div>
          <span>All learnable moves:</span>
          <div className='flex flex-col gap-1'>
            {pokemon.moves?.map((move) => {
              return (
                <span
                  key={move?.name}
                  className={`
                  ${(pokemon?.selected_moves && pokemon?.selected_moves?.length > 3) || pokemon?.selected_moves.find((selected) => move.name === selected.name) ? 'opacity-30 pointer-events-none' : ''}
                  border-2 hover:bg-white hover:border-black cursor-pointer px-1
                `}
                  onClick={() => addMoveInPokemon(pokemon.id, move)}
                >
                  {move?.name.replaceAll('-', ' ').toLocaleUpperCase()}
                </span>
              )
            })}
          </div>
        </div>
        <div className='flex flex-col'>
          <span>Selected moves ({pokemon?.selected_moves?.length} / 4):</span>
          <div className='flex flex-col gap-1'>
            {pokemon?.selected_moves?.length > 0 ?
              pokemon.selected_moves?.map((move) => {
                return (
                  <span
                    key={move?.name}
                    onClick={() => deleteMoveInPokemon(pokemon.id, move)}
                    className='border-2 px-3 cursor-pointer'
                  >
                    {move?.name.replaceAll('-', ' ').toLocaleUpperCase()}
                  </span>
                )
              })
              :
              <span>NONE</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}