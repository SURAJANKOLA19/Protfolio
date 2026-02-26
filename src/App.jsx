import {
  Navbar,
  Hero,
  About,
  Projects,
  Experiences,
  Testimonial,
  Contact,
  Footer,
} from "./sections";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
