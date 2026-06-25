import { Suspense, lazy } from "react";
import SEO from "../SEO";
import Landing from "../Landing";
import About from "../About";
import WhatIDo from "../WhatIDo";
import Career from "../Career";
import Work from "../Work";
import Contact from "../Contact";

const TechStack = lazy(() => import("../TechStack"));

interface HomeProps {
  children?: React.ReactNode;
}

const Home = ({ children }: HomeProps) => {
  // Generate structured schema markup for the home page
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://framevisuals.in/#website",
        "url": "https://framevisuals.in",
        "name": "FRAME. — Professional Video Editor & Cinematographer Surat",
        "description": "Premium Video Editor and Cinematography Shoot Studio in Surat, Gujarat. High-conversion reels, corporate films, and fashion video production.",
        "publisher": {
          "@id": "https://framevisuals.in/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://framevisuals.in/#person",
        "name": "Alex Moncy",
        "jobTitle": "Video Editor & Cinematographer",
        "image": "https://framevisuals.in/about-shoot.png",
        "url": "https://framevisuals.in",
        "sameAs": [
          "https://www.instagram.com/alex_edixx/",
          "https://youtube.com"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://framevisuals.in/#service",
        "name": "FRAME. Visuals",
        "image": "https://framevisuals.in/about-shoot.png",
        "priceRange": "$$",
        "telephone": "+919876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "302, Royal Arcade, VIP Road, Vesu",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "postalCode": "395007",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "21.176621",
          "longitude": "72.784439"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Surat" },
          { "@type": "AdministrativeArea", "name": "Vesu" },
          { "@type": "AdministrativeArea", "name": "Adajan" },
          { "@type": "AdministrativeArea", "name": "Piplod" },
          { "@type": "AdministrativeArea", "name": "City Light" },
          { "@type": "AdministrativeArea", "name": "Pal" }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Professional Video Editor &amp; Cinematographer in Surat | FRAME. Visuals"
        description="Best Video Editor and Cinematographer in Surat, Gujarat. Specialising in high-conversion Instagram Reels, commercial product shoots, corporate films, premium color grading, and AI VFX. Book a free consultation!"
        keywords="Video Editor in Surat, Best Video Editor in Surat, Cinematographer in Surat, Best Cinematographer in Surat, Video Editing Services Surat, Reel Editor Surat, Instagram Reel Editor Surat, Commercial Video Production Surat, Corporate Video Shoot Surat, Product Shoot Surat, Fashion Shoot Surat, Wedding Cinematographer Surat, Color Grading Services Surat"
        canonical="/"
        schema={homeSchema}
      />
      <Landing>{children}</Landing>
      <About />
      <WhatIDo />
      <Career />
      <Work />
      <Suspense fallback={<div className="loading-fallback">Loading software details...</div>}>
        <TechStack />
      </Suspense>
      <Contact />
    </>
  );
};

export default Home;
