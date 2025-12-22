import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import TrustSection from "../components/home/TrustSection";
import ProcessSection from "../components/home/ProcessSection";
import DamageTypesSection from "../components/home/DamageTypesSection";
import BrandsSection from "../components/home/BrandsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";
import SEO, { StructuredData } from "../components/SEO";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DatenRettung4U",
    "image": "https://images.unsplash.com/photo-1526657782461-9fe13402a841?w=1200&q=80",
    "@id": "https://datenrettung4u.at",
    "url": "https://datenrettung4u.at",
    "telephone": "+436609005454",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Goethestraße 3",
      "addressLocality": "Linz",
      "postalCode": "4020",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.3064,
      "longitude": 14.2858
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/handyplanet",
      "https://www.instagram.com/handyplanet"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000"
    }
  };

  return (
    <div>
      <SEO 
        title="Smartphone Datenrettung Österreich | DatenRettung4U - 99% Erfolgsquote"
        description="Professionelle Smartphone Datenrettung in Österreich ✓ 99% Erfolgsquote ✓ Kostenlose Diagnose ✓ Wasserschaden, Sturzschaden, Platinenschaden ✓ Keine Daten, keine Kosten"
        keywords="Datenrettung, Smartphone Datenrettung, Handy Datenrettung, iPhone Datenrettung, Samsung Datenrettung, Wasserschaden, Platinenschaden, Datenrettung Österreich, Datenrettung Linz"
        canonicalUrl="https://datenrettung4u.at"
      />
      <StructuredData data={structuredData} />
      <HeroSection />
      <ServicesPreview />
      <TrustSection />
      <ProcessSection />
      <DamageTypesSection />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}