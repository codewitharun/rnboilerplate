import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GoogleSvg(props) {
  return (
    <Svg
      width={34}
      height={35}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M31.877 17.395c0-1.228-.101-2.124-.32-3.053H17.341v5.541h8.345c-.169 1.377-1.077 3.45-3.096 4.844l-.029.186 4.496 3.433.311.03c2.86-2.604 4.509-6.436 4.509-10.981z"
        fill="#4285F4"
      />
      <Path
        d="M17.34 31.993c4.088 0 7.52-1.327 10.027-3.616l-4.778-3.65c-1.279.88-2.995 1.493-5.25 1.493-4.004 0-7.402-2.604-8.614-6.204l-.177.015-4.674 3.566-.061.168a15.154 15.154 0 0013.527 8.228z"
        fill="#34A853"
      />
      <Path
        d="M8.726 20.016a9.075 9.075 0 01-.504-2.953c0-1.028.185-2.024.487-2.953l-.008-.198-4.733-3.624-.155.073a14.774 14.774 0 00-1.615 6.702c0 2.405.59 4.678 1.615 6.702l4.913-3.749z"
        fill="#FBBC05"
      />
      <Path
        d="M17.34 7.906c2.843 0 4.761 1.21 5.855 2.223l4.273-4.114c-2.625-2.406-6.04-3.882-10.128-3.882A15.154 15.154 0 003.813 10.36l4.896 3.75c1.228-3.6 4.626-6.205 8.63-6.205z"
        fill="#EB4335"
      />
    </Svg>
  );
}

export default GoogleSvg;
