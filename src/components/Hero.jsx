import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-trees" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="hero__tree" style={{ '--i': i }} />
          ))}
        </div>
        <div className="hero__snowflakes" aria-hidden="true">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="hero__flake" style={{ '--i': i }}>❄</span>
          ))}
        </div>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Oconto, Wisconsin — Est. Since Family Tradition</p>
        <h1 className="hero__title">
          Begin a New<br />
          <em>Holiday Tradition</em>
        </h1>
        <p className="hero__subtitle">
          Come breathe the crisp winter air, wander the fields, and find your perfect
          Christmas tree at Whispering Pines Tree Farm — 30 minutes north of Green Bay.
        </p>
        <div className="hero__actions">
          <a href="#visit" className="btn btn--primary">Plan Your Visit</a>
          <a href="#trees" className="btn btn--ghost">See Our Trees</a>
        </div>
        <div className="hero__badges">
          <span>🎄 Choose &amp; Cut</span>
          <span>🚜 Tractor Wagon Rides</span>
          <span>🔔 Holiday Shop</span>
          <span>🌿 Wreaths &amp; Garland</span>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  );
}
