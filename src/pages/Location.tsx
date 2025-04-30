import './Location.css'; 

const Ubicacion = () => {
  return (
    <div className="ubicacion-container">
      <div className="card-ubicacion">
        <h3 className="titulo-salon">Sala de Belleza ALOE</h3>
        <p className="direccion">Calle 123 #45-67<br />Bogotá, Colombia</p>
        <a
          href="https://www.google.com/maps/place/sala+de+belleza+ALOE"
          target="_blank"
          rel="noopener noreferrer"
          className="link-direcciones"
        >
          Ver en Google Maps
        </a>

        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.505695804847!2d-74.05444647845076!3d4.7541890664047495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85a2919857f1%3A0xf2aa8b908f68f66a!2ssala%20de%20belleza%20ALOE!5e0!3m2!1ses-419!2sco!4v1745425033690!5m2!1ses-419!2sco"
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