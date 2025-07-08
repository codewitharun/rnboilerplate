import * as React from 'react';
import Svg, {Ellipse, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function FacebookSVG(props) {
  return (
    <Svg
      width={34}
      height={35}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Ellipse
        cx={16.9592}
        cy={16.0631}
        rx={14.8393}
        ry={14.9302}
        fill="url(#paint0_linear_8_66)"
      />
      <Path
        d="M22.485 21.994l.66-4.214H19.02v-2.733c0-1.153.575-2.278 2.422-2.278h1.876V9.18s-1.702-.284-3.328-.284c-3.398 0-5.616 2.018-5.616 5.671v3.212H10.6v4.214h3.775v10.188c.758.117 1.533.176 2.323.176s1.565-.06 2.323-.176V21.994h3.464z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_8_66"
          x1={16.9592}
          y1={1.13284}
          x2={16.9592}
          y2={30.9047}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#18ACFE" />
          <Stop offset={1} stopColor="#0163E0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default FacebookSVG;
