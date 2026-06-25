import { FaWhatsapp, FaPhone, FaCalendarCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./styles/ConversionWidgets.css";

const ConversionWidgets = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after scroll or delay
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Also show after a 3-second delay regardless of scroll
    const timer = setTimeout(() => setIsVisible(true), 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`conversion-widgets ${isVisible ? "visible" : ""}`} data-cursor="disable">
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20FRAME%20Visuals%2C%20I%20am%20interested%20in%20your%20video%20editing%20%2F%20cinematography%20services%20in%20Surat."
        target="_blank"
        rel="noopener noreferrer"
        className="widget-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="widget-tooltip">WhatsApp Chat</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="widget-btn call-btn"
        aria-label="Call Professional Video Editor Surat"
        title="Call Video Editor Surat"
      >
        <FaPhone />
        <span className="widget-tooltip">Call Now</span>
      </a>

      {/* Book Consultation Button */}
      <a
        href="/contact"
        className="widget-btn consult-btn"
        aria-label="Book Free Consultation"
        title="Book Free Consultation"
      >
        <FaCalendarCheck />
        <span className="widget-tooltip">Book Consult</span>
      </a>
    </div>
  );
};

export default ConversionWidgets;
