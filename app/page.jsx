"use client";

import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import GallerySection from "@/components/home/GallerySection";
import CTABanner from "@/components/home/CTABanner";
import MiniGallery from "@/components/shared/MiniGallery";
import Photo_service from "../components/home/Photo_service";
import Top_service_gallery from "../components/home/top_service_grid";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Top_service_gallery />
      <WhyChooseUs />
      <Photo_service />
      <ServicesPreview />
      <Testimonials />
      <GallerySection />
      <MiniGallery />
      <CTABanner />
    </main>
  );
}
