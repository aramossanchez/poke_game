import Image from "next/image";

interface TestimonialsProps {
  message: string,
  author: string,
  profile: string
}

export default function TestimonialsComponent({
  message,
  author,
  profile
}: TestimonialsProps) {

  return (
    <div className="justify-between text-lg flex flex-col gap-y-4 p-4 shadow-lg rounded-lg bg-primaryBackground hover:translate-y-[-1rem] hover:shadow-2xl duration-300 ease-in-out">
      <p>{message}</p>
      <div className="flex items-center justify-between">
        <p className="font-semibold">{author}</p>
        <Image
          src={`/images/${profile}`}
          alt="Icono de entrenador"
          width={90}
          height={90}
          className="w-[60px] h-[60px] rounded-full border-2 border-tertiaryColor"
        />
      </div>
    </div>
  )
}