interface QuestionProps {
  title: string;
}

export default function Question({ title }: QuestionProps) {
  return (
    <div className="px-14 xl:px-36 lg:px-28 py-10 lg:py-20 grid lg:grid-cols-2 lg:gap-x-5 xl:gap-x-10 bg-[#F0F1ED]">
      <div>
        <div className="text-6xl">{title}</div>
        <p className="pt-10 xl:pr-16">Fill out this form and a member of the Tomorrow Health team will be in touch soon.</p>
      </div>
      <form className='space-y-4 grid lg:grid-cols-2 lg:gap-x-2 2xl:gap-x-10 lg:pb-10 lg:pt-0 py-10'>
        <div className='flex flex-col justify-end gap-1'>
          <label className="text-xs tracking-wide">First name<span className='text-red-500'>*</span></label>
          <input className='text-black px-2 xl:w-64 2xl:w-full h-10 w-full rounded-lg border focus:border-blue-500 outline-none' />
        </div>
        <div className='grid gap-1'>
          <label className="text-xs tracking-wide">Last name<span className='text-red-500'>*</span></label>
          <input className='text-black px-2 xl:w-64 2xl:w-full w-full h-10 rounded-lg border focus:border-blue-500 outline-none' />
        </div>
        <div className='grid gap-1'>
          <label className="text-xs tracking-wide">Email<span className='text-red-500'>*</span></label>
          <input className='text-black px-2 xl:w-64 2xl:w-full w-full h-10 rounded-lg border focus:border-blue-500 outline-none' />
        </div>
        <div className='grid gap-1'>
          <label className="text-xs tracking-wide">Phone number<span className='text-red-500'>*</span></label>
          <input className='text-black px-2 xl:w-64 2xl:w-full w-full h-10 rounded-lg border focus:border-blue-500 outline-none' />
        </div>
        <div className='grid gap-1 lg:col-span-2'>
          <label className="text-xs tracking-wide">Company name<span className='text-red-500'>*</span></label>
          <input className='text-black px-2 2xl:w-full xl:w-64 w-full h-10 rounded-lg border focus:border-blue-500 outline-none' />
        </div>
        <div className='grid gap-1 lg:col-span-2'>
          <label className="text-xs tracking-wide">Please share details about your interest in partnering</label>
          <textarea className='text-black px-2 py-1 2xl:w-full xl:w-64 w-full rounded-lg border focus:border-blue-500 outline-none h-24' />
        </div>
        <button className='button rounded-none px-6 w-fit text-xs'>Submit</button>
      </form>
    </div>
  )
}