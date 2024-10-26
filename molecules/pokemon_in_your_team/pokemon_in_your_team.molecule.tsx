import PrimaryButton from "@/atoms/primary_button.atom";
import SelectedMove from "@/atoms/selected_move.atom";
import TypeIconComponent from "@/atoms/type_icon.atom";
import { translateTypeToPrimaryColor } from "@/services/translator.service";
import { PokemonMemberType } from "@/types/pokemon.types";
import { IconArrowLeft, IconArrowRight, IconCircleDashedCheck, IconList, IconTrash } from "@tabler/icons-react";
import style from "./pokemon_in_your_team.module.css";
import ImageForPokemonCard from "@/atoms/image_for_pokemon_card.atom";
import SecondaryButton from "@/atoms/secondary_button.atom";

interface PokemonInYourTeamProps {
  pokemonTeamSelected: PokemonMemberType;
  onClick: React.Dispatch<React.SetStateAction<PokemonMemberType | null | undefined>>;
  editingYourTeam: boolean;
  index: number;
  changePokemonOrderInTeam,
  deletePokemonInTeam,
  teamSize: number;
}

export default function PokemonInYourTeam({
  pokemonTeamSelected,
  onClick,
  editingYourTeam,
  index,
  changePokemonOrderInTeam,
  deletePokemonInTeam,
  teamSize,
}: PokemonInYourTeamProps) {

  const typesName: string[] = pokemonTeamSelected?.types.map((type) => type.type.name);
  const type1 = typesName?.[0];
  const type2 = typesName?.[1];

  const styleEditing = editingYourTeam ? "brightness-[0.2] opacity-90 pointer-events-none" : "";
  const styleImpossibleToMovePokemonLeft = index === 0  ? "pointer-events-none opacity-0" : ""
  const styleImpossibleToMovePokemonRight = index === (teamSize - 1) ? "pointer-events-none opacity-0" : ""
  const styleButtonsEditing = pokemonTeamSelected?.selected_moves?.length === 4 ? "top-[43.6%]" : "top-[50%]"

  return (
    <article
      className={`flex flex-col duration-200 ease-in-out relative gap-y-2`}
    >
      {editingYourTeam &&
        <div className="absolute top-2 z-10 w-full flex justify-center">
          <SecondaryButton icon={<IconTrash />} onClick={deletePokemonInTeam} />
        </div>
      }
      <div
        className={`${styleEditing} flex flex-col duration-200 ease-in-out relative gap-y-2`}
      >
        <div
          key={pokemonTeamSelected?.id}
          className={`${style.card} bg-primaryColor flex flex-col gap-y-4 p-2 text-primaryBackground font-semibold min-w-[250px]`}
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
            <span className="text-base">Selected moves ({pokemonTeamSelected?.selected_moves?.length} / 4):</span>
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
          <div className="rounded-xl shadow-lg mt-2 w-full flex justify-center items-center py-4 gap-x-2 text-primaryColor bg-colorSuccess">
            <span className="w-fit rounded-lg">Ready for battle</span>
            <IconCircleDashedCheck />
          </div>
        }
      </div>
      {editingYourTeam &&
        <div className={`${styleButtonsEditing} w-[95%] absolute flex justify-between left-[2.5%]`}>
          <div className={`${styleImpossibleToMovePokemonLeft}`}>
            <SecondaryButton icon={<IconArrowLeft />} onClick={() => changePokemonOrderInTeam(index, (index - 1))} />
          </div>
          <div className={`${styleImpossibleToMovePokemonRight}`}>
            <SecondaryButton icon={<IconArrowRight />} onClick={() => changePokemonOrderInTeam(index, (index + 1))} />
          </div>
        </div>
      }
    </article>
  )
}