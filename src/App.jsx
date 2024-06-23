// import components
import Hero from './components/Hero';
import Navbar from './Layouts/Navbar';
import Skills from './components/Skills';
import Cetification from './components/Cetification';
import Award from './components/Award';
import Contact from './components/Contact';
import Experiences from './components/Experience';
import { useEffect } from 'react';
// Animation package
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Cetification />
      <Award />
      {/* <Projects /> */}
      <Experiences />
      {/* <Hireme /> */}
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Huế Lê</h6>
        <p>© All CopyRights in 2023</p>
      </footer>
    </>
  );
};

export default App;
