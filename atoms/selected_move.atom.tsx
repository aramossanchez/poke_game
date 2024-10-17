import { translateTypeToPrimaryColor, translateTypeToSecondaryColor } from "@/services/translator.service";
import { PokemonMovementInfoType } from "@/types/pokemon.types";
import TypeIconComponent from "./type_icon.atom";

interface SelectedMoveProps {
  number: string;
  selectedMove: boolean;
  moveItem?: PokemonMovementInfoType;
}

export default function SelectedMove({
  number,
  selectedMove = false,
  moveItem,
}: SelectedMoveProps) {
  const type = moveItem?.type.name;

  const styleMove = type ? {
    backgroundColor: translateTypeToPrimaryColor(type),
    color: translateTypeToSecondaryColor(type)
  } :
    {};

  const styleIcon = type ? {
    color: translateTypeToPrimaryColor(type)
  } :
    {};

  return (
    <div className="flex items-center gap-x-2 w-full">
      <span className="border-2 border-primaryBackground rounded-full min-w-8 min-h-8 flex items-center justify-center">{number}</span>
      <span>-</span>
      <div className="w-full flex items-center justify-between">
        <span
          className="px-2 py-1 rounded-full text-sm"
          style={styleMove}
        >
          {selectedMove ? moveItem?.name.replaceAll('-', ' ').toLocaleUpperCase() : "EMPTY"}
        </span>
        <div style={styleIcon}>
          <TypeIconComponent type={type} />
        </div>
      </div>
    </div>
  )
}