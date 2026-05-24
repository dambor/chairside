import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#services', label: 'What we run' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={open ? 'is-open' : ''}>
      <div className="container nav-bar">
        <a href="#top" className="logo" onClick={close}>
          Chairside<em>.</em>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <a href="#cta" className="nav-cta">Book a walkthrough</a>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#cta" className="mobile-cta" onClick={close}>
          Book a 20 minute walkthrough →
        </a>
      </div>
    </nav>
  );
}
