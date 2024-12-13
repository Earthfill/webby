import Image from "next/image";
import benefiti from '@/assets/images/benefiti.svg';
import benefitii from '@/assets/images/benefitii.svg';
import benefitiii from '@/assets/images/benefitiii.svg';

export default function Benefit() {
  return (
    <section>
      <div className="text-center text-3xl lg:text-4xl xl:text-6xl leading-tight py-14 lg:pb-28 px-16 lg:px-24 xl:px-36 2xl:px-48">
        Benefits of working with Tomorrow Health
      </div>
      <div className="grid gap-y-20 px-5 py-5">
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={benefiti} alt="we do image" className="rounded-2xl w-[600px] lg:pl-36 2xl:pl-0 lg:justify-self-end" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
            <div className="text-3xl">A better patient experience</div>
            <div>We remain in communication with your patients, ensuring that they receive home-based care as ordered and understand how to use it. <b>97%</b> of patients start care on time. Patients rate us a <b>9.5 out of 10.</b></div>
          </div>
        </div>
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={benefitii} alt="we do image" className="lg:order-2 rounded-2xl w-[600px] lg:pr-36 2xl:pl-0" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:order-1 lg:pl-24 xl:pl-48 2xl:pl-96 xl:justify-self-end">
            <div className="text-3xl">More time with patients</div>
            <div>A technology-enabled order process saves you time and ensures transparency between referring providers, suppliers, and health plans.</div>
          </div>
        </div>
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={benefitiii} alt="we do image" className="rounded-2xl w-[600px] lg:justify-self-end lg:pl-36 2xl:pl-0" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
            <div className="text-3xl">Highest-value supply</div>
            <div>We partner with high-value suppliers who thrive at the intersection of quality and cost savings, resulting in the best possible patient experience.</div>
          </div>
        </div>
      </div>
    </section>
  )
}