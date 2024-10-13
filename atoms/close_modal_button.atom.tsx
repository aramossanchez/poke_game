import { IconX } from "@tabler/icons-react"

interface CloseModalButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CloseModalButton({
  onClick
}: CloseModalButtonProps) {

  return (
    <button
      onClick={onClick}
      className='bg-secondaryColor w-fit border-2 border-primaryColor rounded-se-lg rounded-es-md hover:opacity-80 ease-in-out duration-200'>
      <IconX color={"var(--primaryColor)"} size={22}/>
    </button>
  )
}