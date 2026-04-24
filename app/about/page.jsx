"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutPandit from "@/components/about/AboutPandit";
import MissionValues from "@/components/about/MissionValues";
import ExperienceCounters from "@/components/about/ExperienceCounters";
import MiniGallery from "@/components/shared/MiniGallery";
import CTABanner from "@/components/home/CTABanner";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutPandit />
      <MissionValues />
      <ExperienceCounters />
      <MiniGallery eyebrow="Sacred Moments" title="Our Spiritual Journey" />
      <CTABanner />
    </main>
  );
}
