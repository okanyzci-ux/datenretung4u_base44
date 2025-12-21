import { useEffect } from "react";

export default function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = "https://images.unsplash.com/photo-1526657782461-9fe13402a841?w=1200&q=80",
  canonicalUrl
}) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);

    // Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:image", ogImage, true);
    if (canonicalUrl) setMetaTag("og:url", canonicalUrl, true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
}

// Structured Data Component
export function StructuredData({ data }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    script.id = "structured-data";
    
    // Remove old script if exists
    const oldScript = document.getElementById("structured-data");
    if (oldScript) {
      oldScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data]);

  return null;
}