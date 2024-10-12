'use client';

import HeaderLinkComponent from "@/atoms/header_link.atom";
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
    <header className='z-50 h-headerHeight flex flex-row items-center justify-between px-5 bg-secondaryBackground shadow-md sticky top-0 w-full'>
      <Image
        src='/images/logo.png'
        alt='Logo'
        width={75}
        height={35}
      />
      {/* PARTE WEB EN PC */}
      <article className='md:flex flex-row items-center gap-3 hidden'>
        <HeaderLinkComponent
          pathname={pathname}
          url='/'
          label='Home'
        />
        <HeaderLinkComponent
          pathname={pathname}
          url='/pokemon-list'
          label='Pokemon list'
        />
        <HeaderLinkComponent
          pathname={pathname}
          url='/your-team'
          label='Your team'
        />
      </article>
      {/* PARTE WEB EN MOVIL */}
      <div className='h-headerHeight w-full absolute top-0 left-0 flex flex-row justify-center items-center md:hidden'>
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
      <article ref={ref} className={`${opened ? 'top-[var(--headerHeight)] opacity-100' : 'top-0 opacity-0 pointer-events-none'} md:hidden flex-col w-full items-center gap-3 flex absolute  left-0 bg-secondaryBackground ease-in-out duration-150 shadow-md z-10`}>
        <HeaderLinkComponent
          pathname={pathname}
          url='/'
          label='Home'
        />
        <HeaderLinkComponent
          pathname={pathname}
          url='/pokemon-list'
          label='Pokemon list'
        />
        <HeaderLinkComponent
          pathname={pathname}
          url='/your-team'
          label='Your team'
        />
      </article>
    </header>
  )
}