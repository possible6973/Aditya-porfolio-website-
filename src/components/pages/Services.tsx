import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaInstagram,
  FaFilm,
  FaBriefcase,
  FaBoxOpen,
  FaShirt,
  FaHeart,
  FaSliders,
  FaMicrochip,
} from "react-icons/fa6";
import "../styles/Services.css";

const Services = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const servicesData = [
    {
      id: "01",
      title: "Video Editing",
      slug: "/video-editor-surat",
      icon: <FaFilm />,
      desc: "Cinema-grade post-production for Youtube, documentaries, and business films. Pacing, sound design, and motion graphics designed to hold attention.",
      keywords: "Video Editor Surat, Professional Video Editing, Youtube Video Editing",
    },
    {
      id: "02",
      title: "Instagram Reel Editing",
      slug: "/reel-editing-surat",
      icon: <FaInstagram />,
      desc: "High-retention, viral short-form edits for Instagram Reels, YouTube Shorts, and TikTok. Dynamic captions, sound FX, and speed ramps.",
      keywords: "Reel Editor Surat, Instagram Reel Editor, Social Media Pacing",
    },
    {
      id: "03",
      title: "Commercial Video Production",
      slug: "/commercial-video-production-surat",
      icon: <FaVideo />,
      desc: "Premium ad film and promotional video shoots for brands, cafes, restaurants, and startups in Surat. Designed to capture local and national audiences.",
      keywords: "Commercial Video Surat, Cafe Promo Videos, Brand Film Production",
    },
    {
      id: "04",
      title: "Corporate Shoot",
      slug: "/corporate-shoot-surat",
      icon: <FaBriefcase />,
      desc: "Professional interview shoots, company profiles, documentary reels, and internal training materials for Surat's industrial and corporate sectors.",
      keywords: "Corporate Video Shoot Surat, Business Promo Videos, Interview Filmmaker",
    },
    {
      id: "05",
      title: "Product Shoot",
      slug: "/product-shoot-surat",
      icon: <FaBoxOpen />,
      desc: "Creative e-commerce product videos, macro detail shoots, and engaging promotional campaigns. Bring your product catalog to life.",
      keywords: "Product Shoot Surat, E-commerce Videography, Product Promo Reels",
    },
    {
      id: "06",
      title: "Fashion Shoot",
      slug: "/fashion-shoot-surat",
      icon: <FaShirt />,
      desc: "Cinematic clothing brand videos, lookbooks, model portfolio reels, and textile showroom walkthroughs across Surat's fashion hub.",
      keywords: "Fashion Shoot Surat, Textile Brand Video, Clothing Brand Showcase",
    },
    {
      id: "07",
      title: "Wedding Cinematography",
      slug: "/wedding-cinematography-surat",
      icon: <FaHeart />,
      desc: "Premium cinematic wedding films, highlight reels, pre-wedding couple shoots, and event videography. Capturing the emotions forever.",
      keywords: "Wedding Cinematographer Surat, Wedding Highlights, Pre-wedding Film",
    },
    {
      id: "08",
      title: "Color Grading",
      slug: "/color-grading-surat",
      icon: <FaSliders />,
      desc: "Professional DaVinci Resolve color correction, look matching, color space conversion, and custom LUT styling for films and commercials.",
      keywords: "Color Grading Services Surat, DaVinci Resolve Colorist, Skin Tone Correction",
    },
    {
      id: "09",
      title: "AI Visual Effects",
      slug: "/ai-visual-effects-surat",
      icon: <FaMicrochip />,
      desc: "Cutting-edge AI-integrated video creation, motion tracking, background cleanups, VFX additions, and next-gen visual animations.",
      keywords: "AI Video Editing Surat, Visual Effects Surat, Next-Gen Motion Graphics",
    },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Video Production & Editing Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "302, Royal Arcade, VIP Road, Vesu",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395007",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Gujarat"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Production Catalog",
      "itemListElement": servicesData.map((s) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc
        }
      }))
    }
  };

  return (
    <div className="services-page-wrapper">
      <SEO
        title="Professional Video Editing &amp; Videography Services in Surat | FRAME."
        description="Explore our premium range of videography and editing services in Surat, Gujarat. From Instagram Reels and YouTube edits to high-end commercial shoots and color grading."
        keywords="Video Editing Services Surat, Videography Surat, Video Production Surat, Reel Editor Surat, Commercial Shoot Surat"
        canonical="/services"
        schema={servicesSchema}
      />

      <section className="services-hero section-container">
        <motion.div
          className="services-hero-text"
          initial={isMobile ? "hidden" : false}
          whileInView={isMobile ? "visible" : undefined}
          viewport={{ once: true }}
          variants={revealVariants}
        >
          <span className="featured-tag">OUR EXPERTISE</span>
          <h1 className="services-h1-glowing">
            Professional <span>Video Services</span> in Surat
          </h1>
          <p className="services-lead">
            Whether you need a full-scale commercial shoot on-site or high-performance remote video editing, our services are structured to deliver premium results.
          </p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section section-container">
        <div className="services-page-grid">
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              className="service-page-card"
              initial={isMobile ? "hidden" : false}
              whileInView={isMobile ? "visible" : undefined}
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
            >
              <div className="service-card-icon">{item.icon}</div>
              <div className="service-card-meta">
                <span className="service-card-id">{item.id}</span>
                <h2>{item.title}</h2>
                <p className="service-card-desc">{item.desc}</p>
                <div className="service-card-tags">
                  {item.keywords.split(",").map((k, i) => (
                    <span key={i} className="service-card-tag">
                      {k.trim()}
                    </span>
                  ))}
                </div>
                <Link to={item.slug} className="service-card-link">
                  Learn More &amp; Pricing &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* local targeting details */}
      <section className="services-local-focus section-container">
        <div className="local-focus-grid">
          <div className="local-text">
            <h2>Serving Surat's Vibrant Business Ecosystem</h2>
            <p>
              Surat's commercial landscapes are moving fast. In Vesu, VIP Road, and Adajan, new restaurants, fitness centers, and boutique designer brands are opening daily. In City Light and Piplod, corporate offices demand premium brand profiles. In Varachha and Katargam, the manufacturing and diamond trade sectors are pivoting to digital advertisements.
            </p>
            <p>
              To survive in this market, you need visuals that match the ambition of your business. We tailor each shoot and edit package to fit Surat's unique demographics and consumption habits.
            </p>
            <div className="local-stats-row">
              <div className="local-stat">
                <h3>100%</h3>
                <p>Local Surat Coverage</p>
              </div>
              <div className="local-stat">
                <h3>10-Bit</h3>
                <p>Cinema Quality Raw Log</p>
              </div>
              <div className="local-stat">
                <h3>4K UHD</h3>
                <p>Drone &amp; Gimbal Shoots</p>
              </div>
            </div>
          </div>
          <div className="local-cta-box">
            <h3>Need a Custom Shoot/Edit Package?</h3>
            <p>
              Let's create a customized production plan for your cafe, showroom, real estate property, or clothing line. Get exact quotes, storyboard templates, and delivery schedules.
            </p>
            <Link to="/contact" className="btn-primary">
              Get an Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
