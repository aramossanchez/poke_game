"use client";
interface SpecialButtonProps {
  icon: JSX.Element;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SpecialButton({
  icon,
  text,
  onClick = () => { },
}: SpecialButtonProps) {

  return (
    <button
      onClick={onClick}
      className="animate-wiggle hover:animate-none group hover:gap-x-2 p-2 h-auto rounded-full flex flex-row items-center bg-tertiaryColor text-primaryBackground font-semibold cursor-pointer hover:opacity-80 ease-in-out duration-200"
    >
      {icon}
      {text &&
        <span
          className="text-[0px] group-hover:text-base duration-200 ease-in-out group-hover:pr-2"
        >
          {text}
        </span>
      }
    </button>
  )
}