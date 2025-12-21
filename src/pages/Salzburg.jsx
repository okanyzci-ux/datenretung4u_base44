import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function Salzburg() {
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
      "name": "Salzburg"
    }
  };

  return (
    <div>
      <SEO 
        title="Datenrettung Salzburg | Handy Datenrettung Mozartstadt - Handy Planet"
        description="Smartphone Datenrettung Salzburg ✓ Schneller Service aus der Mozartstadt ✓ Wasserschaden, Sturzschaden, Platinenschaden ✓ 99% Erfolgsquote ✓ Faire Preise"
        keywords="Datenrettung Salzburg, Handy Reparatur Salzburg, iPhone Datenrettung Salzburg, Samsung Salzburg, Smartphone Rettung Salzburg"
        canonicalUrl="https://handyplanet.at/salzburg"
      />
      <StructuredData data={structuredData} />
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