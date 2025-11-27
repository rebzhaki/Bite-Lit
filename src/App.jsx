import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NavbarSection from "./components/navbar";
import MenuList from "./components/menu/menuList";
import { SearchProvider } from "./context/searchContext";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import logo from "/bite-lite-logo.png";
import Footer from "./components/footer";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center vh-100 loadingScreen"
      >          
        <Image
          src={logo}
          className="img-fluid"
          style={{ maxWidth: "100px", height: "auto" }}
          alt="BiteLite Logo"
          roundedCircle
        />
      </div>
    );
  }
  return (
    <div className="App">
      <SearchProvider>
        <NavbarSection />
        <Router>
            <Routes>
              <Route path="/" element={<MenuList />} />
            </Routes>
        </Router>
        <Footer />
      </SearchProvider>
    </div>
  );
}

export default App;
