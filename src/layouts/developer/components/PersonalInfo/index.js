// @mui icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

// Vision UI Dashboard React components
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

function PersonalInfo() {
  return (
    <ProfileInfoCard
      title="Información personal"
      description="Especialista en Java + arquitectura hexagonal para diseñar e implementar microservicios escalables en cloud (AWS/Azure), con pipelines CI/CD, contenedores y control de calidad continuo. Enfoque práctico, métricas y entrega confiable; ampliando alcance a full-stack con React, flutter, etc."
      info={{
        nombre: "Sebastiannnnnnn Medina Ochoa",
        telefono: "(34) 634 602 566",
        correo: "sebasthyy1@gmail.com",
        ubicacion: "Malaga, España",
      }}
      social={[
        {
          link: "https://www.linkedin.com/in/sebastian-medina-ochoa-3b69001aa/",
          icon: <LinkedInIcon />,
          color: "linkedin",
        },
        {
          link: "https://github.com/sebastian-medinaOch",
          icon: <GitHubIcon />,
          color: "github",
        },
        {
          link: "https://www.instagram.com/sebastianmedinaoc/",
          icon: <InstagramIcon />,
          color: "instagram",
        },
      ]}
    />
  );
}

export default PersonalInfo;