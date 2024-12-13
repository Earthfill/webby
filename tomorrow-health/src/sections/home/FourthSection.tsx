import SlideShow from "@/components/SlideShow";
import VideoPlayer from "@/components/VideoPlayer";

export default function FourthSection() {
  return (
    <div className='bg-[#002334] text-white 2xl:pt-48 pt-14 h-fit'>
      <div className='text-white xl:text-5xl text-3xl text-center px-5 md:px-40 xl:px-80 py-20'>Patients love working with Tomorrow Health. See why they rate us a 9.5 out of 10.</div>
      <SlideShow />
      <VideoPlayer />
    </div>
  )
}