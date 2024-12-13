import Image from "next/image";
import legend from '@/assets/images/plans_legend.svg';
import legend_bottom from '@/assets/images/legend_background.svg';

export default function Legend() {
  return (
    <div className='alignElement'>
      <div className="grid lg:grid-cols-2 bg-[#F0F1ED] rounded-2xl py-14 lg:py-32 px-5 lg:px-0 lg:pl-24 2xl:pl-36">
        <div className='lg:px-0 md:px-28 px-5 lg:text-start'>
          <h3 className="uppercase font-semibold">For Health Plans</h3>
          <h1 className="text-6xl leading-tight pb-6">
            Bringing
            <span className="relative inline-block ml-3">
              <span className="relative z-0 inline-block">value</span>
              <svg width="200" height="82" viewBox="0 0 231 82" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 -left-5'>
                <path d="M94.945 2.74336C29.0725 -4.29867 -3.0977 43.8604 28.0639 66.8996C98.8179 93.1235 224.843 76.8399 180.772 27.4652C233.001 15.85 104.669 -5.45411 42.3014 21.7534" stroke="#50DCB7" strokeWidth="3.79883" className="stroke-[#50DCB7] stroke-2 fill-none" />
              </svg>
            </span>
            <br />to home-based care
          </h1>
          <div className='xl:w-[374px] 2xl:w-[574px]'>
            <h5 className='text-xl'>Tomorrow Health partners with health plans to rewire the fragmented home-based care ecosystem with technology.</h5>
          </div>
        </div>
        <div className='lg:absolute 2xl:right-36 xl:right-52 lg:right-28 hidden lg:block'>
          <Image src={legend} alt="legend image" className="rounded-3xl w-80" />
        </div>
      </div>
      <Image src={legend_bottom} alt='legend logo' className='w-full' />
    </div>
  )
}