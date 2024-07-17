'use client';

import ActiveLinkComponent from "@/components/ActiveLink.component";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useHeaderComponent from "./header.hook";
import style from './header.module.css';
import { useEffect, useRef } from "react";

export default function HeaderComponent() {
  
  
  const {
    opened,
    setOpened    
  } = useHeaderComponent();
  
  const pathname = usePathname();
  
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {

    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        setOpened(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
    // eslint-disable-next-line
  }, [ref]);

  return (
    <header className='h-[80px] flex flex-row items-center justify-between px-5 bg-yellow-50 relative shadow-md'>
      <Image
        src='/images/logo.png'
        alt='Logo'
        width={100}
        height={50}
      />
      {/* PARTE WEB EN PC */}
      <article className='md:flex flex-row items-center gap-3 hidden'>
        <ActiveLinkComponent
          pathname={pathname}
          url='/'
          label='Home'
        />
        <ActiveLinkComponent
          pathname={pathname}
          url='/pokemon-list'
          label='Pokemon list'
        />
        <ActiveLinkComponent
          pathname={pathname}
          url='/your-team'
          label='Your team'
        />
      </article>
      {/* PARTE WEB EN MOVIL */}
      <div className='h-[80px] w-full absolute top-0 left-0 flex flex-row justify-center items-center md:hidden'>
        {opened ?
          <IconX
            className={`${style.icon} cursor-pointer`}
            onClick={() => setOpened(false)}
          />
          :
          <IconMenu2
            className={`${style.icon} cursor-pointer`}
            onClick={() => setOpened(true)}
          />
        }
      </div>
      <article ref={ref} className={`${opened ? 'top-[80px] opacity-100' : 'top-[60px] opacity-0 pointer-events-none'} md:hidden flex-col w-full items-center gap-3 flex absolute  left-0 bg-yellow-100 ease-in-out duration-150 shadow-md `}>
        <ActiveLinkComponent
          pathname={pathname}
          url='/'
          label='Home'
        />
        <ActiveLinkComponent
          pathname={pathname}
          url='/pokemon-list'
          label='Pokemon list'
        />
        <ActiveLinkComponent
          pathname={pathname}
          url='/your-team'
          label='Your team'
        />
      </article>
    </header>
  )
}