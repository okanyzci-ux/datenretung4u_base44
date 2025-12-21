import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Graz() {
  return (
    <div>
      <CityHero 
        city="Graz"
        description="Datenrettung für Graz und die Steiermark – schnell, professionell und zu fairen Preisen. Senden Sie Ihr Smartphone kostenlos ein und erhalten Sie Ihre Daten innerhalb kürzester Zeit zurück."
        bgImage="https://images.unsplash.com/photo-1609094803873-4826c1efb4c3?w=1200&q=80"
      />
      <CityServices city="Graz" />
      <CityProcess city="Graz" />
      <TrustSection />
      <TestimonialsSection />
      <CityCTA city="Graz" />
    </div>
  );
}