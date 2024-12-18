import { translateTypeToPrimaryColor } from "@/services/translator.service";
import TypeIconComponent from "../atoms/type_icon.atom";

export default function TypeTagComponent({ type }: { type: string }) {
  return (
    <div className='flex flex-row items-center gap-1 bg-black px-2 py-1 rounded-md' style={{ color: translateTypeToPrimaryColor(type) }}>
      <TypeIconComponent type={type} />
      <span className='font-semibold'>{type.toLocaleUpperCase()}</span>
    </div>
  )
}