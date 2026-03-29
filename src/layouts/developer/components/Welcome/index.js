import React from "react";
import { Card, Icon } from "@mui/material";
import welcome from "assets/images/profiles/foto-perfil-ia-v2-negro.png";
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <Card
      sx={({ breakpoints }) => ({
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        height: "100%",
        backgroundColor: "#0a1f1e",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <img
        src={welcome}
        alt="Sebastian Medina Ochoa"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 15%",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      <div
        className="welcome-text-overlay"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "inherit",
        }}
      >
        <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
          <VuiBox display="flex" flexDirection="column" mb="auto">
            <VuiTypography
              variant="h3"
              fontWeight="bold"
              mb="3px"
              sx={{ color: "white !important", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              {t("welcome.title")}
            </VuiTypography>
            <VuiTypography
              variant="button"
              fontWeight="regular"
              sx={{ color: "white !important", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
            >
              {t("welcome.subtitle")}
            </VuiTypography>
          </VuiBox>
          <VuiBox justifySelf="flex-end">
            <VuiTypography
              component="a"
              href="#"
              variant="button"
              fontWeight="regular"
              sx={{
                color: "white !important",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                mr: "5px",
                display: "inline-flex",
                alignItems: "center",
                justifySelf: "flex-end",
                cursor: "pointer",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translate(2px, -0.5px)",
                  transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translate(6px, -0.5px)",
                },
              }}
            >
              {t("welcome.action")}
              <Icon sx={{ fontWeight: "bold", ml: "5px", color: "white !important" }}>
                arrow_forward
              </Icon>
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </div>
    </Card>
  );
};

export default Welcome;
