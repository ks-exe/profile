import { Navigation }  from './components/Navigation';
import { BackToTop }   from './components/BackToTop';
import { Footer }      from './components/Footer';
import { Hero }        from './sections/Hero';
import { About }       from './sections/About';
import { Superpowers } from './sections/Superpowers';
import { Skills }      from './sections/Skills';
import { Projects }    from './sections/Projects';
import { Impact }      from './sections/Impact';
import { Achievements } from './sections/Achievements';
import { YouTube }     from './sections/YouTube';
import { Writing }     from './sections/Writing';
import { Contact }     from './sections/Contact';
import { useReveal }   from './hooks/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Superpowers />
        <Skills />
        <Projects />
        <Impact />
        <Achievements />
        <YouTube />
        <Writing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
