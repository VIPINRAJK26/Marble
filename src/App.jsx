import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import WhatsAppIcon from "./Common/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
import ContactUs from "./pages/ContactUs";
import Preview from "./pages/Preview";
import ProductPage from "./pages/ProductPage";

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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/category/:categoryName" element={<Preview />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
      <WhatsAppIcon />
    </BrowserRouter>
  );
}

export default App;
