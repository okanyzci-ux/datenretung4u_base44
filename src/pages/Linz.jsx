import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function Linz() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Smartphone Datenrettung",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Handy Planet OG",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Goethestraße 3",
        "addressLocality": "Linz",
        "postalCode": "4020",
        "addressCountry": "AT"
      },
      "telephone": "+436609005454"
    },
    "areaServed": {
      "@type": "City",
      "name": "Linz"
    }
  };

  return (
    <div>
      <SEO 
        title="Datenrettung Linz | Smartphone Datenrettung - Handy Planet OG"
        description="Datenrettung Linz ✓ Direkt vor Ort in der Goethestraße 3 ✓ Wasserschaden, Display defekt, Platinenschaden ✓ 99% Erfolgsquote ✓ Kostenlose Diagnose"
        keywords="Datenrettung Linz, Handy Reparatur Linz, iPhone Datenrettung Linz, Samsung Datenrettung Linz, Wasserschaden Linz"
        canonicalUrl="https://handyplanet.at/linz"
      />
      <StructuredData data={structuredData} />
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