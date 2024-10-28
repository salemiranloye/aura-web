import Image from "next/image";
import OnboardingForm from "@/components/homePage/aura-onboarding";
import KeyFeatures from "@/components/homePage/key-features";
import InfoSection from "@/components/homePage/info-section";
import AnalyticsSection from "@/components/homePage/analytics";
export default function Home() {
  return (
    <div className="bg-gray-900 ">
      
      <OnboardingForm/>
      <KeyFeatures/>
      {/* <InfoSection/> */}
      <AnalyticsSection/>
    </div>
  )
}
