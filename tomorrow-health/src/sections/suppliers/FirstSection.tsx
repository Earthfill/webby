import Image from "next/image";
import supplier from '@/assets/images/supplier_legend.svg';
import certiii from '@/assets/images/certiii.svg';

export default function FirstSection() {
  return (
    <div className="alignElement">
      <div className="px-10 lg:px-28 xl:px-36 pt-20 bg-[#F0F1ED] rounded-2xl">
        <div className="grid md:grid-cols-2 md:pb-28 pb-10 gap-y-5">
          <div className="space-y-5 place-content-center">
            <div className="text-3xl">Tailored to supplier needs</div>
            <div className="text-lg">Tomorrow Health partners with high-quality home-based care suppliers to streamline intake, drive business growth, and provide insights to enable exceptional patient care.</div>
            <button className="button tracking-wider px-12 py-4">Learn more</button>
            <Image src={certiii} alt="cert image" className="w-36" />
          </div>
          <Image src={supplier} alt="provider legend image" />
        </div>
      </div>
    </div>
  )
}