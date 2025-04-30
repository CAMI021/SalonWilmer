
import './Depilation.css';
import ondas from '../assets/depilation.jpg';

const Depilation = () => {
  return (
    <div className="styling-page">
      <div className="header">
        <img src={ondas} alt="Ondas" className="header-image" />
        <h1 className="title">Depilación</h1>
      </div>

      <div className="services-section">
        <div className="card">
          <h2>Depilación Facial</h2>
          <p>
            Cuida la piel de tu rostro con nuestras opciones especializadas de depilación facial, pensadas para ofrecerte suavidad y precisión con el máximo cuidado.
          </p>
          <ul>
            <li>Depilación de cejas</li>
            <li>Depilación de labio superior</li>
            <li>Depilación de mentón</li>
            <li>Depilación de patillas</li>
          </ul>
        </div>

        <div className="card">
          <h2>Depilación Corporal</h2>
          <p>
            Nuestra depilación corporal ofrece soluciones eficaces y cómodas para una piel suave y libre de vello, adaptada a diferentes áreas del cuerpo.
          </p>
          <ul>
            <li>Depilación de axilas</li>
            <li>Depilación de brazos</li>
            <li>Media pierna</li>
            <li>Pierna completa</li>
            <li>Línea de bikini</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Depilation;
