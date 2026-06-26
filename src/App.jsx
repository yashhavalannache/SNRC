import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import WhyJapanese from "./components/WhyJapanese";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-700 select-none">
      <Navbar />
      <Hero />
      <About />
      <TrustSection />
      <Services />
      <WhyJapanese />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;