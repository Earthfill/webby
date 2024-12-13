import Image from "next/image";
import wedoi from '@/assets/images/wedoi.svg';
import wedoii from '@/assets/images/wedoii.svg';
import wedoiii from '@/assets/images/wedoiii.svg';

export default function FirstSection() {
  return (
    <section>
      <div className="text-center text-4xl leading-tight py-14 lg:pb-28 px-16 lg:px-24">
        You&apos;re not alone. Our 
        <span className="relative inline-block">
          <span className="relative z-10 inline-block pl-2"> Care Advocates</span>
          <svg
            width="250"
            height="82"
            viewBox="0 0 231 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <path
              d="M54.945 25.74336C29.0725 10.99867 -34.0977 43.8604 28.0639 66.8996C98.8179 76.1235 224.843 66.8399 228.772 47.4652C233.001 15.85 4.669 -0.99411 4.3014 30.7534"
              stroke="#50DCB7"
              strokeWidth="3.79883"
              className="stroke-[#50DCB7] stroke-2 fill-none"
            />
          </svg>
        </span>{" "}
        help <br />
        every step of the way.
      </div>
      <div className="grid gap-y-20 px-5 py-5">
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={wedoi} alt="we do image" className="rounded-2xl w-[600px] lg:justify-self-end" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
            <div className="text-3xl">We work directly with suppliers on your behalf</div>
            <div>Tomorrow Health partners with suppliers in all product categories, making us a true one-stop shop for all of your home-based care needs.</div>
          </div>
        </div>
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={wedoii} alt="we do image" className="lg:order-2 rounded-2xl w-[600px]" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:order-1 lg:pl-24 xl:pl-48 2xl:pl-96 xl:justify-self-end">
            <div className="text-3xl">We help you navigate your insurance benefits</div>
            <div>We help you understand your insurance benefits so there are no surprise bills.</div>
          </div>
        </div>
        <div className="space-y-6 grid lg:grid-cols-2 lg:gap-16 place-items-center">
          <Image src={wedoiii} alt="we do image" className="rounded-2xl w-[600px] lg:justify-self-end" />
          <div className="space-y-5 px-8 md:px-36 lg:place-self-center lg:pr-24 2xl:pr-96">
            <div className="text-3xl">Our team of Care Advocates is here to help</div>
            <div>Our U.S.-based team provides responsive service, helping you with coordination and product education, ensuring you have what you need to stay healthy at home.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
