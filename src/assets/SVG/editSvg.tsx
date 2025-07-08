import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.149}
      height={13.654}
      viewBox="0 0 13.149 13.654"
      {...props}>
      <Path
        d="M121.461-827.863h1.039l7.14-7.415-1.041-1.081-7.14 7.415zM120-826.346v-3.224l9.642-9.994a1.635 1.635 0 01.484-.322 1.4 1.4 0 01.557-.114 1.462 1.462 0 01.566.114 1.284 1.284 0 01.475.341l1 1.062a1.243 1.243 0 01.32.493 1.7 1.7 0 01.1.569 1.673 1.673 0 01-.1.578 1.428 1.428 0 01-.32.5l-9.624 9.994zm11.688-11.075l-1.023-1.062zm-2.575 1.612l-.511-.55 1.041 1.081z"
        transform="translate(-120 840)"
      />
    </Svg>
  );
}

export default SvgComponent;
