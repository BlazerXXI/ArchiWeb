import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="container m-auto max-w-[1240px]">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
