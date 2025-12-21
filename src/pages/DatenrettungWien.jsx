import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function DatenrettungWien() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DatenRettung4U - Datenrettung Wien",
    "image": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80",
    "description": "Professionelle Handy Datenrettung für Wien - iPhone, Samsung, Android. Kostenloser Versand aus der Bundeshauptstadt.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressRegion": "Wien",
      "addressCountry": "AT"
    },
    "url": "https://datenrettung4u.at/datenrettung-wien",
    "telephone": "+436609005454",
    "email": "info@datenrettung4u.at",
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Wien"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Wien"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Datenrettung Services Wien",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Datenrettung Wien",
            "description": "iPhone Datenrettung für alle Modelle - Express-Service verfügbar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Galaxy Datenrettung Wien",
            "description": "Samsung Datenrettung mit kostenlosem Versand aus Wien"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android Smartphone Datenrettung Wien",
            "description": "Datenrettung für Huawei, Xiaomi, OnePlus und alle Android Geräte"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3124"
    }
  };

  return (
    <div>
      <SEO 
        title="Handy Datenrettung Wien | iPhone & Android Datenrettung Express ✓"
        description="📱 Handy Datenrettung Wien ✓ iPhone Datenrettung ✓ Samsung & Android Datenrettung ✓ Kostenloser Versand ✓ 24-48h Express ✓ Wasserschaden Experten ✓ 99% Erfolgsquote"
        keywords="Handy Datenrettung Wien, iPhone Datenrettung Wien, Android Datenrettung Wien, Samsung Datenrettung Wien, Smartphone Reparatur Wien, Datenrettung Bundeshauptstadt, Handy Reparatur Wien 1010, Wasserschaden Wien, Display Reparatur Wien"
        canonicalUrl="https://datenrettung4u.at/datenrettung-wien"
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