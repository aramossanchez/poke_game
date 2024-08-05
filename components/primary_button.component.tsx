import { IconReportAnalytics } from "@tabler/icons-react";

export default function PrimaryButton({ text = 'Button' }) {
  return (
    <div className='px-2 py-1 h-auto rounded-lg flex flex-row items-center gap-1 bg-yellow-500 text-black font-semibold text-[14px] cursor-pointer border-2 border-slate-700 hover:border-white ease-in-out duration-200'>
      <IconReportAnalytics />
      <span>{text}</span>
    </div>
  )
}