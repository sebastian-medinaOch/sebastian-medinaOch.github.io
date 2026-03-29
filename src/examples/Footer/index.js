


import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2025, Hecho&nbsp;por{" "}
          <VuiTypography
            component="a"
            variant="button"
            href="https://www.linkedin.com/in/sebastian-medina-ochoa-3b69001aa/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
            mr="2px"
          >
            Sebastian Medina Ochoa
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox item xs={10}>

      </VuiBox>
    </VuiBox>
  );
}

export default Footer;
