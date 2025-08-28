// @mui material components

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import Java from "examples/Icons/Java";
import SpringBoot from "examples/Icons/SpringBoot";

export default function data() {

  return {
    columns: [
      { name: "tecnologias", align: "left" },
      { name: "años", align: "center" },
      { name: "nivel", align: "center" },
    ],

    rows: [
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <Java size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Java
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            5 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        tecnologias: (
          <VuiBox display="flex" alignItems="center">
            <SpringBoot size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Spring Boot
            </VuiTypography>
          </VuiBox>
        ),
        años: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            4 años
          </VuiTypography>
        ),
        nivel: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      }
    ],
  };
}
