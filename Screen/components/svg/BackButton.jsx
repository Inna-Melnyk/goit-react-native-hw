import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const BackButton = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20 12H4"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10 18L4 12L10 6"
      stroke="#212121"
      stroke-opacity="0.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
