import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../assets/Logo1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menuName: string) => {
    if (activeDropdown === menuName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuName);
    }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo del salón" className="navbar-logo-img" />
          </Link>
        </div>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <div
            className="dropdown"
            onMouseEnter={() => !isMobile && setHoverDropdown("sobreNosotros")}
            onMouseLeave={() => !isMobile && setHoverDropdown(null)}
          >
            {isMobile ? (
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("sobreNosotros")}
              >
                Sobre nosotros ▾
              </button>
            ) : (
              <Link to="/sobre-nosotros" onClick={closeMenu}>
                Sobre nosotros ▾
              </Link>
            )}
            <div
              className={`dropdown-content ${
                activeDropdown === "sobreNosotros" || hoverDropdown === "sobreNosotros" ? "show" : ""
              }`}
            >
              <Link to="/galeria" onClick={closeMenu}>
                Galería
              </Link>
              <Link to="/nuestro-equipo" onClick={closeMenu}>
                Nuestro equipo
              </Link>
              <Link to="/sobre-nosotros" onClick={closeMenu}>
                Acerca de nosotros
              </Link>
            </div>
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => !isMobile && setHoverDropdown("servicios")}
            onMouseLeave={() => !isMobile && setHoverDropdown(null)}
          >
            {isMobile ? (
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("servicios")}
              >
                Servicios ▾
              </button>
            ) : (
              <Link to="/servicios" onClick={closeMenu}>
                Servicios ▾
              </Link>
            )}
            <div
              className={`dropdown-content ${
                activeDropdown === "servicios" || hoverDropdown === "servicios" ? "show" : ""
              }`}
            >
              <Link to="/estilismo" onClick={closeMenu}>
                Estilismo
              </Link>
              <Link to="/cuidado-capilar" onClick={closeMenu}>
                Cuidado Capilar
              </Link>
              <Link to="/manos-y-pies" onClick={closeMenu}>
                Manos y Pies
              </Link>
              <Link to="/depilacion" onClick={closeMenu}>
                Depilación
              </Link>
              <Link to="/maquillaje" onClick={closeMenu}>
                Maquillaje
              </Link>
              <Link to="/spa-bienestar" onClick={closeMenu}>
                Spa y Bienestar
              </Link>
            </div>
          </div>

          <Link to="/ubicacion" onClick={closeMenu}>
            Ubicación
          </Link>
          <Link to="/agendar" className="highlighted" onClick={closeMenu}>
            Agendar cita
          </Link>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
