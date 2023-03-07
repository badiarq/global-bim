import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/home";
import { BuildingViewer } from "./components/building-viewer";
import { MapViewer } from "./components/map-viewer";
import { initializeApp } from "firebase/app";
import { ContextProvider } from "./middleware/context-provider";

// page components
import Navbar from "./components/Navbar";
import Map from "./pages/map/map";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {
  return (
    <ContextProvider>
      <div className="App font-body">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/building" element={<BuildingViewer />} />
            <Route path="/map" element={<MapViewer />} />
            <Route path="/login" element={<Dashboard />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
