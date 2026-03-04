import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Products.css';

const products = [
  {
    id: 'deep-cleansing',
    name: 'Deep Cleansing Facial Wash',
    tagline: 'For All Skin Types',
    volume: '150 ml',
    description:
      'A golden-hued gel formula enriched with botanical extracts that purifies pores, removes makeup residue, and restores skin\'s natural radiance without stripping moisture.',
    keyIngredients: ['Sodium Lauryl Sulfate', 'Glycerin', 'Citric Extract'],
    badge: 'Bestseller',
    image: 'deep-cleansing.png',
    accent: '#C9A96E',
  },
  {
    id: 'gentle-hydrating',
    name: 'Gentle Hydrating Wash',
    tagline: 'For Dry & Sensitive Skin',
    volume: '150 ml',
    description:
      'An ultra-gentle, water-based formula that cleanses while delivering deep hydration. Infused with hyaluronic acid and aloe vera to leave skin soft, calm, and perfectly balanced.',
    keyIngredients: ['Hyaluronic Acid', 'Aloe Vera', 'Chamomile Extract'],
    badge: 'Sensitive-Safe',
    image: 'gentle-hydrating.png',
    accent: '#89C4D8',
  },
  {
    id: 'brightening-foam',
    name: 'Brightening Facial Foam',
    tagline: 'With Niacinamide & Multi-Vitamins',
    volume: '150 ml',
    description:
      'A luxurious foaming cleanser packed with Niacinamide and multi-vitamins that visibly brightens complexion, evens skin tone, and delivers a healthy, lit-from-within glow.',
    keyIngredients: ['Niacinamide', 'Vitamin C', 'Vitamin E'],
    badge: 'Brightening',
    image: 'brightening-foam.png',
    accent: '#D4B896',
  },
];

export default function Products() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section className="products" id="products">
      {/* Section header */}
      <div className="products__header" ref={ref}>
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Collection
        </motion.span>
        <motion.h2
          className="products__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Signature <em>Skincare</em> Line
        </motion.h2>
        <div className="gold-divider" />
        <motion.p
          className="products__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Three expertly formulated cleansers, each designed to address the unique
          needs of your skin type with luxurious, salon-quality results at home.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="products__grid">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      {/* Badge */}
      <div className="product-card__badge">{product.badge}</div>

      {/* Image area */}
      <div className="product-card__image-wrap">
        <div className="product-card__image-bg" style={{ '--card-accent': product.accent }} />
        <img
          src={`${process.env.PUBLIC_URL}/images/${product.image}`}
          alt={product.name}
          className="product-card__img"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="product-card__img-placeholder">
          <span>{product.name.split(' ').slice(0, 2).join(' ')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="product-card__body">
        <span className="product-card__tagline">{product.tagline}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__divider" />
        <p className="product-card__desc">{product.description}</p>

        {/* Ingredients */}
        <div className="product-card__ingredients">
          <span className="product-card__ingr-label">Key Ingredients</span>
          <div className="product-card__ingr-tags">
            {product.keyIngredients.map((ing) => (
              <span key={ing} className="product-card__tag">{ing}</span>
            ))}
          </div>
        </div>

        <div className="product-card__footer">
          <span className="product-card__volume">{product.volume}</span>
          <button className="product-card__btn">View Details</button>
        </div>
      </div>
    </motion.div>
  );
}
