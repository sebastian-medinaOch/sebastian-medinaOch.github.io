


import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import burceMars from "assets/images/profiles/log-s.png";

import breakpoints from "assets/theme/base/breakpoints";
import VuiAvatar from "components/VuiAvatar";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import { IoDesktop } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { IoMailUnreadSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.lg
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    
    window.addEventListener("resize", handleTabsOrientation);

    
    handleTabsOrientation();

    
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <VuiBox position="relative">
      <Card
        sx={{
          px: 2,
          mt: 2,
          py: 1,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="flex-start"
          sx={({ breakpoints }) => ({
            [breakpoints.up("xs")]: {
              gap: "16px",
            },
            [breakpoints.up("xs")]: {
              gap: "0px",
            },
            [breakpoints.up("xl")]: {
              gap: "0px",
            },
          })}
        >
          <Grid
            item
            xs={12}
            md={1.7}
            lg={1.5}
            xl={1.2}
            xxl={0.8}
            display="flex"
            sx={{ justifyContent: "flex-start", alignItems: "center" }}
          >
            <VuiAvatar
              src={burceMars}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item xs={12} md={4.3} lg={4} xl={3.8} xxl={7}>
            <VuiBox
              height="100%"
              mt={0.5}
              lineHeight={1}
              display="flex"
              flexDirection="column"
              sx={{ justifyContent: "center", alignItems: "flex-start" }}
            >
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Sebastian Medina Ochoa
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                sebasthyy1@gmail.com
              </VuiTypography>
            </VuiBox>
          </Grid>

        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;
