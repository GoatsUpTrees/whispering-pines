import './Trees.css';

const trees = [
  {
    emoji: '🌲',
    name: 'Scotch Pine',
    tagline: 'The Classic Choice',
    description:
      'Dense, dark-green needles with excellent needle retention. Sturdy branches hold heavy ornaments with ease — the most popular tree on the farm.',
    traits: ['Excellent needle retention', 'Strong branches', 'Full, traditional shape'],
    color: '#2d5a3d',
  },
  {
    emoji: '🎄',
    name: 'White Pine',
    tagline: 'Soft & Fragrant',
    description:
      'Long, soft blue-green needles give White Pine a graceful, airy look. Light fragrance fills your home with a true Wisconsin forest scent.',
    traits: ['Soft flexible needles', 'Beautiful blue-green color', 'Mild fresh scent'],
    color: '#1a3a2a',
    featured: true,
  },
  {
    emoji: '🌿',
    name: 'Norway Spruce',
    tagline: 'The Traditional Shape',
    description:
      'The quintessential Christmas tree with a classic pyramid silhouette and sharp, deep-green needles. A timeless choice loved for generations.',
    traits: ['Classic pyramid form', 'Deep rich green', 'Traditional favorite'],
    color: '#4a7c5e',
  },
];

const extras = [
  { icon: '💐', name: 'Wreaths', desc: 'Fresh, professionally-designed wreaths for your door or mantle.' },
  { icon: '✨', name: 'Kissing Balls', desc: 'Beautifully crafted holiday kissing balls in multiple sizes.' },
  { icon: '🎀', name: 'Garland & Swags', desc: 'Fresh-cut garland and swags to deck every corner of your home.' },
  { icon: '🏠', name: 'Boughs & Crests', desc: 'Individual boughs and crests for custom holiday arrangements.' },
];

export default function Trees() {
  return (
    <section className="trees" id="trees">
      <div className="trees__inner">
        <div className="trees__header">
          <p className="section-label">Our Selection</p>
          <h2 className="section-title">Find Your Perfect Tree</h2>
          <p className="section-subtitle">
            Wander our fields and hand-select a freshly-grown tree — or browse our
            large assortment of pre-cut trees at the lodge if you are short on time.
          </p>
        </div>

        <div className="trees__grid">
          {trees.map(tree => (
            <article
              key={tree.name}
              className={`tree-card ${tree.featured ? 'tree-card--featured' : ''}`}
              style={{ '--card-color': tree.color }}
            >
              {tree.featured && <span className="tree-card__badge">Most Popular</span>}
              <div className="tree-card__icon">{tree.emoji}</div>
              <h3 className="tree-card__name">{tree.name}</h3>
              <p className="tree-card__tagline">{tree.tagline}</p>
              <p className="tree-card__desc">{tree.description}</p>
              <ul className="tree-card__traits">
                {tree.traits.map(t => (
                  <li key={t}><span>✓</span>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="trees__services">
          <div className="trees__services-text">
            <p className="section-label">At the Lodge</p>
            <h3 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
              Full Service, Start to Finish
            </h3>
            <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
              After you pick your tree, we will shake out loose needles, bale it for easy
              transport, and load it onto your vehicle — you do not lift a finger until
              you are home decorating.
            </p>
          </div>
          <div className="trees__services-icons">
            <div className="service-pill">🪚 Tree Cutting</div>
            <div className="service-pill">🔄 Shaking</div>
            <div className="service-pill">📦 Baling</div>
            <div className="service-pill">🚗 Loading</div>
          </div>
        </div>

        <div className="trees__extras">
          <p className="section-label" style={{ textAlign: 'center' }}>Holiday Shop</p>
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            More Holiday Greenery
          </h3>
          <div className="extras__grid">
            {extras.map(e => (
              <div key={e.name} className="extra-card">
                <div className="extra-card__icon">{e.icon}</div>
                <h4>{e.name}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
