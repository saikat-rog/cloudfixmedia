import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/subcomponents/Footer";
import Navbar from "./components/subcomponents/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import About from "./components/About";
import { useEffect } from "react";

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contacts/>} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
