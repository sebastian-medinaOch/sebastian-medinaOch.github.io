import { forwardRef } from "react";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";

const SpringBoot = forwardRef(({ color, size, ...rest }, ref) => (
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
      d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424a5.28 5.28 0 0 1-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.825 2.208-.525 4.766-2.18 5.805-4.344 1.165 3.458 2.565 8.866.054 12.21zm.042-13.28a9.212 9.212 0 0 1-1.065 1.89 9.982 9.982 0 0 0-7.167-3.031C6.492 1.971 2 6.463 2 12.015a9.983 9.983 0 0 0 3.205 7.334l.22.194a10.001 10.001 0 0 0 6.560 2.457c5.553 0 10.015-4.462 10.015-10.015 0-2.761-1.12-5.263-2.928-7.056l.175-.817z"
      fill={color}
    />
  </VuiBox>
));

SpringBoot.defaultProps = {
  color: "#6db33f",
  size: "16px",
};

SpringBoot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SpringBoot.displayName = "SpringBoot";

export default SpringBoot;