import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const Hexagonal = forwardRef(({ color, size, ...rest }, ref) => (
  <VuiBox
    ref={ref}
    component="svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}
  >
     <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m20.792 6.996l-3.775 2.643A2 2 0 0 1 15.87 10H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.997M8 10v11m8-11v11"></path>
        <path d="m3.853 18.274l3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l3.367-2.363c.536-.375.854-.99.854-1.643V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367c-.41 0-.811.126-1.147.363L3.853 5.726A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644z"></path>
      </g>
  </VuiBox>
));

Hexagonal.defaultProps = {
  color: "#2496ED",
  size: "16px",
};

Hexagonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Hexagonal.displayName = "Hexagonal";

export default Hexagonal;
