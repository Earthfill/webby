import Image from "next/image";
import certi from '@/assets/images/certi.svg';
import certii from '@/assets/images/certii.svg';

export default function ThirdSection() {
  return (
    <div className="border border-y py-16">
      <div className="grid lg:grid-cols-2">
        <div className="px-10 lg:px-28 xl:px-36 flex flex-col lg:items-start items-center md:flex-row md:items-center md:justify-between lg:grid lg:h-fit">
          <div className="text-6xl text-center md:text-start">Get started today</div>
          <div className="flex gap-5">
            <Image src={certi} alt="cert image" className="w-24" />
            <Image src={certii} alt="cert image" className="w-32" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 py-2 px-8 md:pl-11 md:pr-28 lg:px-12 xl:px-36">
          <div className="flex items-start gap-2 lg:grid lg:grid-cols-12">
            <div className="text-white xl:-ml-1 lg:ml-0 mt-1 lg:mt-0 col-span-1 bg-[#50DC87] rounded-full h-fit w-6 text-center px-2">1</div>
            <div className="space-y-3 col-span-11">
              <div className="xl:ml-1 text-3xl font-semibold">Place an order online.</div>
              <div className="textGray text-sm">You may also place an order via phone at (844) 402-4344 or via fax using our <span className="underline text-indigo-600">order forms.</span></div>
            </div>
          </div>
          <div className="flex items-start gap-2 lg:grid lg:grid-cols-12">
            <div className="text-white xl:-ml-1 lg:ml-0 mt-1 lg:mt-0 col-span-1 bg-[#50DC87] rounded-full h-fit w-6 text-center px-2">2</div>
            <div className="space-y-3 col-span-11">
              <div className="xl:ml-1 text-3xl font-semibold">The order will be routed to the best home-based care supplier for your patient's needs.</div>
              <div className="textGray text-sm">Our technology connects the patient, supplier, insurer, and you. Most supplies are in your patient's home within 5 days.</div>
            </div>
          </div>
          <div className="flex items-start gap-2 lg:grid lg:grid-cols-12">
            <div className="text-white xl:-ml-1 lg:ml-0 mt-1 lg:mt-0 col-span-1 bg-[#50DC87] rounded-full h-fit w-6 text-center px-2">3</div>
            <div className="space-y-3 col-span-11">
              <div className="xl:ml-1 text-3xl font-semibold">We&apos;ll follow up with your patient.</div>
              <div className="textGray text-sm">We&apos;ll follow-up with your patient to make sure they&apos;re able to effectively use the supplies, so the next time they see you, they&apos;re on track.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}