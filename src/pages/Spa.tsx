
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
            <li>Limpieza facial</li>
            <li>Exfoliación facial</li>
            <li>Hidratación facial</li>
            <li>Mascarilla facial según tipo de piel</li>
          </ul>
        </div>

        <div className="spa-card">
          <h2>Tratamientos capilares</h2>
          <p>
            Relaja tu cuero cabelludo y devuelve la vitalidad a tu melena con nuestros tratamientos capilares.
            Ofrecemos soluciones naturales y profesionales para fortalecer y restaurar el cabello dañado.
          </p>
          <ul>
            <li>Mascarilla nutritiva con aceites</li>
            <li>Tratamiento de keratina (básico o express)</li>
            <li>Reconstrucción capilar sencilla</li>
            <li>Mascarilla de hidratación profunda</li>
            <li>Tratamiento de ampolla hidratante</li>
            <li>Baño de crema hidratante</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Spa;
