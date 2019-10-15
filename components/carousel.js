import React,{Component} from 'react'
import {ScrollView,StyleSheet,View} from 'react-native'
import Carousel from 'react-native-smart-carousel'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
  } from 'react-native-responsive-screen'



const datacarousel = [
    {
        "id":'001',
        "title": "kenyans",
        "imagePath": "https://pbs.twimg.com/media/DM9Y1TBWsAAhHqf.jpg",
    },
    {
        "id": '002',
        "title": "Kenya",
        "imagePath": "http://kenyapage.net/rugby/images/fans-sydney-16b.jpg",
    },
    

  ];

export default class PageCarousel extends Component {
    componentDidMount(){

        loc(this)
       
    }
    
    componentWillUnMount() {
          rol()
          
        }

    
    render(){

        return(
            <View
  ref={(c) => { this.parentScrollView = c; }}
  style={styles.container}
>
            <Carousel
                data={datacarousel}
                parentScrollViewRef={this.parentScrollView}
                titleColor={'#0DAFE7'}
                autoPlay={true}
                playTime={5000}
                navigation={true}
                navigationColor={'#36AF06'}
                navigationType={'dots'}
                height={hp('90%')}
                parallax={true}
                width={wp('95%')}
                overlayPath={require('../assets/OverlayM.png')}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        width:wp('100%'),
        height:hp('90%'),
        // backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundColor:'#09A7EC',

        // justifyContent: 'center',
        resizeMode: 'cover'
        // backgroundColor: '#fff'      
     },

    content:{
        flex:1,
        //  justifyContent: 'center',
        // alignItems: 'center',
    },
   
})