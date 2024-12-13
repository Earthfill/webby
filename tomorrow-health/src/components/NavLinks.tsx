'use client';

import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import logo_small from '@/assets/images/home_small.svg';
import { links } from '@/data';
import { Headset, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/paths';
import { usePathname } from 'next/navigation';

function BigNavLinks() {
  return (
    <div className='hidden lg:flex items-center justify-between w-full pt-6 2xl:px-16 font-semibold alignElement'>
      <Link href={paths.home()} className='flex items-center gap-2'>
        <Image src={logo} alt="logo" className='lg:w-8 xl:w-full' />
        <div className='leading-none lg:text-xs xl:text-base'>Tomorrow <br /> Health</div>
      </Link>
      <div className='flex lg:gap-6 xl:gap-12r'>
        {links.map(({ id, name, path }) => (
          <Link href={path} key={id} className={`${id === 5 && 'border-l border-l-[#99A7AE] px-6'} hover:text-gray-600`}>
            {name}
          </Link>
        ))}
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center hover:text-gray-600'><Headset /> (844)402-4344</div>
        <Link href={paths.login()} className='border rounded-full w-fit px-8 py-2 hover:text-gray-600'>Login</Link>
      </div>
    </div>
  )
}

function SmallNavLinks() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle && 'bg-[#50DCB7] h-screen'} w-full absolute z-10 lg:hidden px-8 py-6 font-semibold transition-all duration-500 ease-in-out`}>
      <div className='flex items-center justify-between'>
        <Link href={paths.home()} onClick={() => setToggle(false)}>
          <Image src={logo_small} alt="" />
        </Link>
        <div className='flex items-center gap-5'>
          <Link href={paths.login()} className='border rounded-full w-fit px-8 py-2 hover:text-gray-600'>Login</Link>
          <div className='relative right-0 cursor-pointer' onClick={() => setToggle(!toggle)}>
            {!toggle ? <Menu size={20} /> : <X size={20} />}
          </div>
        </div>
      </div>

      {toggle &&
        <div className='grid gap-y-4 py-8'>
          {links.map(({ id, name, path }) => (
            <Link 
              href={path} 
              key={id} 
              onClick={() => setToggle(false)}
              className='border-b h-10 last-of-type:border-none list-none cursor-pointer hover:text-gray-600'
            >
              {name}
            </Link>
          ))}
          <div className='flex items-center hover:text-gray-600'><Headset /> (844)402-4344</div>
        </div>
      }
    </div>
  )
}


export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className={`${pathname === '/login' ? 'hidden' : 'pb-24 lg:pb-10'}`}>
      <BigNavLinks />
      <SmallNavLinks />
    </div>
  )
}
