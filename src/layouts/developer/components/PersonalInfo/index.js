import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from "react-i18next";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

function PersonalInfo() {
  const { t } = useTranslation();

  return (
    <ProfileInfoCard
      title={t("personalInfo.title")}
      description={t("personalInfo.description")}
      info={{
        [t("personalInfo.labels.nombre")]: "Sebastian Medina Ochoa",
        [t("personalInfo.labels.telefono")]: "(+34) 614 076 617",
        [t("personalInfo.labels.correo")]: "sebasthyy1@gmail.com",
        [t("personalInfo.labels.ubicacion")]: t("personalInfo.values.ubicacion"),
        [t("personalInfo.labels.experiencia")]: t("personalInfo.values.experiencia"),
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