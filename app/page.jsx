"use client";

import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import GallerySection from "@/components/home/GallerySection";
import CTABanner from "@/components/home/CTABanner";
import MiniGallery from "@/components/shared/MiniGallery";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <Testimonials />
      <GallerySection />
      <MiniGallery />
      <CTABanner />
    </main>
  );
}
