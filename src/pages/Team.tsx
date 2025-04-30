import { useState, useRef } from "react";
import "./Team.css";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import ftteam from "../assets/team.jpg";
import ftperfil1 from "../assets/fthombre.png";
import ftperfil2 from "../assets/fthombre.png";
import ftperfil3 from "../assets/fomujer.png";
import ftperfil4 from "../assets/fomujer.png";
import ftperfil5 from "../assets/fomujer.png";

interface TeamMember {
  name: string;
  roles: string[];
  description: string;
  photo: string;
  instagram?: string;
  whatsapp?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "William Ortiz",
    roles: ["Estilista"],
    description:
      "William es un apasionado del estilismo con más de 10 años de experiencia. Su enfoque detallista garantiza resultados impresionantes. Domina las últimas tendencias de coloración capilar y asesoría de imagen. Con un enfoque cálido y profesional, transforma la imagen de sus clientes elevando su confianza.",
    photo: ftperfil1,
    instagram: "https://instagram.com/william",
    whatsapp: "https://wa.me/1234567890",
    linkedin: "https://linkedin.com/in/william-ortiz",
  },
  {
    name: "Wilmer Riascos",
    roles: ["Estilista"],
    description:
      "Wilmer combina técnica y creatividad para ofrecer cortes modernos y asesoría personalizada. Su pasión por la belleza se refleja en cada cliente que atiende. Especializado en cambios de look y tendencias urbanas. Su objetivo es realzar la mejor versión de cada persona.",
    photo: ftperfil2,
    instagram: "https://instagram.com/wilmer",
    whatsapp: "https://wa.me/1234567891",
  },
  {
    name: "Maria Lopez",
    roles: ["Estilista"],
    description:
      "Maria es experta en tratamientos faciales, corporales y cuidado de la piel. Su formación continua garantiza resultados de alta calidad. Con un enfoque holístico, busca el bienestar integral de cada cliente. Cada sesión con ella es una experiencia de renovación y relax.",
    photo: ftperfil3,
    instagram: "https://instagram.com/maria",
    whatsapp: "https://wa.me/1234567892",
  },
  {
    name: "Leidy Rojas",
    roles: ["Manicurista"],
    description:
      "Leidy destaca por su precisión en el cuidado de manos y pies, y su habilidad para la recuperación capilar. Su pasión se refleja en los detalles y la calidad de su trabajo. Con formación en técnicas de última generación, ofrece resultados duraderos y estéticos. Sus clientes valoran su calidez y profesionalismo.",
    photo: ftperfil4,
    instagram: "https://instagram.com/leidy",
    whatsapp: "https://wa.me/1234567893",
  },
  {
    name: "Pepa Peras",
    roles: ["Spa"],
    description:
      "Pepa combina técnicas de spa relajante con tratamientos estéticos de vanguardia. Su enfoque en el bienestar emocional y físico la convierte en una profesional integral. Con amplia experiencia en terapias de relajación y estética avanzada. Cada sesión es un viaje hacia el equilibrio y la belleza.",
    photo: ftperfil5,
    instagram: "https://instagram.com/pepa",
    whatsapp: "https://wa.me/1234567894",
  },
];

const Team = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Todos");
  const rolesRef = useRef<HTMLDivElement>(null); // <--- referencia a los botones, más arriba

  const roles = ["Todos", "Estilista", "Manicurista", "Spa"];

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
  
    if (rolesRef.current) {
      // Busca la navbar en el DOM por su clase
      const navbar = document.querySelector('.navbar');
      // Obtiene la altura de la navbar y añade 20px de margen adicional
      const navbarHeight = navbar ? navbar.clientHeight + 20 : 100;
      const topPos = rolesRef.current.offsetTop - navbarHeight;
  
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  };

  const filteredMembers =
    selectedRole === "Todos"
      ? teamMembers
      : teamMembers.filter((member) => member.roles.includes(selectedRole));

  return (
    <div className="team-container">
      <div className="team-hero" style={{ backgroundImage: `url(${ftteam})` }}>
        <div className="team-hero-overlay">
          <h1 className="team-title">Nuestro Equipo</h1>
          {/* <p className="team-description">
            Conoce a los profesionales que trabajan día a día para brindarte una
            experiencia de belleza única.
          </p> */}
        </div>
      </div>

      <div className="team-roles" ref={rolesRef}>
        {roles.map((role) => (
          <button
            key={role}
            className={`role-button ${selectedRole === role ? "active" : ""}`}
            onClick={() => handleRoleClick(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="team-members">
        {filteredMembers.map((member) => (
          <div key={member.name} className="member-card">
            <img
              src={member.photo}
              alt={member.name}
              className="member-photo"
            />
            <h2 className="member-name">{member.name}</h2>
            <p className="member-roles">{member.roles.join(" | ")}</p>
            <p className="member-description">{member.description}</p>
            <div className="member-links">
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
              )}
              {member.whatsapp && (
                <a
                  href={member.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
