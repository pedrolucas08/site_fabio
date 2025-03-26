import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Services />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
