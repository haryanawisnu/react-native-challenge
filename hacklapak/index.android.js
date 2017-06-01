import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux'

import App from './src/component/App'
import store from './src/data/store'

const Index=(props)=>{
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

AppRegistry.registerComponent('hacklapak', () => Index);
