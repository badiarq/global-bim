import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map-viewer";
import { initializeApp } from "firebase/app";

// page components
import Navbar from "./components/Navbar";
import Map from "./pages/map/map";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMDVqnLBz21BLJCBDcABRX6K8BWG_KbIc",
  authDomain: "global-bim.firebaseapp.com",
  projectId: "global-bim",
  storageBucket: "global-bim.appspot.com",
  messagingSenderId: "577252476037",
  appId: "1:577252476037:web:09fb33abb49eea0f35d5ec"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
