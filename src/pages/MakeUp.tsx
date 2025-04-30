import React from 'react';
import './MakeUp.css';
import ondasImage from '../assets/makeup2.jpg';

const MakeUp: React.FC = () => {
  return (
    <div className="styling-page">
      <div className="header">
        <img src={ondasImage} alt="Encabezado maquillaje" className="header-image" />
        <h1 className="title">Maquillaje</h1>
      </div>

      <div className="services-section">
        <div className="card">
          <h2>Maquillaje Profesional</h2>
          <p>
            Nuestro servicio de maquillaje está diseñado para resaltar tu belleza natural y adaptarse a cualquier ocasión:
            bodas, eventos especiales, sesiones fotográficas o simplemente para sentirte espectacular en tu día a día. Utilizamos productos de alta calidad y técnicas profesionales para lograr acabados duraderos y personalizados según tu estilo y tipo de piel.
          </p>
          <ul>
            <li>Maquillaje de día</li>
            <li>Maquillaje de noche</li>
            <li>Maquillaje para novias</li>
            <li>Maquillaje para eventos</li>
            <li>Pruebas de maquillaje</li>
            <li>Asesoría de estilo y color</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MakeUp;
