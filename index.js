'use strict';

import React from 'react';
import ReactNative from 'react-native';

const {
  requireNativeComponent,
  processColor,
} = ReactNative;

const RNOpacityGradient = requireNativeComponent('RNOpacityGradient',null);

export default function OpacityGradientView(props) {
  const { colors, locations, start, end, ...other } = props;

  return (
    <RNOpacityGradient
      {...other}
      colors={colors.map(processColor)}
      locations={locations}
      start={convertPoint(start)}
      end={convertPoint(end)}
    />
  );
}

function convertPoint(point) {
  let ret;
  if (point && point.x !== undefined && point.y !== undefined) {
    ret = [point.x, point.y];
  }
  return ret;
}
