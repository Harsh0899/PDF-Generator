import React from 'react';
import { Global } from 'recharts';

import { htmlSvgToPdfSvg } from './imageFromSvg';

 const ChartSvg = ({ debug, style, children }) => {
  return chartToPdfSvg(children, debug, style);
};

const chartToPdfSvg = (children, debug, style) => {
  Global.set('isSsr', true);
  const component = htmlSvgToPdfSvg(children);
  Global.set('isSsr', false);

  if (!component) {
    return null;
  }

  const result = React.cloneElement(component, { debug, style });
  return result;
};

export default ChartSvg;