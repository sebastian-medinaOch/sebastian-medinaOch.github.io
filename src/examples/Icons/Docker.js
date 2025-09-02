import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const Docker = forwardRef(({ color, size, ...rest }, ref) => (
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
      d="M13.5 3h-3v3h3V3zm0 4h-3v3h3V7zm4 0h-3v3h3V7zm-8 0h-3v3h3V7zm-4 0H2v3h3.5V7zm8 4h-3v3h3v-3zm-4 0h-3v3h3v-3zm8.36 1.9c-.19-.13-.42-.19-.66-.19-.24 0-.47.06-.66.19-.19.13-.34.31-.42.52-.08.21-.08.44 0 .65.08.21.23.39.42.52.19.13.42.19.66.19.24 0 .47-.06.66-.19.19-.13.34-.31.42-.52.08-.21.08-.44 0-.65-.08-.21-.23-.39-.42-.52z"
      fill={color}
    />
  </VuiBox>
));

Docker.defaultProps = {
  color: "#2196F3",
  size: "16px",
};

Docker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Docker.displayName = "Docker";

export default Docker;