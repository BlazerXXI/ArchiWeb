import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Testimonial />
        </main>
      </div>
    </>
  );
}

export default App;
