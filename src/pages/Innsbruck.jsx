import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function Innsbruck() {
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
      "name": "Innsbruck"
    }
  };

  return (
    <div>
      <SEO 
        title="Datenrettung Innsbruck | Smartphone Datenrettung Tirol - Handy Planet"
        description="Handy Datenrettung Innsbruck und Tirol ✓ Kostenloser Versand aus den Alpen ✓ iPhone, Samsung, Huawei Experten ✓ Wasserschaden & Display Reparatur ✓ 99% Erfolg"
        keywords="Datenrettung Innsbruck, Handy Reparatur Innsbruck, iPhone Datenrettung Tirol, Samsung Innsbruck, Smartphone Rettung Innsbruck"
        canonicalUrl="https://handyplanet.at/innsbruck"
      />
      <StructuredData data={structuredData} />
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