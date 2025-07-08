import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

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
      className="lucide lucide-qr-code-icon lucide-qr-code"
      {...props}>
      <Rect width={5} height={5} x={3} y={3} rx={1} />
      <Rect width={5} height={5} x={16} y={3} rx={1} />
      <Rect width={5} height={5} x={3} y={16} rx={1} />
      <Path d="M21 16h-3a2 2 0 00-2 2v3M21 21v.01M12 7v3a2 2 0 01-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
    </Svg>
  );
}

export default SvgComponent;
