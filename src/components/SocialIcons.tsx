import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      staggerChildren: 0.12,
      delayChildren: 0.8,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 120 },
  },
};

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const spanElements = social.querySelectorAll("span");
    const cleanups: (() => void)[] = [];

    spanElements.forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      let animationFrameId: number;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <motion.div
      className="icons-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="social-icons" data-cursor="icons" id="social">
        <motion.span variants={iconVariants}>
          <a href="https://www.instagram.com/alex_edixx/" target="_blank">
            <FaInstagram />
          </a>
        </motion.span>
        <motion.span variants={iconVariants}>
          <a href="https://youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </motion.span>
        <motion.span variants={iconVariants}>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn />
          </a>
        </motion.span>
        <motion.span variants={iconVariants}>
          <a href="https://x.com" target="_blank">
            <FaXTwitter />
          </a>
        </motion.span>
      </div>
      <motion.a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </motion.a>
    </motion.div>
  );
};

export default SocialIcons;
