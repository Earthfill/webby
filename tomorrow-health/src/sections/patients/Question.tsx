import Founder from "@/components/Founder";
import { Headset, Mail } from "lucide-react";

export default function Question() {
  return (
    <div>
      <Founder />
      <div className="questionBg flex flex-col items-center md:block bg-cover bg-no-repeat xl:p-36 lg:p-28 p-10">
        <div className="text-white space-y-5 text-center md:text-start">
          <div className="lg:text-6xl text-3xl tracking-wide">
            Questions? <br />
            We&apos;re here to help.
          </div>
          <p className="font-semibold text-lg">Speak with one of our Care Advocates today.</p>
        </div>
        <div className="pt-16 grid lg:flex gap-5">
          <button className="button bg-white flex gap-2 items-center w-fit mx-auto md:mx-0">
            <Headset />
            <span>844-402-4344</span>
          </button>
          <button className="button bg-white flex gap-2 items-center w-fit">
            <Mail />
            support@tomorrowhealth.com
          </button>
        </div>
      </div>
    </div>
  )
}