import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export default class Chart extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Image source={{uri:'http://simswiki.info/images/f/f8/Under_construction.png'}} style={styles.img}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:400,
    height:300,
    backgroundColor: '#AD1457',
  },
  img:{
    width:300,
    height:300,
    marginLeft:20,
  }
});
