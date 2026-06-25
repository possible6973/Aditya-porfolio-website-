import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaBullhorn, FaGlasses, FaCamera } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const CommercialVideoSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Video Production Surat",
    "description": "High-end commercial films, promotional videos, and brand shoots in Surat, Gujarat. Ideal for cafes, restaurants, fashion brands, and corporate offices.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Commercial Video Production Surat | Cafe &amp; Brand Shoots"
        description="Best Commercial Video Production in Surat. We shoot premium promotional videos, cafe promos, real estate walkthroughs, and clothing brand ads. Book a free consultation!"
        keywords="Commercial Video Production Surat, Cafe Promotional Videos Surat, Restaurant Video Shoot Surat, Brand Video Production Surat, Advertising Video Production Surat, Business Promo Videos Surat"
        canonical="/commercial-video-production-surat"
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
            <div className="service-hero-badge">High-End Brand Shoots</div>
            <h1 className="service-detail-h1">
              Commercial <span>Video Production</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Make your business look premium. We shoot and edit high-impact commercial films, cinema-grade cafe and restaurant promotional videos, real estate listings, and startup promo campaigns across Surat, Gujarat.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Book a Shoot</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Check Out Portfolio</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_product_shoot.png" 
              alt="Commercial Video Shoot Surat - RED Cinema Camera Rig on Set" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>Premium Video Production Services for Surat's Leading Brands</h2>
            <p>
              Surat's consumer market is highly visual. To stand out among competitor brands on VIP Road, Adajan, or Vesu, you need video production that looks like it belongs on television. We offer end-to-end commercial filmmaking that combines cinematic storytelling with direct response marketing triggers.
            </p>
            <p>
              Whether you want a high-energy promotional video for a boutique restaurant in <strong>Piplod or City Light</strong>, a dramatic walkthrough for a real estate listing in <strong>Pal</strong>, or a product promo for a luxury lifestyle brand, we bring full-scale production values. We handle scriptwriting, storyboard planning, casting, lighting setup, 4K/5.1K camera shoots, drone videography, and post-production.
            </p>

            <h3>Why Invest in Commercial Video?</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaBullhorn className="benefit-icon" />
                <h4>Higher Conversions</h4>
                <p>Promotional videos increase brand authority, explaining your product or service in under 60 seconds and driving lead submissions.</p>
              </div>
              <div className="benefit-card">
                <FaCamera className="benefit-icon" />
                <h4>4K Cinema Gear</h4>
                <p>We shoot on high-end 10-bit mirrorless and cinema cameras with pro lenses, providing visual clarity that mobile phones cannot achieve.</p>
              </div>
              <div className="benefit-card">
                <FaGlasses className="benefit-icon" />
                <h4>Director's Guidance</h4>
                <p>We scout locations in Surat, draft visual storyboards, direct your staff on set, and script hooks to make the shoot seamless.</p>
              </div>
            </div>

            <h3>Our Production Process</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Pre-Production &amp; Concepts</h4>
                  <p>We align on your target audience, draft scripts, and outline shot lists. We map out locations across Surat and organize scheduling.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>The Commercial Shoot Day</h4>
                  <p>We set up key studio lighting, professional audio recorders, stable gimbal rigs, and capture high-detail shots, cinematic B-roll, and drone views.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Cinematic Post-Production</h4>
                  <p>Our editing suite handles the assembly, fine pacing, color correction, color grading (using DaVinci Resolve), text animations, and audio mixing.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Revisions &amp; Final Delivery</h4>
                  <p>We upload preview files for review, apply feedback, and deliver the final assets in all required aspects (16:9 for websites, 9:16 for social ads).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Commercial Types</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Restaurant &amp; Cafe Promotional Films</span></li>
                <li><FaCircleCheck /> <span>Real Estate walkthroughs &amp; luxury ads</span></li>
                <li><FaCircleCheck /> <span>Textile &amp; Apparel brand campaigns</span></li>
                <li><FaCircleCheck /> <span>E-commerce product launch promos</span></li>
                <li><FaCircleCheck /> <span>Fitness studios &amp; gym intros</span></li>
                <li><FaCircleCheck /> <span>Hospitality and hotel promo films</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/corporate-shoot-surat" className="related-link-card">
                  <span>Corporate Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/product-shoot-surat" className="related-link-card">
                  <span>Product Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/fashion-shoot-surat" className="related-link-card">
                  <span>Fashion Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/video-editor-surat" className="related-link-card">
                  <span>Video Editing</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">COMMERCIALS FAQ</span>
          <h2>Commercial Video Production FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How long does a typical commercial video shoot take?</h3>
            <p>Most restaurant, product, or local business shoots in Surat are completed within 1 to 2 days on set. Pre-production requires 3-5 days, and final post-production delivery takes about 7-10 working days.</p>
          </div>
          <div className="faq-item">
            <h3>Do you provide actors or models for the promotional shoot?</h3>
            <p>We work with casting agencies in Surat to source professional models, voiceover artists, and actors depending on your budget requirements. You can also feature your own staff or business founders.</p>
          </div>
          <div className="faq-item">
            <h3>What are the licensing rights for the commercial video?</h3>
            <p>All delivered videos include commercial use licensing rights, allowing you to run paid Facebook/Instagram/Google Ads, air them on regional media networks, and display them on your websites indefinitely.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Create a Visual Asset That Drives Sales in Surat</h2>
          <p>Get a high-conversion commercial video shoot tailored to your brand's unique goals and location requirements in Gujarat.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">Let's Connect</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialVideoSurat;
