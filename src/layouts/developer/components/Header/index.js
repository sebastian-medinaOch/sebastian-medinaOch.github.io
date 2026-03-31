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
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import styled from "@emotion/styled";

const GlitchButton = styled(VuiBox)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 10px 22px;
  background: rgba(255, 255, 255, 1);
  border: 1.5px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(1, 181, 116, 0.35), transparent);
    transition: all 0.5s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 18px rgba(1, 181, 116, 0.45), 0 0 6px rgba(1, 181, 116, 0.2) inset;
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }
`;

function Header() {
  const { t } = useTranslation();
  const history = useHistory();
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
                {t("header.name")}
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                sebasthyy1@gmail.com
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={4} lg={4.5} xl={5} xxl={4} display="flex" justifyContent="flex-end" alignItems="center">
            <GlitchButton onClick={() => history.push("/blog")}>
              <IoRocketSharp size="20px" color="#000000ff" />
              <VuiTypography variant="button" color="white" fontWeight="bold" sx={{ textTransform: "uppercase", letterSpacing: "1px", color: "#000000ff" }}>
                {t("blog.goToBlog", "Ir al Blog")}
              </VuiTypography>
            </GlitchButton>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;
