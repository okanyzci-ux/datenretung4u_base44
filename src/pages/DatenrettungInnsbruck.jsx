import React from "react";
import CityHero from "../components/city/CityHero";
import CityServices from "../components/city/CityServices";
import CityProcess from "../components/city/CityProcess";
import CityCTA from "../components/city/CityCTA";
import TrustSection from "../components/home/TrustSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SEO, { StructuredData } from "../components/SEO";

export default function DatenrettungInnsbruck() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DatenRettung4U - Datenrettung Innsbruck",
    "image": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80",
    "description": "Professionelle Handy Datenrettung für Innsbruck und Tirol - iPhone, Samsung, Android. Auch aus den Alpen erreichen uns Ihre Geräte sicher.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Innsbruck",
      "addressRegion": "Tirol",
      "addressCountry": "AT"
    },
    "url": "https://datenrettung4u.at/datenrettung-innsbruck",
    "telephone": "+436609005454",
    "email": "info@datenrettung4u.at",
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Innsbruck"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tirol"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Datenrettung Services Innsbruck",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Datenrettung Innsbruck",
            "description": "iPhone Datenrettung für Innsbruck und ganz Tirol"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Datenrettung Innsbruck",
            "description": "Samsung Galaxy Datenrettung mit kostenlosem Versand aus Tirol"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android Datenrettung Innsbruck",
            "description": "Datenrettung für Huawei, Xiaomi, OnePlus und alle Android Geräte"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1298"
    }
  };

  return (
    <div>
      <SEO 
        title="Handy Datenrettung Innsbruck | iPhone & Android Datenrettung Tirol ✓"
        description="🏔️ Handy Datenrettung Innsbruck & Tirol ✓ iPhone Datenrettung ✓ Samsung & Android Datenrettung ✓ Kostenloser Versand aus den Alpen ✓ Wasserschaden ✓ 99% Erfolg ab 99€"
        keywords="Handy Datenrettung Innsbruck, iPhone Datenrettung Innsbruck, Android Datenrettung Innsbruck, Samsung Datenrettung Innsbruck, Smartphone Datenrettung Tirol, Handy Reparatur Innsbruck, Datenrettung Tirol, Wasserschaden Innsbruck"
        canonicalUrl="https://datenrettung4u.at/datenrettung-innsbruck"
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