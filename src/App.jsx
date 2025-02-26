import RootLayout from "./layouts/RootLayout";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router";
import Marketplace from "./Pages/Marketplace";
import Artist from "./Pages/Artist";
import Community from "./Pages/Community"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/community" element={<Community />} />
      </Route>
    </Routes>
  );
}

export default App;
