interface FeatureInfoProps {
  icon: JSX.Element;
  title: string,
  subtitle: string,
  hoverEffect?: boolean
}

export default function FeatureInfoComponent({
  icon,
  title,
  subtitle,
  hoverEffect = false
}: FeatureInfoProps) {

  const styleHoverContainer = hoverEffect ? 'duration-300 ease-in-out hover:bg-primaryBackground group hover:scale-105' : '';
  const styleHoverIcon = hoverEffect ? 'group-hover:animate-bounce' : '';

  return (
    <div className={`${styleHoverContainer} flex flex-col gap-y-3 justify-center items-center px-4 py-8 rounded-lg`}>
      <div className={`${styleHoverIcon} p-4 w-fit rounded-full bg-secondaryColor`}>
        {icon}
      </div>
      <h3 className="text-center">{title}</h3>
      <h5 className="text-center">{subtitle}</h5>
    </div>
  )
}