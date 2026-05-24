import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Services from './components/Services.jsx';
import Outcomes from './components/Outcomes.jsx';
import Pricing from './components/Pricing.jsx';
import FinalCta from './components/FinalCta.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Outcomes />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
