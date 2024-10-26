"use client";

import { useState } from "react";

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
  const [clicking, setClicking] = useState<boolean>(false);

  const styleWithIcon = icon && text ? 'hover:gap-4 hover:px-3' : '';
  const styleClickedButton = clicking ? "scale-[0.93]" : "scale-1";

  return (
    <button
    className={`${styleWithIcon} ${styleClickedButton} px-4 py-2 h-auto rounded-lg flex flex-row items-center gap-2 bg-primaryBackground text-titleColor font-semibold text-[14px] cursor-pointer border-2 border-secondaryColor hover:opacity-80 ease-in-out duration-200`}
    onClick={onClick}
    onMouseDown={() => setClicking(true)}
    onMouseUp={() => setClicking(false)}
    >
      {text &&
        <span>{text}</span>
      }
      {icon && icon}
    </button>
  )
}