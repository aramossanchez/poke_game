import LayoutComponent from "@/layouts/layout";
import PresentationLanding from "@/organisms/landing/presentation_landing.organism";
import FeaturesLanding from "@/organisms/landing/features_landing.organism";
import HowWorksLanding from "@/organisms/landing/how_works_landing.organism";
import TestimonialLanding from "@/organisms/landing/testimonials_landing.organism";
import StatisticsLanding from "@/organisms/landing/statistics_landing.organism";
import BaitLanding from "@/organisms/landing/bait_landing.organism";

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