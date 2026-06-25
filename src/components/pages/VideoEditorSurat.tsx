import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaSliders, FaVideo, FaCircleArrowRight, FaClock } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const VideoEditorSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What video editing software do you use for Surat clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily edit on Adobe Premiere Pro and DaVinci Resolve Studio. For complex motion graphics and tracking, we use Adobe After Effects, and integrate Runway Gen-4 for AI visual effects."
        }
      },
      {
        "@type": "Question",
        "name": "How does the video editing collaboration work if we are remote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For remote clients in Surat or worldwide, we use cloud storage (Google Drive/Frame.io) where you upload raw footage. We send review links where you can leave timestamped feedback directly on the video."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical turnaround time for a 10-minute YouTube video or corporate film?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard corporate film or YouTube video takes 5 to 7 business days from receipt of footage. Fast-track delivery within 48 hours is available upon request for time-sensitive campaigns."
        }
      }
    ]
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Professional Video Editor in Surat | Video Editing Services Surat"
        description="Looking for the best video editor in Surat? FRAME. Visuals offers cinema-grade editing, youtube editing, corporate film cuts, and social media reels. Get your free quote today!"
        keywords="Video Editor in Surat, Best Video Editor in Surat, Video Editing Services Surat, Professional Video Editor Surat, YouTube Video Editing Surat, Corporate Film Maker Surat"
        canonical="/video-editor-surat"
        schema={faqSchema}
      />

      {/* Hero Section */}
      <section className="service-detail-hero section-container">
        <div className="service-hero-grid">
          <motion.div 
            className="service-hero-content"
            initial={isMobile ? "hidden" : false}
            whileInView={isMobile ? "visible" : undefined}
            viewport={{ once: true }}
            variants={revealVariants}
          >
            <div className="service-hero-badge">Expert Post-Production</div>
            <h1 className="service-detail-h1">
              Professional <span>Video Editor</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Transform raw camera footage into high-retention cinematic masterpieces. Providing high-end video editing services in Surat, Gujarat for brands, creators, cafes, and businesses looking to dominate search results and capture customer attention.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Chat</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_brand_film.png" 
              alt="Professional Video Editing Studio Surat - Premiere Pro Workspace" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      {/* Detailed Content & Sidebar */}
      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>High-Conversion Video Editing Tailored For Surat Brands</h2>
            <p>
              In today's fast-paced digital economy, your video's first three seconds determine its success. As an experienced <strong>video editor in Surat</strong>, I don't just cut clips together; I design a complete auditory and visual experience. Our post-production pipeline combines psychological pacing, visual hierarchy, custom color profiles, and sound design to ensure your viewers stay engaged from start to finish.
            </p>
            <p>
              Whether you are running a real estate business in <strong>Vesu or Adajan</strong>, promoting a high-end designer label in <strong>Athwa or VIP Road</strong>, or exporting goods from Surat's industrial corridors, professional video editing is your most powerful tool. We work with local business owners to translate raw shoot files into polished assets for social media ads, websites, television, and YouTube.
            </p>

            <h3>Our Premium Editing Workflow</h3>
            <p>
              We follow a strict, cinematic editing workflow to ensure consistency and speed across all projects. Here is how we transform your raw footage:
            </p>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Ingestion &amp; Media Management</h4>
                  <p>We receive your footage (via secure cloud links or physical SSDs in Surat), backup the files, transcode to editing proxies, and organize timeline folders.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>The Assembly Cut (A-Roll Pacing)</h4>
                  <p>We select the best takes, structure the narrative spine, align voices, and create the basic timing block to ensure a logical flow.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>B-Roll &amp; Visual FX Ingestion</h4>
                  <p>We layer in cinematic B-roll, motion graphics, clean titles, kinetic text animations, and transition effects to keep the viewer visually stimulated.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Sound Design &amp; Foley</h4>
                  <p>Sound is 50% of the video experience. We balance dialogue, add clean background soundscapes, layer SFX (swooshes, hits, risers), and mix frequencies.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">05</div>
                <div className="step-content">
                  <h4>Color Correction &amp; Grading</h4>
                  <p>We balance white points, adjust contrast curves, match color layouts across different cameras, and apply a professional color grade using DaVinci Resolve.</p>
                </div>
              </div>
            </div>

            <h3>Benefits of Professional Video Editing</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaClock className="benefit-icon" />
                <h4>48-72 Hour Delivery</h4>
                <p>Fast turnarounds for social media reels, ensuring your brand stays current with online trends in Surat.</p>
              </div>
              <div className="benefit-card">
                <FaSliders className="benefit-icon" />
                <h4>DaVinci Colorist Grade</h4>
                <p>Rich, balanced skin tones, vibrant look spaces, and customized LUTs tailored for your brand.</p>
              </div>
              <div className="benefit-card">
                <FaVideo className="benefit-icon" />
                <h4>Sound Foley Grid</h4>
                <p>Immersive audio design with beat-matching sound effects that increase scroll-stopping engagement.</p>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Services Included</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>YouTube Video Editing &amp; Pacing</span></li>
                <li><FaCircleCheck /> <span>Corporate Promo Videos &amp; Documentaries</span></li>
                <li><FaCircleCheck /> <span>Real Estate walkthroughs &amp; promos</span></li>
                <li><FaCircleCheck /> <span>Restaurant &amp; Cafe cinematic reviews</span></li>
                <li><FaCircleCheck /> <span>Podcast video multicam edit</span></li>
                <li><FaCircleCheck /> <span>Commercial &amp; Ad campaign post-production</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/reel-editing-surat" className="related-link-card">
                  <span>Reel Editing</span> <FaCircleArrowRight />
                </Link>
                <Link to="/color-grading-surat" className="related-link-card">
                  <span>Color Grading</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercial Shoot</span> <FaCircleArrowRight />
                </Link>
                <Link to="/corporate-shoot-surat" className="related-link-card">
                  <span>Corporate Shoot</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">LOCAL FAQ</span>
          <h2>Video Editing FAQ for Surat Clients</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>How much do your video editing services cost in Surat?</h3>
            <p>Our editing rates depend on the complexity of the project, raw footage length, and editing requirements (e.g., color grading, motion graphics). Simple reels start at ₹1,500/reel, while comprehensive commercial videos range from ₹15,000 to ₹50,000. Contact us for a detailed custom estimate.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer monthly packages for social media editing?</h3>
            <p>Yes. We offer recurring monthly retainer contracts for Surat-based businesses, cafes, and creators. These packages include a set number of reels, YouTube videos, or promo films delivered weekly with automated priority feedback cycles.</p>
          </div>
          <div className="faq-item">
            <h3>Can you edit videos shot on my phone?</h3>
            <p>Yes, modern smartphones capture high-quality 4K video. We apply professional color correction, noise reduction, and sound design to mobile footage, making it look as premium and professional as possible.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Get the Best Video Editing Services in Surat</h2>
          <p>Let's turn your raw video files into highly optimized visual content that generates leads, clicks, and branding impact. Book your free consultation today.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Free Consultation</Link>
            <Link to="/portfolio" className="btn-secondary">View My Works</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoEditorSurat;
