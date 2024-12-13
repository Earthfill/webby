import Image from "next/image";
import patienti from '@/assets/images/patienti.svg';
import patientii from '@/assets/images/patientii.svg';
import patientiii from '@/assets/images/patientiii.svg';
import patientiv from '@/assets/images/patientiv.svg';

export default function Legend() {
  return (
    <div className="bg-[#F0F1ED]">
      <div className="grid lg:grid-cols-2 rounded-2xl py-14 lg:py-32 px-5 lg:px-24">
        <h1 className="text-6xl leading-tight pb-8">
          Meet Tomorrow <br />
          Health
        </h1>
        <div className='lg:text-xl text-lg space-y-5'>
          <div>Tomorrow Health is a comprehensive solution that helps you get the home-based care you need, when you need it.</div>
          <div>We coordinate with best-in-class home-based care suppliers to make sure your orders are delivered with accuracy, speed, and exceptional service.</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 xl:mx-24 mx-5">
        <Image src={patienti} alt="couple" className="2xl:h-full 2xl:relative lg:h-[500px] rounded-[50px]" />
        <Image src={patientii} alt="old man" className="2xl:h-full 2xl:relative lg:h-[600px] rounded-[50px]" />
        <Image src={patientiii} alt="injured boy" className="2xl:h-full 2xl:relative lg:h-[350px] rounded-[50px]" />
        <Image src={patientiv} alt="pregnant woman" className="2xl:h-full 2xl:relative lg:h-[450px] rounded-[50px]" />
      </div>
    </div>
  )
}