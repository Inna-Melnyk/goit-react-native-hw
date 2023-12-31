import * as React from "react";
import Svg, { Path, Circle} from "react-native-svg";

const AddImage = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00" />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
      stroke="#FF6C00"
    />
  </Svg>
);
export default AddImage;
