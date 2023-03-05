import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map-viewer";

// page components
import Navbar from "./components/Navbar";
import Map from "./pages/map/map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/building" element={<BuildingViewer />} />
          <Route path="/map" element={<MapViewer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
