import FadeIn from './FadeIn.jsx';

const OUTCOMES = [
  {
    num: 'i',
    title: 'Your phone gets answered. Every call. Every time.',
    body: 'Average call response under 2 seconds, 7 days a week. New patient capture rate roughly doubles in month one.',
  },
  {
    num: 'ii',
    title: 'You stop chasing insurance.',
    body: 'Eligibility verified the night before. Your team walks in to a clean schedule, not a stack of unverified appointments.',
  },
  {
    num: 'iii',
    title: 'Your inactive list starts producing.',
    body: 'Six figures of dormant production reactivated in the first quarter. Measured, reported, attributable.',
  },
  {
    num: 'iv',
    title: 'You make one great hire instead of three average ones.',
    body: "The person you keep becomes the leader you always wanted them to be, because they're finally doing patient facing work.",
  },
];

export default function Outcomes() {
  return (
    <section className="outcomes" id="outcomes">
      <div className="container">
        <div className="outcomes-grid">
          <FadeIn className="outcomes-left">
            <h2>What changes in your first <em>90 days.</em></h2>
            <p>
              No bloated transformations. No 18 month roadmaps. Specific outcomes you can measure on a Friday afternoon.
            </p>
          </FadeIn>
          <div className="outcomes-right">
            {OUTCOMES.map((o) => (
              <FadeIn key={o.num} className="outcome-item">
                <div className="outcome-num">{o.num}</div>
                <div className="outcome-text">
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
