import { SITE } from "@/lib/constants";

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pizza Italie",
  image: "/images/hero.jpg",
  url: "https://pizzaitalie.com/",
  telephone: "+18197770777",
  email: SITE.email,
  servesCuisine: "Pizza",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "101 Promenade du Portage",
    addressLocality: "Gatineau",
    addressRegion: "QC",
    postalCode: "J8X 2K2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHours: "Mo-Su 16:00-04:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "500",
    bestRating: "5",
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
