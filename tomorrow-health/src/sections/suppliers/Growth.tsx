import patient from '@/assets/images/gaboro_patient.svg';
import Image from 'next/image';
import logo from '@/assets/images/gaboro_logo.svg';

export default function Growth() {
  return (
    <div className="px-14 xl:px-36 lg:px-28 py-20 lg:py-32 bg-[#002334] space-y-12">
      <div className="text-white divide-y divide-gray-50/20 space-y-6">
        <div>
          <Image src={logo} alt="logo" className="w-20 rounded-full" />
          <div className="text-3xl tracking-wide">See how Gaboro Medical Supply increased order volume by nearly 50% with Tomorrow Health</div>
          <div className="text-lg py-6">The transparency and metrics provided by the Tomorrow Health marketplace enabled Gaboro to stay on top of their performance, allowing them to rise as a superstar within their insurer to become one of the highest-value HME providers in the network.</div>
          <button className="button bg-white">Learn More</button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 pt-8 lg:pt-12">
          <div>
            <div className="text-6xl font-extrabold">67%</div>
            <div>of orders delivered within SLA (30% higher than industry average)</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold">50%</div>
            <div>lower order cancellation rate as compared to the network average</div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-6xl font-extrabold">4.6</span>
              <sup className="textGray text-base font-semibold tracking-wider mb-3">/5</sup>
            </div>
            <div>customer satisfaction rating</div>
          </div>
        </div>
      </div>
      <Image src={patient} alt="" className="rounded-3xl" />
    </div>
  )
}