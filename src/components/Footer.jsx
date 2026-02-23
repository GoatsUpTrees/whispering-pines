import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">🌲 Whispering Pines Tree Farm</div>
            <p className="footer__tagline">
              A family Christmas tradition in the heart of Wisconsin —
              30 minutes north of Green Bay.
            </p>
            <a href="tel:9208342823" className="footer__phone">
              (920) 834-2823
            </a>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#trees">Our Trees</a></li>
                <li><a href="#visit">Visit Us</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Locations</h4>
              <ul>
                <li>
                  <a href="https://maps.google.com/?q=N6765+County+Road+S+Oconto+WI" target="_blank" rel="noopener noreferrer">
                    Oconto Farm (Main)
                  </a>
                </li>
                <li>De Pere Retail Lot</li>
              </ul>
              <h4 style={{ marginTop: '1.5rem' }}>Season</h4>
              <ul>
                <li>Mid-Nov – Dec 24th</li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook Updates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Whispering Pines Tree Farm · Oconto, Wisconsin</p>
          <p>Proudly family-owned &amp; operated 🎄</p>
        </div>

      </div>
    </footer>
  );
}
