import { useEffect, useRef, useState } from "react";
import "./Home.css";
import PatronTopRight from "../assets/patronpelos2_35-PM.svg";
import PatronBottomLeft from "../assets/patronpelos1.svg";
import ImagenFija from "../assets/nails.jpg";
import PatronTopRightv from "../assets/patronpelovertical2.svg";
import PatronBottomLeftv from "../assets/patronpelovertical1.svg";

const reviews = [
  { name: "Carolina Mendoza", comment: "Wilmer realmente entendió lo que quería. Mi cabello nunca se había visto tan bien.", rating: 5 },
  { name: "Valeria Soto", comment: "La atención fue increíblemente personalizada. Salí renovada y feliz.", rating: 5 },
  { name: "Natalia Ruiz", comment: "Un servicio único, detallista y totalmente enfocado en mis necesidades.", rating: 5 },
];

const Home = () => {
  const introRef = useRef<HTMLElement | null>(null);
  const reviewsRef = useRef<HTMLElement | null>(null);
  const [isIntroInView, setIsIntroInView] = useState(false);
  const [isReviewsInView, setIsReviewsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === introRef.current) setIsIntroInView(entry.isIntersecting);
          if (entry.target === reviewsRef.current) setIsReviewsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (reviewsRef.current) observer.observe(reviewsRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);

  return (
    <main>
      <section className="home" aria-label="Inicio">
        <div className="background-video" aria-hidden="true">
          <img src="/cepillado.gif" alt="Animación de cepillado de cabello" />
        </div>
        <div className="home-content">
          <h1 className="home-title">Peluquería Wilmer</h1>
          <p>Encontramos el look que te define. </p>
        </div>
      </section>

      <section ref={introRef} className={`intro-section ${isIntroInView ? "fade-in" : ""}`} aria-label="Presentación">
        <img src={PatronTopRight} alt="Patrón decorativo superior derecho" className="decor-top-right" aria-hidden="true" />
        <img src={PatronBottomLeft} alt="Patrón decorativo inferior izquierdo" className="decor-bottom-left" aria-hidden="true" />
        <div className="intro-content">
          <div className="intro-left">
            <p className="intro-welcome">Descubre la experiencia</p>
            <h2 className="intro-title">Peluquería Wilmer</h2>
            <div className="underline" />
          </div>
          <div className="intro-right">
            <p>
              En Peluquería Wilmer no solo cortamos cabello, creamos experiencias. Cada visita es un servicio personalizado, diseñado para resaltar tu autenticidad y hacerte sentir completamente tú. 
              Con atención al detalle y pasión por la belleza, nuestro objetivo es que cada cliente salga feliz, seguro y renovado.
            </p>
          </div>
        </div>
      </section>

      <section className="fixed-image-section" style={{ backgroundImage: `url(${ImagenFija})` }} aria-hidden="true" />

      <section ref={reviewsRef} className={`reviews-section ${isReviewsInView ? "fade-in" : ""}`} aria-label="Reseñas de clientas">
        <img src={PatronTopRightv} alt="Patrón decorativo superior derecho (vertical)" className="decor-top-right-v" aria-hidden="true" />
        <img src={PatronBottomLeftv} alt="Patrón decorativo inferior izquierdo (vertical)" className="decor-bottom-left-v" aria-hidden="true" />
        <h3 className="reviews-title">Comentarios recibidos</h3>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={handlePrev} aria-label="Reseña anterior">‹</button>
          <article className="review">
            <p className="review-comment">“{reviews[currentIndex].comment}”</p>
            <p className="review-name">- {reviews[currentIndex].name}</p>
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} role="img" aria-label={i < reviews[currentIndex].rating ? "Estrella llena" : "Estrella vacía"}>
                  {i < reviews[currentIndex].rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          </article>
          <button className="carousel-btn right" onClick={handleNext} aria-label="Siguiente reseña">›</button>
        </div>
      </section>

      <section className="cta-section" aria-label="Llamado a la acción">
        <h2>Servicios a tu medida</h2>
        <p>Solicita tu cita y vive una experiencia pensada especialmente para ti.</p>
        <a href="#agenda" className="cta-button">Agenda tu cita ahora</a>
      </section>
    </main>
  );
};

export default Home;
