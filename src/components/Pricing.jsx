import FadeIn from './FadeIn.jsx';

const PLANS = [
  {
    name: 'Foundation',
    desc: 'For practices ready to stop missing calls and start verifying insurance the right way.',
    price: '$795',
    per: '/mo',
    setup: '$2,400 setup, 90 day commitment',
    features: [
      'AI phone and front desk agent',
      'Insurance verification, daily',
      'PMS integration (Dentrix, Eaglesoft, Open Dental)',
      'Monthly performance review',
    ],
    cta: 'Start with Foundation',
  },
  {
    name: 'Operator',
    desc: 'For practices that want the front office running quietly in the background, end to end.',
    price: '$1,495',
    per: '/mo',
    setup: '$3,600 setup, 90 day commitment',
    features: [
      'Everything in Foundation',
      'Recall and reactivation outreach',
      'Treatment plan follow up',
      'Daily morning and evening reports',
      'Weekly call with your account lead',
    ],
    cta: 'Start with Operator',
    featured: true,
    flag: 'Most chosen',
  },
  {
    name: 'Group',
    desc: 'For multi location practices and small dental groups consolidating their back office.',
    price: 'Custom',
    per: '',
    setup: 'Tailored to your locations and PMS stack',
    features: [
      'Everything in Operator',
      'Multi location reporting',
      'Centralized scheduling logic',
      'Custom integrations and workflows',
      'Dedicated implementation team',
    ],
    cta: 'Talk to us',
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-inner">
        <FadeIn className="pricing-header">
          <div className="label">03 / Pricing</div>
          <h2>Priced to <em>replace</em> a hire, not add a tool.</h2>
        </FadeIn>

        <div className="plans">
          {PLANS.map((p) => (
            <FadeIn key={p.name} className={`plan${p.featured ? ' featured' : ''}`}>
              {p.flag && <div className="plan-flag">{p.flag}</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-desc">{p.desc}</div>
              <div className="plan-price">
                {p.price}
                {p.per && <span className="per">{p.per}</span>}
              </div>
              <div className="plan-setup">{p.setup}</div>
              <ul className="plan-features">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#cta" className="plan-cta">{p.cta}</a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
