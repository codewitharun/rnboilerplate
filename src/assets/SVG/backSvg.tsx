import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.251}
      height={13.251}
      viewBox="0 0 13.251 13.251"
      {...props}>
      <Path
        d="M163.168-792.546l4.638 4.638-1.18 1.159-6.626-6.625 6.626-6.626 1.18 1.159-4.638 4.638h10.083v1.656z"
        transform="translate(-160 800)"
      />
    </Svg>
  );
}

export default SvgComponent;
