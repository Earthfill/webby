import How from "@/components/How";
import FirstSection from "@/sections/providers/FirstSection";
import Legend from "@/sections/providers/Legend";
import Mission from "@/sections/providers/Mission";
import ThirdSection from "@/sections/providers/ThirdSection";

export default function Providers() {
  return (
    <div className="lg:space-y-10 space-y-5">
      <Legend />
      <FirstSection />
      <Mission />
      <ThirdSection />
      <How name="For Providers"/>
    </div>
  )
}