export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="marginalia" aria-hidden="true">
          Vol. 01
          <div className="line" />
          Est. 2026
        </div>
        <div className="eyebrow">AI operations for private dental practices</div>
        <h1>You became a dentist to do <em>dentistry.</em></h1>

        <div className="hero-grid">
          <div>
            <p className="lede">
              Not to manage employees, chase insurance, or rebook no-shows. Chairside runs the parts of your practice you hate, so you can run one with a team you actually want.
            </p>
          </div>
          <div className="hero-right">
            <div className="hero-stat">
              <div className="num">3 to 1</div>
              <div className="label">Average front desk headcount, before and after</div>
            </div>
            <div className="hero-stat">
              <div className="num">14 days</div>
              <div className="label">From kickoff to your first quiet morning</div>
            </div>
          </div>
        </div>

        <div className="cta-row">
          <a href="#cta" className="btn-primary">
            Book a 20 minute walkthrough
            <span className="arrow">→</span>
          </a>
          <a href="#services" className="btn-secondary">See what we run</a>
        </div>
      </div>
    </section>
  );
}
