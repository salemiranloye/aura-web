import Image from "next/image";
import {AuraOnboarding} from "@/components/homePage/aura-onboarding";
import KeyFeatures from "@/components/homePage/key-features";
import InfoSection from "@/components/homePage/info-section";
import AnalyticsSection from "@/components/homePage/analytics";
export default function Home() {
  return (
    <div className="bg-gray-900 ">
      
      <AuraOnboarding/>
      <KeyFeatures/>
      {/* <InfoSection/> */}
      <AnalyticsSection/>
    </div>
  )
}
