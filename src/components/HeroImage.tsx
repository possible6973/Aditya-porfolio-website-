import { useEffect, useMemo, useRef } from "react";
import "./styles/HeroImage.css";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroImage = () => {
  const { setLoading } = useLoading();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const aboutImgRef = useRef<HTMLImageElement>(null);

  // Resolve image at mount — window.innerWidth is stable here (no SSR)
  const heroSrc = useMemo(() => {
    return window.innerWidth > 1024
      ? "/hero-desktop.png"   // desktop: new cinematic image
      : "/hero-design.png";   // mobile: existing image unchanged
  }, []);

  /* ── Loading progress ───────────────────────────────────────────────── */
  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    progress.loaded().then(() => {
      setTimeout(() => ScrollTrigger.refresh(), 500);
    });
  }, [setLoading]);

  /* ── Desktop GSAP animation ─────────────────────────────────────────── */
  useEffect(() => {
    const floatEl = floatRef.current;
    const heroImg = heroImgRef.current;
    const aboutImg = aboutImgRef.current;

    if (!floatEl || !heroImg || !aboutImg) return;

    // Image swap animation is desktop-only
    if (window.innerWidth <= 1024) return;

    gsap.set(floatEl, {
      x: 0,
      y: "-4vh",
      scale: 1,
      opacity: 1,
      force3D: true,
      transformOrigin: "center center",
    });
    gsap.set(heroImg, { opacity: 1 });
    gsap.set(aboutImg, { opacity: 0, y: "4vh", scale: 1.03 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 92%",
        end: "top 35%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    tl.to(floatEl, {
      x: "-24vw",
      scale: 1.12,
      ease: "none",
    })
      .to(heroImg, { opacity: 0, duration: 0.32, ease: "none" }, 0.12)
      .to(
        aboutImg,
        { opacity: 1, y: "0vh", scale: 1, duration: 0.45, ease: "none" },
        0.18
      );

    gsap.to(floatEl, {
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 75%",
        end: "bottom 10%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
      opacity: 0,
      y: "-16vh",
      ease: "none",
    });

    ScrollTrigger.refresh();

  }, []);

  return (
    <div className="hero-image-wrapper" ref={wrapperRef}>
      {/* Front Layer */}
      <div className="hero-front-layer">
        <div className="hero-character-float" ref={floatRef}>
          <img
            ref={heroImgRef}
            src={heroSrc}
            alt="Hero Character"
            className="hero-character-img hero-primary-img"
          />
          <img
            ref={aboutImgRef}
            src="/about-shoot.png"
            alt="Cinematographer filming with camera"
            className="hero-character-img hero-about-img"
          />
        </div>
      </div>
      {/* Bottom gradient fade */}
      <div className="hero-bottom-fade"></div>
    </div>
  );
};

export default HeroImage;
