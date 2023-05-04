
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landing";
import Header from "./components/header/header";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Portfolio from "./components/Portfolio/portfolio";
import BathroomVanities from "./components/vanities/vanities";
import Vanity1 from "./components/vanities/vanity1";
import Kitchen from "./components/kitchens/kitchen";
import Kitchen1 from "./components/kitchens/kitchen1";
import BuiltIns from "./components/builtIns/builtIns";
import BuiltIns1 from "./components/builtIns/builtIns1";
import BuiltIns2 from "./components/builtIns/builtIns2";
import BuiltIns3 from "./components/builtIns/builtIns3";
import BuiltIns4 from "./components/builtIns/builtIns4";
import BuiltIns5 from "./components/builtIns/builtIns5";
import BuiltIns6 from "./components/builtIns/builtIns6";
import Furniture from "./components/Furniture/furniture";
import Furniture1 from "./components/Furniture/furniture1";
import Furniture2 from "./components/Furniture/furniture2";
import Furniture3 from "./components/Furniture/furniture3";
import Furniture4 from "./components/Furniture/furniture4";
import WallCoverings from "./components/wallCoverings/wallCoverings";
import WallCoverings1 from "./components/wallCoverings/wallCoverings1";
import WoodTurning from "./components/woodTurning/woodTurning";
import WoodTurning1 from "./components/woodTurning/woodTurning1";
import Entertainment from "./components/entertainmentConsoles/entertainment";
import Entertainment1 from "./components/entertainmentConsoles/entertainment1";
import Miscellaneous from "./components/Miscellaneous/Miscellaneous";
import Miscellaneous1 from "./components/Miscellaneous/Miscellaneous1";
import Miscellaneous2 from "./components/Miscellaneous/Miscellaneous2";

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
          <Route path="/kitchens" element={<Kitchen />} />
          <Route path="/kitchen1" element={<Kitchen1 />} />
          <Route path="/BuiltIns" element={<BuiltIns />} />
          <Route path="/BuiltIns1" element={<BuiltIns1 />} />
          <Route path="/BuiltIns2" element={<BuiltIns2 />} />
          <Route path="/BuiltIns3" element={<BuiltIns3 />} />
          <Route path="/BuiltIns4" element={<BuiltIns4 />} />
          <Route path="/BuiltIns5" element={<BuiltIns5 />} />
          <Route path="/BuiltIns6" element={<BuiltIns6 />} />
          <Route path="/Furniture" element={<Furniture />} />
          <Route path="/Furniture1" element={<Furniture1 />} />
          <Route path="/Furniture2" element={<Furniture2 />} />
          <Route path="/Furniture3" element={<Furniture3 />} />
          <Route path="/Furniture4" element={<Furniture4 />} />
          <Route path="/wallCoverings" element={<WallCoverings />} />
          <Route path="/wallCoverings1" element={<WallCoverings1 />} />
          <Route path="/woodTurning" element={<WoodTurning />} />
          <Route path="/woodTurning1" element={<WoodTurning1 />} />
          <Route path="/EntertainmentConsoles" element={<Entertainment />} />
          <Route path="/EntertainmentConsoles1" element={<Entertainment1 />} />
          <Route path="/Miscellaneous" element={<Miscellaneous />} />
          <Route path="/Miscellaneous1" element={<Miscellaneous1 />} />
          <Route path="/Miscellaneous2" element={<Miscellaneous2 />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
