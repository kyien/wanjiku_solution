import React from 'react'
import {View,Text,Alert,StyleSheet} from 'react-native'
import PageCarousel from './carousel'

const Home=()=> {
    return (
        <View style={styles.container}>
            <PageCarousel/>
        {/* <Text>Wanjiku Solutions</Text> */}
    </View>
    )
}
export default Home

const styles=StyleSheet.create({
        container:{
            flex:1
        }
})