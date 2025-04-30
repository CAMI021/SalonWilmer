import ondas9 from '../assets/nails2.jpg';
import './Hands.css';

export default function Hands() {
  return (
    <div className="styling-page">
      <div className="header">
        <img src={ondas9} alt="Encabezado manos y pies" className="header-image" />
        <h1 className="title">Manos y Pies</h1>
      </div>
      <div className="services-section">
        <div className="card">
          <h2>Manicure</h2>
          <p>
            Nuestros servicios de manicure están pensados para brindar salud, belleza y estilo a tus manos.
            Ya sea que busques un look natural o algo más atrevido, tenemos opciones para ti:
          </p>
          <ul>
            <li>Manicure tradicional</li>
            <li>Manicure en gel</li>
            <li>Uñas semipermanentes</li>
            <li>Diseño de uñas</li>
            <li>Manicure spa</li>
            <li>Reparación de uñas</li>
          </ul>
        </div>

        <div className="card">
          <h2>Pedicure</h2>
          <p>
            Nuestros servicios de pedicure combinan bienestar, limpieza profunda y estilo para que tus pies luzcan y se sientan increíbles.
            Ofrecemos tratamientos que incluyen:
          </p>
          <ul>
            <li>Pedicure clásico</li>
            <li>Pedicure en gel</li>
            <li>Pedicure spa</li>
            <li>Tratamiento exfoliante</li>
            <li>Hidratación profunda</li>
            <li>Decoración de uñas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
