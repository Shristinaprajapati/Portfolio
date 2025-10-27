import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import DesignProjects from "./sections/DesignProjects";
import WordPressProjects from "./sections/WordPressProjects";
import ScrollToTop from "./components/ScrollToTop"; // import it

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />

      {/* Add ScrollToTop here */}
      <ScrollToTop />

      <Routes>
        {/* Main portfolio (single-page layout) */}
        <Route
          path="/"
          element={
            <>
              <section
                id="home"
                className="relative min-h-screen flex items-center justify-center bg-black-1"
              >
                <Home />
              </section>

              <section
                id="about"
                className="relative min-h-screen flex items-center justify-center bg-black-1"
              >
                <About />
              </section>

              <section
                id="portfolio"
                className="relative z-10 bg-black text-white bg-black-1"
              >
                <Portfolio />
              </section>

              <section
                id="experience"
                className="relative min-h-screen flex items-center justify-center"
              >
                <Experience />
              </section>

              <section
                id="contact"
                className="relative min-h-screen flex items-center justify-center bg-pink-100"
              >
                <Contact />
              </section>
            </>
          }
        />

        {/* Other pages */}
        <Route path="/design-projects" element={<DesignProjects />} />
        <Route path="/wordpress-projects" element={<WordPressProjects />} />
      </Routes>
    </div>
  );
}
