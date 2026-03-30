import React from "react";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function SocialPreview({ platform, link }) {
  const { t } = useTranslation();

  const getIcon = () => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return <FaLinkedinIn size="20px" color="#0072b1" />;
      case "twitter":
        return <FaTwitter size="20px" color="#1DA1F2" />;
      default:
        return null;
    }
  };

  const getPlatformName = () => {
    switch (platform.toLowerCase()) {
      case "linkedin":
        return "LinkedIn";
      case "twitter":
        return "Twitter / X";
      default:
        return platform;
    }
  };

  return (
    <VuiBox
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      mb={1}
      sx={{
        background: "rgba(10, 14, 39, 0.7)",
        border: "1px solid rgba(226, 232, 240, 0.1)",
        borderRadius: "12px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textDecoration: "none",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 8px 24px rgba(0, 114, 255, 0.2)",
          borderColor: "rgba(0, 114, 255, 0.4)"
        }
      }}
    >
      <VuiBox display="flex" alignItems="center">
        <VuiBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="40px"
          height="40px"
          borderRadius="50%"
          bgColor="white"
          mr={2}
        >
          {getIcon()}
        </VuiBox>
        <VuiBox display="flex" flexDirection="column">
          <VuiTypography variant="button" color="white" fontWeight="medium">
            {getPlatformName()}
          </VuiTypography>
          <VuiTypography variant="caption" color="text">
            {t("blog.socialShare")}
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default SocialPreview;
