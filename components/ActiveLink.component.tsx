import Link from 'next/link';

export default function ActiveLinkComponent({pathname, url, label}: {pathname: string, url: string, label: string}) {
  return (
    <Link href={url} className={`${pathname === url ? 'bg-blue-400 text-yellow-200 pointer-events-none' : 'text-white'} font-bold p-3 hover:bg-blue-400 hover:text-yellow-200  hover:opacity-60 md:w-auto w-full text-center md:rounded-md rounded-none`}>
      <span>{label}</span>
    </Link>
  )
}