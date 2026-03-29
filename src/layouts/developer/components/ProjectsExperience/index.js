import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import data from "layouts/developer/components/ProjectsExperience/data";
import { useTranslation } from "react-i18next";

function ProjectsExperience() {
  const { t } = useTranslation();
  const { projects } = data(t);

  return (
    <Card>
      <VuiBox display="flex" flexDirection="column" height="100%">
        <VuiBox display="flex" flexDirection="column" mb="24px">
          <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
            {t("experience.title")}
          </VuiTypography>
          <VuiTypography color="text" variant="button" fontWeight="regular">
            {t("experience.subtitle")}
          </VuiTypography>
        </VuiBox>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid key={index} item xs={project.xs} md={project.md} xl={project.xl}>
              {project.component}
            </Grid>
          ))}
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default ProjectsExperience;