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
    "@type": "LocalBusiness",
    "name": "DatenRettung4U - Datenrettung Linz",
    "image": "https://images.unsplash.com/photo-1609239718650-4de2dfbdab02?w=1200&q=80",
    "description": "Professionelle Handy Datenrettung in Linz - iPhone, Samsung, Android. Direkt vor Ort in der Goethestraße 3.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Goethestraße 3",
      "addressLocality": "Linz",
      "postalCode": "4020",
      "addressRegion": "Oberösterreich",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.3064,
      "longitude": 14.2858
    },
    "url": "https://datenrettung4u.at/linz",
    "telephone": "+436609005454",
    "email": "info@datenrettung4u.at",
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Linz"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Oberösterreich"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Datenrettung Services Linz",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Datenrettung Linz",
            "description": "Professionelle iPhone Datenrettung bei Wasserschaden, Displayschaden, Platinenschaden"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Datenrettung Linz",
            "description": "Samsung Galaxy Datenrettung für alle Modelle"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android Datenrettung Linz",
            "description": "Datenrettung für alle Android Smartphones - Huawei, Xiaomi, OnePlus, etc."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  };

  return (
    <div>
      <SEO 
        title="Handy Datenrettung Linz | iPhone & Android Datenrettung vor Ort ✓"
        description="🔧 Handy Datenrettung Linz direkt in der Goethestraße 3 ✓ iPhone Datenrettung ✓ Samsung & Android Datenrettung ✓ Wasserschaden, Display, Platine ✓ 99% Erfolg ✓ Ab 99€"
        keywords="Handy Datenrettung Linz, iPhone Datenrettung Linz, Android Datenrettung Linz, Samsung Datenrettung Linz, Smartphone Datenrettung Linz, Datenrettung Oberösterreich, Handy Reparatur Linz, Wasserschaden Linz, Display Reparatur Linz"
        canonicalUrl="https://datenrettung4u.at/linz"
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