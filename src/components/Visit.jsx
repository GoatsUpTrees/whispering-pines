import './Visit.css';

const locations = [
  {
    tag: 'Main Farm',
    name: 'Oconto Farm',
    address: 'N6765 County Road S\nOconto, WI 54153',
    phone: '(920) 834-2823',
    note: 'Full Christmas experience — choose & cut, tractor rides, holiday shop, shaking & baling.',
    featured: true,
  },
  {
    tag: 'Retail Lot',
    name: 'De Pere Lot',
    address: 'De Pere, Wisconsin',
    phone: '(920) 834-2823',
    note: 'Pre-cut trees, wreaths, kissing balls, boughs, and garland for your convenience.',
    featured: false,
  },
];

const hours = [
  { period: 'Opening Weekend', days: 'Sat & Sun before Thanksgiving', time: '9am – 5pm' },
  { period: 'Thanksgiving Weekend', days: 'Fri, Sat & Sun', time: '9am – 6pm' },
  { period: 'Regular Season', days: 'Monday – Sunday', time: '10am – 5pm' },
  { period: 'Weekends', days: 'Saturday & Sunday', time: '9am – 6pm' },
];

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="visit__inner">

        <div className="visit__header">
          <p className="section-label">Plan Your Visit</p>
          <h2 className="section-title">Hours &amp; Locations</h2>
          <p className="section-subtitle">
            We're open from mid-November through the holiday season.
            Check our Facebook page for the latest updates each year.
          </p>
        </div>

        <div className="visit__grid">

          <div className="visit__hours-card">
            <div className="visit__card-header">
              <span className="visit__card-icon">🕐</span>
              <h3>Seasonal Hours</h3>
            </div>
            <div className="visit__hours-list">
              {hours.map(h => (
                <div key={h.period} className="hours-row">
                  <div>
                    <div className="hours-row__period">{h.period}</div>
                    <div className="hours-row__days">{h.days}</div>
                  </div>
                  <div className="hours-row__time">{h.time}</div>
                </div>
              ))}
            </div>
            <p className="visit__hours-note">
              📅 Season typically runs <strong>mid-November through December 24th</strong>.
              Follow us on Facebook for exact open/close dates each year.
            </p>
          </div>

          <div className="visit__locations">
            {locations.map(loc => (
              <div key={loc.name} className={`location-card ${loc.featured ? 'location-card--featured' : ''}`}>
                <div className="location-card__tag">{loc.tag}</div>
                <h3 className="location-card__name">{loc.name}</h3>
                <address className="location-card__address">
                  {loc.address.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </address>
                <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="location-card__phone">
                  📞 {loc.phone}
                </a>
                <p className="location-card__note">{loc.note}</p>
                {loc.featured && (
                  
                    href="https://maps.google.com/?q=N6765+County+Road+S+Oconto+WI+54153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-card__map-btn"
                  >
                    Get Directions →
                  </a>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="visit__highlights">
          <div className="highlight">
            <span className="highlight__icon">🚜</span>
            <div>
              <strong>Tractor Wagon Rides</strong>
              <p>Our train-themed tractors carry you through the fields to find your tree.</p>
            </div>
          </div>
          <div className="highlight__divider" />
          <div className="highlight">
            <span className="highlight__icon">📸</span>
            <div>
              <strong>Holiday Photo Ops</strong>
              <p>Bring your camera — the farm is full of beautiful seasonal scenes.</p>
            </div>
          </div>
          <div className="highlight__divider" />
          <div className="highlight">
            <span className="highlight__icon">🎅</span>
            <div>
              <strong>Family Memories</strong>
              <p>Make new traditions your family will cherish for generations.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
