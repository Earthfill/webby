import comps from '@/assets/images/comps.svg';
import Image from 'next/image';

export default function ThirdSection() {
  return (
    <div className='alignElement px-10 lg:px-28 xl:px-36'>
      <div className="grid md:grid-cols-2 md:pb-28 pb-10 gap-y-5">
        <div className='text-6xl'>Best-inrclass technology</div>
        <div className='text-lg'>Our solution powers the home-based care industry by improving patient outcomes, saving providers time, and delivering high-quality care.</div>
      </div>
      <Image src={comps} alt="comp image" className='w-full' />
    </div>
  )
}