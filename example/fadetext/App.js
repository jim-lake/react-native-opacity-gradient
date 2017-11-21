'use strict';

import React from 'react';
import ReactNative from 'react-native';
import _ from 'lodash';
const {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
} = ReactNative;

import OpacityGradientView from 'react-native-opacity-gradient-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#113',
  },
  gradient: {
    alignSelf: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line_count: 20,
    };
  }
  componentDidMount() {
    setInterval(this._onStep,500);
  }

  _onStep = () => {
    let { line_count } = this.state;

    if (line_count < 10) {
      line_count++;
    } else if (line_count > 30) {
      line_count--;
    } else {
      line_count += Math.round(Math.random()*2 - 1);
    }
    this.setState({ line_count });
  }

  render() {

    const { line_count } = this.state;

    const lines = [];
    _.times(line_count,i => {
      const t = "This is a long line of text: " + (i+1) + " of " + line_count;

      lines.push(<Text key={i} style={styles.text}>{t}</Text>)
    });

    return (
      <View style={styles.container}>
        <OpacityGradientView
          style={styles.gradient}
          colors={['transparent','white','white','transparent']}
          locations={[0,0.10,0.90,1.0]}
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
        >
          {lines}
        </OpacityGradientView>
      </View>
    );
  }
}
