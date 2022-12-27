import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
        </main>
      </div>
    </>
  );
}

export default App;
