import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trees from './components/Trees';
import Visit from './components/Visit';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trees />
        <Visit />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
