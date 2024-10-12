import { IconReportAnalytics } from "@tabler/icons-react";

export default function ButtonPokemonCard({ text = 'Button' }) {
  return (
    <button className='px-2 py-1 h-auto rounded-lg flex flex-row items-center gap-1 bg-secondaryColor text-titleColor font-semibold text-[14px] cursor-pointer border-2 border-primaryColor hover:border-white ease-in-out duration-200'>
      <IconReportAnalytics />
      <span>{text}</span>
    </button>
  )
}