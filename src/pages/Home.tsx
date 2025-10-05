import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { Benefits } from '../components/Benefits/Benefits';
import { Services } from '../components/Services/Services';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import { About } from '../components/About/About';
import {Equipments} from '../components/Equipamentos/Equipaments';
import {Coverage} from '../components/Coverage/Coverage';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Benefits/>
      <Equipments />
      <Coverage />
      <Contact />
      <Footer />
    </>
  );
}
