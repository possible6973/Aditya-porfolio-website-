import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaVideo, FaStar, FaFilm } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const WeddingCinematographySurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wedding Cinematography Surat",
    "description": "Premium cinematic wedding films, wedding highlights, teaser reels, and pre-wedding films in Surat, Gujarat.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Best Wedding Cinematographer in Surat | Cinematic Wedding Films"
        description="Looking for the best wedding cinematographer in Surat? We shoot premium luxury wedding films, pre-wedding couple videos, highlights, and viral teaser reels. Get a quote today!"
        keywords="Wedding Cinematographer Surat, Best Wedding Cinematographer Surat, Wedding Video Shoot Surat, Pre-wedding Film Surat, Wedding Highlights Gujarat"
        canonical="/wedding-cinematography-surat"
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
            <div className="service-hero-badge">Luxury Wedding Films</div>
            <h1 className="service-detail-h1">
              Wedding <span>Cinematographer</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Every love story has a heartbeat. We shoot luxury, high-end cinematic wedding films, emotional highlight reels, creative pre-wedding couple films, and viral wedding teaser reels across Surat, Gujarat.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Check Availability</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Watch Wedding Reels</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_ai_vfx.png" 
              alt="Cinematic Wedding Shoot Surat - Couple Portrait at Sunset" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>Luxury Cinematic Wedding Storytelling in Surat</h2>
            <p>
              Your wedding is a once-in-a-lifetime event. Standard wedding videos are often hours of long, static recordings that gather dust. We do things differently. As a premium <strong>wedding cinematographer in Surat</strong>, we treat your wedding like a big-budget movie. We focus on capturing genuine emotions, subtle glances, spontaneous laughter, and the rich cultural scale of Surat weddings.
            </p>
            <p>
              Whether you are hosting a grand celebration at a luxury resort in <strong>Vesu or Piplod</strong>, a grand reception along <strong>VIP Road</strong>, or an intimate couple shoot in <strong>Pal or City Light</strong>, we bring cinema-grade cameras, camera stabilizers, and professional lighting to capture every moment.
            </p>

            <h3>How We Craft Wedding Movies</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaStar className="benefit-icon" />
                <h4>Emotional Focus</h4>
                <p>We avoid stiff, awkward poses. We focus on capturing raw, authentic moments, family laughter, and emotional glances naturally.</p>
              </div>
              <div className="benefit-card">
                <FaVideo className="benefit-icon" />
                <h4>4K Cinema Gear</h4>
                <p>We shoot on high-performance cinema cameras and prime lenses, providing a shallow depth of field and beautiful low-light highlights.</p>
              </div>
              <div className="benefit-card">
                <FaFilm className="benefit-icon" />
                <h4>Cinematic Story Pacing</h4>
                <p>Our post-production pipeline combines speech transcripts, custom soundscapes, and color grading to tell a cohesive story.</p>
              </div>
            </div>

            <h3>Our Production Timeline</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Creative Consultation</h4>
                  <p>We sit down with you in Surat to understand your wedding events, schedule, styling preferences, and preferred music moods.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>The Shoot (Pre-Wedding &amp; Ceremony)</h4>
                  <p>Our team captures ceremonies, guest interactions, rituals, and portrait sessions using gimbals, drones, and professional audio gear.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Fine Editing &amp; Narrative Sync</h4>
                  <p>We edit the footage, synchronize speeches, match audios to song beats, and edit out all filler frames to keep the film engaging.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Resolve Color Grading &amp; Sound</h4>
                  <p>We apply beautiful color grades (warm glows, classic tones) and design audio pathways to deliver an emotional experience.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Wedding Offerings</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Cinematic Wedding Highlight Films (3-5 min)</span></li>
                <li><FaCircleCheck /> <span>Full-Length Wedding Documentary Films</span></li>
                <li><FaCircleCheck /> <span>Social Media Wedding Teasers (9:16)</span></li>
                <li><FaCircleCheck /> <span>Cinematic Pre-Wedding Couple Shoots</span></li>
                <li><FaCircleCheck /> <span>Engagement &amp; Sangeet Highlights</span></li>
                <li><FaCircleCheck /> <span>Drone Aerial Videography coverage</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/fashion-shoot-surat" className="related-link-card">
                  <span>Fashion Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/color-grading-surat" className="related-link-card">
                  <span>Color Grading</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercials</span> <FaCircleArrowRight />
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
          <span className="featured-tag">WEDDINGS FAQ</span>
          <h2>Wedding Videography FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How far in advance should we book our wedding cinematographer in Surat?</h3>
            <p>Due to the limited wedding dates in Gujarat's calendar, we recommend booking at least 3 to 6 months in advance. A retainer deposit secures your date on our production schedule.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer photo packages along with videography?</h3>
            <p>We focus exclusively on premium cinematography and video editing. However, we frequently partner with top-tier wedding photographers in Surat and can offer unified photography/videography recommendations.</p>
          </div>
          <div className="faq-item">
            <h3>What is the delivery timeline for our wedding film?</h3>
            <p>We deliver a 1-minute social media teaser reel within 2 to 3 weeks of the wedding. The complete cinematic highlight film (3-5 minutes) and documentary film are delivered within 8 to 12 weeks, depending on post-production volume.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Capture Your Lifetime Memories in Motion</h2>
          <p>Get a cinematic wedding film package that matches the scale and beauty of your special day in Surat. Contact us to verify date availability.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Check Availability</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Chat</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingCinematographySurat;
