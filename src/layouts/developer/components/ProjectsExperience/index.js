/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Data
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