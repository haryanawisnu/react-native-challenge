import React, { Component } from 'react';
import Swiper from "react-native-deck-swiper";
import { StyleSheet, View, Text, Image, Button,Alert,ToastAndroid } from "react-native";

export default class DetailItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        swipedAllCards: false,
        swipeDirection: "",
        isSwipingBack: false,
        cardIndex: 0,
        data:{}
      };
    }
  static navigationOptions = {
    title: 'Detail',
    headerStyle:{
      backgroundColor: '#AD1457'
    },
    headerTitleStyle:{
      color:'#ffffff'
    },
    headerTintColor:'#ffffff'
  }
  componentWillMount(){
    const { params } = this.props.navigation.state;
    params.data.desc=params.data.desc.replace(/\n/g,', ')
    params.data.desc=params.data.desc.replace(/<br>/g,', ')
    params.data.desc=params.data.desc.slice(0,40)
    this.setState({
      data: params.data
    });
    let arr=params.data.images;
    if(arr.length==1){
      arr.push(this.state.data.images[0])
    }
    this.setState({
      'data.images': arr
    });
  }
  renderCard = card => {
    return (
      <View style={styles.card}>
        <Image source={{uri:card}} style={{height:'100%',width:'100%'}}/>
      </View>
    );
  };

  onSwiped = (index) => {
    let arr=this.state.data.images;
    arr.push(this.state.data.images[index])
    this.setState({
      'data.images': arr
    });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style={styles.swiper}>
            <Swiper
              ref={swiper => {
                this.swiper = swiper;
              }}
              onSwiped={(cardIndex) => {this.onSwiped(cardIndex)}}
              cards={this.state.data.images}
              cardVerticalMargin={10}
              cardHorizontalMargin={10}
              renderCard={this.renderCard}
              backgroundColor={'#FFEBEE'}
            >
            </Swiper>
          </View>
          <View style={styles.description}>
            <View style={styles.main}>
              <Text style={styles.maintitle}>Product</Text>
            </View>
            <View style={styles.submain}>
              <Text style={styles.submaintitle}>{this.state.data.desc}</Text>
            </View>
            <View style={styles.main}>
              <Text style={styles.maintitle}>Seller</Text>
            </View>
            <View style={styles.submain}>
              <Text style={styles.submaintitle}>
              Username : {this.state.data.seller_username} {"\n"}
              Level : {this.state.data.seller_level}{"\n"}
              Feedback Positif : {this.state.data.seller_positive_feedback}{"\n"}
              Feedback Negative : {this.state.data.seller_negative_feedback}
              </Text>
            </View>
            <View  style={styles.button}>
            <Button
              onPress={()=>{Alert.alert('Buy','Are you sure?',
                          [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!'),color:'#C62828'},
                            {text: 'OK', onPress: () => {
                                                          ToastAndroid.show('Success Buy', ToastAndroid.SHORT)
                                                          navigate('Home')
                                                        },color:'#C62828'},
                          ])}}
              title="Buy"
              color="#AD1457"
            />
            </View>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEBEE'
  },
  card: {
    height:'25%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  swiper:{
    flex: 1
  },
  description:{
    flex: 2
  },
  main:{
    flex: 1,
    backgroundColor: '#AD1457',
    marginRight: '10%',
    marginLeft: '10%'
  },
  maintitle:{
    textAlign:'center',
    margin:'2%',
    fontSize: 15,
    color:'#ffffff',
    fontWeight:'bold',
  },
  submain:{
    flex: 3,
    backgroundColor: '#FFCDD2',
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: '2%'
  },
  submaintitle:{
    textAlign:'justify',
    margin:'5%',
    fontSize: 15,
  },
  button:{
    flex: 1,
    marginBottom: '5%',
    marginRight: '5%',
    marginLeft: '5%',
  }
});
