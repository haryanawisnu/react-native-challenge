import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './Home'
import DetailItem from './DetailItem'

const App = StackNavigator({
  Home: {
    screen: Home
  },
  DetailItem: {
    screen: DetailItem
  }
});

export default App
