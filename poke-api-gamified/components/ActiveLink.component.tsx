import Link from "next/link";

export default function ActiveLinkComponent({pathname, url, label}: {pathname: string, url: string, label: string}) {
  return (
    <Link href={url} className={`${pathname === url ? 'bg-blue-500 text-yellow-300 pointer-events-none' : ''} font-bold p-3 hover:bg-blue-500 hover:text-yellow-300 hover:opacity-60 md:w-auto w-full text-center md:rounded-md rounded-none`}>
      <span>{label}</span>
    </Link>
  )
}