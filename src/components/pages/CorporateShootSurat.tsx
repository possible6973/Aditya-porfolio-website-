import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaBuilding, FaUsers, FaMicrophone } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const CorporateShootSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Shoot Services Surat",
    "description": "Professional corporate shoots, business promotional videos, interviews, podcast editing, and documentary filmmaking in Surat, Gujarat.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Corporate Video Shoot in Surat | Business Film Maker Surat"
        description="Need a professional corporate shoot in Surat? We produce premium business promo films, testimonials, training videos, and podcast shoots. Request a custom quote!"
        keywords="Corporate Video Shoot Surat, Corporate Film Maker Surat, Business Promo Videos Surat, Podcast Video Editing Surat, YouTube Video Editing Surat"
        canonical="/corporate-shoot-surat"
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
            <div className="service-hero-badge">Corporate Video Production</div>
            <h1 className="service-detail-h1">
              Corporate <span>Video Shoot</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Establish authority and build trust. Providing studio-grade corporate film shoots, executive interviews, business promotional films, and professional YouTube/podcast production for companies and founders across Surat.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Request Proposal</Link>
              <a href="tel:+919876543210" className="btn-secondary">Call Now</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_documentary.png" 
              alt="Corporate Shoot Production Surat - Interview Setup with Multi-Camera Feed" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>Professional Corporate Films &amp; Interview Shoots in Surat</h2>
            <p>
              Surat's industrial hubs, textile mills, and diamond processing centers are modernizing. B2B and B2C brands in locations like <strong>Adajan, Athwa, Pal, and Varachha</strong> need high-caliber visual media to establish market presence. A professionally directed corporate film builds institutional trust, simplifies sales processes, and showcases organizational scale to potential global clients.
            </p>
            <p>
              We specialize in creating corporate media assets that deliver real returns. Whether you need executive talking-head videos, brand documentaries, training material, or high-fidelity multi-camera podcast setups, we deliver a seamless experience on-site at your offices or in our local Surat studio.
            </p>

            <h3>Key Pillars of Corporate Media</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaUsers className="benefit-icon" />
                <h4>Founder Storytelling</h4>
                <p>We script and shoot high-fidelity interview dialogues that convey the passion, vision, and operational history of your company's leaders.</p>
              </div>
              <div className="benefit-card">
                <FaMicrophone className="benefit-icon" />
                <h4>Studio-Grade Audio</h4>
                <p>We use redundant lavalier and shotgun microphones to record dialogue with zero echo, hum, or environmental noise distraction.</p>
              </div>
              <div className="benefit-card">
                <FaBuilding className="benefit-icon" />
                <h4>Factory &amp; Office B-Roll</h4>
                <p>Cinematic walkthroughs of your manufacturing floors, offices, laboratories, and team interactions to highlight scale and quality control.</p>
              </div>
            </div>

            <h3>Our Corporate Production Blueprint</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Creative Alignment &amp; Scripting</h4>
                  <p>We define the message and write interview question guides, ensuring key talking points and brand values are hit during production.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>Setup &amp; Lighting Prep</h4>
                  <p>On shoot day, we install key lights, fill lights, and background lights to create depth, and set up multi-camera angles (A-Cam &amp; B-Cam).</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>The Interview Session</h4>
                  <p>Our director guides speakers to deliver natural responses. We capture supporting cinematic B-roll and facility aerial shots.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Post-Production &amp; Brand Integration</h4>
                  <p>We clean audio, cut pauses, match multicam feeds, apply corporate color palettes, and insert motion titles, lower thirds, and logo tags.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Corporate Offerings</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Company Profile &amp; Overview Films</span></li>
                <li><FaCircleCheck /> <span>Executive Talking-Head Interviews</span></li>
                <li><FaCircleCheck /> <span>Client Video Testimonial shoots</span></li>
                <li><FaCircleCheck /> <span>YouTube channel content &amp; podcasts</span></li>
                <li><FaCircleCheck /> <span>Internal training &amp; walkthrough videos</span></li>
                <li><FaCircleCheck /> <span>Event coverage &amp; summit highlights</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercials</span> <FaCircleArrowRight />
                </Link>
                <Link to="/video-editor-surat" className="related-link-card">
                  <span>Video Editing</span> <FaCircleArrowRight />
                </Link>
                <Link to="/color-grading-surat" className="related-link-card">
                  <span>Color Grading</span> <FaCircleArrowRight />
                </Link>
                <Link to="/case-studies" className="related-link-card">
                  <span>Case Studies</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">BUSINESS FAQ</span>
          <h2>Corporate Shoot FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How do we prepare our office or facility for a shoot?</h3>
            <p>We provide a pre-shoot checklist to prepare your staff, tidy recording areas, and plan employee schedules. Our team conducts on-site scouts to identify the best backgrounds and lighting spots.</p>
          </div>
          <div className="faq-item">
            <h3>What is a multi-camera interview setup, and why use it?</h3>
            <p>We use two or three cameras shooting simultaneously (e.g. tight facial angle, wider profile angle, context view). This allows us to cut between cameras seamlessly, making edits tighter and visually interesting.</p>
          </div>
          <div className="faq-item">
            <h3>Can you film recurring monthly video podcasts?</h3>
            <p>Yes. We offer recurring monthly retainer contracts where we visit your office or host you in our Surat studio once a month, shoot multiple episodes in one batch, and edit them for weekly YouTube releases.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Elevate Your Corporate Communication</h2>
          <p>Get professional corporate filmmaking services in Surat to recruit talent, win clients, and scale your brand authority.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Request Proposal</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Consult</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateShootSurat;
