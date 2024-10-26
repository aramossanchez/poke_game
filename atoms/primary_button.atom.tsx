"use client";

import { useState } from "react";

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
  const [clicking, setClicking] = useState<boolean>(false);

  const styleWithIcon = icon ? 'hover:gap-x-4 hover:px-3' : '';
  const styleClickedButton = clicking ? "scale-[0.93]" : "scale-1";

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setClicking(true)}
      onMouseUp={() => setClicking(false)}
      className={`${styleWithIcon} ${styleClickedButton} px-4 py-2 h-auto rounded-lg flex flex-row items-center gap-x-2 bg-secondaryColor text-titleColor font-semibold text-[14px] cursor-pointer border-2 border-primaryColor hover:opacity-80 ease-in-out duration-200`}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  )
}