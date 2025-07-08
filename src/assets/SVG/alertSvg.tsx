import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fee094"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-alert-icon lucide-circle-alert"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 8L12 12" />
      <Path d="M12 16L12.01 16" />
    </Svg>
  );
}

export default SvgComponent;
