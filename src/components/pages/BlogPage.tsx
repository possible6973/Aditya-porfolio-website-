import SEO from "../SEO";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaClock, FaCircleChevronRight, FaCircleChevronLeft, FaTag } from "react-icons/fa6";
import "../styles/BlogPage.css";

const BLOG_POSTS = [
  {
    slug: "instagram-reel-marketing-surat-businesses",
    title: "Instagram Reel Marketing for Surat Businesses: The Ultimate Guide",
    date: "June 15, 2026",
    readTime: "6 min read",
    tag: "Social Media",
    summary: "Reels are driving massive foot traffic to local businesses on VIP Road and Vesu. Learn how to draft scripts, capture hooks, and optimize edits for the Surat audience.",
    content: `Instagram Reels have officially become the most powerful growth channel for local businesses in Surat, Gujarat. With micro-locations like Vesu, VIP Road, Adajan, and Piplod experiencing a retail and cafe boom, capturing local attention quickly is the difference between an empty store and a fully booked weekend.

### Why Static Photos No Longer Work in Surat's Market
Surat is an incredibly visual city, and local consumers spend hours daily scrolling through video feeds. While photo posts used to be enough, the Instagram algorithm now heavily prioritizes video watch-time and repeat views. A well-paced vertical reel showing the steam rising from a hot dish at a Vesu cafe or the detailed embroidery of a saree in an Adajan boutique creates immediate desire. It makes viewers stop scrolling, tap the location tag, and plan a visit.

### 3 Rules for Writing Scroll-Stopping Reel Scripts
1. **The 3-Second Visual Hook:** Never start a reel with 'Welcome back to my channel' or a slow zoom of your logo. Start with high-action movement (e.g. pouring syrup, model walking into frame) and a bold, colorful title card: '3 Secret Hangouts in VIP Road You Didn't Know About.'
2. **Remove All Silences:** In short-form editing, silence is the enemy. Cut out every breath, 'uhm,' and pause. Your speaker's pacing should feel energetic and continuous.
3. **Layer Sound Cues:** Add swoosh sound effects when text slides in, bell rings when emojis pop up, and matching sound impacts on cuts to create a sensory experience that keeps viewers engaged.

### Tracking Local Metrics
Optimize your reels by adding precise Surat location tags, using trending audio tracks before they peak, and adding clear local CTAs: 'Tag a friend you want to take here this weekend.' Implement these steps and watch your foot traffic skyrocket!`
  },
  {
    slug: "how-much-does-video-editing-cost-in-surat",
    title: "How Much Does Video Editing Cost in Surat? A Local Pricing Breakdown",
    date: "May 28, 2026",
    readTime: "5 min read",
    tag: "Business & ROI",
    summary: "Confused about freelance editor rates in Gujarat? Discover the differences between hourly billing, project quotes, and monthly reel retainers.",
    content: `As businesses in Surat pivot to digital marketing, a common question arises: 'How much should we budget for professional video editing?' From independent creators to corporate exporters, understanding local market pricing is key to making wise investments.

### Freelance Editors vs. Production Studios in Surat
Video editing costs in Surat vary based on complexity, software requirements, and project scales:
1. **Freelance Video Editors (Basic):** Best for simple YouTube cuts or personal vlogs. Rates typically range from ₹1,000 to ₹3,000 per video.
2. **Professional Post-Production Studios:** Best for corporate films, commercial ads, and fashion lookbooks. Studios work on calibrated monitors, use licensed DaVinci Resolve Studio controls, and offer expert audio design. Rates range from ₹10,000 to ₹50,000 per project.
3. **Monthly Social Media Retainers:** Best for cafes, restaurants, real estate agents, and fashion labels needing consistent content. Retainers usually offer packages of 10 to 20 reels per month, ranging from ₹15,000 to ₹40,000/month.

### What Drives Editing Costs Up?
- **Color Grading Complexity:** Cinema-grade color matching using DaVinci control panels requires specialized skills.
- **Sound Design & Foley:** Layering custom sound effects, cleaning dialogue, and balancing audio tracks.
- **Motion Graphics & Tracking:** Adding 3D text cards, custom brand animations, or complex visual effects.

By choosing a dedicated local editor in Surat, you save on communication overhead and receive fast turnarounds that fit local trends.`
  },
  {
    slug: "why-every-surat-business-needs-professional-videos",
    title: "Why Every Surat Business Needs Professional Videos in 2026",
    date: "April 14, 2026",
    readTime: "4 min read",
    tag: "Strategy",
    summary: "Surat's commercial landscape is moving fast. Discover how video assets build trust, recruitment scale, and double conversion rates.",
    content: `Surat is a city of unmatched entrepreneurial spirit. Whether you are running a B2B diamond firm in Varachha, a boutique design studio in Athwa, or a modern fitness center in Pal, video has become the default language of business communication.

### Video Builds Immediate Trust
International buyers and local consumers want transparency. A corporate video showing your manufacturing scale, diamond cutting precision, or team culture builds trust faster than a static website paragraph. It proves that you operate a high-caliber facility and take pride in your work.

### Video Boosts Search Engine Authority (SEO)
Search engines favor web pages containing embedded videos. A service page with a detailed video case study keeps visitors on the page longer, signaling value to Google and helping you rank for competitive keywords like 'Video Editor in Surat' or 'Cinematographer in Surat.'

### Video Doubles Conversion Rates
Landing pages featuring a clear promotional video see up to an 80% increase in conversions. A short, professional clip explaining your product or service simplifies decision-making, answering customer questions before they even submit an inquiry. Don't let competitor brands capture your audience — invest in professional video assets today!`
  }
];

const BlogPage = () => {
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);

  const activePost = BLOG_POSTS.find((p) => p.slug === selectedPostSlug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Alex Moncy Video Production Blog Surat",
    "description": "Guides and strategic insights on video editing, reel marketing, and cinematography for Surat businesses.",
    "publisher": {
      "@type": "Person",
      "name": "Alex Moncy"
    }
  };

  return (
    <div className="blog-page-wrapper">
      <SEO
        title="Local Video Marketing Blog Surat | Video Production Guides"
        description="Read strategic guides on Instagram reels marketing, video editing costs, corporate shoot setup, and digital marketing trends for businesses in Surat, Gujarat."
        keywords="Best Video Editor in Surat, How Much Does Video Editing Cost in Surat, Instagram Reel Marketing for Surat Businesses, Restaurant Video Marketing Surat"
        canonical="/blog"
        schema={schema}
      />

      <section className="blog-hero section-container">
        <div className="blog-hero-text">
          <span className="featured-tag">VALUE-PACKED INSIGHTS</span>
          <h1 className="blog-h1-glowing">
            The Local <span>SEO Blog</span>
          </h1>
          <p className="blog-lead">
            Strategic visual tips to scale your business. Read our guides on reel marketing, video production budgets, and corporate branding in Surat, Gujarat.
          </p>
        </div>
      </section>

      {/* Main Blog Hub / Article view */}
      <section className="blog-content-section section-container">
        <AnimatePresence mode="wait">
          {!selectedPostSlug ? (
            // Grid View
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="blog-grid"
            >
              {BLOG_POSTS.map((post) => (
                <div key={post.slug} className="blog-post-card">
                  <div className="post-meta-row">
                    <span className="post-tag"><FaTag /> {post.tag}</span>
                    <span className="post-read"><FaClock /> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="post-summary">{post.summary}</p>
                  <button
                    className="read-more-btn"
                    onClick={() => setSelectedPostSlug(post.slug)}
                    data-cursor="disable"
                  >
                    Read Full Article <FaCircleChevronRight />
                  </button>
                </div>
              ))}
            </motion.div>
          ) : (
            // Article View
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="blog-article-view"
            >
              <button
                className="back-btn"
                onClick={() => setSelectedPostSlug(null)}
                data-cursor="disable"
              >
                <FaCircleChevronLeft /> Back to Blog List
              </button>

              <article className="article-body">
                <header className="article-header">
                  <div className="article-meta">
                    <span>{activePost?.date}</span> • <span>{activePost?.readTime}</span> • <span className="article-tag-badge">{activePost?.tag}</span>
                  </div>
                  <h1>{activePost?.title}</h1>
                </header>

                <div className="article-text-content">
                  {activePost?.content.split("\n\n").map((para, idx) => {
                    if (para.startsWith("###")) {
                      return <h3 key={idx}>{para.replace("###", "").trim()}</h3>;
                    }
                    if (para.startsWith("1.") || para.startsWith("-")) {
                      return (
                        <ul key={idx} className="article-list-elements">
                          {para.split("\n").map((li, i) => (
                            <li key={i}>{li.replace(/^\d+\.\s*|-\s*/, "").trim()}</li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={idx}>{para}</p>;
                  })}
                </div>
              </article>

              <div className="article-footer-cta">
                <h3>Want to apply these visual marketing strategies to your business?</h3>
                <p>We help businesses in Vesu, Adajan, VIP Road, and across Surat execute high-performing video campaigns. Let's discuss your plan.</p>
                <div className="about-cta-btns">
                  <Link to="/contact" className="btn-primary">Book Consultation</Link>
                  <button className="btn-secondary" onClick={() => setSelectedPostSlug(null)}>Back to Articles</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Blog list CTA */}
      <section className="about-cta-section section-container">
        <div className="about-cta-box">
          <h2>Grow Your Brand Through Cinematic Video Marketing</h2>
          <p>Get a customized videography or social media editing retainer package tailored to your Surat business goals. Request a quote.</p>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Direct</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
