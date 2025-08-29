import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const Microservicios = forwardRef(({ color, size, ...rest }, ref) => (
  <VuiBox
    ref={ref}
    component="svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...rest}
  >
    <g fill="none">
        <path
          fill="url(#fluentColorCodeBlock200)"
          d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
        ></path>
        <path
          fill="url(#fluentColorCodeBlock201)"
          d="M8.854 7.854L6.707 10l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708m3-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L13.293 10l-2.147-2.146a.5.5 0 0 1 .708-.708"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorCodeBlock200"
            x1="6.413"
            x2="14.091"
            y1="3"
            y2="17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".028" stopColor="#E67EEA"></stop>
            <stop offset=".438" stopColor="#AD64D7"></stop>
            <stop offset="1" stopColor="#794DC5"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorCodeBlock201"
            x1="7.634"
            x2="11.158"
            y1="7.231"
            y2="16.354"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDFDFD"></stop>
            <stop offset="1" stopColor="#F9DCFA"></stop>
          </linearGradient>
        </defs>
      </g>
  </VuiBox>
));

Microservicios.defaultProps = {
  color: "#2496ED",
  size: "16px",
};

Microservicios.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Microservicios.displayName = "Microservicios";

export default Microservicios;

