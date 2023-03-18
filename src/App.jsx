import Navbar from "./global/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Staking from "./pages/staking/Staking.jsx";
import Footer from "./global/Footer.jsx";
import BoxCard from "./pages/home/BoxCard.jsx";
import PillCubes from "./pages/home/PillCubesCard.jsx";
import DapeCard from "./pages/home/DapeCard.jsx";
import Economy from "./pages/economy/Economy.jsx";
import Inventory from "./pages/invootoory/Inventory.jsx";
import GoToTop from "./components/GoToTop.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<BoxCard />} />
          <Route path="pillboxes" element={<BoxCard />} />
          <Route path="pillcubes" element={<PillCubes />} />
          <Route path="pillgarbs" element={<DapeCard />} />
        </Route>
        <Route path="steakstation" element={<Staking />} />
        <Route path="dreamstate" element={<Economy />} />
        <Route path="pills" element={<Inventory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
