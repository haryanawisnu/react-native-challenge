import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Body/>
        <Footer/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
