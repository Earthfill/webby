import Image from "next/image";
import partner from '@/assets/images/partner.svg';

export default function Partner() {
  return (
    <div className="px-14 xl:px-36 lg:px-28 py-20 lg:py-32 bg-[#002334] space-y-12">
      <div className="text-white divide-y divide-gray-50/20 space-y-6">
        <div>
          <div className="text-blue-600 font-semibold tracking-wider text-lg">Geisinger</div>
          <div className="text-3xl tracking-wide">Geisinger Health Plan's Trusted Partner in Home-Based Care</div>
          <div className="text-lg py-6">Geisinger Health Plan is working with Tomorrow Health to streamline ordering and access to home-based care supplies for its members.</div>
          <button className="button bg-white">Learn More</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 pt-8 lg:pt-12">
          <div>
            <div className="text-6xl font-extrabold">97%</div>
            <div>of patients start care on time, compared with an industry average of 50%</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold">45%</div>
            <div>less time spent by medical providers ordering and managing home-based care</div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-6xl font-extrabold">9.5</span>
              <sup className="textGray text-base font-semibold tracking-wider mb-3">/10</sup>
            </div>
            <div>average patient satisfaction score after implementing Tomorrow Health</div>
          </div>
        </div>
      </div>
      <Image src={partner} alt="" className="rounded-3xl" />
    </div>
  )
}