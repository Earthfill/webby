import Image from "next/image";
import outcome from '@/assets/images/outcomes.svg';

export default function FirstSection() {
  return (
    <section className="py-14 lg:pb-28">
      <div className="grid gap-y-20 px-5 py-5">
        <div className="space-y-6 grid lg:grid-cols-2 2xl:gap-0 lg:gap-16 place-items-center">
          <Image src={outcome} alt="outcome image" className="rounded-2xl w-[600px] lg:justify-self-end" />
          <div>
            <div className="space-y-5 px-8 md:px-36 lg:px-12 xl:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
              <div className="text-3xl">Proven patient outcomes with zero operational lift</div>
              <div>Our offering delivers value quickly, powered by transformative technology.</div>
            </div>
            <div className="flex flex-col gap-y-4 py-2 px-8 md:px-36 lg:px-12 xl:px-36">
              <div className="grid grid-cols-12">
                <div className="text-white xl:-ml-1 lg:ml-0 col-span-1 bg-[#50DC87] rounded-full h-fit w-6 text-center">1</div>
                <div className="xl:ml-1 col-span-11">Fast implementation within weeks, with no integrations required</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="text-white xl:-ml-1 lg:ml-0 col-span-1 bg-[#50DC87] rounded-full h-fit w-6 text-center">2</div>
                <div className="xl:ml-1 col-span-11">Immediate savings for health plans on home-based care spend, with advanced analytics to curb excess utilization</div>
              </div>
              <div className="grid grid-cols-12">
                <div className="text-white xl:-ml-1 lg:ml-0 col-span-1 bg-[#50DC87] rounded-full h-fit w-6 text-center">3</div>
                <div className="xl:ml-1 col-span-11">Differentiated member experience, with faster discharges and readmission reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
