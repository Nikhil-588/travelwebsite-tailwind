
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourDetails from "./components/Toursdetails";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/Tours";
import Login from "./components/Login";
import Toursdetails from "./components/Toursdetails";
import Sign from "./components/Sign";

//import Derived from "./components/Derived";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <BrowserRouter>
      <div className={isDark ? "dark" : ""}>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
           
          <Navbar
            isDark={isDark}
            setIsDark={setIsDark}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/tours/:id" element={<Toursdetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tours/:id" element={<TourDetails />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
