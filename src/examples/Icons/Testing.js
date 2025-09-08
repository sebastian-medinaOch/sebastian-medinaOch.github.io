import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const Testing = forwardRef(({ color, size, ...rest }, ref) => (
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
      d="M7 2v11h3v9l7-12h-4l4-8z"
      fill={color}
    />
  </VuiBox>
));

Testing.defaultProps = {
  color: "#4CAF50",
  size: "16px",
};

Testing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Testing.displayName = "Testing";

export default Testing;