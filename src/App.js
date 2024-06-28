import "./App.css";
import Footer from "./components/subcomponents/Footer";
import Navbar from "./components/subcomponents/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
