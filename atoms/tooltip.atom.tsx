interface TooltipProps {
  children: React.ReactNode,
  text?: string
}

export default function Tooltip({
  children,
  text,
}: TooltipProps) {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <span className="whitespace-nowrap left-0 z-50 border-2 border-primaryColor text-sm hidden opacity-0 group-hover:block group-hover:opacity-100 duration-300 ease-in-out absolute top-[-40px] rounded-lg bg-secondaryColor text-primaryColor px-2 py-1">{text}</span>
    </div>
  )
}