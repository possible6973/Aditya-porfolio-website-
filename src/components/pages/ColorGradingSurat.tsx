import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaSliders, FaEye, FaFilm } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const ColorGradingSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Color Grading Services Surat",
    "description": "DaVinci Resolve color correction, look matching, cinematic color grading, and skin tone optimization services in Surat, Gujarat.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="Color Grading Services in Surat | DaVinci Resolve Colorist"
        description="Professional color grading services in Surat, Gujarat. Cinema-grade color correction, skin tone matching, and custom film LUT design using DaVinci Resolve Studio. Contact us!"
        keywords="Color Grading Services Surat, DaVinci Resolve Colorist Surat, Video Color Correction Gujarat, Film Grading Studio Surat, Skin Tone Correction"
        canonical="/color-grading-surat"
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
            <div className="service-hero-badge">DaVinci Resolve Suite</div>
            <h1 className="service-detail-h1">
              Color Grading <span>Services</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Transform flat camera profiles into striking visual palettes. Providing professional color grading and color correction services in Surat, Gujarat for short films, commercials, music videos, and fashion lookbooks.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Color Grade My Video</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Check Out Samples</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_color_grade.png" 
              alt="Professional DaVinci Resolve Color Grading Suite Surat" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>The Art of Color: Enhancing Emotion &amp; Contrast</h2>
            <p>
              Color grading is the secret sauce that separates home videos from high-end cinema. Raw footage from professional cameras (Sony, RED, Arri) is recorded in flat, low-contrast "Log" profiles to capture maximum dynamic range. In our dedicated color grading suite in Surat, we translate these raw files into rich, polished visual lookspaces that influence how viewers feel.
            </p>
            <p>
              Whether you are an independent director shooting a short film in <strong>Pal or Adajan</strong>, a brand launching an ad campaign in <strong>Vesu or VIP Road</strong>, or a wedding photographer needing filmic skin-tone correction – we apply custom color adjustments that fit your narrative goals. We handle color space transforms, exposure balances, skin-tone isolation, shot-matching, and creative film print emulations.
            </p>

            <h3>Our Color Grading Specialties</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaEye className="benefit-icon" />
                <h4>Skin Tone Correction</h4>
                <p>We isolate skin tones using vectorscopes to ensure natural, healthy tones while styling surrounding environments.</p>
              </div>
              <div className="benefit-card">
                <FaSliders className="benefit-icon" />
                <h4>Exposure &amp; Balance</h4>
                <p>We normalize dynamic ranges, recovering shadow details, adjusting highlights, and fixing white balances across clips.</p>
              </div>
              <div className="benefit-card">
                <FaFilm className="benefit-icon" />
                <h4>Creative Film Looks</h4>
                <p>We build stylized creative looks (teal &amp; orange, vintage film grain, high-contrast monochrome) customized to your branding guidelines.</p>
              </div>
            </div>

            <h3>Our Post-Production Color Workflow</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>XML / EDL Timeline Import</h4>
                  <p>We import your edited timeline (XML/EDL from Premiere Pro, FCP, or Avid) into DaVinci Resolve, linking back to the high-res raw camera files.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>Primary Color Correction</h4>
                  <p>We balance shadows, midtones, and highlights, and adjust white balances to establish a clean base across the timeline.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>Secondary Grades &amp; Masking</h4>
                  <p>We use qualifiers and power windows to target specific areas (e.g. brightening faces, darkening distracting background highlights, shifting skies).</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Creative Styling &amp; Rendering</h4>
                  <p>We apply the final creative color grade, match the grain structures, perform QC checks on calibrated monitors, and export high-res master files.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>Grading Offerings</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>DaVinci Resolve Studio Color Grading</span></li>
                <li><FaCircleCheck /> <span>Raw Log space mapping (S-Log, Rec709)</span></li>
                <li><FaCircleCheck /> <span>Shot-to-shot color matching</span></li>
                <li><FaCircleCheck /> <span>Natural skin tone isolation &amp; fix</span></li>
                <li><FaCircleCheck /> <span>Film print look emulation</span></li>
                <li><FaCircleCheck /> <span>Commercial &amp; music video color grades</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/video-editor-surat" className="related-link-card">
                  <span>Video Editing</span> <FaCircleArrowRight />
                </Link>
                <Link to="/ai-visual-effects-surat" className="related-link-card">
                  <span>AI Visual FX</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercials</span> <FaCircleArrowRight />
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
          <span className="featured-tag">COLOR FAQ</span>
          <h2>Color Correction &amp; Grading FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Why is color grading done separately from editing?</h3>
            <p>Editing focuses on narrative pacing and selection. Color grading is a highly specialized technical stage done in software like DaVinci Resolve using color-calibrated monitors to ensure accurate color values across different display screens.</p>
          </div>
          <div className="faq-item">
            <h3>Can you color grade footage shot on multiple different cameras?</h3>
            <p>Yes. We use Color Space Transforms (CST) to convert S-Log, D-Log, C-Log, and mobile footage into a unified working space (like DaVinci Wide Gamut) to match clips seamlessly.</p>
          </div>
          <div className="faq-item">
            <h3>How do we send you the files for color grading?</h3>
            <p>You can export an XML timeline from your editing software along with the consolidated raw media, and upload them to our cloud folder. We can guide you through this export process.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Make Your Visuals Look Cinema-Grade</h2>
          <p>Get professional DaVinci Resolve color grading services in Surat to elevate your commercial, film, or music video. Request a project quote.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Grade My Video</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Consult</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorGradingSurat;
