import React, { Component } from 'react'
import {View,TextInput,FlatList,StyleSheet,Text} from 'react-native'

export default class Search extends Component {
    render() {
        return (
           <View style={styles.container}>
                <Text>Search Page!</Text>
           </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1
    }
})