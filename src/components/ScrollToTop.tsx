import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la página a la parte superior
  }, [location]); // Se ejecuta cada vez que la ubicación cambie

  return null; // No renderiza nada
};

export default ScrollToTop;
