import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ListItem from './ListItem'

export default class BodyItem extends Component {
  render() {
    console.log(this.props.navigation);
    return (
      <View>
        <ListItem navigation={this.props.navigation}/>
      </View>
    );
  }
}
