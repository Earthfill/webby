import How from "@/components/How";
import Question from "@/components/Question";
import Benefit from "@/sections/suppliers/Benefit";
import FirstSection from "@/sections/suppliers/FirstSection";
import Growth from "@/sections/suppliers/Growth";
import Legend from "@/sections/suppliers/Legend";

export default function Suppliers() {
  return (
    <div className="">
      <Legend />
      <FirstSection />
      <Benefit />
      <Growth />
      <Question title="Interested in working with us? Contact us." />
      <How name="For Suppliers" />
    </div>
  )
}