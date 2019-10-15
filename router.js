import React from "react";
import { View, Text,Image } from "react-native"
import { createStackNavigator,createDrawerNavigator,
    createMaterialTopTabNavigator, createAppContainer } from "react-navigation"
import {Icon} from 'native-base'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'


    //components
    import Home from './components/Home'
    import Post from './components/Post'
    import Search from './components/search'

    const TabScreen = createMaterialTopTabNavigator(
      {
        'Home': { screen: Home },
        'Report': { screen: Post },
        // 'Search': { screen: Search},
      },
      {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: '#002366',
          inactiveTintColor: '#002366',
          style: {
            backgroundColor: '#f1ddcf',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#002366',
            borderBottomWidth: 4,
          },
        },
      }
    )
  
  
    const Main = createStackNavigator(
        {
          Home: { 
            screen: TabScreen,
            navigationOptions: {
              headerStyle: {
                backgroundColor: '#24db0c',
              },
             headerLeft:(
                  <Image 
              source={require('./assets/kenya.jpg')}
              style={{ width:wp('10%'), height: hp('5%'),left:wp('3%')}}
              />
              ),
              headerTintColor: '#FFFFFF',
              title: 'WANJIKU\'S VOICE & SOLUTION',
            },
          },


        }
        
      )

   

      export default createAppContainer(Main)