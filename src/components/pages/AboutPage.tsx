import SEO from "../SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCamera, FaVideo, FaLightbulb, FaAward } from "react-icons/fa6";
import "../styles/AboutPage.css";

const AboutPage = () => {
  const pageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Alex Moncy",
      "jobTitle": "Lead Filmmaker, Cinematographer & Editor",
      "description": "Alex Moncy is a professional cinematographer and video editor based in Surat, Gujarat, specializing in high-performance digital content, corporate films, and brand shoots.",
      "knowsAbout": ["Video Editing", "Cinematography", "Color Grading", "DaVinci Resolve", "Visual Effects", "Drone Videography"],
      "homeLocation": {
        "@type": "Place",
        "name": "Surat, Gujarat, India"
      }
    }
  };

  return (
    <div className="about-page-wrapper">
      <SEO
        title="About Alex Moncy | Professional Video Editor &amp; Cinematographer in Surat"
        description="Learn more about Alex Moncy, the leading video editor and cinematographer based in Surat, Gujarat. Over 3+ years in professional production, 120+ projects delivered, and 50M+ views generated."
        keywords="About Video Editor Surat, Cinematographer Surat, Alex Moncy, Video Production Surat, Video Editing Studio Surat, Camera Shoot Surat"
        canonical="/about"
        schema={aboutSchema}
      />

      <section className="about-hero-section section-container">
        <motion.div
          className="about-hero-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={pageVariants}
        >
          <span className="featured-tag">THE STORY BEHIND THE LENS</span>
          <h1 className="about-h1-glowing">
            Crafting Visual Narratives in <span>Surat, Gujarat</span>
          </h1>
          <p className="about-hero-lead">
            Meet Alex Moncy: A visionary cinematographer, technical video editor, and color grading expert based in Surat, dedicated to helping local brands, cafes, startups, and creators dominate digital platforms.
          </p>
        </motion.div>
      </section>

      {/* Narrative Section - 1200+ words target */}
      <section className="about-narrative-section section-container">
        <div className="about-narrative-grid">
          <div className="narrative-left">
            <div className="narrative-img-box">
              <img src="/about-shoot.png" alt="Alex Moncy Filming with Cinema Rig in Surat" className="narrative-img" />
              <div className="narrative-img-glow"></div>
            </div>
            
            <div className="equipment-card">
              <h3>My Professional Gear</h3>
              <ul className="equipment-list">
                <li><FaCamera /> <span>Sony FX3 Cinema Camera &amp; A7SIII</span></li>
                <li><FaVideo /> <span>DJI Mavic 3 Pro (4K Drone Videography)</span></li>
                <li><FaLightbulb /> <span>Aputure &amp; Godox Studio Lighting Grid</span></li>
                <li><FaAward /> <span>DaVinci Resolve Studio (Micro Panel Control)</span></li>
              </ul>
            </div>
          </div>

          <div className="narrative-right">
            <h2>The Vision &amp; Journey</h2>
            <p>
              Every frame we capture tells a unique story. Based in the rapidly growing hub of Surat, Gujarat, I have spent the last 3+ years bridging the gap between artistic filmmaking and conversion-focused video marketing. In an age where digital consumption is at an all-time high, generic content simply gets scrolled past. That is why I founded FRAME. Visuals – to create visuals that literally <strong>STOP THE SCROLL</strong>.
            </p>
            <p>
              My journey started with a deep fascination for color theory and pacing. I spent thousands of hours analyzing cinema, understanding how directors use lighting to evoke emotion and how editors use cuts to build tension. Translating these high-level cinematic principles to social media reels, business promo videos, and corporate campaigns has allowed me to generate over <strong>50 Million views</strong> for my clients.
            </p>

            <h3>Dominating the Local Surat Market</h3>
            <p>
              Surat is a city of unmatched entrepreneurial spirit. From the bustling textile markets of Varachha and Katargam to the premium cafes along VIP Road and Vesu, and the corporate centers in Adajan and City Light – every local business needs a visual voice. I specialize in giving Surat-based brands that voice. Whether it's a food promotional video for a cafe in Piplod, a high-fashion lookbook shoot in Athwa, or a corporate film for a diamond exporter in Pal, my focus is on delivering premium quality that sets your brand apart.
            </p>
            <p>
              We don't just point and shoot. We handle the entire creative pipeline. From scriptwriting, storyboarding, and location scouting in local Surat neighborhoods, to directing, editing, sound design, and expert color grading in our dedicated post-production suite.
            </p>

            <h3>Why Choose a Dedicated Local Specialist?</h3>
            <p>
              Optimizing for local search intent means understanding the Surat audience. We know what kind of pacing, hook, and visual tone resonates with local consumers. We work directly with you on-site, bringing studio-grade equipment to your offices, outlets, or locations across Surat, ensuring that you don't have to outsource production to agencies in Mumbai or Ahmedabad. Get premium, world-class production locally, with fast delivery and high responsiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="about-trust-signals section-container">
        <div className="trust-head">
          <span className="featured-tag">OUR CORE VALES</span>
          <h2>Why Brands Trust Us</h2>
        </div>
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-number">01</div>
            <h3>Premium Production</h3>
            <p>We shoot on 10-bit cinema cameras and use industry-standard DaVinci Resolve Studio for flawless color fidelity and cinema-grade finishes.</p>
          </div>
          <div className="trust-card">
            <div className="trust-number">02</div>
            <h3>Local Market Knowledge</h3>
            <p>From Vesu's cafe culture to Varachha's industrial hubs, we understand the aesthetics and marketing triggers of Surat consumers.</p>
          </div>
          <div className="trust-card">
            <div className="trust-number">03</div>
            <h3>Fast Delivery</h3>
            <p>We respect deadlines. We deliver initial drafts of reels within 48 hours and commercial videos within 7-10 working days.</p>
          </div>
          <div className="trust-card">
            <div className="trust-number">04</div>
            <h3>Data-Driven Strategy</h3>
            <p>We don't just edit for aesthetics; we analyze click-through rates, watch times, and platform algorithms to ensure your video performs.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">QUESTIONS &amp; ANSWERS</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Do you travel outside Surat for shoot productions?</h3>
            <p>Yes. While my primary service areas are Vesu, Adajan, VIP Road, and the wider Surat region, I accept commercial shoot bookings across Gujarat and Mumbai. Editing and color grading services are offered globally via remote remote pipelines.</p>
          </div>
          <div className="faq-item">
            <h3>What is your turnaround time for social media reels?</h3>
            <p>For regular social media reel editing packages, we deliver drafts within 48 to 72 hours. Fast-track options (24-hour turnaround) are available for urgent commercial campaigns.</p>
          </div>
          <div className="faq-item">
            <h3>What software do you use for video post-production?</h3>
            <p>We use DaVinci Resolve Studio for color grading, Adobe Premiere Pro for primary edits and pacing, Adobe After Effects for complex motion graphics, and Runway AI/Midjourney for state-of-the-art AI visual effects.</p>
          </div>
          <div className="faq-item">
            <h3>Can we get drone videography for our real estate or event shoot?</h3>
            <p>Absolutely. We provide fully licensed 4K/5.1K drone aerial shots using the DJI Mavic series, perfect for real estate walkthroughs, outdoor commercial shoots, and weddings across Surat.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Ready to scale your brand with premium video?</h2>
          <p>Book a free 15-minute consultation to discuss your script, shoot setup, and budget options in Surat.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
