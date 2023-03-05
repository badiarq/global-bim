import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
                exact path="/" 
                element={<Home/>} 
            />
          <Route 
                path="/create" 
                element={<Create/>}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App