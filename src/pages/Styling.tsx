// Styling.tsx


import ondas9 from '../assets/haircut1.jpg';

const services = [
  {
    title: 'Corte de Cabello',
    description:
      'Nuestros cortes están pensados para todas las edades, géneros y texturas de cabello. Ya sea que busques algo clásico o vanguardista, nuestro equipo está preparado para adaptar el estilo a tu personalidad.',
    list: [
      'Corte clásico',
      'Corte en capas',
      'Corte fade o degradado',
      'Corte pixie',
      'Corte bob',
      'Corte para cabello rizado',
      'Recorte de puntas',
      '...y mucho más'
    ]
  },
  {
    title: 'Coloración',
    description:
      'Explora una gama vibrante de colores y técnicas modernas. Nuestros servicios de color están diseñados para resaltar tu estilo único con productos de alta calidad y resultados duraderos.',
    list: [
      'Color completo',
      'Balayage',
      'Reflejos (highlights)',
      'Mechas californianas',
      'Tonos fantasía',
      'Coloración para cabello rizado',
      'Corrección de color',
      '...y mucho más'
    ]
  },
  {
    title: 'Cepillado y Peinados',
    description:
      'Ya sea para un evento especial o simplemente para lucir espectacular cualquier día, ofrecemos servicios de cepillado con estilo y peinados creativos que se ajustan a cada ocasión.',
    list: [
      'Cepillado con volumen',
      'Peinados recogidos',
      'Ondas al agua',
      'Trenzas modernas',
      'Lisos con plancha',
      'Semirecogidos elegantes',
      'Lavado y secado con forma',
      '...y mucho más'
    ]
  }
];

const Styling = () => {
  return (
    <div className="styling-page">
      <div className="header">
        <img src={ondas9} alt="Encabezado estilismo" className="header-image" />
        <h1 className="title">Estilismo</h1>
      </div>

      <div className="services-section">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Styling;
