import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import { PokemonMemberType, PokemonMovementInfoType } from "@/types/pokemon.types";
import { IconInfoCircle, IconInfoCircleFilled, IconSquare, IconSquareCheckFilled, IconX } from "@tabler/icons-react";
import style from "./modal_select_pokemon_moves.module.css";
import Image from "next/image"
import TypeIconComponent from "@/atoms/type_icon.atom";
import PrimaryButton from "@/atoms/primary_button.atom";
import CloseModalButton from "@/atoms/close_modal_button.atom";
import { useState } from "react";
import ImageForPokemonCard from "@/atoms/image_for_pokemon_card.atom";

export default function ModalSelectPokemonMoves({
  pokemon,
  addMoveInPokemon,
  deleteMoveInPokemon,
  closeModal }: { pokemon: PokemonMemberType, addMoveInPokemon, deleteMoveInPokemon, closeModal }) {

  const typesName: string[] = pokemon?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  const styleCheckboxAllSelected = (move: PokemonMovementInfoType) =>
    pokemon?.selected_moves &&
      pokemon?.selected_moves?.length > 3 &&
      !pokemon?.selected_moves.find((selected) => move.name === selected.name)
      ? 'opacity-40 pointer-events-none cursor-default'
      : '';

  const [showMoveInformation, setShowMoveInformation] = useState<string | null>();


  return (
    <article
      className="flex items-center justify-center w-full h-screen absolute top-0 left-0 z-50 bg-modalBackground"
      onClick={closeModal}
    >
      <div
        className={`${style.card} col-span-1 w-[500px] min-h-[100px] flex flex-col gap-6 text-white rounded-lg px-6 py-4 bg-primaryColor`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex gap-x-2 font-semibold text-2xl justify-between">
          <span>#{pokemon?.id}</span>
          <span>{pokemon?.name.toLocaleUpperCase()}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className='flex gap-1 text-sm items-center w-full'>
            {typesName.map((type) => {
              return (
                <div key={type + '-' + pokemon?.id} className='flex flex-row items-center gap-1' style={{ color: translateTypeToPrimaryColor(type) }}>
                  <TypeIconComponent type={type} size={20} />
                  <span
                    className='font-semibold text-xl'
                  >{type.toLocaleUpperCase()}</span>
                </div>
              )
            })}
          </div>
          <ImageForPokemonCard
            image={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default || '/'}
            imageSize={180}
            type1={type1}
            type2={type2}
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <span className="text-xl font-semibold">Selected moves ({pokemon?.selected_moves?.length} / 4):</span>
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
              <span className="text-sm">No moves selected</span>
            }
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <span className="text-xl font-bold">All learnable moves:</span>
          <div className={`${style.moves_list} grid grid-cols-1 w-full gap-y-4 p-3 rounded-lg max-h-52 overflow-y-auto`}
            style={{ background: translateTypeToPrimaryColor(type1), color: translateTypeToSecondaryColor(type1) }}>
            {pokemon.moves?.map((move) => {
              return (
                <>
                  <div
                    key={move.name}
                    className="flex items-center justify-between"
                  >
                    <div
                      className={`${styleCheckboxAllSelected(move)} basis-2/3 flex gap-x-2 cursor-pointer items-center opacity-100`}
                      onClick={() => pokemon.selected_moves.find((pokeMove) => pokeMove.name === move.name) ? deleteMoveInPokemon(pokemon.id, move) : addMoveInPokemon(pokemon.id, move)}
                    >
                      {pokemon?.selected_moves.find((pokemonMove) => pokemonMove.name === move.name) ?
                        <IconSquareCheckFilled color={translateTypeToSecondaryColor(type1)} />
                        :
                        <IconSquare color={translateTypeToSecondaryColor(type1)} />
                      }
                      <span
                        key={move?.name}
                        className="px-1 font-semibold text-sm"
                      >
                        {move?.name.replaceAll('-', ' ').toLocaleUpperCase()}
                      </span>
                    </div>
                    <button
                      className="cursor-pointer"
                      style={{ color: translateTypeToSecondaryColor(type1) }}
                      onClick={() => showMoveInformation === move.name ? setShowMoveInformation(null) : setShowMoveInformation(move.name)}
                    >
                      {showMoveInformation === move.name ? <IconInfoCircleFilled /> : <IconInfoCircle />}
                    </button>
                  </div>
                  {showMoveInformation === move.name &&
                    <div
                      className="flex flex-col gap-y-1 p-2 my-2 border-2 rounded-lg"
                      style={{ borderColor: translateTypeToSecondaryColor(type1) }}
                    >
                      <div
                        className='bg-black w-fit text-sm border-2 font-semibold px-2 py-1 rounded-md flex flex-row items-center justify-center gap-1'
                        style={{ borderColor: translateTypeToPrimaryColor(move?.type?.name), color: translateTypeToPrimaryColor(move?.type?.name) }}
                      >
                        <TypeIconComponent size={18} type={move?.type?.name || ''} />
                        <span>{move?.type?.name.toLocaleUpperCase()}</span>
                      </div>
                      <span>{move?.flavor_text_entries?.find((text) => text?.language?.name === 'en')?.flavor_text.replaceAll('SPCL.DEF', 'special defense').replaceAll('SPEED', 'speed').replaceAll('ATTACK', 'attack').replaceAll('Sp. Atk', 'special attack').replaceAll('DEFENSE', 'defense')}</span>
                    </div>
                  }
                </>
              )
            })}
          </div>
        </div>
        <div className="flex w-full justify-center">
          <PrimaryButton text="Close" onClick={closeModal} />
        </div>
      </div>
    </article>
  )
}