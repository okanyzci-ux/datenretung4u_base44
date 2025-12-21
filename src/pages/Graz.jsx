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
    "@type": "LocalBusiness",
    "name": "DatenRettung4U - Datenrettung Graz",
    "image": "https://images.unsplash.com/photo-1609094803873-4826c1efb4c3?w=1200&q=80",
    "description": "Professionelle Handy Datenrettung für Graz und die Steiermark - iPhone, Samsung, Android. Schneller Service aus der grünen Stadt.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Graz",
      "addressRegion": "Steiermark",
      "addressCountry": "AT"
    },
    "url": "https://datenrettung4u.at/graz",
    "telephone": "+436609005454",
    "email": "info@datenrettung4u.at",
    "priceRange": "€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Graz"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Steiermark"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Datenrettung Services Graz",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Datenrettung Graz",
            "description": "Spezialisierte iPhone Datenrettung für Graz und Steiermark"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Samsung Datenrettung Graz",
            "description": "Samsung Galaxy Datenrettung mit kostenlosem Versand"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Android Datenrettung Graz",
            "description": "Datenrettung für Huawei, Xiaomi, Google Pixel und alle Android Smartphones"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1876"
    }
  };

  return (
    <div>
      <SEO 
        title="Handy Datenrettung Graz | iPhone & Android Datenrettung Steiermark ✓"
        description="🔧 Handy Datenrettung Graz & Steiermark ✓ iPhone Datenrettung ✓ Samsung & Android Datenrettung ✓ Kostenloser Versand ✓ Wasserschaden & Platine ✓ 99% Erfolg ✓ Ab 99€"
        keywords="Handy Datenrettung Graz, iPhone Datenrettung Graz, Android Datenrettung Graz, Samsung Datenrettung Graz, Smartphone Datenrettung Steiermark, Handy Reparatur Graz, Datenrettung Steiermark, Wasserschaden Graz, Display Reparatur Graz"
        canonicalUrl="https://datenrettung4u.at/graz"
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