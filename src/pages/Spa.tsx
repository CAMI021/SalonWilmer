
import './Spa.css';
import ondas from '../assets/spa.jpg';

const Spa = () => {
  return (
    <div className="spa-container">
      <div className="spa-header">
        <img src={ondas} alt="Encabezado Spa y Bienestar" className="spa-header-img" />
        <h1 className="spa-title">Spa y Bienestar</h1>
      </div>
      <div className="spa-cards">
        <div className="spa-card">
          <h2>Tratamientos faciales</h2>
          <p>
            Nuestros tratamientos faciales están diseñados para revitalizar, nutrir y equilibrar tu piel.
            Combinamos técnicas profesionales y productos de alta calidad adaptados a cada tipo de piel.
          </p>
          <ul>
            <li>Limpieza facial profunda</li>
            <li>Exfoliación facial</li>
            <li>Hidratación facial</li>
            <li>Mascarilla facial según tipo de piel</li>
            <li>Micropigmentacion de cejas y de Labios</li>
          </ul>
        </div>

        <div className="spa-card">
          <h2>Tratamientos Corporales</h2>
          <p>
            Relajación y el cuidado personal con nuestros exclusivos tratamientos corporales, diseñados para rejuvenecer tu piel y reconectar con tu bienestar.
          </p>
          <ul>
            <li>Masajes terapéutico</li>
            <li>Masajes descontracturante</li>
            <li>Traratamientos adelgazantes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Spa;
