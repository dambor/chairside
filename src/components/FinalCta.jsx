import FadeIn from './FadeIn.jsx';

export default function FinalCta() {
  return (
    <section className="final-cta" id="cta">
      <div className="container">
        <FadeIn as="h2">
          Stop running an HR department. Start running a <em>practice.</em>
        </FadeIn>
        <FadeIn as="p">
          Twenty minutes on the phone. We'll look at your numbers together and tell you, honestly, whether Chairside makes sense for your practice. If it doesn't, we'll tell you that too.
        </FadeIn>
        <FadeIn as="a" href="#" className="btn-primary">
          Book a 20 minute walkthrough
          <span className="arrow">→</span>
        </FadeIn>
      </div>
    </section>
  );
}
