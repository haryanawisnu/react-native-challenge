import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './src/component/App'

export default class hacklapak extends Component {
  render() {
    return (
        <App/>
    );
  }
}

AppRegistry.registerComponent('hacklapak', () => hacklapak);
