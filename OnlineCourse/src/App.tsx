import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen font-sans ">
      <section className="flex items-center justify-center w-full h-[10%] bg-blue-600  shadow-md  z-10 ">
        <Header />
      </section>
      <div className=" w-full overflow-y-scroll no-scrollbar space-y-60 h-[90%]">
        <Hero />
        <About />
        <Benefits />
        <Courses />
        <Testimonials />
        <Support />
        <Footer />
      </div>
    </div>
  );
}

export default App;
