import SEO from "../SEO";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSliders, FaTrophy, FaLightbulb, FaLocationDot } from "react-icons/fa6";
import "../styles/CaseStudies.css";

const CASE_STUDIES = [
  {
    id: "cs-1",
    title: "10x Social Growth for 'The Bean Cafe' in Vesu",
    client: "The Bean Cafe",
    industry: "Food & Beverage / Restaurant",
    location: "Vesu, Surat",
    objective: "Increase foot traffic and weekend table bookings through viral Instagram reels.",
    equipment: "Sony A7SIII, 16-35mm G-Master Lens, DJI Mic 2",
    software: "Adobe Premiere Pro, CapCut Desktop",
    colorProcess: "Rec709 conversion, secondary saturation boosts on food items, warm skin tones, and bright exposure matching.",
    challenge: "The Vesu area has over 50 competitor cafes. The cafe had low social media reach, and static photo posts were no longer converting local followers into walk-ins.",
    solution: "We designed a 10-reel social media series focusing on high-energy hooks (e.g. '3 Secret Spots in Vesu to Work From'), fast pacing, beat-synced food clips, and custom subtitles with sound effects. We optimized the posting schedule to target Surat users during high-intent lunch hours.",
    results: "Over 1.2M views generated across Surat, a 300% increase in Instagram followers within 30 days, and a 45% increase in weekend table bookings.",
    keywords: "Restaurant Video Shoot Surat, Cafe Promotional Videos Surat, Reel Editor Surat, Social Media Video Editing Surat"
  },
  {
    id: "cs-2",
    title: "Couture Fashion Campaign Launch for 'Adorn Designs'",
    client: "Adorn Designs",
    industry: "Apparel & Couture",
    location: "Adajan, Surat",
    objective: "Showcase the detailed thread work of the winter bridal ethnic collection via a cinematic digital lookbook.",
    equipment: "Sony FX3 Cinema Camera, 24-70mm & 85mm Prime Lenses, Aputure 600d Light",
    software: "DaVinci Resolve Studio (Color Grading), After Effects",
    colorProcess: "Custom Film Print Emulation (FPE), matched contrast curves, isolated reds/golds for saree highlight, clean white balances.",
    challenge: " Bridal wear carries complex thread embroidery. Standard photography failed to convey the premium fluid movement and sheen of the silk fabrics.",
    solution: "We filmed model walkthroughs in 120fps slow-motion, using precise side-lighting to accent the thread drapes. We captured macro sweeps of the embroidery and edited them into a cinematic lookbook film overlayed with a classical fusion audio track.",
    results: "Generated 500k+ organic views on Instagram, 120+ direct inquiries on WhatsApp for custom fittings, and successful launch of the couture campaign.",
    keywords: "Fashion Shoot Surat, Textile Brand Video Surat, Clothing Brand Showcase Surat, Color Grading Services Surat"
  },
  {
    id: "cs-3",
    title: "Corporate Identity Film for 'Dharman Diamond exporter'",
    client: "Dharman Diamonds",
    industry: "Industrial / Diamond Trade",
    location: "Varachha, Surat",
    objective: "Build institutional trust for global diamond buyers by showcasing manufacturing scale and cleanroom technology.",
    equipment: "Sony FX3, DJI Mavic 3 Pro (4K Aerials), DJI Ronin RS3",
    software: "Adobe Premiere Pro, DaVinci Resolve (Color)",
    colorProcess: "Clean corporate blue grade, skin-tone optimization, lens flare adjustments, and bright white facility look.",
    challenge: "The company needed to display diamond cutting precision and industrial scale to international buyers who could not visit the Varachha facility in person.",
    solution: "We scripted a 3-minute founder interview, captured facility B-roll showing high-tech laser cutting benches, and overlayed 4K drone aerials showing the corporate headquarters layout.",
    results: "Used as a primary sales presentation at the Las Vegas Jewelry Show, resulting in 4 new contract sign-ups and increased brand trust.",
    keywords: "Corporate Video Shoot Surat, Corporate Film Maker Surat, Drone Videography Surat, Business Promo Videos Surat"
  }
];

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState<string | null>("cs-1");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Alex Moncy Video Production Case Studies Surat",
    "description": "Case studies demonstrating video editing, commercial shoots, and local SEO impacts for businesses in Surat, Gujarat.",
    "itemListElement": CASE_STUDIES.map((cs, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "CreativeWork",
        "name": cs.title,
        "description": cs.solution,
        "author": {
          "@type": "Person",
          "name": "Alex Moncy"
        }
      }
    }))
  };

  return (
    <div className="case-studies-wrapper">
      <SEO
        title="SEO Case Studies: Video Editor &amp; Cinematographer Surat | FRAME."
        description="Browse our technical SEO case studies. See how we help Surat restaurants, fashion labels, and corporations grow their business using commercial video shoots."
        keywords="Corporate Film Maker Surat, Real Estate Video Editing Surat, Restaurant Video Shoot Surat, Commercial Cinematography Surat, Video Production Company Surat"
        canonical="/case-studies"
        schema={schema}
      />

      <section className="case-hero section-container">
        <div className="case-hero-text">
          <span className="featured-tag">PROVEN RESULTS</span>
          <h1 className="case-h1-glowing">
            Local SEO <span>Case Studies</span>
          </h1>
          <p className="case-lead">
            Every frame is backed by strategy. Read how we combine cinema production values with local audience metrics to deliver results across Surat, Gujarat.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="case-list-section section-container">
        <div className="case-studies-accordion">
          {CASE_STUDIES.map((cs) => {
            const isExpanded = expandedId === cs.id;
            return (
              <div key={cs.id} className={`case-accordion-item ${isExpanded ? "active" : ""}`}>
                {/* Header */}
                <button
                  className="case-accordion-header"
                  onClick={() => toggleExpand(cs.id)}
                  aria-expanded={isExpanded}
                  data-cursor="disable"
                >
                  <div className="header-meta">
                    <span className="case-location"><FaLocationDot /> {cs.location}</span>
                    <h3>{cs.title}</h3>
                  </div>
                  <span className="accordion-icon"><FaChevronDown /></span>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="case-accordion-content-wrapper"
                    >
                      <div className="case-accordion-content">
                        {/* Meta Grid */}
                        <div className="case-meta-grid">
                          <div className="meta-card">
                            <span className="meta-label">Client</span>
                            <span className="meta-value">{cs.client}</span>
                          </div>
                          <div className="meta-card">
                            <span className="meta-label">Industry</span>
                            <span className="meta-value">{cs.industry}</span>
                          </div>
                          <div className="meta-card">
                            <span className="meta-label">Gear Used</span>
                            <span className="meta-value">{cs.equipment}</span>
                          </div>
                          <div className="meta-card">
                            <span className="meta-label">Editing Software</span>
                            <span className="meta-value">{cs.software}</span>
                          </div>
                        </div>

                        {/* Narrative Block */}
                        <div className="case-narrative">
                          <div className="narrative-block">
                            <h4><FaLightbulb /> Objective</h4>
                            <p>{cs.objective}</p>
                          </div>
                          
                          <div className="narrative-block">
                            <h4>Challenge</h4>
                            <p>{cs.challenge}</p>
                          </div>

                          <div className="narrative-block">
                            <h4>Solution</h4>
                            <p>{cs.solution}</p>
                          </div>

                          <div className="narrative-block">
                            <h4><FaSliders /> Color Grading Process</h4>
                            <p>{cs.colorProcess}</p>
                          </div>

                          <div className="results-block">
                            <h4><FaTrophy /> Results</h4>
                            <p className="results-text">{cs.results}</p>
                          </div>
                        </div>

                        <div className="case-tags-footer">
                          <span>Targeted Keywords:</span>
                          <div className="case-keyword-tags">
                            {cs.keywords.split(",").map((k, i) => (
                              <span key={i} className="case-keyword-tag">{k.trim()}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Ready to write your own success story?</h2>
          <p>Book a free video consultation. We'll sketch out a storyboard brief and review timeline options for your Surat company.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Direct</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
