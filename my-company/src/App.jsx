import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // optional

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  };

  return (
    <div style={appStyle}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* optional */}
    </div>
  );
}

export default App;
