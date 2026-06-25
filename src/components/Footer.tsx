import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" data-cursor="disable">
      <div className="footer-container">
        {/* Row 1: Brand details and MAP */}
        <div className="footer-grid">
          <div className="footer-info">
            <h2 className="footer-logo">FRAME.</h2>
            <p className="footer-desc">
              Premium Video Editor &amp; Cinematographer in Surat, Gujarat. Crafting high-conversion commercial films, trending social media reels, corporate shoots, and high-end visual FX that stop the scroll.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/alex_edixx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Alex</Link></li>
              <li><Link to="/services">Services Hub</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/case-studies">SEO Case Studies</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/blog">SEO Blog</Link></li>
              <li><Link to="/contact">Book Consultation</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><Link to="/video-editor-surat">Video Editing</Link></li>
              <li><Link to="/reel-editing-surat">Instagram Reel Editing</Link></li>
              <li><Link to="/commercial-video-production-surat">Commercial Shoots</Link></li>
              <li><Link to="/corporate-shoot-surat">Corporate Shoot</Link></li>
              <li><Link to="/product-shoot-surat">Product Shoot</Link></li>
              <li><Link to="/fashion-shoot-surat">Fashion Shoot</Link></li>
              <li><Link to="/wedding-cinematography-surat">Wedding Film</Link></li>
              <li><Link to="/color-grading-surat">Color Grading</Link></li>
              <li><Link to="/ai-visual-effects-surat">AI Visual FX</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul className="footer-contact-details">
              <li>
                <FaLocationDot className="footer-icon" />
                <span>
                  <strong>FRAME. Visuals Studio</strong><br />
                  302, Royal Arcade, VIP Road, Vesu,<br />
                  Surat, Gujarat 395007
                </span>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
              </li>
              <li>
                <FaClock className="footer-icon" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Map and Service Areas */}
        <div className="footer-bottom-grid">
          <div className="footer-map-wrap">
            <iframe
              title="FRAME. Visuals Location Map - VIP Road Vesu Surat"
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d14881.564536762391!2d72.7844391515222!3d21.176620573934375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sVesu%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer-areas">
            <h4>Local Service Areas across Surat:</h4>
            <p>
              Vesu • Adajan • Piplod • City Light • Athwa • Pal • Katargam • Varachha • Udhna • VIP Road • Ghod Dod Road • Althan • Dindoli • Jahangirpura • Sarthana • Mota Varachha • Bhatar.
            </p>
            <p className="footer-tagline">
              Ranked as the #1 Local Video Editor and Cinematographer Shoot Production Studio in Surat, Gujarat.
            </p>
          </div>
        </div>

        {/* Row 3: Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} FRAME. Visuals. All Rights Reserved. Designed for local SEO search optimization.</p>
          <div className="footer-copyright-links">
            <Link to="/sitemap.xml" target="_blank">Sitemap</Link>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
