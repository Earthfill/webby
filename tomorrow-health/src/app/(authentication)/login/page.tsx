import Image from "next/image";
import logo from '@/assets/images/logo.svg';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#002334]">
      <div className="h-1/2 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white rounded-lg flex flex-col items-center gap-9">
        <div className="bg-[#F0F1ED] space-y-2 w-full py-8 grid place-items-center rounded-t-lg">
          <Image src={logo} alt="logo" />
          <div className="font-semibold tracking-wide text-lg">Tomorrow Health</div>
        </div>
        <form className="grid gap-3 w-full px-16">
          <input placeholder="yours@example.com" className="border px-2 h-14 bg-[#F0F1ED] placeholder:pl-1 outline-none rounded-md focus:border-gray-500" />
          <input placeholder="your password" className="border px-2 h-14 bg-[#F0F1ED] placeholder:pl-1 outline-none rounded-md focus:border-gray-500" />
        </form>
        <div className="px-16 w-full">
          <button className="button w-full py-3 text-lg tracking-wider">Log In</button>
        </div>
      </div>
    </div>
  )
}