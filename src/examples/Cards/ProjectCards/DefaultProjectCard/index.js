


import { Link } from "react-router-dom";


import PropTypes from "prop-types";


import Tooltip from "@mui/material/Tooltip";


import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";


import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import VuiAvatar from "components/VuiAvatar";

function DefaultProjectCard({ image, label, title, description, location, date, action, authors }) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <VuiAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { dark }, functions: { rgba } }) => ({
          border: `${borderWidth[2]} solid ${rgba(dark.focus, 0.5)}`,
          cursor: "pointer",
          position: "relative",
          ml: 0.05,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <VuiBox
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <VuiBox
        className="project-logo-container"
        mb="16px"
        borderRadius="15px"
        sx={({ breakpoints }) => ({
          width: "100%",
          padding: "20px",
          backgroundColor: "#fff",
          border: "1px solid rgba(226, 232, 240, 0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
          [breakpoints.up("xl")]: {
            height: "200px",
          },
        })}
      >
        <VuiBox
          component="img"
          src={image}
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </VuiBox>

      <VuiBox
        sx={({ breakpoints }) => ({
          [breakpoints.only("xl")]: {
            minHeight: "200px",
          },
        })}
      >
        <VuiBox>
          <VuiTypography variant="xxs" color="text" fontWeight="medium" textTransform="capitalize">
            {label}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" flexDirection="column" mb={1} mt={0.5}>
          {location && (
            <VuiBox display="flex" alignItems="center" mb={0.5}>
              <IoLocationOutline color="#A0AEC0" size="14px" />
              <VuiTypography variant="xxs" color="text" fontWeight="medium" ml={0.5}>
                {location}
              </VuiTypography>
            </VuiBox>
          )}
          {date && (
            <VuiBox display="flex" alignItems="center">
              <IoCalendarOutline color="#A0AEC0" size="14px" />
              <VuiTypography variant="xxs" color="text" fontWeight="medium" ml={0.5}>
                {date}
              </VuiTypography>
            </VuiBox>
          )}
        </VuiBox>
        <VuiBox mb={1}>
          {action.type === "internal" ? (
            <VuiTypography
              component={Link}
              to={action.route}
              variant="h5"
              color="white"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          ) : (
            <VuiTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              color="white"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </VuiTypography>
          )}
        </VuiBox>
        <VuiBox mb={3} lineHeight={0}>
          <VuiTypography variant="button" fontWeight="regular" color="text">
            {description}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" justifyContent="flex-end" alignItems="center">
          <VuiBox display="flex">{renderAuthors}</VuiBox>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}


DefaultProjectCard.defaultProps = {
  authors: [],
};


DefaultProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  date: PropTypes.string,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "white",
      "text",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
