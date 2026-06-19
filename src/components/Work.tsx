import { motion } from "framer-motion";
import { FeatureCarousel } from "./ui/feature-carousel";
import "./styles/Work.css";

const DEMO_CARDS = [
  {
    imgUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=700&fit=crop",
    alt: "Angel Sangeet (Wedding Event Coverage)",
    linkUrl: "/videos/angel-sangeet.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eb2?w=400&h=700&fit=crop",
    alt: "Baby Moon (Cinematic Family & Interview Film)",
    linkUrl: "/videos/baby-moon-talking-head.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=700&fit=crop",
    alt: "Clothing Brand Showcase (Commercial Video)",
    linkUrl: "/videos/clothing-brand-video-production-surat.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=700&fit=crop",
    alt: "Dentist Promotion (Healthcare Advertisement)",
    linkUrl: "/videos/dentist-promotion-video-editor-surat.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=700&fit=crop",
    alt: "Documentary Film Edit (Creative Storytelling)",
    linkUrl: "/videos/documentary-editing-services-surat.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=700&fit=crop",
    alt: "Interior Design Walkthrough (Real Estate Ad)",
    linkUrl: "/videos/interior-walkthrough-video-production-surat.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=700&fit=crop",
    alt: "Product Video Shoot (Creative Commercial)",
    linkUrl: "/videos/product-video-shoot-surat-gujarat.mp4"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=400&h=700&fit=crop",
    alt: "Commercial Product Advertisement",
    linkUrl: "/videos/product-commercial-advertisement-surat.mp4"
  }
];

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }
  }
};

const Work = () => {
  return (
    <div className="work-section" id="work">
      {/* Ambient smoky cinematic glows */}
      <div className="work-smoke-glow left"></div>
      <div className="work-smoke-glow right"></div>

      <div className="work-header-container section-container">
        {/* Cinematic Header Typography */}
        <motion.div 
          className="work-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <span className="featured-tag">FEATURED PORTFOLIO</span>
          <h2 className="work-title-glowing">
            MY <span>ALL WORKS</span>
          </h2>
          <p className="work-subtitle">Every frame has a story.</p>
        </motion.div>
      </div>

      <div className="work-carousel-container" style={{ width: "100%", position: "relative", zIndex: 5 }}>
        <FeatureCarousel cards={DEMO_CARDS} />
      </div>
    </div>
  );
};

export default Work;
