


import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";


import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";


import data from "layouts/developer/components/ProjectsExperience/data";

function ProjectsExperience() {
  const { projects } = data();

  return (
    <Card>
      <VuiBox display="flex" flexDirection="column" height="100%">
        <VuiBox display="flex" flexDirection="column" mb="24px">
          <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
            Projectos - Experiencias
          </VuiTypography>
          <VuiTypography color="text" variant="button" fontWeight="regular">
            Desarrollo de software
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