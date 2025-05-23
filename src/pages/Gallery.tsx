import { useState, useEffect } from 'react';
import './Gallery.css';
import ondas9 from '../assets/ondas9.jpeg';
import risos1 from '../assets/risos1.jpg';
import risos2 from '../assets/risos2.jpg';
import risos3 from '../assets/risos3.jpg';
import risos4 from '../assets/risos4.jpg';
import risos5 from '../assets/risos5.jpg';
import risos6 from '../assets/risos6.jpg';
import risos7 from '../assets/risos7.jpg';
import risos8 from '../assets/risos8.jpg';
import risos9 from '../assets/risos9.jpg';

const images = [ondas9, risos1, risos2, risos3, risos4, risos5, risos6, risos7, risos8, risos9];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex(prev => (prev! - 1 + images.length) % images.length);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex(prev => (prev! + 1) % images.length);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//assets.pinterest.com/js/pinit.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="gallery-container">
      <div className="section-header" style={{ backgroundImage: `url(${ondas9})` }}>
        <div className="overlay">
          <h1>Nuestro Trabajo</h1>
        </div>
      </div>

      <h2 className="pinterest-title">Revisa nuestro trabajo en Pinterest</h2>
      <div className="pinterest-embed">
        <a
          data-pin-do="embedBoard"
          data-pin-board-width="1000"
          data-pin-scale-height="300"
          data-pin-scale-width="1000"
          href="https://www.pinterest.com/WilmerPeluqueria/todo/"
        ></a>
      </div>

      <div className="gallery-images">
        {images.map((img, index) => (
          <div key={index} className="gallery-image">
            <img src={img} alt={`Imagen ${index + 1}`} onClick={() => setSelectedIndex(index)} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="nav-btn prev" onClick={showPrev}>‹</button>
          <img
            src={images[selectedIndex]}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="nav-btn next" onClick={showNext}>›</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
