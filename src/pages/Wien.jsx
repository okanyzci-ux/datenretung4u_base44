import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Wien() {
  return (
    <div>
      <CityHero 
        city="Wien"
        description="Professionelle Smartphone Datenrettung für Wien und Umgebung. Mit kostenlosem Versand und Express-Service retten wir Ihre wertvollen Daten aus der Bundeshauptstadt – zuverlässig und diskret."
        bgImage="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80"
      />
      <CityServices city="Wien" />
      <CityProcess city="Wien" />
      <TrustSection />
      <TestimonialsSection />
      <CityCTA city="Wien" />
    </div>
  );
}