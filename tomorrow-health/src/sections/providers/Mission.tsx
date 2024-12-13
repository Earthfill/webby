import Image from "next/image";
import missioni from '@/assets/images/missioni.svg';
import missionii from '@/assets/images/missionii.svg';
import missioniii from '@/assets/images/missioniii.svg';

export default function Mission() {
  return (
    <section>
      <div className="py-14 lg:pb-28 px-16 lg:px-24 xl:px-36 2xl:px-48 space-y-2">
        <div className="text-center text-3xl lg:text-4xl xl:text-6xl leading-tight">Our mission is to restore the home as a patient's primary point of care</div>
        <div className="text-lg text-center">We do that with:</div>
      </div>
      <div className="grid gap-y-20 px-5 py-5">
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={missioni} alt="we do image" className="rounded-2xl w-[600px] lg:justify-self-end" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
            <div className="text-3xl">Simplify your intake process</div>
            <div>Prescription intake, paperwork, and communication all in one place, keeping the process <b>transparent</b> and your team on the same page.</div>
          </div>
        </div>
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={missionii} alt="we do image" className="lg:order-2 rounded-2xl w-[600px]" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:order-1 lg:pl-24 xl:pl-48 2xl:pl-96 xl:justify-self-end">
            <div className="text-3xl">Focus on exceptional patient care</div>
            <div>Improve operational <b>efficiency</b> of end-to-end order processing, enabling you to maximize reimbursement and reinvest your time into other areas of your business.</div>
          </div>
        </div>
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={missioniii} alt="we do image" className="rounded-2xl w-[600px] lg:justify-self-end" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
            <div className="text-3xl">Highest-value supply</div>
            <div>We partner with high-value suppliers who thrive at the intersection of quality and cost savings, resulting in the best possible patient experience.</div>
          </div>
        </div>
      </div>
    </section>
  )
}