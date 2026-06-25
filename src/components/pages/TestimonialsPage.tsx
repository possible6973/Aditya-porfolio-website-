import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaFaceSmile, FaShieldHeart, FaClock, FaGear } from "react-icons/fa6";
import "../styles/TestimonialsPage.css";

const REVIEWS = [
  {
    id: 1,
    name: "Kunal Shah",
    role: "Co-founder, The Bean Cafe",
    location: "Vesu, Surat",
    content: "Alex completely transformed our cafe's social media presence. The reels he edited for our VIP Road outlet went viral within weeks. We've seen a massive spike in walk-ins and weekend bookings. His understanding of local Surat trends is unmatched.",
    stars: 5,
  },
  {
    id: 2,
    name: "Priyanka Patel",
    role: "Creative Director, Adorn Couture",
    location: "Adajan, Surat",
    content: "The lookbook fashion shoot Alex produced for our winter bridal line was stunning. The slow-motion drapes, the color grading matching our actual fabric dye, and the fast delivery exceeded our expectations. Highly recommended fashion videographer in Surat!",
    stars: 5,
  },
  {
    id: 3,
    name: "Rajesh Dharman",
    role: "Operations Head, Dharman Diamonds",
    location: "Varachha, Surat",
    content: "We hired Alex for our corporate overview film. He captured our laser diamond-cutting facilities beautifully. The drone aerials and founder interview edits are highly professional. The film has helped us close contracts internationally.",
    stars: 5,
  },
  {
    id: 4,
    name: "Meera Mehta",
    role: "Founder, Mehta Real Estate",
    location: "Piplod, Surat",
    content: "Alex edits all our luxury property walkthroughs. His color correction of interior spaces and pacing hold buyer attention. He always delivers files in both widescreen and vertical formats. Extremely reliable video editor.",
    stars: 5,
  }
];

const TestimonialsPage = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "FRAME. Videography & Video Editing Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  };

  return (
    <div className="reviews-page-wrapper">
      <SEO
        title="Client Reviews &amp; Testimonials | Video Editor Surat | FRAME."
        description="See what local business owners, cafe managers, fashion brands, and corporate offices say about our video editing and cinematography services in Surat, Gujarat."
        keywords="Testimonials Video Editor Surat, Cinematography Reviews Surat, Customer Feedback Video Production Surat, Best Video Editing Agency Gujarat"
        canonical="/testimonials"
        schema={schema}
      />

      <section className="reviews-hero section-container">
        <div className="reviews-hero-text">
          <span className="featured-tag">TRUST SIGNALS</span>
          <h1 className="reviews-h1-glowing">
            Client <span>Testimonials</span> &amp; Reviews
          </h1>
          <p className="reviews-lead">
            We measure our success by the growth of our clients. Read reviews from restaurant owners, fashion labels, and business managers across Surat, Gujarat.
          </p>
        </div>
      </section>

      {/* Grid of Reviews */}
      <section className="reviews-grid-section section-container">
        <div className="reviews-grid">
          {REVIEWS.map((r) => (
            <motion.div
              key={r.id}
              className="review-card"
              initial={isMobile ? "hidden" : false}
              whileInView={isMobile ? "visible" : undefined}
              viewport={{ once: true, amount: 0.15 }}
              variants={revealVariants}
            >
              <div className="stars-row">
                {[...Array(r.stars)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="review-content">"{r.content}"</p>
              <div className="review-author">
                <FaQuoteLeft className="quote-icon" />
                <div className="author-meta">
                  <h4>{r.name}</h4>
                  <p>{r.role} • <strong>{r.location}</strong></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Elements */}
      <section className="trust-elements-section section-container">
        <div className="trust-head">
          <span className="featured-tag">WHY WORK WITH US</span>
          <h2>The Professional Standards We Deliver</h2>
        </div>
        <div className="trust-cards-grid">
          <div className="trust-element-card">
            <FaFaceSmile className="trust-element-icon" />
            <h3>120+ Satisfied Clients</h3>
            <p>We've worked with top food brands, diamond merchants, bridal labels, and corporate entities in Surat.</p>
          </div>
          <div className="trust-element-card">
            <FaClock className="trust-element-icon" />
            <h3>Fast Turnaround</h3>
            <p>Reels are delivered within 48 hours and commercial shoots within 7-10 working days, keeping your feed consistent.</p>
          </div>
          <div className="trust-element-card">
            <FaGear className="trust-element-icon" />
            <h3>Premium Tools</h3>
            <p>We work on calibrated monitors, edit in DaVinci Resolve Studio &amp; Premiere, and shoot on 10-bit cinema camera bodies.</p>
          </div>
          <div className="trust-element-card">
            <FaShieldHeart className="trust-element-icon" />
            <h3>Full Creative Support</h3>
            <p>From visual scripts, location scouting in Surat, storyboard mockups, to animations – we manage the pipeline.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Ready to elevate your visual marketing?</h2>
          <p>Book a free 15-minute consultation to review your script layouts, budget scales, and editing workflow options in Surat.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
