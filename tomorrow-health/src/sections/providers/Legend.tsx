export default function Legend() {
  return (
    <div className="alignElement">
      <div className="text-center md:px-28 lg:px-40 px-5 py-3 space-y-3">
        <div className="font-semibold">FOR PROVIDERS</div>
        <div className="text-6xl 2xl:w-[700px] 2xl:mx-auto leading-tight">
          Send us your
          <span className="relative inline-block ml-3">
            <span className="relative z-0 inline-block">order,</span>
            <svg width="200" height="82" viewBox="0 0 231 82" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-0 -left-5'>
              <path d="M94.945 2.74336C29.0725 -4.29867 -3.0977 43.8604 28.0639 66.8996C98.8179 93.1235 224.843 76.8399 180.772 27.4652C233.001 15.85 104.669 -5.45411 42.3014 21.7534" stroke="#50DCB7" strokeWidth="3.79883" className="stroke-[#50DCB7] stroke-2 fill-none" />
            </svg>
          </span> we'll take care of the rest
        </div>
      </div>
    </div>
  )
}