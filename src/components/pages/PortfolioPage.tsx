import SEO from "../SEO";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa6";
import "../styles/PortfolioPage.css";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Cinematic Family & Interview Film",
    client: "Baby Moon Studio",
    category: "Commercials",
    location: "VIP Road, Surat",
    imgUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eb2?w=600&h=400&fit=crop",
    videoUrl: "/videos/baby-moon-talking-head.mp4",
    software: "DaVinci Resolve Studio",
    gear: "Sony FX3 + 35mm Prime",
  },
  {
    id: 2,
    title: "Clothing Brand Showcase Video",
    client: "Couture Label",
    category: "Fashion",
    location: "Adajan, Surat",
    imgUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
    videoUrl: "/videos/clothing-brand-video-production-surat.mp4",
    software: "Adobe Premiere Pro & After Effects",
    gear: "Sony FX3 + DJI Ronin RS3",
  },
  {
    id: 3,
    title: "Healthcare Clinic Advertisement",
    client: "Dentist Smile Care",
    category: "Commercials",
    location: "Vesu, Surat",
    imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    videoUrl: "/videos/dentist-promotion-video-editor-surat.mp4",
    software: "Premiere Pro & Resolve",
    gear: "Sony A7SIII + G-Master Lenses",
  },
  {
    id: 4,
    title: "Luxury Interior Walkthrough Video",
    client: "Artisan Decors",
    category: "Commercials",
    location: "Piplod, Surat",
    imgUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
    videoUrl: "/videos/interior-walkthrough-video-production-surat.mp4",
    software: "DaVinci Resolve (Color Grade)",
    gear: "Sony FX3 + DJI Mavic 3 Drone",
  },
  {
    id: 5,
    title: "Commercial Product Showcase",
    client: "Luxe Gadgets",
    category: "Products",
    location: "Athwa, Surat",
    imgUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    videoUrl: "/videos/product-video-shoot-surat-gujarat.mp4",
    software: "Premiere Pro & After Effects",
    gear: "Sony A7SIII + Macro Lens",
  },
  {
    id: 6,
    title: "Viral Instagram Reel Promotion",
    client: "The Bean Cafe",
    category: "Reels",
    location: "City Light, Surat",
    imgUrl: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=600&h=400&fit=crop",
    videoUrl: "/videos/product-commercial-advertisement-surat.mp4",
    software: "Premiere Pro & CapCut Desktop",
    gear: "iPhone 15 Pro Max + DJI Mic 2",
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const categories = ["All", "Commercials", "Fashion", "Products", "Reels"];

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => filter === "All" || item.category === filter
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    "name": "Alex Moncy Videography & Video Editing Portfolio",
    "description": "Portfolio of cinematic shoots, commercial films, and viral Instagram reels shot and edited in Surat, Gujarat.",
    "creator": {
      "@type": "Person",
      "name": "Alex Moncy"
    }
  };

  return (
    <div className="portfolio-page-wrapper">
      <SEO
        title="Featured Video Editing &amp; Shoot Portfolio Surat | FRAME."
        description="Explore the official video production portfolio of Alex Moncy in Surat, Gujarat. Watch commercial ads, fashion films, real estate reels, and color graded projects."
        keywords="Video Editor Portfolio Surat, Cinematography Works Surat, Commercial Shoots Surat, Instagram Reel Portfolio Gujarat, Alex Moncy Works"
        canonical="/portfolio"
        schema={schema}
      />

      <section className="portfolio-hero section-container">
        <div className="portfolio-hero-text">
          <span className="featured-tag">VISUAL GALLERY</span>
          <h1 className="portfolio-h1-glowing">
            Featured <span>Portfolio</span> &amp; Works
          </h1>
          <p className="portfolio-lead">
            Explore a curated selection of our commercial shoots, product reels, fashion films, and creative edits in Surat, Gujarat.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="portfolio-filters section-container">
        <div className="filters-container" data-cursor="disable">
          {categories.map((c, idx) => (
            <button
              key={idx}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of items */}
      <section className="portfolio-grid-section section-container">
        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="portfolio-item-card"
              >
                <div className="portfolio-item-media">
                  <img src={item.imgUrl} alt={item.title} className="portfolio-item-img" />
                  <div className="media-overlay">
                    <button
                      className="play-btn"
                      onClick={() => setActiveVideo(item.videoUrl)}
                      aria-label="Play Portfolio Video"
                      data-cursor="disable"
                    >
                      <FaPlay />
                    </button>
                  </div>
                  <span className="item-category-tag">{item.category}</span>
                </div>

                <div className="portfolio-item-info">
                  <h3>{item.title}</h3>
                  <div className="item-details-row">
                    <span><strong>Client:</strong> {item.client}</span>
                    <span><strong>Loc:</strong> {item.location}</span>
                  </div>
                  <div className="item-tech-row">
                    <span>{item.gear}</span>
                    <span>{item.software}</span>
                  </div>
                  <Link to="/case-studies" className="item-case-link">
                    View SEO Case Study &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)} data-cursor="disable">
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video src={activeVideo} controls autoPlay className="modal-video-player"></video>
            <button className="modal-close-btn" onClick={() => setActiveVideo(null)}>
              &times; Close
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Like what you see? Let's build your project.</h2>
          <p>Book a free 15-minute consultation to discuss your scripting, shoots, and editing retainer packages in Surat.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
