import SEO from "../SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCircleCheck, FaCircleArrowRight, FaRobot, FaPaintbrush, FaFilm } from "react-icons/fa6";
import "../styles/ServiceDetail.css";

const AIVisualEffectsSurat = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Visual Effects Services Surat",
    "description": "Cutting-edge AI-integrated video creation, motion tracking, background cleanups, VFX additions, and next-gen visual animations in Surat.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "FRAME. Visuals"
    }
  };

  return (
    <div className="service-detail-wrapper">
      <SEO
        title="AI Visual Effects &amp; VFX in Surat | Next-Gen Video Editing"
        description="Best AI Video Editing and Visual Effects (VFX) in Surat, Gujarat. We combine Adobe After Effects with tools like Runway AI and Midjourney for futuristic transitions. Get a quote!"
        keywords="AI Video Editing Surat, Visual Effects Surat, VFX Studio Surat, Runway AI Video Gujarat, Next-Gen Motion Graphics"
        canonical="/ai-visual-effects-surat"
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
            <div className="service-hero-badge">AI &amp; VFX Integration</div>
            <h1 className="service-detail-h1">
              AI &amp; <span>Visual Effects</span> in Surat
            </h1>
            <p className="service-hero-desc">
              Step into the future of video. We combine traditional After Effects composting with generative AI tools (Runway AI, Kling, Midjourney) to create next-generation commercial visual effects, digital expansions, and scroll-stopping animations in Surat.
            </p>
            <div className="service-hero-cta">
              <Link to="/contact" className="btn-primary">Request VFX Demo</Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">Check Out VFX Works</a>
            </div>
          </motion.div>
          <div className="service-hero-img-box">
            <img 
              src="/images/work_ai_vfx.png" 
              alt="AI Video Editing Studio Surat - Neural Network Generative Visual Workspace" 
              className="service-hero-img" 
            />
          </div>
        </div>
      </section>

      <section className="service-info-section section-container">
        <div className="info-layout-grid">
          <div className="info-content">
            <h2>Next-Generation AI Video Editing &amp; VFX for Surat Brands</h2>
            <p>
              The digital advertising world is evolving rapidly. Standard templates are no longer enough to surprise audiences on social networks. To capture attention on platforms like Instagram and YouTube, you need visuals that challenge reality. Our **AI video editing and visual effects (VFX) studio in Surat** helps local brands, agencies, and creators integrate futuristic animations into their videos.
            </p>
            <p>
              Whether you are a real estate brand in **Vesu** wanting to visualize a building expansion, a clothing brand along **VIP Road** wanting surreal sky replacements, or a creator in **Adajan** needing dynamic motion graphics – we build custom effects pipelines. We bridge standard compositing (rotoscoping, object removal, tracking) with advanced generative AI.
            </p>

            <h3>How We Use AI &amp; VFX</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaRobot className="benefit-icon" />
                <h4>Generative AI Expansion</h4>
                <p>We use tools like Runway Gen-4 to expand background sizes, morph environments, or generate visual concepts from static images.</p>
              </div>
              <div className="benefit-card">
                <FaPaintbrush className="benefit-icon" />
                <h4>Rotoscoping &amp; Cleanups</h4>
                <p>We edit out distracting background elements, remove wires, fix blemishes, and isolate models cleanly using intelligent motion masking.</p>
              </div>
              <div className="benefit-card">
                <FaFilm className="benefit-icon" />
                <h4>Cinematic Tracking</h4>
                <p>We track 3D objects, clean text cards, and display realistic charts onto moving surfaces inside your facility or workspace.</p>
              </div>
            </div>

            <h3>Our VFX &amp; AI Workflow</h3>
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-num">01</div>
                <div className="step-content">
                  <h4>VFX Concept Design</h4>
                  <p>We draft storyboards outlining the visual effects, choosing between generative AI or traditional compositing to achieve the look.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">02</div>
                <div className="step-content">
                  <h4>Rotoscoping &amp; Masking</h4>
                  <p>We isolate characters, objects, or sections of the video, creating masks to lay background elements or graphics behind subjects.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">03</div>
                <div className="step-content">
                  <h4>AI Generation &amp; Integration</h4>
                  <p>We process footage through neural video networks, blending AI transformations with original shots for a clean finish.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-num">04</div>
                <div className="step-content">
                  <h4>Color Matching &amp; Composition</h4>
                  <p>We grade all VFX elements to match the original camera profile, matching lighting angles, shadows, and grains.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="info-sidebar">
            <div className="sidebar-box">
              <h3>VFX Offerings</h3>
              <ul className="sidebar-list">
                <li><FaCircleCheck /> <span>Generative AI scene expansions</span></li>
                <li><FaCircleCheck /> <span>Object &amp; background cleanup / wire removal</span></li>
                <li><FaCircleCheck /> <span>3D motion tracking &amp; kinetic elements</span></li>
                <li><FaCircleCheck /> <span>Green screen chroma keying</span></li>
                <li><FaCircleCheck /> <span>AI-based video styling overlays</span></li>
                <li><FaCircleCheck /> <span>Concept art generation for shoot ideas</span></li>
              </ul>
            </div>

            <div className="sidebar-box">
              <h3>Related Local Services</h3>
              <div className="related-services-grid">
                <Link to="/video-editor-surat" className="related-link-card">
                  <span>Video Editing</span> <FaCircleArrowRight />
                </Link>
                <Link to="/color-grading-surat" className="related-link-card">
                  <span>Color Grading</span> <FaCircleArrowRight />
                </Link>
                <Link to="/reel-editing-surat" className="related-link-card">
                  <span>Reel Editing</span> <FaCircleArrowRight />
                </Link>
                <Link to="/commercial-video-production-surat" className="related-link-card">
                  <span>Commercials</span> <FaCircleArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section section-container">
        <div className="faq-head">
          <span className="featured-tag">VFX FAQ</span>
          <h2>AI &amp; Visual Effects FAQ</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Is AI-generated video high-quality enough for professional ads?</h3>
            <p>Yes. We don't just export raw AI renders. We use generative AI as a tool, combining it with high-end compositing, rotoscoping, and grading inside Adobe After Effects to guarantee professional, high-resolution results.</p>
          </div>
          <div className="faq-item">
            <h3>What is rotoscoping, and why is it useful?</h3>
            <p>Rotoscoping is the process of tracing and isolating a moving object or person in a video frame. It allows us to apply effects specifically to the background or place graphics behind a person without a green screen.</p>
          </div>
          <div className="faq-item">
            <h3>How much do AI video services cost in Surat?</h3>
            <p>Because VFX and AI projects vary in complexity, pricing is estimated on a project basis. Simple object removals start around ₹2,000, while complex generative commercial campaigns can range from ₹20,000 onwards.</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Create Futuristic Visuals for Your Brand</h2>
          <p>Get professional AI video editing and visual effects services in Surat to surprise your audience and stand out. Request a project proposal.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Request VFX Proposal</Link>
            <a href="https://wa.me/919876543210" className="btn-secondary">WhatsApp Consult</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVisualEffectsSurat;
