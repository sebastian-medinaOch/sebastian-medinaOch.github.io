import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const NoSql = forwardRef(({ color, size, ...rest }, ref) => (
  <VuiBox
    ref={ref}
    component="svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    {...rest}
  >
    <defs>
        <linearGradient
          id="vscodeIconsFolderTypeMongodbOpened0"
          x1="-659.847"
          x2="-666.491"
          y1="839.557"
          y2="839.603"
          gradientTransform="matrix(-.977 -.323 -.29 .877 -378.211 -928.733)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".231" stopColor="#999875"></stop>
          <stop offset=".563" stopColor="#9b9977"></stop>
          <stop offset=".683" stopColor="#a09f7e"></stop>
          <stop offset=".768" stopColor="#a9a889"></stop>
          <stop offset=".837" stopColor="#b7b69a"></stop>
          <stop offset=".896" stopColor="#c9c7b0"></stop>
          <stop offset=".948" stopColor="#deddcb"></stop>
          <stop offset=".994" stopColor="#f8f6eb"></stop>
          <stop offset="1" stopColor="#fbf9ef"></stop>
        </linearGradient>
        <linearGradient
          id="vscodeIconsFolderTypeMongodbOpened1"
          x1="-658.764"
          x2="-668.32"
          y1="827.72"
          y2="844.273"
          gradientTransform="matrix(-.977 -.323 -.29 .877 -378.211 -928.733)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#48a547"></stop>
          <stop offset="1" stopColor="#3f9143"></stop>
        </linearGradient>
        <linearGradient
          id="vscodeIconsFolderTypeMongodbOpened2"
          x1="-658.088"
          x2="-664.862"
          y1="839.78"
          y2="835.229"
          gradientTransform="matrix(-.977 -.323 -.29 .877 -378.211 -928.733)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#41a247"></stop>
          <stop offset=".352" stopColor="#4ba74b"></stop>
          <stop offset=".956" stopColor="#67b554"></stop>
          <stop offset="1" stopColor="#69b655"></stop>
        </linearGradient>
      </defs>
      <path
        fill="#78c47c"
        d="M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Zm-1.7 4H.5l3.8 12.8h25.2Z"
      ></path>
      <path
        fill="url(#vscodeIconsFolderTypeMongodbOpened0)"
        d="m26.775 31l-.563-.187s.072-2.851-.956-3.05c-.678-.786.1-33.556 2.567-.112a2.03 2.03 0 0 0-1 1.142A10.6 10.6 0 0 0 26.775 31"
      ></path>
      <path
        fill="url(#vscodeIconsFolderTypeMongodbOpened1)"
        d="M27.079 28.247a9.92 9.92 0 0 0 3.748-9.919c-1.1-4.864-3.711-6.463-3.992-7.073a7.3 7.3 0 0 1-.619-1.2l.208 13.552s-.431 4.141.655 4.64"
      ></path>
      <path
        fill="url(#vscodeIconsFolderTypeMongodbOpened2)"
        d="M25.925 28.427S21.334 25.3 21.6 19.769a11.66 11.66 0 0 1 4.139-8.736A1.3 1.3 0 0 0 26.194 10c.286.615.239 9.182.269 10.184c.117 3.898-.216 7.507-.538 8.243"
      ></path>
  </VuiBox>
));

NoSql.defaultProps = {
  color: "#2496ED",
  size: "16px",
};

NoSql.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

NoSql.displayName = "NoSql";

export default NoSql;
