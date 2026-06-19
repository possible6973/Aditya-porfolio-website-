import "./styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1025;

  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  const statsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="about-section" id="about">
      {/* Mobile-only cinematic image — hidden on desktop */}
      <div className="about-mobile-img-wrap">
        <img
          src="/about-shoot.png"
          alt="Cinematographer filming with camera"
          className="about-mobile-img"
        />
        <div className="about-mobile-img-fade" />
      </div>

      <motion.div
        className="about-me"
        initial={isMobile ? "hidden" : false}
        whileInView={isMobile ? "visible" : undefined}
        viewport={{ once: true, amount: 0.15 }}
        variants={revealVariants}
      >
        <h3 className="title">About Me</h3>
        <p className="para">
          From cinematic shot lists to viral-paced reel edits — every frame I craft is made with intention. I specialise in video shoot production, high-energy short-form edits, cinematic color grading, and AI-integrated visual FX. Whether it's a brand film, a product reel, or a full shoot production, I bring a director's eye and an editor's instinct to every project. Shoots, cuts, grades, and effects that make audiences lean in.
        </p>
        <motion.div
          className="about-stats"
          initial={isMobile ? "hidden" : false}
          whileInView={isMobile ? "visible" : undefined}
          viewport={{ once: true, amount: 0.15 }}
          variants={statsContainerVariants}
        >
          <motion.div className="about-stat" variants={isMobile ? statItemVariants : undefined}>
            <h4>120+</h4>
            <p>Projects Delivered</p>
          </motion.div>
          <motion.div className="about-stat" variants={isMobile ? statItemVariants : undefined}>
            <h4>50M+</h4>
            <p>Views Generated</p>
          </motion.div>
          <motion.div className="about-stat" variants={isMobile ? statItemVariants : undefined}>
            <h4>9</h4>
            <p>Edit Styles Mastered</p>
          </motion.div>
          <motion.div className="about-stat" variants={isMobile ? statItemVariants : undefined}>
            <h4>3+</h4>
            <p>Years in Production</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
