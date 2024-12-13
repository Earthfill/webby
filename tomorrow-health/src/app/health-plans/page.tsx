import How from "@/components/How";
import FirstSection from "@/sections/health-plans/FirstSection";
import Legend from "@/sections/health-plans/Legend";
import Partner from "@/sections/health-plans/Partner";
import Question from "@/components/Question";

export default function HealthPlans() {
  return (
    <div className=''>
      <Legend />
      <FirstSection />
      <Partner />
      <Question title="Questions? We're here to help." />
      <How name="Health Plans" />
    </div>
  )
}