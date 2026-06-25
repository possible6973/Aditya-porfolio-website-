import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoother } from "./Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll smoother to top instantly
    if (smoother) {
      smoother.scrollTop(0);
      // Wait for a split second for DOM rendering to complete, then refresh ScrollTrigger
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
