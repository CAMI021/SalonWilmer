import teamImage from '../assets/team2.jpg';
import teamvideo from '../assets/videohair.mp4'; // Importa el video
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div id="sobre-nosotros" className="about-us-container">

      <div className="section-header" style={{ backgroundImage: `url(${teamImage})` }}>
        <div className="overlay">
          <h1>Sobre Nosotros</h1>
        </div>
      </div>

      <div className="about-us-content">
        <div className="about-us-text">
          <h2>Nuestra Historia</h2>
          <p>
            Wilmer Peluquería nació de la unión de un grupo de estilistas apasionados por la belleza y el cuidado personal. Con el tiempo, se dieron cuenta de las falencias que existían en muchos salones de belleza y peluquerías en cuanto a la atención y la calidad del servicio. Por eso, decidieron fundar este salón con el objetivo de ofrecer un enfoque completamente personalizado, basado en el profesionalismo y las habilidades de cada uno de los estilistas.
          </p>
          <p>
            Cada cliente es único, y en Wilmer Peluquería nos aseguramos de brindar una experiencia que supere sus expectativas. La unión de nuestros conocimientos y nuestra pasión por el estilismo nos permite ofrecer lo mejor en cortes, peinados y tratamientos de belleza, siempre con el toque profesional que nos caracteriza.
          </p>
        </div>

        <div className="about-us-video">
          <video width="100%" height="auto" controls>
            <source src={teamvideo} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
