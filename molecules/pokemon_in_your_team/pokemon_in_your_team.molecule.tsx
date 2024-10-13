import PrimaryButton from "@/atoms/primary_button.atom";
import SelectedMove from "@/atoms/selected_move.atom";
import TypeIconComponent from "@/atoms/type_icon.atom";
import { translateTypeToPrimaryColor } from "@/services/translator.service";
import { PokemonMemberType } from "@/types/pokemon.types";
import { IconCircleDashedCheck, IconList } from "@tabler/icons-react";
import style from "./pokemon_in_your_team.module.css";
import ImageForPokemonCard from "@/atoms/image_for_pokemon_card.atom";

interface PokemonInYourTeamProps {
  pokemonTeamSelected: PokemonMemberType,
  onClick: React.Dispatch<React.SetStateAction<PokemonMemberType | null | undefined>>
}

export default function PokemonInYourTeam({
  pokemonTeamSelected,
  onClick,
}: PokemonInYourTeamProps) {

  const typesName: string[] = pokemonTeamSelected?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  console.log(pokemonTeamSelected.selected_moves);


  return (
    <article className="flex flex-col">
      <div
        key={pokemonTeamSelected?.id}
        className={`${style.card} bg-primaryColor flex flex-col gap-y-4 p-2 text-white font-semibold`}
      >
        <div className="w-full flex justify-between pl-2">
          <p>#{pokemonTeamSelected?.id}</p>
          <p>{pokemonTeamSelected?.name.toUpperCase()}</p>
        </div>
        <div>
          <div className='flex gap-2 text-sm items-center w-full'>
            {typesName.map((type) => {
              return (
                <div key={type + '-' + pokemonTeamSelected?.id} className='flex flex-row items-center gap-1' style={{ color: translateTypeToPrimaryColor(type) }}>
                  <TypeIconComponent type={type} size={16} />
                  <span
                    className='font-semibold text-base'
                  >{type.toLocaleUpperCase()}</span>
                </div>
              )
            })}
          </div>
          <ImageForPokemonCard
            image={pokemonTeamSelected?.sprites.versions['generation-v']['black-white'].animated.front_default || '/'}
            imageSize={120}
            type1={type1}
            type2={type2}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-base pr-6">Selected moves ({pokemonTeamSelected?.selected_moves?.length} / 4):</span>
          <div className="flex flex-col gap-y-2 w-full">
            <SelectedMove
              number="1"
              selectedMove={pokemonTeamSelected?.selected_moves?.[0] ? true : false}
              moveItem={pokemonTeamSelected?.selected_moves?.[0]}
            />
            <SelectedMove
              number="2"
              selectedMove={pokemonTeamSelected?.selected_moves?.[1] ? true : false}
              moveItem={pokemonTeamSelected?.selected_moves?.[1]}
            />
            <SelectedMove
              number="3"
              selectedMove={pokemonTeamSelected?.selected_moves?.[2] ? true : false}
              moveItem={pokemonTeamSelected?.selected_moves?.[2]}
            />
            <SelectedMove
              number="4"
              selectedMove={pokemonTeamSelected?.selected_moves?.[3] ? true : false}
              moveItem={pokemonTeamSelected?.selected_moves?.[3]}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <PrimaryButton text="Select moves" icon={<IconList />} onClick={() => onClick(pokemonTeamSelected)} />
        </div>
      </div>
      {pokemonTeamSelected?.selected_moves?.length === 4 &&
        <div className={`${style.animation_notification} rounded-xl shadow-lg mt-2 w-full flex justify-center items-center py-4 gap-x-2 text-primaryColor bg-colorSuccess`}>
          <span className="w-fit rounded-lg">Ready for battle</span>
          <IconCircleDashedCheck />
        </div>
      }
    </article>
  )
}