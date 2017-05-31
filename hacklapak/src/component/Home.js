import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default class Home extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Body navigation={this.props.navigation}/>
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
