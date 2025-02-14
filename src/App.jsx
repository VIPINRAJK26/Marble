import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
