import legend from '@/assets/images/legend.svg';
import legend_bottom from '@/assets/images/legend_background.svg';
import Image from 'next/image';

export default function Legend() {
  return (
    <div className='alignElement'>
      <div className="grid lg:grid-cols-2 bg-[#F0F1ED] rounded-2xl py-14 lg:py-32 px-5 lg:px-0 lg:pl-24 2xl:pl-36">
        <div className='lg:px-0 md:px-28 px-5 lg:text-start'>
          <h1 className="text-6xl leading-tight pb-12">
            Let&apos;s bring <br />
            healthcare <br />
            <span className="relative inline-block">
              <span className="relative z-0 inline-block">home</span>
              <svg width="200" height="82" viewBox="0 0 231 82" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 -left-5'>
                <path d="M94.945 2.74336C29.0725 -4.29867 -34.0977 43.8604 28.0639 66.8996C98.8179 93.1235 224.843 76.8399 228.772 47.4652C233.001 15.85 104.669 -5.45411 42.3014 21.7534" stroke="#50DCB7" strokeWidth="3.79883" className="stroke-[#50DCB7] stroke-2 fill-none" />
              </svg>
            </span>
          </h1>
          <div className='xl:w-[374px] 2xl:w-[574px] space-y-5'>
            <h3 className='text-3xl'>We&apos;re restoring the home as the primary place of care</h3>
            <h5 className='text-lg'>At Tomorrow Health, we build technology that improves the way home-based care is ordered, delivered, and paid for.</h5>
          </div>
          <button className='mt-8 button'>Learn More</button>
        </div>
        <div className='xl:absolute 2xl:right-36 xl:right-40 lg:right-28 hidden lg:block lg:pr-14 xl:pr-0'>
          <Image src={legend} alt="legend image" />
        </div>
      </div>
      <Image src={legend_bottom} alt='legend logo' className='w-full' />
    </div>
  );
};
