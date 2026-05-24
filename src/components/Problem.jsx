import FadeIn from './FadeIn.jsx';

const STATS = [
  { num: '32', unit: '%', desc: 'Annual turnover in dental front office roles' },
  { num: '14', unit: 'hrs', desc: 'Spent each week on insurance verification per practice' },
  { num: '27', unit: '%', desc: 'Of inbound new patient calls go to voicemail' },
  { num: '$61k', unit: '', desc: 'Loaded yearly cost per front desk hire' },
];

export default function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-label">01 / The math</div>
          <h2 className="section-headline">
            A typical single doctor practice spends <em>$180,000</em> a year on admin staff. Half of them are looking for another job right now.
          </h2>
        </FadeIn>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <FadeIn key={i} className="stat-cell">
              <div className="num">
                {s.num}
                {s.unit && <span className="unit">{s.unit}</span>}
              </div>
              <div className="desc">{s.desc}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
