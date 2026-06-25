import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaCamera, FaCube, FaCartShopping } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const ProductShootSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Product Shoot Services Surat",
    "description": "E-commerce product videography, creative commercial shoots, macro details, and social media showcase videos in Surat, Gujarat.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Creative Product Shoot in Surat | E-commerce Video Shoot"
        description="Best product shoot services in Surat. Creative videography for cosmetics, jewelry, apparel, food, and electronics. Showcase detail with 4K macro shoots. Book now!"
        keywords="Product Shoot Surat, E-commerce Video Production Surat, Jewelry Shoot Surat, Cosmetic Product Video Surat, Creative Product Videography Surat"
        canonical="/product-shoot-surat"
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
            <div className="service-hero-badge">E-commerce &amp; Creative</div>
            <h1 className="service-detail-h1">
              Creative <span>Product Shoot</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Make your products look irresistible. We shoot premium 4K product promotional videos, social media reels, and e-commerce video catalogs for jewelry, cosmetics, food, apparel, and gadgets in Surat, Gujarat.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Book Product Shoot</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Get 1 Video Demo</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_product_shoot.png" 
              alt="Creative Product Videography Setup - Studio Macro Rig and Slider" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>High-Detail Studio Product Videography in Surat</h2>
            <p>
              In e-commerce and retail, static pictures are no longer enough. Customers want to see texture, shine, scale, and function. Based in Surat's commercial center, we design high-conversion product videography that drives online store conversions. From premium cosmetic lines in <strong>Vesu</strong>, luxury jewelry lines in <strong>Athwa</strong>, to apparel models along <strong>VIP Road and Adajan</strong>, we showcase the fine details that build consumer trust.
            </p>
            <p>
              We don't just shoot basic product rotations. We conceptualize custom sets, script visual storyboards, use macro probe lenses to get inside products, and create stop-motion and visual effect reels.
            </p>

            <h3>How We Make Products Stand Out</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaCube className="benefit-icon" />
                <h4>Cinematic Set Design</h4>
                <p>We build stylized physical sets using matching colored backdrops, water tanks, mirrors, and props that match your brand's color palette.</p>
              </div>
              <div className="benefit-card">
                <FaCamera className="benefit-icon" />
                <h4>4K Macro Details</h4>
                <p>Using macro lenses, we capture extreme close-ups of product textures, gemstone sparkles, skin hydration, or mechanical movements.</p>
              </div>
              <div className="benefit-card">
                <FaCartShopping className="benefit-icon" />
                <h4>Conversion Pacing</h4>
                <p>Every clip is timed to highlight specific product USPs (Unique Selling Propositions) to directly increase e-commerce cart additions.</p>
              </div>
            </div>

            <h3>Our Studio Product Shoot Process</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Creative Brief &amp; Moodboard</h4>
                  <p>We align on brand guidelines and build moodboards showing lighting styles, background props, and camera movements.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>Studio Shoot Production</h4>
                  <p>We use precise lighting, sliders, probe lenses, turntables, and smoke/water effects to capture highly polished footage.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Post-Production &amp; Touch-up</h4>
                  <p>We clean up reflections, color match products to real-life samples, add graphics, and sync high-energy background audios.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Exporting &amp; Delivery</h4>
                  <p>We deliver high-res square formats for Shopify/Amazon catalogs and vertical formats for Instagram story/feed ads.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Product Niches</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Jewelry &amp; Ornament Detail Shoots</span></li>
                <li><FaCircleCheck /> <span>Cosmetics &amp; Skincare macro videos</span></li>
                <li><FaCircleCheck /> <span>Food &amp; Beverage commercial shoots</span></li>
                <li><FaCircleCheck /> <span>Apparel, shoes, and lifestyle goods</span></li>
                <li><FaCircleCheck /> <span>Consumer electronics &amp; gadgets</span></li>
                <li><FaCircleCheck /> <span>E-commerce catalog looping clips</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/fashion-shoot-surat" className="related-link-card">
                  <span>Fashion Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercials</span> <FaCircleArrowRight />
                </Link>
                <Link to="/color-grading-surat" className="related-link-card">
                  <span>Color Grading</span> <FaCircleArrowRight />
                </Link>
                <Link to="/ai-visual-effects-surat" className="related-link-card">
                  <span>AI Visual FX</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">PRODUCTS FAQ</span>
          <h2>Product Shoot FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Do we need to deliver products to your Surat studio?</h3>
            <p>Yes. You can courier or hand-deliver your products to our VIP Road, Vesu studio. If your product is large or you want to feature an on-site facility, we can set up our mobile studio at your location.</p>
          </div>
          <div className="faq-item">
            <h3>Do you return the products after the shoot is finished?</h3>
            <p>Absolutely. All products are cataloged upon arrival and returned to you via courier or pick-up once the final edit reviews are approved.</p>
          </div>
          <div className="faq-item">
            <h3>Can you film models interacting with the products?</h3>
            <p>Yes, featuring hands or models interacting with products (applying cream, wearing jewelry) boosts conversion. We source local hand and face models depending on your budget.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Transform Your E-commerce Product Presentation</h2>
          <p>Get studio-grade product videos in Surat that build trust and drive higher online sales. Book your project today.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Product Shoot</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Studio</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShootSurat;
