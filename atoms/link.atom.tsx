import Link from "next/link";

interface LinkComponentProps {
  link: string;
  text: string;
}

export default function LinkComponent({
  link,
  text
}: Readonly<LinkComponentProps>) {
  return (
    <Link href={link} className="underline hover:border-secondaryColor hover:text-secondaryColor">
      <p>{text}</p>
    </Link>
  )
}