import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import WhatsAppIcon from "./Common/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      offset: 100,
      easing: "ease-in-out", 
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <WhatsAppIcon/>
    </BrowserRouter>
  );
}

export default App;
