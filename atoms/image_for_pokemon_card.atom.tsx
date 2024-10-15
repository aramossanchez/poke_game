import { translateTypeToPrimaryColor } from "@/services/translator.service";
import Image from "next/image";

// interface SelectedMoveProps {
//   number: string;
//   selectedMove: boolean;
//   moveItem?: PokemonMovementInfoType;
// }

// export default function SelectedMove({
//   number,
//   selectedMove = false,
//   moveItem,
// }: SelectedMoveProps) {

interface ImageForPokemonCardProps {
  image: string,
  imageSize: number;
  type1: string;
  type2?: string;
}

export default function ImageForPokemonCard({
  image,
  imageSize,
  type1,
  type2,
}: ImageForPokemonCardProps) {
  return (
    <div className="w-full flex justify-center items-center py-4 relative"
      style={{ background: `linear-gradient(to right bottom, ${translateTypeToPrimaryColor(type1)}, ${type2 ? translateTypeToPrimaryColor(type2) : translateTypeToPrimaryColor(type1)}` }}
    >
      <Image
        src={image}
        alt='Pokemon image'
        width={80}
        height={0}
        className='z-20'
        style={{ width: imageSize, height: imageSize }}
      />
      <div
        className="absolute bg-slate-100 opacity-50 shadow-md shadow-slate-600 rounded-full"
        style={{ width: imageSize, height: imageSize }}
      ></div>
    </div>
  )
}