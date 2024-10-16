"use client";
interface PrimaryButtonProps {
  text: string,
  icon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function PrimaryButton({
  text = 'Button',
  icon,
  onClick = () => {},
}: PrimaryButtonProps) {

  const styleWithIcon = icon ? 'hover:gap-4 hover:px-3' : ''

  return (
    <button
      onClick={onClick}
      className={`${styleWithIcon} px-4 py-2 h-auto rounded-lg flex flex-row items-center gap-2 bg-secondaryColor text-titleColor font-semibold text-[14px] cursor-pointer border-2 border-primaryColor hover:opacity-80 ease-in-out duration-200`}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  )
}