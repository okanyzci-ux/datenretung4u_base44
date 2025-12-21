import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import ProcessSection from "../components/home/ProcessSection";
import DamageTypesSection from "../components/home/DamageTypesSection";
import BrandsSection from "../components/home/BrandsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustSection />
      <ProcessSection />
      <DamageTypesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}