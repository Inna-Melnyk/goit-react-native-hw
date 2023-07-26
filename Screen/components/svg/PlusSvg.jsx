import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const PlusSvg = (props) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
      fill="white"
    />
  </Svg>
);
