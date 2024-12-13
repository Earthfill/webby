import founder from '@/assets/images/founder.svg';
import Image from "next/image";

export default function Founder() {
  return (
    <div className='lg:grid lg:grid-cols-2 flex flex-col-reverse bg-[#F7F7F7] pt-20 lg:pt-32'>
      <div className='relative'>
        <Image src={founder} alt='founder' className='w-fit'/>
        <div className='absolute bottom-20 left-20'>
          <div className='font-semibold'>Vijay Kedar</div>
          <div>Tomorrow Health&apos;s Co-Founder and CEO</div>
        </div>
      </div>
      <div className='text-center lg:text-start lg:items-start items-center flex flex-col justify-center lg:pr-36 lg:pl-0 px-24 space-y-7'>
        <div className='text-3xl'>&#34;Managing my mother&apos;s recovery at home was the inspiration for Tomorrow Health.&#34;</div>
        <div>Learn about the first-hand experience Vijay Kedar had with home-based care, and how it compelled him to found Tomorrow Health.</div>
        <button className="button w-fit">Read Story</button>
      </div>
    </div>
  )
}