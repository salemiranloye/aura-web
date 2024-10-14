import Image from "next/image";
import {AuraOnboarding} from "@/components/homePage/aura-onboarding";
import KeyFeatures from "@/components/homePage/key-features";

export default function Home() {
  return (
    <div className="bg-gray-900 ">
      
      <AuraOnboarding/>
      <KeyFeatures/>
    </div>
  )
}
