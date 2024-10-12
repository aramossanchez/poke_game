import { translateTypeToSecondaryColor } from "@/services/translator.service";
import { ReactNode } from "react";

export default function StatisticsExplanationComponent({
  icon,
  type,
  label,
  text
}:{
  icon: ReactNode,
  type: string,
  label: string,
  text: string
}) {
  return (
    <div
      className='flex flex-row items-start gap-2'
      style={{ color: translateTypeToSecondaryColor(type) }}
    >
      <div className='flex flex-row items-center justify-end min-w-[250px]'>
        {icon}
        <span className='text-[20px]'>{label}:</span>
      </div>
      <span className='text-[18px] text-black'>{text}</span>
    </div>
  )
}