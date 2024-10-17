import LayoutComponent from "@/layouts/layout";
import PresentationLanding from "@/organisms/presentation_landing.organism";
import FeaturesLanding from "@/organisms/features_landing.organism";
import HowWorksLanding from "@/organisms/how_works_landing.organism";
import TestimonialLanding from "@/organisms/testimonials_landing.organism";
import StatisticsLanding from "@/organisms/statistics_landing.organism";
import BaitLanding from "@/organisms/bait_landing.organism";

export default function LandingTemplate() {
  return (
    <LayoutComponent>
      <PresentationLanding />
      <FeaturesLanding />
      <HowWorksLanding />
      <TestimonialLanding />
      <StatisticsLanding />
      <BaitLanding />
    </LayoutComponent>
  )
}