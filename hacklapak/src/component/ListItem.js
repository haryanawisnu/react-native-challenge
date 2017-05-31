import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  LayoutAnimation,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import {
  BUKALAPAK_KEY_ID,
  BUKALAPAK_KEY_VALUE
} from '../env/key'
import { StackNavigator } from 'react-navigation';

class ListItem extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    LayoutAnimation.spring();
    // let self=this;
    // axios.get('https://api.bukalapak.com/v2/products.json?sort_by=Terbaru&conditions=new&nego=false&top_seller=1', {
    //     headers: {
    //       BUKALAPAK_KEY_ID: BUKALAPAK_KEY_VALUE
    //     }
    // }).then(function(response) {
    //   console.log(response.data.products);
    //   self.setState({data: response.data.products});
    // })
    let arr=[
    { id:'1',
      images:[
        'http://media.themalaymailonline.com/uploads/articles/2015-12/upin_dan_ipin_20151223.jpg',
        'https://pbs.twimg.com/profile_images/774468294082342912/bUGyKWBf.jpg'
      ]
      ,name:'haha'
      ,desc:'original\ngaransi resmi 1 tahun\ntali kulit\nfree tali kulit cadangan\nbox ekslusif\nbuku manual/garansi\ndiameter 3.5 cm'
      ,seller_username:'wisnu'
      ,seller_level:'juragan'
      ,seller_positive_feedback:'181'
      ,seller_negative_feedback:'0'
      ,price:'1.999.999'
    }]
    this.setState({data: arr});
  }
  render() {
    const { navigate } = this.props.navigation;
    if(this.state.data.length>0){
      return (
        <ScrollView>
          {
            this.state.data.map((data) =>{
              return(
                <View style={styles.subcontainer} key={data.id}>
                 <TouchableOpacity onPress={() => navigate('DetailItem',{ data: data})}>
                    <Image source={{uri:data.images[0]}} style={styles.img}/>
                    <Text style={styles.title}>
                      {data.name.slice(0,25)}
                    </Text>
                    <Text style={styles.price}>
                      RP {data.price}
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>
      );
    }else {
      return(
        <ActivityIndicator
          style={styles.loading}
          size={75}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  subcontainer:{
    marginTop: '5%',
    marginBottom: '5%',
    marginRight: '10%',
    marginLeft: '10%',
    height:200,
    width:'80%',
    backgroundColor: '#C2185B'
  },
  title:{
    fontSize: 15,
    fontWeight:'bold',
    textAlign: 'center',
    color:'#ffffff'
  },
  img:{
    marginTop: '5%',
    marginBottom: '2%',
    marginRight: '10%',
    marginLeft: '10%',
    width:'80%',
    height:'65%'
  },
  price:{
    fontSize: 13,
    textAlign: 'center',
    color:'#EEEEEE'
  },
  loading:{
    alignItems: 'center',
    marginTop:'40%'
  }
});

export default ListItem
