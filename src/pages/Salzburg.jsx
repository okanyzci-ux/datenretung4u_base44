import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Salzburg() {
  return (
    <div>
      <CityHero 
        city="Salzburg"
        description="Smartphone Datenrettung für Salzburg und Umgebung. Von der Mozartstadt zu uns – wir kümmern uns um Ihre wertvollen Daten mit höchster Priorität und Professionalität."
        bgImage="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1200&q=80"
      />
      <CityServices city="Salzburg" />
      <CityProcess city="Salzburg" />
      <TrustSection />
      <TestimonialsSection />
      <CityCTA city="Salzburg" />
    </div>
  );
}