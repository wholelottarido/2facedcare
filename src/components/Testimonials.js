import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Anindya Putri',
    role: 'Beauty Enthusiast, Jakarta',
    avatar: 'AP',
    rating: 5,
    product: 'Deep Cleansing Facial Wash',
    text: 'Absolutely in love with this facial wash! My skin feels incredibly clean without that tight, stripped feeling I used to get from other cleansers. The golden formula smells divine and leaves my skin glowing every morning.',
  },
  {
    id: 2,
    name: 'Sasha Melinda',
    role: 'Skincare Blogger, Surabaya',
    avatar: 'SM',
    rating: 5,
    product: 'Gentle Hydrating Wash',
    text: 'As someone with extremely sensitive skin, finding a cleanser that doesn\'t cause irritation is rare. The Gentle Hydrating Wash is a game-changer — my redness is gone and my skin barrier feels stronger than ever.',
  },
  {
    id: 3,
    name: 'Rivka Amara',
    role: 'Makeup Artist, Bandung',
    avatar: 'RA',
    rating: 5,
    product: 'Brightening Facial Foam',
    text: 'The Brightening Facial Foam is hands-down the best foaming cleanser I\'ve ever tried. After just two weeks, my colleagues started asking about my skincare routine because my complexion looked so radiant!',
  },
  {
    id: 4,
    name: 'Nadia Cahyani',
    role: 'Dermatology Student, Yogyakarta',
    avatar: 'NC',
    rating: 5,
    product: 'Deep Cleansing Facial Wash',
    text: 'From a skincare education perspective, Two Faced Beauty Care truly understands skin science. The ingredient list is impressive — effective, safe, and perfectly balanced. I recommend it to everyone I know.',
  },
  {
    id: 5,
    name: 'Laras Wulandari',
    role: 'Business Professional, Bali',
    avatar: 'LW',
    rating: 5,
    product: 'Brightening Facial Foam',
    text: 'I\'ve tried countless brightening products, but nothing compares to this foam. It\'s luxurious, gentle, and actually delivers results. My uneven skin tone has visibly improved. Worth every penny.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials__container">
        <div className="testimonials__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Customer Reviews
          </motion.span>
          <motion.h2
            className="testimonials__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            What Our Customers <em>Say</em>
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <motion.div
          className="testimonials__main"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Quote mark */}
          <div className="testimonials__quote-mark">❝</div>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              className="testimonials__card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonials__stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="testimonials__star">★</span>
                ))}
              </div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__product-tag">
                <span>✦</span> {t.product}
              </div>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{t.avatar}</div>
                <div>
                  <div className="testimonials__name">{t.name}</div>
                  <div className="testimonials__role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls */}
        <div className="testimonials__controls">
          <button className="testimonials__nav" onClick={prev} aria-label="Previous">‹</button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
          <button className="testimonials__nav" onClick={next} aria-label="Next">›</button>
        </div>

        {/* Thumbnail row */}
        <div className="testimonials__thumbs">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              className={`testimonials__thumb ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="testimonials__thumb-avatar">{item.avatar}</div>
              <span>{item.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
