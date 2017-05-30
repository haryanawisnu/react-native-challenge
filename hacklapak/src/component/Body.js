import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ListItem from './ListItem'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListItem/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#FFEBEE',
  }
});
