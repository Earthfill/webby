import bond from '@/assets/images/bond.svg';
import andreessen from '@/assets/images/andreessen.svg';
import obvious from '@/assets/images/obvious.svg';
import sound from '@/assets/images/sound.svg';
import box from '@/assets/images/box_group.svg';
import Image from 'next/image';

export default function Sponsor() {
  return (
    <section className='alignElement px-10 lg:px-28 xl:px-36 2xl:pt-48 lg:pt-36 pt-2 space-y-14'>
      <div className='text-center text-3xl'>Tomorrow Health is backed by</div>
      <div className='xl:flex xl:justify-between grid grid-cols-2 gap-14 mx-auto w-fit xl:w-full'>
        <Image src={bond} alt='bond logo' />
        <Image src={andreessen} alt='andreessen logo' />
        <Image src={obvious} alt='obvious logo' />
        <Image src={sound} alt='sound logo' />
        <Image src={box} alt='box group logo' />
      </div>
    </section>
  )
}