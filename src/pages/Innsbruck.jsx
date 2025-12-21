import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Innsbruck() {
  return (
    <div>
      <CityHero 
        city="Innsbruck"
        description="Professionelle Datenrettung für Innsbruck und ganz Tirol. Auch aus den Alpen erreichen uns Ihre Smartphones sicher – mit kostenlosem und versichertem Versand."
        bgImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80"
      />
      <CityServices city="Innsbruck" />
      <CityProcess city="Innsbruck" />
      <TrustSection />
      <TestimonialsSection />
      <CityCTA city="Innsbruck" />
    </div>
  );
}