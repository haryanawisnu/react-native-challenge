import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import Header from './Header'
import BodyItem from './BodyItem'
import Footer from './Footer'

export default class Home extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ScrollableTabView
          style={styles.tabView}
          tabBarBackgroundColor='#AD1457'
          tabBarActiveTextColor='#ffffff'
          tabBarInactiveTextColor='#ffffff'
          tabBarUnderlineStyle={styles.underline}
          tabBarTextStyle={styles.textTab}
          renderTabBar={() => <DefaultTabBar />}
        >
          <ScrollView tabLabel="Product" style={styles.view}>
          <BodyItem navigation={this.props.navigation}/>
          </ScrollView>
          <ScrollView tabLabel="Chart" style={styles.view}>
            <Header/>
          </ScrollView>
        </ScrollableTabView>
        <Footer/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabView:{
    flex:10
  },
  view: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFEBEE'
  },
  underline:{
    backgroundColor:'#FCE4EC'
    ,height:'100%'
    ,opacity:0.2
  },
  textTab:{
    fontSize:15,
    marginTop:10}
});
