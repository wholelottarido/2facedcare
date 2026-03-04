import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } },
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        {/* Image */}
        <motion.div
          className="about__visual"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="about__img-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/about.png`}
              alt="Two Faced Beauty Care"
              className="about__img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="about__img-placeholder">
              <span>TWO FACED</span>
              <span>BEAUTY CARE</span>
            </div>
            <div className="about__img-badge">
              <span className="about__badge-year">Est.</span>
              <span className="about__badge-num">2020</span>
            </div>
          </div>
          {/* Decorative corner frames */}
          <div className="about__corner about__corner--tl" />
          <div className="about__corner about__corner--br" />
        </motion.div>

        {/* Content */}
        <div className="about__content">
          <motion.span
            className="section-label"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Our Story
          </motion.span>

          <motion.h2
            className="about__title"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Where Science Meets <em>Luxury</em>
          </motion.h2>

          <div className="gold-divider" style={{ margin: '0 0 1.5rem' }} />

          <motion.p
            className="about__text"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Two Faced Beauty Care was born from a passionate belief that everyone deserves access to
            truly premium skincare. We combine the finest botanical ingredients with cutting-edge
            formulation science to create products that don't just cleanse — they transform.
          </motion.p>

          <motion.p
            className="about__text"
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Every product in our collection is dermatologically tested, free from harmful additives,
            and crafted to honour your skin's natural intelligence. Because beautiful skin is not a
            luxury — it's your birthright.
          </motion.p>

          <motion.div
            className="about__pillars"
            variants={fadeUp(0.5)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              { icon: '🌿', title: 'Natural', desc: 'Premium botanical extracts' },
              { icon: '🔬', title: 'Science', desc: 'Dermatologically tested' },
              { icon: '✦', title: 'Luxury', desc: 'Exclusive formulations' },
            ].map((p) => (
              <div className="about__pillar" key={p.title}>
                <span className="about__pillar-icon">{p.icon}</span>
                <span className="about__pillar-title">{p.title}</span>
                <span className="about__pillar-desc">{p.desc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
