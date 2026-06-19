import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./styles/Career.css";

const boxVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

const Career = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const infoEl = infoRef.current;
    if (!timeline || !infoEl) return;

    // ── Scroll-driven progress line ──────────────────────────
    const updateLine = () => {
      const rect = infoEl.getBoundingClientRect();
      const total = rect.height;
      const scrolled = Math.min(Math.max(-rect.top + window.innerHeight * 0.3, 0), total);
      const pct = (scrolled / total) * 100;
      timeline.style.setProperty("--line-progress", `${pct}%`);
    };

    window.addEventListener("scroll", updateLine, { passive: true });
    updateLine();

    return () => {
      window.removeEventListener("scroll", updateLine);
    };
  }, []);

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Process <span>&</span>
          <br />
          How It Works
        </h2>
        <div className="career-info" ref={infoRef}>
          <div className="career-timeline" ref={timelineRef}>
            <div className="career-dot"></div>
          </div>

          <motion.div
            className="career-info-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={boxVariants}
          >
            <div className="career-info-in">
              <div className="career-role">
                <h4>Brief &amp; Discovery</h4>
                <h5>Step 01</h5>
              </div>
              <h3>01</h3>
            </div>
            <p>
              Understand your brand, goals, target audience, and platform requirements. Every great production starts with a clear creative brief.
            </p>
          </motion.div>

          <motion.div
            className="career-info-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={boxVariants}
          >
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-Production</h4>
                <h5>Step 02</h5>
              </div>
              <h3>02</h3>
            </div>
            <p>
              Storyboard, shot list, location scout, lighting plan, and script direction — everything laid out before the camera rolls so shoot day flows perfectly.
            </p>
          </motion.div>

          <motion.div
            className="career-info-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={boxVariants}
          >
            <div className="career-info-in">
              <div className="career-role">
                <h4>Shoot Day</h4>
                <h5>Step 03</h5>
              </div>
              <h3>03</h3>
            </div>
            <p>
              Directing, capturing, and gathering all required angles and B-roll. Cinematic camera work, controlled lighting, and decisive direction on set.
            </p>
          </motion.div>

          <motion.div
            className="career-info-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={boxVariants}
          >
            <div className="career-info-in">
              <div className="career-role">
                <h4>Edit &amp; Grade</h4>
                <h5>Step 04</h5>
              </div>
              <h3>04</h3>
            </div>
            <p>
              Cut, transitions, color grade, VFX, sound design, and text animations — the full post-production treatment that transforms raw footage into a polished film.
            </p>
          </motion.div>

          <motion.div
            className="career-info-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={boxVariants}
          >
            <div className="career-info-in">
              <div className="career-role">
                <h4>Deliver</h4>
                <h5>Now</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Platform-optimised files, multiple aspect ratios (9:16, 16:9, 1:1), and full revision support until you're 100% satisfied with the final output.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Career;
