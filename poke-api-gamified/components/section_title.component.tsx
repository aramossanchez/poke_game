import { translateTypeToSecondaryColor } from "@/services/translator.service";

export default function SectionTitleComponent({ type = '', label = '' }) {
  return (
    <div className='w-full mb-24 flex flex-row items-center justify-around'>
      <hr className='w-[35%] h-[2px] border-0' style={{ backgroundColor: translateTypeToSecondaryColor(type) }} />
      <span
        className='text-[30px] font-semibold p-3'
        style={{ color: translateTypeToSecondaryColor(type), borderColor: translateTypeToSecondaryColor(type) }}
      >
        {label}
      </span>
      <hr className='w-[35%] h-[2px] border-0' style={{ backgroundColor: translateTypeToSecondaryColor(type) }} />
    </div>
  )
}