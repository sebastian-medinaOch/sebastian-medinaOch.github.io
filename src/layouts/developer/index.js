


import Grid from "@mui/material/Grid";


import VuiBox from "components/VuiBox";
import Footer from "examples/Footer";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Header from "layouts/developer/components/Header";
import PersonalCharacteristics from "layouts/developer/components/PersonalCharacteristics";
import Welcome from "../developer/components/Welcome/index";
import Skills from "./components/Skills";
import ProjectsExperience from "./components/ProjectsExperience";
import PersonalInfo from "./components/PersonalInfo";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            xl={4}
            xxl={3}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>
          <Grid
            item
            xs={12}
            xl={5}
            xxl={6}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "2 / 1 / 3 / 3",
              },
            })}
          >
            <Skills />
          </Grid>
          <Grid
            item
            xs={12}
            xl={3}
            xxl={3}
            sx={({ breakpoints }) => ({
              [breakpoints.only("xl")]: {
                gridArea: "1 / 2 / 2 / 3",
              },
            })}
          >
            <PersonalInfo />
          </Grid>
        </Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={3} height="100%">
          <PersonalCharacteristics />
        </Grid>
        <Grid item xs={12} xl={9}>
          <ProjectsExperience />
        </Grid>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
