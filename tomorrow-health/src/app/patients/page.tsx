import FirstSection from "@/sections/patients/FirstSection";
import How from "@/components/How";
import Legend from "@/sections/patients/Legend";
import Question from "@/sections/patients/Question";

export default function Patients() {
  return (
    <div className='lg:space-y-10 space-y-5'>
      <Legend />
      <FirstSection />
      <Question />
      <How name='For Patients' />
    </div>
  )
}