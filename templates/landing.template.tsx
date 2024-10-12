import FeatureInfoComponent from "@/molecules/feature_info";
import PrimaryButton from "@/atoms/primary_button.atom";
import SecondaryButton from "@/atoms/secondary_button.atom";
import StatisticsComponent from "@/molecules/statistics_component";
import TestimonialsComponent from "@/molecules/testimonials.molecules";
import LayoutComponent from "@/layouts/layout";
import { IconArrowRight, IconAwardFilled, IconBolt, IconDeviceGamepad2, IconFlag, IconIcons, IconList, IconPokeball, IconStar, IconVs } from "@tabler/icons-react";
import Image from "next/image";
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