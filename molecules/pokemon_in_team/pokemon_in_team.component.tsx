import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import { PokemonMemberType } from "@/types/pokemon.types";
import { IconSquare, IconSquareCheckFilled } from "@tabler/icons-react";
import style from "./pokemon_in_team.module.css";
import Image from "next/image"

export default function PokemonInTeam({ pokemon, addMoveInPokemon, deleteMoveInPokemon }: { pokemon: PokemonMemberType, addMoveInPokemon, deleteMoveInPokemon }) {

  const typesName: string[] = pokemon?.types.map((type) => type.type.name);
  const type = typesName?.[0];

  return (
    <div className={`${style.card} min-w-[400px] max-w-[400px] min-h-[100px] flex flex-col gap-6 text-white rounded-lg p-6 bg-primaryColor`}>
      <div className="w-full flex gap-x-2 font-semibold text-lg justify-between">
        <span>#{pokemon?.id}</span>
        <span>{pokemon?.name.toLocaleUpperCase()}</span>
      </div>
      <div className="w-full flex justify-center items-center py-1 rounded-lg border-4 relative"
        style={{ background: translateTypeToPrimaryColor(type), borderColor: translateTypeToSecondaryColor(type) }}
      >
        <Image
          src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default || '/'}
          alt='Pokemon image'
          width={80}
          height={0}
          className='w-[180px] h-[180px] z-20'
        />
        <div className="absolute opacity-50 rounded-full w-[180px] h-[180px]" style={{ background: translateTypeToSecondaryColor(type) }}></div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <span className="text-lg font-semibold">Selected moves ({pokemon?.selected_moves?.length} / 4):</span>
        <div className='flex gap-2 flex-wrap'>
          {pokemon?.selected_moves?.length > 0 ?
            pokemon.selected_moves?.map((move) => {
              return (
                <span
                  key={move?.name}
                  onClick={() => deleteMoveInPokemon(pokemon.id, move)}
                  className='text-primaryColor bg-secondaryColor text-sm rounded-full font-bold px-3 cursor-pointer hover:opacity-30 duration-200 ease-in-out'
                >
                  {move?.name.replaceAll('-', ' ').toLocaleUpperCase()}
                </span>
              )
            })
            :
            <span className="text-sm">Select any move</span>
          }
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-4">
        <span className="text-lg font-bold">All learnable moves:</span>
        <div className='grid grid-cols-2 w-full gap-y-2 p-3 rounded-lg'
          style={{ background: translateTypeToPrimaryColor(type), color: translateTypeToSecondaryColor(type) }}>
          {pokemon.moves?.map((move) => {
            return (
              <div key={move.name} className={`
                ${(pokemon?.selected_moves && pokemon?.selected_moves?.length > 3) || pokemon?.selected_moves.find((selected) => move.name === selected.name) ? 'line-through opacity-50 pointer-events-none' : ''}
                flex gap-x-2 cursor-pointer items-center
                `}
                onClick={() => addMoveInPokemon(pokemon.id, move)}
              >
                {pokemon?.selected_moves.find((pokemonMove) => pokemonMove.name === move.name) ?
                  <IconSquareCheckFilled color={translateTypeToSecondaryColor(type)} />
                  :
                  <IconSquare color={translateTypeToSecondaryColor(type)} />
                }
                <span
                  key={move?.name}
                  className="px-1 font-semibold text-sm"
                >
                  {move?.name.replaceAll('-', ' ').toLocaleUpperCase()}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}