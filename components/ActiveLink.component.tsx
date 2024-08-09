import Link from 'next/link';

export default function ActiveLinkComponent({pathname, url, label}: {pathname: string, url: string, label: string}) {
  return (
    <Link href={url} className={`${pathname === url ? 'bg-primaryColor text-secondaryColor pointer-events-none' : 'text-primarColor'} font-bold p-3 hover:bg-primaryColor hover:text-secondaryColor  hover:opacity-60 md:w-auto w-full text-center md:rounded-md rounded-none`}>
      <span>{label}</span>
    </Link>
  )
}