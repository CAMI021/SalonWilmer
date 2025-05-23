import "./Footer.css";
import logo from '../assets/Logo1.svg';
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Izquierda: Logo y redes sociales */}
        <div className="footer-left">
          <img src={logo} alt="Logo de Wilmer Peluquería" className="footer-logo-img" />
          <div className="footer-socials">
            <a href="https://www.tiktok.com/@wilmerpeluqueria?_t=ZS-8wUYC2ngxyX&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/share/16GgBEiCkX/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/wilmer_peluqueria/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://co.pinterest.com/peluqueriawilmer/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Derecha: Enlaces y contacto */}
        <div className="footer-right">
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
              <li><Link to="/estilismo">Servicios</Link></li>
              <li><Link to="/ubicacion">Ubicación</Link></li>
              <li><Link to="/agendar">Agendar cita</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contáctanos</h4>
            <address>
              Cl. 171 #55-34<br />
              Suba, Bogotá<br />
              (+57) 320 9127852<br />
              <a href="mailto:Peluqueriawilmer@proton.me">Peluqueriawilmer@proton.me</a>
            </address>
          </div>
        </div>

      </div>

      {/* Pie de página */}
      <div className="footer-bottom">
        <p>&copy; 2025 PeluqueríaWilmer. Todos los derechos reservados.</p>
        <a
          href="https://www.telyra.io"
          target="_blank"
          rel="noopener noreferrer"
          className="powered-by"
        >
          Powered by Telyra
        </a>
      </div>
    </footer>
  );
};

export default Footer;
