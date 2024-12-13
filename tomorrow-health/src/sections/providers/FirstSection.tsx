import Image from "next/image";
import provider from '@/assets/images/provider.svg';
import legend_bottom from '@/assets/images/legend_background.svg';
import Link from "next/link";

export default function FirstSection() {
  return (
    <div className="alignElement">
      <div className="px-10 lg:px-28 xl:px-36 pt-20 bg-[#F0F1ED] rounded-2xl">
        <div className="grid md:grid-cols-2 md:pb-28 pb-10 gap-y-5">
          <div className="space-y-5 place-content-center">
            <div className="text-3xl">Technology made for providers</div>
            <div className="text-lg">Tomorrow Health keeps track of home-based care orders, ensuring that patients, suppliers, and insurers remain on the same page until orders are home.</div>
            <button className="button tracking-wider px-12 py-4">Sign up now</button>
            <div>Already have an account? <Link href='' className="underline text-[#00E1B7] cursor-pointer active:text-[#00e1b898]">Log in as a Provider</Link></div>
          </div>
          <Image src={provider} alt="provider legend image" />
        </div>
      </div>
    </div>
  )
}
