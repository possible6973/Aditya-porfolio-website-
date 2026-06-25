import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaShirt, FaImage, FaGem } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const FashionShootSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fashion Shoot Services Surat",
    "description": "Premium apparel lookbooks, clothing brand showcase videos, model reels, and textile videography in Surat, Gujarat.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Cinematic Fashion Shoot in Surat | Clothing Brand Videography"
        description="Best fashion shoot services in Surat. Premium lookbook video campaigns, designer label promo reels, model portfolios, and textile showroom video shoots. Contact us!"
        keywords="Fashion Shoot Surat, Textile Brand Video Surat, Clothing Brand Showcase Surat, Designer Lookbook Shoot Surat, Fashion Videographer Gujarat"
        canonical="/fashion-shoot-surat"
        schema={schema}
      />

      <section className="service-detail-hero section-container">
        <div className="service-hero-grid">
          <motion.div 
            className="service-hero-content"
            initial={isMobile ? "hidden" : false}
            whileInView={isMobile ? "visible" : undefined}
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <div className="service-hero-badge">Apparel &amp; Couture</div>
            <h1 className="service-detail-h1">
              Cinematic <span>Fashion Shoot</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Bring your designs to life. Providing high-end clothing brand promo videos, digital lookbooks, model runway reels, and luxury textile showroom campaigns across Surat, Gujarat — the textile capital of India.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Book Fashion Shoot</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Check Out Reels</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_brand_film.png" 
              alt="Fashion Shoot Videography Surat - Modeling Studio Lighting Setup" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>The Go-To Fashion &amp; Textile Videographer in Surat</h2>
            <p>
              Surat is the textile and couture heart of India. From massive manufacturing houses in <strong>Varachha and Katargam</strong> exporting globally, to premium designer boutiques in <strong>Adajan and Vesu</strong>, the fashion market is highly competitive. Static pictures of garments on mannequins are no longer sufficient. To scale your online sales and build brand identity, your garments need to be showcased in motion.
            </p>
            <p>
              We shoot high-definition fashion reels that focus on fabric movement, embroidery details, fit, and texture. Whether you are launching an ethnic bridal collection, a luxury streetwear brand, or a casual menswear catalog, we create cinematic lookbooks and reels that align with global fashion trends.
            </p>

            <h3>How We Showcase Fashion Brands</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaShirt className="benefit-icon" />
                <h4>Fabric Movement Focus</h4>
                <p>We use high-frame-rate slow motion (120fps) to capture the fluid movement, drape, and texture of premium silks, georgettes, and cottons.</p>
              </div>
              <div className="benefit-card">
                <FaGem className="benefit-icon" />
                <h4>Macro Embroidery Closeups</h4>
                <p>Extreme close-up macro sweeps that highlight detailed Zari work, sequins, printing patterns, and stitching quality.</p>
              </div>
              <div className="benefit-card">
                <FaImage className="benefit-icon" />
                <h4>Cinematic Locations</h4>
                <p>We scout heritage, minimal, or modern aesthetic locations in Surat (or build custom minimalist studio sets) that fit the mood of your collection.</p>
              </div>
            </div>

            <h3>Our Fashion Shoot Workflow</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Theme Styling &amp; Storyboards</h4>
                  <p>We analyze your target demographics, select location backdrops, draft scripts, and build styling guides matching your designer outfits.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>On-Location Production</h4>
                  <p>We use cinema rigs, lighting systems, and gimbals to record model movements, styling details, and transitions on set.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Advanced Grade &amp; Effects</h4>
                  <p>We match skin tones, balance colors to match fabric dyes, add trendy pacing cuts, and overlay modern music tracks.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Exporting &amp; Delivery</h4>
                  <p>We deliver high-fidelity vertical lookbook files for social media feeds and horizontal formats for web store headers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Fashion Offerings</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Ethnic &amp; Bridal Wear Lookbooks</span></li>
                <li><FaCircleCheck /> <span>Casual &amp; Streetwear Promo Reels</span></li>
                <li><FaCircleCheck /> <span>Textile Showroom Walkthroughs</span></li>
                <li><FaCircleCheck /> <span>Model Portfolio video highlights</span></li>
                <li><FaCircleCheck /> <span>B2B fabric manufacturer campaigns</span></li>
                <li><FaCircleCheck /> <span>Social media launch countdown teasers</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/product-shoot-surat" className="related-link-card">
                  <span>Product Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercials</span> <FaCircleArrowRight />
                </Link>
                <Link to="/color-grading-surat" className="related-link-card">
                  <span>Color Grading</span> <FaCircleArrowRight />
                </Link>
                <Link to="/wedding-cinematography-surat" className="related-link-card">
                  <span>Wedding Film</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">FASHION FAQ</span>
          <h2>Fashion Videography FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Do you provide models and makeup artists for the fashion shoot?</h3>
            <p>We work directly with model coordinators, fashion stylists, and makeup artists in Surat. We can manage a full-service production package (including models, styling, and makeup) or collaborate with your existing team.</p>
          </div>
          <div className="faq-item">
            <h3>How do you ensure color accuracy of the clothing dye in post?</h3>
            <p>We use professional color charts during shoots to calibrate our camera profiles. In DaVinci Resolve, we adjust contrast and color balances to ensure the fabric color matches real-world samples perfectly.</p>
          </div>
          <div className="faq-item">
            <h3>Can we shoot indoors at our showroom in Adajan/Vesu?</h3>
            <p>Yes. We bring studio lighting packages to illuminate your showroom floors, highlighting display cabinets and garment layouts beautifully.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Launch Your Next Couture Collection in Style</h2>
          <p>Get cinematic fashion lookbooks and promotional videos in Surat designed to maximize online engagement and pre-orders. Book your shoot now.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Fashion Shoot</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">Contact Studio</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionShootSurat;
