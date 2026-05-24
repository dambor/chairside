import FadeIn from './FadeIn.jsx';

const SERVICES = [
  {
    num: '01',
    title: 'Phone and front desk',
    desc: 'Every call answered, every appointment booked, every FAQ handled. 24 hours a day, in English or Spanish.',
    replaces: '1 to 2 front desk seats, after hours answering services, and the voicemail black hole.',
  },
  {
    num: '02',
    title: 'Insurance verification',
    desc: "Coverage verified for tomorrow's schedule the night before. No more hold music, no more surprises at the front desk.",
    replaces: 'The 14 weekly hours your team currently loses to insurance IVRs and payer portals.',
  },
  {
    num: '03',
    title: 'Recall and reactivation',
    desc: 'Inactive patients contacted with personal, context aware outreach based on their last visit and overdue care.',
    replaces: 'The dusty spreadsheet, the never sent emails, the production sitting in your inactive list.',
  },
  {
    num: '04',
    title: 'Treatment plan follow up',
    desc: 'Patients with unscheduled treatment are nurtured by SMS, given financing options, and booked. Without nagging.',
    replaces: 'The treatment coordinator role you keep meaning to fill but never quite do.',
  },
  {
    num: '05',
    title: 'Morning huddle and daily report',
    desc: 'A one page brief in your inbox each morning. Risks, follow ups, opportunities. A one page debrief each evening.',
    replaces: 'The visibility you lose the second you step into operatory one.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <FadeIn className="services-header">
          <div className="label">02 / What we run for you</div>
          <h2>The work nobody <em>wants</em> to do, run reliably, every day.</h2>
        </FadeIn>

        {SERVICES.map((s) => (
          <FadeIn key={s.num} className="service-row">
            <div className="service-num">{s.num}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-replaces">
              <span className="head">Replaces</span>
              {s.replaces}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
