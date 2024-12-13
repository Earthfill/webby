import FirstSection from '@/sections/home/FirstSection';
import Founder from '@/components/Founder';
import FourthSection from '@/sections/home/FourthSection';
import Legend from '@/sections/home/Legend';
import SecondSection from '@/sections/home/SecondSection';
import Sponsor from '@/sections/home/Sponsor';
import ThirdSection from '@/sections/home/ThirdSection';

export default function Home() {
  return (
    // <div className="font-[family-name:var(--font-geist-sans)]">
    <div className='lg:space-y-20 space-y-10'>
      <Legend />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Sponsor />
      <Founder />
    </div>
  );
}
