import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Linz() {
  return (
    <div>
      <CityHero 
        city="Linz"
        description="Als lokales Unternehmen in Linz sind wir Ihr direkter Partner für professionelle Smartphone Datenrettung. Besuchen Sie uns persönlich in der Goethestraße 3 oder nutzen Sie unseren kostenlosen Abholservice."
        bgImage="https://images.unsplash.com/photo-1609239718650-4de2dfbdab02?w=1200&q=80"
      />
      <CityServices city="Linz" />
      <CityProcess city="Linz" />
      <TrustSection />
      <TestimonialsSection />
      <CityCTA city="Linz" />
    </div>
  );
}