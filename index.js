
import React from 'react';
import ReactNative from 'react-native';

const {
  requireNativeComponent,
  processColor,
  Platform,
  View,
} = ReactNative;

let RNOpacityGradient = null;
if (Platform.OS === 'ios') {
  RNOpacityGradient = requireNativeComponent('RNOpacityGradient',null);
}

export default function OpacityGradientView(props) {
  const { colors, locations, start, end, ...other } = props;

  let content;
  if (RNOpacityGradient) {
    content = (
      <RNOpacityGradient
        {...other}
        colors={colors.map(processColor)}
        locations={locations}
        startPoint={convertPoint(start)}
        endPoint={convertPoint(end)}
      />
    );
  } else {
    content = <View {...other} />;
  }

  return content;
}

function convertPoint(point) {
  let ret;
  if (point && point.x !== undefined && point.y !== undefined) {
    ret = [point.x, point.y];
  }
  return ret;
}
