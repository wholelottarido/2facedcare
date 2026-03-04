import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Decorative background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="hero__container">
        {/* Text side */}
        <div className="hero__content">
          <motion.span
            className="section-label"
            custom={0} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            Premium Skincare Collection
          </motion.span>

          <motion.h1
            className="hero__title"
            custom={1} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            Reveal Your <br />
            <em>True Beauty</em>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            custom={2} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            Formulated with premium botanical extracts and advanced skincare technology.
            Two Faced Beauty Care brings you a luxurious cleansing experience
            that transforms your daily ritual into a moment of pure indulgence.
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={3} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <a href="#products" className="btn btn--gold">Explore Products</a>
            <a href="#about" className="btn btn--outline">Our Story</a>
          </motion.div>

          <motion.div
            className="hero__stats"
            custom={4} variants={fadeUp}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {[
              { num: '10K+', label: 'Happy Customers' },
              { num: '3', label: 'Signature Products' },
              { num: '100%', label: 'Natural Ingredients' },
            ].map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__image-frame">
            <div className="hero__image-ring" />
            <img
              src={`${process.env.PUBLIC_URL}/images/hero-products.png`}
              alt="Two Faced Beauty Care Products"
              className="hero__img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="hero__image-placeholder">
              <span>TWO FACED</span>
              <span className="hero__image-placeholder-sub">BEAUTY CARE</span>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="hero__badge"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="hero__badge-icon">✦</span>
            <span>Luxury Skincare</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
