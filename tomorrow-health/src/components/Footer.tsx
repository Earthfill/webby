'use client';

import logo from '@/assets/images/logo_inverted.svg';
import { paths } from '@/paths';
import Image from "next/image";
import Link from "next/link";
import twitter from '@/assets/images/twitter.svg';
import facebook from '@/assets/images/facebook.svg';
import instagram from '@/assets/images/instagram.svg';
import linkedin from '@/assets/images/linkedin.svg';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className={`${pathname === '/login' ? 'hidden' : 'bg-[#002334] pt-20 pb-96 h-full text-white px-10 lg:px-28 xl:px-36'}`}>
      <div className='flex lg:flex-col items-center justify-center lg:gap-12 gap-28 border-b border-b-[#5D7179] pb-12'>
        <Link href={paths.home()} className='flex items-center gap-2'>
          <Image src={logo} alt="logo" />
          <div className='leading-none'>Tomorrow <br /> Health</div>
        </Link>
        <button className="button h-fit">Contact us</button>
      </div>
      <div className='pt-10 pb-5 text-lg lg:text-3xl xl:text-6xl'>Let&apos;s bring healthcare home</div>
      <div className='text-[#99A8AF] text-sm space-y-1'>
        <div>217 Broadway, Floor 9, New York, NY 10007</div>
        <div>844-402-4344</div>
        <div>support@tomorrowhealth.com</div>
      </div>
      <div className='flex gap-4 pt-5 pb-10'>
        <Image src={twitter} alt='twiter' className='rounded-full' />
        <Image src={facebook} alt='facebook' className='rounded-full' />
        <Image src={instagram} alt='instagram' className='rounded-full' />
        <Image src={linkedin} alt='linkedin' className='rounded-full' />
      </div>
      <div className='grid xl:grid-cols-5 grid-cols-4 gap-x-8 gap-y-1 text-sm font-semibold [&>*]:h-12'>
        <div className='space-y-4'>
          <div className='text-[#99A8AF] text-xs font-normal'>PATIENTS</div>
          <div>Patient Info</div>
          <div>Pay my Bill</div>
          <div>Patient Bill of Rights</div>
        </div>
        <div className='space-y-4'>
          <div className='text-[#99A8AF] text-xs font-normal'>PARTNERS</div>
          <div>Providers</div>
          <div>Suppliers</div>
          <div>Health Plans</div>
        </div>
        <div className='space-y-4'>
          <div className='text-[#99A8AF] text-xs font-normal'>COMPANY</div>
          <div>Blog</div>
          <div>Support</div>
          <div>Careers</div>
        </div>
        <div className='space-y-4'>
          <div className='text-[#99A8AF] text-xs font-normal'>LEGAL</div>
          <div>Supplier Standards</div>
          <div>HIPAA Notice</div>
          <div>Privacy Policy</div>
        </div>
        <div className='xl:pt-0 pt-44 space-y-4 text-xs xl:col-span-1 col-span-4'>
          <div className='uppercase text-[#99A8AF]'>Subscribe For the latest updates</div>
          <form className='space-y-6'>
            <div className='grid gap-1'>
              <label>First name<span className='text-red-500'>*</span></label>
              <input className='text-black pl-2 xl:w-64 w-full h-10 rounded-lg' />
            </div>
            <div className='grid gap-1'>
              <label>Last name</label>
              <input className='text-black pl-2 xl:w-64 w-full h-10 rounded-lg' />
            </div>
            <div className='grid gap-1'>
              <label>Email<span className='text-red-500'>*</span></label>
              <input className='text-black pl-2 xl:w-64 w-full h-10 rounded-lg' />
            </div>
            <button className='button bg-white rounded-lg px-6'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
