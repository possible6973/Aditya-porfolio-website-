import SEO from "../SEO";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaLocationDot, FaClock, FaPaperPlane } from "react-icons/fa6";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Video Editing",
    details: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Book a Video Consultation Surat | FRAME.",
    "description": "Contact Alex Moncy at FRAME. Visuals to get custom estimates for videography shoots and editing retainers in Surat, Gujarat.",
    "url": "https://framevisuals.in/contact"
  };

  return (
    <div className="contact-page-wrapper">
      <SEO
        title="Book a Free Consultation | Video Editor &amp; Cinematographer Surat"
        description="Contact Alex Moncy at FRAME. Visuals in Surat, Gujarat. Request custom quotes for commercial shoots, Instagram reels packages, color grading, and VFX. Get in touch!"
        keywords="Book a Free Consultation, Hire a Video Editor in Surat, Get a Quote, Video Production Company Surat, Contact Videographer Surat"
        canonical="/contact"
        schema={schema}
      />

      <section className="contact-hero section-container">
        <div className="contact-hero-text">
          <span className="featured-tag">GET IN TOUCH</span>
          <h1 className="contact-h1-glowing">
            Let's Create Something <span>Amazing</span>
          </h1>
          <p className="contact-lead">
            Ready to scale your business with premium, high-retention video? Tell us about your project, target budget, and shoot locations across Surat.
          </p>
        </div>
      </section>

      {/* Grid of Form and details */}
      <section className="contact-grid-section section-container">
        <div className="contact-page-grid">
          {/* Left: Lead Form */}
          <div className="contact-form-box">
            <h2>Send a Message</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="lead-capture-form" data-cursor="disable">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Select Required Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Video Editing</option>
                    <option>Instagram Reel Editing</option>
                    <option>Commercial Video Production</option>
                    <option>Corporate Shoot</option>
                    <option>Product Shoot</option>
                    <option>Fashion Shoot</option>
                    <option>Wedding Cinematography</option>
                    <option>Color Grading</option>
                    <option>AI Visual Effects</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="details">Project Details &amp; Outline</label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your goals, required shoot dates/locations, or reference links."
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Submit Inquiry <FaPaperPlane />
                </button>
              </form>
            ) : (
              <div className="form-success-box">
                <h3>Thank You!</h3>
                <p>Your inquiry has been successfully received. We will review your project details and get back to you within 24 hours.</p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            )}
          </div>

          {/* Right: Studio Details & Map */}
          <div className="contact-details-box">
            <div className="details-card">
              <h3>Office &amp; Studio Address</h3>
              <ul className="details-list">
                <li>
                  <FaLocationDot className="detail-icon" />
                  <span>
                    <strong>FRAME. Visuals Studio</strong><br />
                    302, Royal Arcade, VIP Road, Vesu,<br />
                    Surat, Gujarat 395007
                  </span>
                </li>
                <li>
                  <FaPhone className="detail-icon" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <FaEnvelope className="detail-icon" />
                  <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
                </li>
                <li>
                  <FaClock className="detail-icon" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</span>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="details-map-wrap">
              <iframe
                title="FRAME. Visuals Studio Location Map - Vesu Surat"
                src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d14881.564536762391!2d72.7844391515222!3d21.176620573934375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sVesu%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
