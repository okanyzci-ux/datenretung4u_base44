import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function Wien() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Smartphone Datenrettung",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Handy Planet OG",
      "telephone": "+436609005454"
    },
    "areaServed": {
      "@type": "City",
      "name": "Wien"
    }
  };

  return (
    <div>
      <SEO 
        title="Datenrettung Wien | Smartphone Datenrettung für die Bundeshauptstadt"
        description="Smartphone Datenrettung Wien ✓ Kostenloser Versand aus Wien ✓ 24-48h Express-Service ✓ iPhone, Samsung, Huawei ✓ Wasserschaden & Platinenschaden Experten"
        keywords="Datenrettung Wien, Handy Datenrettung Wien, iPhone Reparatur Wien, Samsung Datenrettung Wien, Smartphone Reparatur Wien"
        canonicalUrl="https://handyplanet.at/wien"
      />
      <StructuredData data={structuredData} />
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