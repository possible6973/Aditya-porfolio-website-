import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaInstagram, FaBolt, FaShareNodes } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const ReelEditingSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instagram Reel Editing Services Surat",
    "description": "Professional short-form video editing for Instagram Reels, YouTube Shorts, and TikTok in Surat, Gujarat. Captions, emojis, and sound design.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Instagram Reel Editor in Surat | Short Form Video Editing Surat"
        description="Looking for a professional reel editor in Surat? We edit viral Instagram reels, shorts, and TikToks with trendy transitions, kinetic captions, and SFX. Get pricing details!"
        keywords="Reel Editor Surat, Instagram Reel Editor Surat, Social Media Video Editing Surat, Shorts Video Editor Surat, Viral Reel Editing Gujarat"
        canonical="/reel-editing-surat"
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
            <div className="service-hero-badge">Viral Social Growth</div>
            <h1 className="service-detail-h1">
              Instagram <span>Reel Editor</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Make your short-form content stand out on the feed. We design high-engagement, fast-paced Instagram reels and YouTube shorts with trendy transitions, kinetic subtitles, sound effects, and scroll-stopping hooks for brands and creators in Surat.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Book Retainer</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Get 1 Free Reel Demo</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_viral_reel.png" 
              alt="Instagram Reel Editing Studio Surat - Vertical Video Editing Timeline" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>The Science of Viral Reels: Crafted for Surat's Audience</h2>
            <p>
              Short-form video has completely changed how customers discover businesses. From cafes on <strong>VIP Road and Vesu</strong> showing off their latest dishes, to fashion studios in <strong>Adajan</strong> demonstrating outfit styling, to real estate agents in <strong>Piplod</strong> showcasing luxury properties – a 15-second reel can bring hundreds of walk-ins and inquiries.
            </p>
            <p>
              But a standard video isn't enough. To beat the algorithm, you need high average watch times and click-throughs. Our reel editing process targets the viewer's attention span by integrating custom-styled subtitles, active zooms, motion graphic callouts, sound effects, and sound mixing. We optimize your footage to fit the exact pacing of current audio trends.
            </p>

            <h3>What Makes a Reel Go Viral?</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaBolt className="benefit-icon" />
                <h4>The 3-Second Hook</h4>
                <p>We write and design magnetic visual titles and text triggers in the first 3 seconds of the reel to prevent users from scrolling past.</p>
              </div>
              <div className="benefit-card">
                <FaShareNodes className="benefit-icon" />
                <h4>Kinetic Typography</h4>
                <p>Dynamic, colorful captions that sync perfectly to the speaker's voice, highlighting key words with emojis and sound cues.</p>
              </div>
              <div className="benefit-card">
                <FaInstagram className="benefit-icon" />
                <h4>Trending Audio Matching</h4>
                <p>We sync transitions, cuts, and visual impacts directly to the beats of trending social media audios to gain algorithmic boost.</p>
              </div>
            </div>

            <h3>Our Reel Editing Process</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>Footage Upload &amp; Script Prep</h4>
                  <p>You record raw vertical clips on your camera or phone and upload them to our cloud folder. We analyze the speech, create a cut-list, and design hooks.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>Rough Cut &amp; Silences Removal</h4>
                  <p>We edit out all filler words (ums, ahs, pauses) to create a high-speed, continuous speech pattern that feels energetic and holds attention.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Motion Subtitles &amp; Sound FX</h4>
                  <p>We add customized text animations, frame zooms, graphic overlays (charts, emojis, screens), and crisp sound effects (whooshes, pops, bell rings).</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Final Polish &amp; Aspect Formats</h4>
                  <p>We apply clean color grades and deliver the high-quality 9:16 vertical file, complete with title suggestions and hashtag strategies for Surat's local reach.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Reel Packages</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Weekly Starter: 3 Reels / Week</span></li>
                <li><FaCircleCheck /> <span>Growth Package: 5 Reels / Week</span></li>
                <li><FaCircleCheck /> <span>Influencer Tier: Daily Reel Edits</span></li>
                <li><FaCircleCheck /> <span>All drafts include 2 rounds of edits</span></li>
                <li><FaCircleCheck /> <span>Caption and description templates</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/video-editor-surat" className="related-link-card">
                  <span>Video Editing</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercial Shoot</span> <FaCircleArrowRight />
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
          <span className="featured-tag">REELS FAQ</span>
          <h2>Short Video Editing FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Do you write script hooks for my reels?</h3>
            <p>Yes. As part of our monthly retainer packages, we provide strategic script guidelines, hook suggestions, and concepts that have a high probability of local viral traction in Surat.</p>
          </div>
          <div className="faq-item">
            <h3>How do we send you large mobile video files?</h3>
            <p>We provide a dedicated private Google Drive or Dropbox link where you can dump raw files directly from your phone. You can also send them via WhatsApp Document format or Telegram if the size is small.</p>
          </div>
          <div className="faq-item">
            <h3>Can you edit YouTube Shorts and TikToks as well?</h3>
            <p>Yes, vertical video is cross-platform. We edit and deliver vertical files that are fully optimized for Instagram Reels, YouTube Shorts, Facebook Reels, and TikTok.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Dominate the Social Media Feed in Surat</h2>
          <p>Get professional reel editing services and monthly retainers designed to skyrocket your brand's reach and direct customer inquiries in Gujarat.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Me</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReelEditingSurat;
