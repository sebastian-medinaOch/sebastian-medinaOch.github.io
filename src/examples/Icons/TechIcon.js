import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const TechIcon = forwardRef(({ color, size, ...rest }, ref) => (
  <VuiBox
    ref={ref}
    component="svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}
  >
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </VuiBox>
));

TechIcon.defaultProps = {
  color: "#00ff00",
  size: "16px",
};

TechIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

TechIcon.displayName = "TechIcon";

export default TechIcon;