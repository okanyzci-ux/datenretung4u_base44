import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function HandyDatenRettungSalzburg() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DatenRettung4U - Datenrettung Salzburg",
    "image": "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=1200&q=80",
    "description": "Professionelle Handy Datenrettung für Salzburg - iPhone, Samsung, Android. Service aus der Mozartstadt.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salzburg",
      "addressRegion": "Salzburg",
      "addressCountry": "AT"
    },
    "url": "https://datenrettung4u.at/handy-daten-rettung-salzburg",
    "telephone": "+436609005454",
    "email": "info@datenrettung4u.at",
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Salzburg"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Salzburg"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Datenrettung Services Salzburg",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Datenrettung Salzburg",
            "description": "iPhone Datenrettung für die Mozartstadt - alle Modelle"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Datenrettung Salzburg",
            "description": "Samsung Galaxy Datenrettung mit schnellem Service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android Datenrettung Salzburg",
            "description": "Datenrettung für alle Android Smartphones - Huawei, Xiaomi, OnePlus"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1542"
    }
  };

  return (
    <div>
      <SEO 
        title="Handy Datenrettung Salzburg | iPhone & Android Datenrettung Mozartstadt ✓"
        description="📱 Handy Datenrettung Salzburg ✓ iPhone Datenrettung ✓ Samsung & Android Datenrettung ✓ Kostenloser Versand ✓ Wasserschaden Experten ✓ 99% Erfolg ✓ Faire Preise ab 99€"
        keywords="Handy Datenrettung Salzburg, iPhone Datenrettung Salzburg, Android Datenrettung Salzburg, Samsung Datenrettung Salzburg, Smartphone Reparatur Salzburg, Handy Reparatur Mozartstadt, Datenrettung Salzburg Stadt, Wasserschaden Salzburg"
        canonicalUrl="https://datenrettung4u.at/handy-daten-rettung-salzburg"
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