import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const Monitoring = forwardRef(({ color, size, ...rest }, ref) => (
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
      d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
      fill={color}
    />
  </VuiBox>
));

Monitoring.defaultProps = {
  color: "#FF9800",
  size: "16px",
};

Monitoring.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Monitoring.displayName = "Monitoring";

export default Monitoring;