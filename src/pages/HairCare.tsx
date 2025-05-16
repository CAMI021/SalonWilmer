import ondas from '../assets/hairwash.jpg';
import './Styling.css';

export default function HairCare() {
  return (
    <div className="styling-page">
      <div className="header">
        <img src={ondas} alt="Encabezado" className="header-image" />
        <h1 className="title">Cuidado Capilar</h1>
      </div>
      <div className="services-section">
        <div className="card">
          <h2>Hidratación Capilar</h2>
          <p>
            Revitaliza tu cabello con nuestros tratamientos de hidratación profunda diseñados para restaurar el brillo, la suavidad y la elasticidad desde la raíz hasta las puntas.
          </p>
          <ul>
            <li>Hidratación intensa con vapor</li>
            <li>Mascarillas nutritivas</li>
            <li>Reparación postcolor</li>
            <li>Tratamientos para cabello seco</li>
            <li>Terapias capilares con aceites</li>
            <li>Sellado de puntas</li>
            
            
          </ul>
        </div>

        <div className="card">
          <h2>Reconstrucción Capilar</h2>
          <p>
            Para cabellos dañados por químicos o herramientas de calor, ofrecemos servicios de reconstrucción que devuelven la fuerza y estructura al cabello.
          </p>
          <ul>
          <li>Ozono capilar</li>
            <li>Keratina vegetal</li>
            <li>Tratamiento con proteínas</li>
            <li>Botox capilar</li>
            <li>Reestructuración con colágeno</li>
            <li>Tratamientos fortalecedores</li>
            <li>Ampollas regeneradoras</li>
          </ul>
        </div>

        <div className="card">
          <h2>Control de Frizz</h2>
          <p>
            Mantén tu melena bajo control con nuestros tratamientos anti-frizz que alisan, sellan y protegen tu cabello de la humedad y el encrespamiento.
          </p>
          <ul>
            <li>Alisado con queratina</li>
            <li>Sellado térmico</li>
            <li>Protección anti-humedad</li>
            <li>Peinados duraderos</li>
            <li>Termoprotectores profesionales</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
