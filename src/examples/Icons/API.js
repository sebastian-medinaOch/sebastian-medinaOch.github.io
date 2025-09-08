import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const API = forwardRef(({ color, size, ...rest }, ref) => (
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
      d="M8.5 8.5l1.42 1.42L8.5 11.34 7.08 9.92 8.5 8.5zm7 7l1.42 1.42-1.42 1.42-1.42-1.42L15.5 15.5zM12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 2.18L9.24 9.27 3.82 10.1l4.91 4.78-1.16 6.78L12 18.77l4.43 2.89-1.16-6.78 4.91-4.78-5.42-.83L12 4.18z"
      fill={color}
    />
  </VuiBox>
));

API.defaultProps = {
  color: "#00BCD4",
  size: "16px",
};

API.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

API.displayName = "API";

export default API;