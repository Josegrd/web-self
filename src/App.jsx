import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import BlogDetail from "./components/BlogDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="portfolio">
                  <Project />
                </section>
                <section id="blog">
                  <Blogs />
                </section>
              </>
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
