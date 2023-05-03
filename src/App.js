
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landing";
import Header from "./components/header/header";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Portfolio from "./components/Portfolio/portfolio";
import BathroomVanities from "./components/vanities/vanities";
import Vanity1 from "./components/vanities/vanity1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BathroomVanities" element={<BathroomVanities />} />
          <Route path="/vanity1" element={<Vanity1 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
