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
            Wander our fields and hand-select a freshly-grow
