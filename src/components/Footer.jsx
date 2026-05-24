const COLS = [
  {
    head: 'Product',
    links: [
      { href: '#services', label: 'What we run' },
      { href: '#outcomes', label: 'Outcomes' },
      { href: '#pricing', label: 'Pricing' },
    ],
  },
  {
    head: 'Company',
    links: [
      { href: '#', label: 'About' },
      { href: '#', label: 'Writing' },
      { href: '#', label: 'Contact' },
    ],
  },
  {
    head: 'Trust',
    links: [
      { href: '#', label: 'HIPAA' },
      { href: '#', label: 'Security' },
      { href: '#', label: 'Privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">Chairside<em>.</em></div>
            <div className="footer-tag">AI operations built for the way private dental practices actually run.</div>
          </div>
          {COLS.map((c) => (
            <div className="footer-col" key={c.head}>
              <h4>{c.head}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div>© 2026 Chairside Operations Inc.</div>
          <div>Built for practices that want their evenings back.</div>
        </div>
      </div>
    </footer>
  );
}
