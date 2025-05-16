import './Location.css'; 

const Ubicacion = () => {
  return (
    <div className="ubicacion-container">
      <div className="card-ubicacion">
        <h3 className="titulo-salon">Wilmer Peluquería</h3>
        <p className="direccion">Cl. 171 #55-34<br />Bogotá, Villa del Prado</p>
        <a
          href="https://www.google.com/maps/place/Wilmer+Peluquería"
          target="_blank"
          rel="noopener noreferrer"
          className="link-direcciones"
        >
          Ver en Google Maps
        </a>

        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.5543281282775!2d-74.05507934890771!3d4.754468230140426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8564878d484f%3A0xbc18195508fc5d92!2sWilmer%20Peluquer%C3%ADa!5e0!3m2!1ses-419!2sco!4v1747406389550!5m2!1ses-419!2sco"
          className="mapa-embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <a href="#agendar" className="btn-agendar">Agendar Cita</a>
      </div>
    </div>
  );
};

export default Ubicacion;
