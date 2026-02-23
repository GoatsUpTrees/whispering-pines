import './Gallery.css';

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1512474932049-78ac69ede12c?w=800&q=80',
    alt: 'Christmas tree farm rows in winter',
    span: 'wide',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=600&q=80',
    alt: 'Family picking out a Christmas tree',
    span: 'tall',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1576502200272-341a4b8d5e73?w=600&q=80',
    alt: 'Fresh cut Christmas tree close up',
    span: 'normal',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1482862268762-7d5a2a20490e?w=600&q=80',
    alt: 'Snow on pine tree branches',
    span: 'normal',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=600&q=80',
    alt: 'Holiday wreath with pine cones',
    span: 'normal',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80',
    alt: 'Christmas tree farm at dusk',
    span: 'wide',
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">

        <div className="gallery__header">
          <p className="section-label">The Farm</p>
          <h2 className="section-title">See It for Yourself</h2>
          <p className="section-subtitle">
            From misty morning rows to the warmth of the lodge — every visit to
            Whispering Pines is a memory worth keeping.
          </p>
        </div>

        <div className="gallery__note">
          📷 Placeholder photos shown — replace with your own farm images before launch.
        </div>

        <div className="gallery__grid">
          {photos.map(photo => (
            <div key={photo.id} className={`gallery__item gallery__item--${photo.span}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery__item-overlay" />
            </div>
          ))}
        </div>

        <div className="gallery__cta">
          <p>Follow us for seasonal updates and behind-the-scenes farm life</p>
          <a href="https://www.facebook.com" className="gallery__fb-btn">
            📘 Follow on Facebook
          </a>
        </div>

      </div>
    </section>
  );
}
