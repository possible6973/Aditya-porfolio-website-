import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { motion } from "framer-motion";
import "./styles/Contact.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <motion.div
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.h3 variants={titleVariants}>Ready to make something remarkable?</motion.h3>
        <motion.p className="contact-intro" variants={titleVariants}>
          Whether it's a viral reel, a brand film, or a full shoot — drop me a line and let's talk about what we can build together.
        </motion.p>
        <div className="contact-flex">
          <motion.div className="contact-box" variants={boxVariants}>
            <h4>Email</h4>
            <p>
              <a href="mailto:hello@yourdomain.com" data-cursor="disable">
                hello@yourdomain.com
              </a>
            </p>
            <h4>Based In</h4>
            <p>India · Remote Worldwide</p>
            <h4>Response Time</h4>
            <p>Within 24 hours</p>
          </motion.div>
          
          <motion.div className="contact-box" variants={boxVariants}>
            <h4>Social</h4>
            <motion.a
              href="https://www.instagram.com/alex_edixx/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              whileHover={{ x: 5, color: "#c2a4ff" }}
              transition={{ type: "spring" as const, stiffness: 200 }}
            >
              Instagram <MdArrowOutward />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              whileHover={{ x: 5, color: "#c2a4ff" }}
              transition={{ type: "spring" as const, stiffness: 200 }}
            >
              YouTube <MdArrowOutward />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              whileHover={{ x: 5, color: "#c2a4ff" }}
              transition={{ type: "spring" as const, stiffness: 200 }}
            >
              LinkedIn <MdArrowOutward />
            </motion.a>
            <motion.a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              whileHover={{ x: 5, color: "#c2a4ff" }}
              transition={{ type: "spring" as const, stiffness: 200 }}
            >
              Twitter <MdArrowOutward />
            </motion.a>
          </motion.div>

          <motion.div className="contact-box" variants={boxVariants}>
            <h2>
              Cinematographer &amp; <br /> Video Editor <span>based in India</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
