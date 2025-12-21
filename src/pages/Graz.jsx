import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function Graz() {
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
      "name": "Graz"
    }
  };

  return (
    <div>
      <SEO 
        title="Datenrettung Graz | Smartphone Datenrettung Steiermark - Handy Planet"
        description="Datenrettung Graz und Steiermark ✓ Professionelle Handy Datenrettung ✓ Kostenloser Versand ✓ 99% Erfolgsquote ✓ iPhone, Samsung, Huawei Experten"
        keywords="Datenrettung Graz, Handy Reparatur Graz, Smartphone Datenrettung Steiermark, iPhone Datenrettung Graz, Wasserschaden Graz"
        canonicalUrl="https://handyplanet.at/graz"
      />
      <StructuredData data={structuredData} />
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