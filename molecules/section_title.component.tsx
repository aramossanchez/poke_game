import { translateTypeToSecondaryColor } from "@/services/translator.service";

export default function SectionTitleComponent({ type = '', label = '' }) {
  return (
    <div className='w-full mb-20 flex flex-row items-center justify-around'>
      <hr className='min-[1280px]:w-[35%] w-[30%] h-[2px] border-0' style={{ backgroundColor: translateTypeToSecondaryColor(type) }} />
      <span
        className='text-[30px] font-semibold p-3'
        style={{ color: translateTypeToSecondaryColor(type), borderColor: translateTypeToSecondaryColor(type) }}
      >
        {label}
      </span>
      <hr className='min-[1280px]:w-[35%] w-[30%] h-[2px] border-0' style={{ backgroundColor: translateTypeToSecondaryColor(type) }} />
    </div>
  )
}