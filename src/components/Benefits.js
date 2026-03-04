import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Benefits.css';

const benefits = [
  {
    icon: '🌿',
    title: 'Natural Ingredients',
    desc: 'Sourced from premium botanical gardens worldwide. Every ingredient is carefully selected for its proven efficacy and skin compatibility.',
  },
  {
    icon: '🔬',
    title: 'Dermatologically Tested',
    desc: 'All formulations are rigorously tested under dermatological supervision, ensuring safety and effectiveness for all skin types.',
  },
  {
    icon: '💧',
    title: 'Deep Hydration',
    desc: 'Advanced moisture-lock technology penetrates the skins barrier to deliver lasting hydration that lasts all day.',
  },
  {
    icon: '✨',
    title: 'Visible Brightening',
    desc: 'Clinically proven brightening agents target dullness and uneven tone, revealing your skin\'s natural luminosity.',
  },
  {
    icon: '🚫',
    title: 'Harmful-Free Formula',
    desc: 'Free from parabens, SLS, artificial fragrances, and harmful chemicals. Safe for sensitive skin and daily use.',
  },
  {
    icon: '♻️',
    title: 'Eco-Conscious',
    desc: 'Sustainably sourced ingredients with recyclable packaging. Beauty that cares for you and the planet.',
  },
];

export default function Benefits() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section className="benefits" id="benefits" ref={ref}>
      {/* Decorative pattern */}
      <div className="benefits__pattern" />

      <div className="benefits__container">
        <div className="benefits__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            className="benefits__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The Two Faced <em>Difference</em>
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="benefit-item"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="benefit-item__icon-wrap">
                <span className="benefit-item__icon">{b.icon}</span>
                <div className="benefit-item__icon-ring" />
              </div>
              <h3 className="benefit-item__title">{b.title}</h3>
              <p className="benefit-item__desc">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="benefits__cta-banner"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="benefits__cta-text">
            <h3>Experience Luxury Skincare Today</h3>
            <p>Join thousands of satisfied customers who've transformed their skincare routine</p>
          </div>
          <a href="#products" className="btn btn--gold">Shop Collection</a>
        </motion.div>
      </div>
    </section>
  );
}
