import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
