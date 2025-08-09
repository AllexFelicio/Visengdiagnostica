import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Benefits } from '../components/Benefits/Benefits';
import { Services } from '../components/Services/Services';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { About } from '../components/About/About';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Benefits/>
      <Contact />
      <Footer />
    </>
  );
}
