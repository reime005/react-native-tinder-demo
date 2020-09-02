import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

//great help for converting an svg: https://react-svgr.com/playground/?native=true
export const HeartSVG = (props: any) => {
  return (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 24 24" {...props}>
      <Path
        fill="#11a843"
        d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z"
      />
    </Svg>
  );
};
