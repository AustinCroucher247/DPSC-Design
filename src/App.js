
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landing";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
