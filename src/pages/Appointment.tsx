import React, { useState, useEffect } from 'react';
import './Appointment.css';
import f from '../assets/pelo0131.jpg'; // Tu imagen

const whatsappNumber = '1234567890'; // Reemplaza con tu número
const message = '¡Hola! Me gustaría agendar una cita.';

const Appointment: React.FC = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = () => {
    setRedirecting(true);
  };

  useEffect(() => {
    if (redirecting) {
      const timer = setTimeout(() => {
        window.location.href = `https://wa.me/message/PNWIFD6VJ3JTN1?src=qr${whatsappNumber}?text=${encodeURIComponent(message)}`;
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [redirecting]);

  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <div className="appointment-text">
          {!redirecting ? (
            <>
              <h2>Agenda tu cita por <span className="whatsapp-highlight">WhatsApp</span></h2>
              <p>Te ayudamos a reservar tu cita fácil y rápido. ¡Estamos listos para atenderte!</p>
              <button className="cta-button" onClick={handleClick}>
                Agendar cita
              </button>
            </>
          ) : (
            <>
              <h2>Redirigiéndote a <span className="whatsapp-highlight">WhatsApp</span>...</h2>
              <p>Estamos preparando todo para ti ✨</p>
              <div className="loader"></div>
              <p className="note">
                Si no eres redirigido automáticamente, <a href={`https://wa.me/message/PNWIFD6VJ3JTN1?src=qr${whatsappNumber}?text=${encodeURIComponent(message)}`}>haz clic aquí</a>.
              </p>
            </>
          )}
        </div>
        <div className="appointment-image">
          <img src={f} alt="Imagen de servicio" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
