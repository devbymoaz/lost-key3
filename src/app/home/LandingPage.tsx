import CustomHeroSection from "../components/sections/heroSection";
import Testimonials from "../components/sections/Testimonials";
import EffortLessSection from "./EffortlessKey";
import LostKeySection from "./LostKeySection";
import NewsletterSection from "./NewsLetter";
import OurMission from "./ourMission";
import RegistrationProcess from "./RegistrationProcess";
import SeaShop from "./SeaShop";
import TryIt from "./TryIt";
import WhyLostKey  from './WhyLostKey';

export default function LandingPage() {
  return (
    <>
      <CustomHeroSection />
      <OurMission />
      <WhyLostKey/>
      <RegistrationProcess/>
      <SeaShop/>
      <TryIt/>
      <LostKeySection/>
      <EffortLessSection/>
      <Testimonials/>
      <NewsletterSection/>
    </>
  );
}
