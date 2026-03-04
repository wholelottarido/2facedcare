import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/twofacedbeautycare', icon: '◈' },
  { label: 'TikTok', href: 'https://tiktok.com/@twofacedbeautycare', icon: '◉' },
  { label: 'WhatsApp', href: 'https://wa.me/6281234567890', icon: '◎' },
];

const footerLinks = [
  {
    heading: 'Products',
    links: [
      { label: 'Deep Cleansing Facial Wash', href: '#products' },
      { label: 'Gentle Hydrating Wash', href: '#products' },
      { label: 'Brightening Facial Foam', href: '#products' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#about' },
      { label: 'Benefits', href: '#benefits' },
      { label: 'Reviews', href: '#testimonials' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'How to Use', href: '#products' },
      { label: 'Ingredients Guide', href: '#products' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#contact' },
    ],
  },
];

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You\'ll receive our exclusive beauty tips soon.');
  };

  return (
    <footer className="footer" id="contact" ref={ref}>
      {/* Top wave */}
      <div className="footer__wave" />

      <div className="footer__container">
        {/* Main grid */}
        <motion.div
          className="footer__grid"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text">TWO FACED</span>
              <span className="footer__logo-sub">BEAUTY CARE</span>
            </div>
            <p className="footer__brand-desc">
              Premium skincare crafted with love and science. Elevating your daily ritual to a
              luxury experience, one cleanse at a time.
            </p>
            <div className="footer__socials">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}
                   target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer__links-col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul className="footer__link-list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h4 className="footer__col-heading">Stay Beautiful</h4>
            <p className="footer__newsletter-text">
              Subscribe for exclusive skincare tips, product launches, and special offers.
            </p>
            <form className="footer__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
                required
              />
              <button type="submit" className="footer__submit">Subscribe</button>
            </form>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✉</span>
                <span>hello@twofacedbeauty.com</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">☎</span>
                <span>+62 812 3456 7890</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-line" />
          <div className="footer__bottom-content">
            <span className="footer__copy">
              © {new Date().getFullYear()} Two Faced Beauty Care. All rights reserved.
            </span>
            <div className="footer__badges">
              <span className="footer__badge-item">✦ Cruelty Free</span>
              <span className="footer__badge-item">✦ Dermatologically Tested</span>
              <span className="footer__badge-item">✦ Made in Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
