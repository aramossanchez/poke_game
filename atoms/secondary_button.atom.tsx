"use client";
interface SecondaryButtonProps {
  text?: string,
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SecondaryButton({
  text = '',
  icon,
  onClick = () => {},
}: SecondaryButtonProps) {

  const styleWithIcon = icon ? 'hover:gap-4 hover:px-3' : ''

  return (
    <button
    className={`${styleWithIcon} px-4 py-2 h-auto rounded-lg flex flex-row items-center gap-2 bg-primaryBackground text-titleColor font-semibold text-[14px] cursor-pointer border-2 border-secondaryColor hover:opacity-80 ease-in-out duration-200`}
    onClick={onClick}
    >
      {text &&
        <span>{text}</span>
      }
      {icon && icon}
    </button>
  )
}