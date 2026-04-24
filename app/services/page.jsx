"use client";

import ServicesHero from "../../components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyOurServices from "@/components/services/WhyOurServices";
import CTABanner from "@/components/home/CTABanner";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <WhyOurServices />
      <CTABanner />
    </main>
  );
}
