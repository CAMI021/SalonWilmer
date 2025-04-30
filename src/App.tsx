import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";
import Appointment from "./pages/Appointment";
import Gallery from "./pages/Gallery"; 
import Team from "./pages/Team"; // <--- IMPORTA el nuevo componente Team
import Styling from "./pages/Styling";
import HairCare from "./pages/HairCare";
import Hands from "./pages/hands";
import Depilation from "./pages/Depilation";
import MakeUp from "./pages/MakeUp";
import Spa from "./pages/Spa";
import "./styles/main.css";
import ScrollToTop from "./components/ScrollToTop"; // Importa ScrollToTop

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <ScrollToTop /> {/* Coloca ScrollToTop aquí */}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/estilismo" element={<Styling />} />
            <Route path="/cuidado-capilar" element={<HairCare />} />
            <Route path="/manos-y-pies" element={<Hands />} />
            <Route path="/depilacion" element={<Depilation />} />
            <Route path="/maquillaje" element={<MakeUp />} />
            <Route path="/spa-bienestar" element={<Spa />} />
            <Route path="/ubicacion" element={<Location />} />
            <Route path="/agendar" element={<Appointment />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/nuestro-equipo" element={<Team />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
