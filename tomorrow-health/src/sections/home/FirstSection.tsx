import Image from "next/image";
import solni from '@/assets/images/soln1.svg';
import solnii from '@/assets/images/soln2.svg';
import solniii from '@/assets/images/soln3.svg';
import solniv from '@/assets/images/soln4.svg';

export default function FirstSection() {
  return (
    <section className='text-center space-y-6 alignElement'>
      <div className='uppercase text-sm font-bold'>Our Solution</div>
      <div className='flex flex-wrap items-center justify-center gap-1 text-lg lg:text-3xl 2xl:mx-60'>
        <span className='textGray'>We connect</span> <span><Image src={solni} alt="i" className='w-8' /></span>
        providers, <span><Image src={solnii} alt="ii" className='w-8' /></span>
        health plans, <span className='textGray'>and</span> <span><Image src={solniii} alt="iii" className='w-8' /></span>
        home-based care suppliers, <span className='textGray'>ensuring</span> <span><Image src={solniv} alt="iv" className='w-8' /></span>
        patients <span className='textGray'>can access care where they want to be —</span>
        <span className='text-[#00E1B7]'>home.</span>
      </div>
    </section>
  )
}