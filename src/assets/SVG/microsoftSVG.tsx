import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MicrosoftSvg(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M10 1H1v9h9V1z" fill="#F25022" />
      <Path d="M10 11H1v9h9v-9z" fill="#00A4EF" />
      <Path d="M20 1h-9v9h9V1z" fill="#7FBA00" />
      <Path d="M20 11h-9v9h9v-9z" fill="#FFB900" />
    </Svg>
  );
}

export default MicrosoftSvg;
