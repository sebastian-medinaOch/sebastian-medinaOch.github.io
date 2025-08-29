import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const APIs = forwardRef(({ color, size, ...rest }, ref) => (
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
        fill="currentColor"
        d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2Z"
      ></path>
  </VuiBox>
));

APIs.defaultProps = {
  color: "#2496ED",
  size: "16px",
};

APIs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

APIs.displayName = "APIs";

export default APIs;
