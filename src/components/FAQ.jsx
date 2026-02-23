import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Do I need to bring my own saw or tools?',
    a: 'Nope! We provide everything you need. Just come ready to explore and find your perfect tree. Our staff will assist with cutting, shaking, baling, and loading.',
  },
  {
    q: 'How does the tractor wagon ride work?',
    a: "Our train-themed tractor and wagon will carry you from the lodge out into the fields. Once you've found your tree, a team member will help cut it and transport it back to the lodge for processing.",
  },
  {
    q: 'What is tree shaking and baling?',
    a: 'Shaking spins the tree rapidly to remove any loose or dead inner needles — this means far fewer needles dropping in your home. Baling wraps the tree tightly in netting, making it much easier to transport and bring through your front door.',
  },
  {
    q: 'Do you offer pre-cut trees?',
    a: "Yes! If you're short on time or prefer to skip the field walk, we always have a large selection of freshly pre-cut trees available at the lodge. Our De Pere retail lot also carries pre-cut trees throughout the season.",
  },
  {
    q: "Can I get wreaths and garland if I'm not buying a tree?",
    a: "Absolutely. Our holiday shop at the lodge carries professionally-designed wreaths, kissing balls, garland, swags, boughs, and crests — all available whether or not you're purchasing a tree.",
  },
  {
    q: 'Do you accept credit cards?',
    a: 'Yes, we accept major credit and debit cards at both the main farm and the De Pere retail lot.',
  },
  {
    q: 'Are pets allowed on the farm?',
    a: 'Friendly, leashed dogs are welcome on the farm! We love when the whole family — fur babies included — comes along for the tradition.',
  },
  {
    q: 'When does the season open and close?',
    a: 'We typically open the weekend before Thanksgiving and remain open through December 24th, or until trees run out. Follow us on Facebook for exact dates and any weather-related updates each season.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__layout">

          <div className="faq__sidebar">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-subtitle">
              Have a question we didn't answer? Give us a call — we love hearing from families
              planning their visit.
            </p>
            <a href="tel:9208342823" className="faq__phone-btn">
              📞 (920) 834-2823
            </a>
            <div className="faq__fun-fact">
              <span className="faq__fun-fact-icon">🌲</span>
              <p>Did you know? An acre of Christmas trees produces enough oxygen for <strong>18 people</strong> per year.</p>
            </div>
          </div>

          <div className="faq__list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span>{item.q}</span>
                  <div className="faq__chevron">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
